import '@neovici/cosmoz-button';
import {
	chevronLeftIcon,
	chevronRightIcon,
} from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { ensureDate } from '@neovici/cosmoz-utils/date';
import {
	component,
	css,
	html,
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useState,
} from '@pionjs/pion';
import { addMonths, format, isBefore, isSameDay, subMonths } from 'date-fns';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import {
	getKeyboardDate,
	getMonthName,
	getMonthsDateCellMatrix,
	getValidDate,
	getWeekdayNames,
	ifDisabled,
	ifEnd,
	ifStart,
	isAfterVisibleMonths,
	isBeforeVisibleMonths,
	isDisabled,
	isInRange,
	isSelected,
} from './utils';

type CalendarProps = HTMLElement & {
	start?: string;
	end?: string;
	locale?: string;
	numberOfMonths?: string;
	min?: string;
	max?: string;
};

const CosmozCalendar = (host: CalendarProps) => {
	const { locale: _locale, numberOfMonths: _numberOfMonths, min, max } = host;
	const locale = useMemo(() => _locale ?? navigator.language, [_locale]);
	const numberOfMonths = useMemo(
		() => Number(_numberOfMonths ?? 1),
		[_numberOfMonths],
	);
	const [start, setStart] = useProperty<string>('start');
	const [end, setEnd] = useProperty<string>('end');
	const startDate = useMemo(() => ensureDate(start), [start]);
	const endDate = useMemo(() => ensureDate(end), [end]);
	const minDate = useMemo(() => ensureDate(min), [min]);
	const maxDate = useMemo(() => ensureDate(max), [max]);
	const initialFocusedDate = useMemo(
		() => getValidDate(startDate ?? new Date(), minDate, maxDate),
		[startDate, minDate, maxDate],
	);
	const [selectedMonth, setSelectedMonth] = useState(initialFocusedDate);
	const [isFocused, setIsFocused] = useState(false);
	const [focusedDate, setFocusedDate] = useState(initialFocusedDate);
	const weekdayNames = useMemo(() => getWeekdayNames(locale), [locale]);

	useEffect(() => {
		if (isFocused) {
			const focusedCell = host.shadowRoot?.querySelector<HTMLElement>(
				`[data-date="${format(focusedDate, 'yyyy-MM-dd')}"]`,
			);

			focusedCell?.focus();
		}
	}, [focusedDate]);

	const monthMatrices = useMemo(() => {
		const matrices = [];
		for (let i = 0; i < numberOfMonths; i++) {
			matrices.push(
				getMonthsDateCellMatrix(addMonths(selectedMonth, i), locale),
			);
		}
		return matrices;
	}, [selectedMonth, locale, numberOfMonths]);

	const onClick = useCallback(
		(date: Date) => {
			const dateString = format(date, 'yyyy-MM-dd');
			if (!startDate && !endDate) {
				setStart(dateString);
				return;
			}

			if (startDate && !endDate && isBefore(date, startDate)) {
				setStart(dateString);
				setEnd(format(startDate, 'yyyy-MM-dd'));
				return;
			}

			if (startDate && !endDate) {
				setEnd(dateString);
				return;
			}

			if (startDate && endDate) {
				setStart(dateString);
				setEnd(undefined);
			}
		},
		[startDate, endDate, setStart, setEnd],
	);

	const focusDate = useCallback(
		(date: Date) => {
			const nextDate = getValidDate(date, minDate, maxDate);

			if (isBeforeVisibleMonths(nextDate, selectedMonth)) {
				setSelectedMonth((prev) => subMonths(prev, numberOfMonths));
			}

			if (isAfterVisibleMonths(nextDate, selectedMonth, numberOfMonths)) {
				setSelectedMonth((prev) => addMonths(prev, numberOfMonths));
			}

			setFocusedDate(nextDate);
		},
		[minDate, maxDate, numberOfMonths, selectedMonth, setSelectedMonth],
	);

	useEffect(() => {
		if (
			isBeforeVisibleMonths(focusedDate, selectedMonth) ||
			isAfterVisibleMonths(focusedDate, selectedMonth, numberOfMonths)
		) {
			const newDate = getValidDate(selectedMonth, minDate, maxDate);
			setFocusedDate(newDate);
		}
	}, [selectedMonth]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (!(e.target instanceof Element)) {
				return;
			}

			const dateCell = e.target.closest<HTMLElement>('[data-date]');

			if (!dateCell?.dataset.date || dateCell.dataset.disabled === 'true') {
				return;
			}

			const date = ensureDate(dateCell.dataset.date) as Date;

			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				onClick(date);
				return;
			}

			const nextDate = getKeyboardDate(e, date);

			if (!nextDate) {
				return;
			}

			e.preventDefault();
			focusDate(nextDate);
		},
		[focusDate, locale, onClick],
	);

	return html`<div
		class="wrapper"
		@focus=${() => setIsFocused(true)}
		@blur=${() => setIsFocused(false)}
	>
		${repeat(
			monthMatrices,
			(_, i) => `cal-${i}`,
			(month, i) => [
				html`
					<div class="month-wrapper ${numberOfMonths > 1 ? 'padded' : ''}">
						<header>
							${when(
								i === 0,
								() => html`
									<cosmoz-button
										size="sm"
										variant="tertiary"
										class="prev-button"
										@click=${() =>
											setSelectedMonth(
												subMonths(selectedMonth, numberOfMonths),
											)}
										>${chevronLeftIcon()}</cosmoz-button
									>
								`,
							)}
							<h2 class="month-label">
								${getMonthName(addMonths(selectedMonth, i), locale)}
								${selectedMonth.getFullYear()}
							</h2>
							${when(
								i === monthMatrices.length - 1,
								() => html`
									<cosmoz-button
										size="sm"
										variant="tertiary"
										class="next-button"
										@click=${() =>
											setSelectedMonth(
												addMonths(selectedMonth, numberOfMonths),
											)}
										>${chevronRightIcon()}</cosmoz-button
									>
								`,
							)}
						</header>
						<table @keydown=${onKeyDown}>
							<thead>
								<tr>
									${repeat(
										weekdayNames,
										(i) => i,
										(weekday) => html`
											<th><div class="weekday">${weekday}</div></th>
										`,
									)}
								</tr>
							</thead>
							<tbody>
								${repeat(
									month,
									(_, i) => `month-${i}`,
									(week) => html`
										<tr>
											${repeat(
												week,
												(day) => day.iso,
												(day) => {
													const date = new Date(day.iso);

													return html`
														<td
															class="${isInRange(
																date,
																startDate,
																endDate,
																focusedDate,
															)
																? 'in-range'
																: ''}"
														>
															<div
																class=${classMap({
																	'date-cell': true,
																	'selected-cell': isSelected(
																		date,
																		startDate,
																		endDate,
																	),
																	'focused-highlighed-cell':
																		!endDate && isSameDay(date, focusedDate),
																	'today-cell':
																		day.isToday && day.isCurrentMonth,
																	'other-month-cell': !day.isCurrentMonth,
																	'hidden-cell':
																		!day.isCurrentMonth && numberOfMonths > 1,
																})}
																role="button"
																tabindex=${isSameDay(date, focusedDate)
																	? '0'
																	: '-1'}
																aria-label=${date.toLocaleString(locale, {
																	weekday: 'long',
																	year: 'numeric',
																	month: 'long',
																	day: 'numeric',
																})}
																aria-disabled=${ifDefined(
																	ifDisabled(day, minDate, maxDate),
																)}
																data-date=${ifDefined(
																	day.isCurrentMonth
																		? format(date, 'yyyy-MM-dd')
																		: undefined,
																)}
																data-disabled=${ifDefined(
																	ifDisabled(day, minDate, maxDate),
																)}
																data-start=${ifDefined(ifStart(day, startDate))}
																data-end=${ifDefined(ifEnd(day, endDate))}
																@click=${() =>
																	!isDisabled(day, minDate, maxDate) &&
																	onClick(date)}
																@focus=${() => {
																	setFocusedDate(date);
																	setIsFocused(true);
																}}
															>
																${day.day}
															</div>
														</td>
													`;
												},
											)}
										</tr>
									`,
								)}
							</tbody>
						</table>
					</div>
				`,
				when(
					i < monthMatrices.length - 1,
					() => html`<div class="separator"></div>`,
				),
			],
		)}
	</div> `;
};

const styles = css`
	:host {
		--cell-size: calc(var(--cz-spacing) * 10);
	}

	.wrapper {
		display: flex;
	}

	.separator {
		width: 1px;
		align-self: stretch;
		background: var(--cz-color-border-secondary);
		flex-shrink: 0;
	}

	.month-wrapper {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 3);
	}

	.month-wrapper.padded {
		padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 6);
	}

	header {
		display: grid;
		align-items: center;
		grid-template-columns: 36px 1fr 36px;
		grid-template-areas: 'a b c';
	}

	.month-label {
		grid-area: b;
		text-align: center;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.prev-button {
		grid-area: a;
	}

	.next-button {
		grid-area: c;
	}

	cosmoz-button::part(button) {
		padding: calc(var(--cz-spacing) * 2);
	}

	table {
		border-collapse: collapse;
	}

	tr {
		border-bottom: var(--cz-spacing) solid transparent;
	}

	.weekday {
		width: var(--cell-size);
		height: var(--cell-size);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	td.in-range:not(:has(.hidden-cell)) {
		background: var(--cz-color-bg-secondary);
		border-radius: 0;
	}

	td.in-range:has(.date-cell[data-start]) {
		border-top-left-radius: var(--cz-radius-full);
		border-bottom-left-radius: var(--cz-radius-full);
	}

	td.in-range:has(.date-cell[data-end]) {
		border-top-right-radius: var(--cz-radius-full);
		border-bottom-right-radius: var(--cz-radius-full);
	}

	.date-cell {
		position: relative;
		width: var(--cell-size);
		height: var(--cell-size);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-full);
		user-select: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}

	.date-cell:not([data-disabled='true']):hover {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-medium);
	}

	.date-cell[data-disabled='true'] {
		cursor: not-allowed;
		color: var(--cz-color-text-placeholder-subtle);
	}

	.date-cell:focus-within {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}

	.date-cell.today-cell {
		background: var(--cz-color-bg-secondary);
	}

	.date-cell.today-cell::after {
		content: '';
		width: 4px;
		height: 4px;
		border-radius: var(--cz-radius-full);
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.today-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.in-range .date-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.date-cell.selected-cell,
	.date-cell.focused-highlighed-cell {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell:hover,
	.date-cell.focused-highlighed-cell:hover {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid-hover);
	}

	.date-cell.other-month-cell {
		cursor: default;
		color: var(--cz-color-text-placeholder-subtle);
	}

	.date-cell.hidden-cell {
		visibility: hidden;
	}
`;

customElements.define(
	'cosmoz-calendar',
	component(CosmozCalendar, {
		observedAttributes: ['locale', 'number-of-months'],
		styleSheets: [normalize, styles],
	}),
);

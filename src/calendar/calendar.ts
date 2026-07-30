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
	useEffect,
	useMemo,
	useProperty,
	useState,
} from '@pionjs/pion';
import { addMonths, subMonths } from 'date-fns';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import {
	getMonthName,
	getMonthsDateCellMatrix,
	getWeekdayNames,
	ifDisabled,
	ifEnd,
	ifStart,
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
		() => Number(_numberOfMonths ?? 2),
		[_numberOfMonths],
	);
	const [start] = useProperty<string>('start');
	const [end] = useProperty<string>('end');
	const startDate = useMemo(() => ensureDate(start), [start]);
	const endDate = useMemo(() => ensureDate(end), [end]);
	const minDate = useMemo(() => ensureDate(min), [min]);
	const maxDate = useMemo(() => ensureDate(max), [max]);
	const [selectedMonth, setSelectedMonth] = useState(startDate ?? new Date());
	const weekdayNames = useMemo(() => getWeekdayNames(locale), [locale]);

	useEffect(() => {
		setSelectedMonth((prev) => startDate ?? prev);
	}, [startDate, setSelectedMonth]);

	const monthMatrices = useMemo(() => {
		const matrices = [];
		for (let i = 0; i < numberOfMonths; i++) {
			matrices.push(
				getMonthsDateCellMatrix(addMonths(selectedMonth, i), locale),
			);
		}
		return matrices;
	}, [selectedMonth, locale, numberOfMonths]);

	return html`<div class="wrapper">
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
											setSelectedMonth((prev) => subMonths(prev, 1))}
										>${chevronLeftIcon()}</cosmoz-button
									>
								`,
							)}
							<h2 class="month-label">
								${getMonthName(
									new Date(
										selectedMonth.getFullYear(),
										selectedMonth.getMonth() + i,
									),
									locale,
								)}
							</h2>
							${when(
								i === monthMatrices.length - 1,
								() => html`
									<cosmoz-button
										size="sm"
										variant="tertiary"
										class="next-button"
										@click=${() =>
											setSelectedMonth((prev) => addMonths(prev, 1))}
										>${chevronRightIcon()}</cosmoz-button
									>
								`,
							)}
						</header>
						<table>
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
												(day) => html`
													<td
														class="${isInRange(
															new Date(day.iso),
															startDate,
															endDate,
														)
															? 'in-range'
															: ''}"
													>
														<div
															class=${classMap({
																'date-cell': true,
																'selected-cell': isSelected(
																	new Date(day.iso),
																	startDate,
																	endDate,
																),
																'today-cell': day.isToday && day.isCurrentMonth,
																'other-month-cell': !day.isCurrentMonth,
																'hidden-cell':
																	!day.isCurrentMonth && numberOfMonths > 1,
															})}
															role="button"
															tabindex=${day.isToday ? '0' : '-1'}
															aria-label=${new Date(day.iso).toLocaleString(
																locale,
																{
																	weekday: 'long',
																	year: 'numeric',
																	month: 'long',
																	day: 'numeric',
																},
															)}
															aria-disabled=${ifDefined(
																ifDisabled(day, minDate, maxDate),
															)}
															data-disabled=${ifDefined(
																ifDisabled(day, minDate, maxDate),
															)}
															data-start=${ifDefined(ifStart(day, startDate))}
															data-end=${ifDefined(ifEnd(day, endDate))}
														>
															${day.day}
														</div>
													</td>
												`,
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

	td.in-range {
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

	.date-cell.selected-cell {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell:hover {
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

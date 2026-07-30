import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { ensureDate } from '@neovici/cosmoz-utils/date';
import {
	component,
	css,
	html,
	useMemo,
	useProperty,
	useState,
} from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import { getMonthsDateCellMatrix, isSelected } from './utils';

type CalendarProps = HTMLElement & {
	start?: string;
	end?: string;
	locale?: string;
	numberOfMonths?: string;
};

const CosmozCalendar = (host: CalendarProps) => {
	const { locale: _locale, numberOfMonths: _numberOfMonths } = host;
	const locale = useMemo(() => _locale ?? navigator.language, [_locale]);
	const numberOfMonths = Number(_numberOfMonths ?? 2);
	const [start] = useProperty<string>('start');
	const [end] = useProperty<string>('end');
	const startDate = useMemo(() => ensureDate(start), [start]);
	const endDate = useMemo(() => ensureDate(end), [end]);
	const [selectedMonth] = useState(startDate ?? new Date());

	const monthMatrices = useMemo(() => {
		const matrices = [];
		for (let i = 0; i < numberOfMonths; i++) {
			const relDate = new Date(
				selectedMonth.getFullYear(),
				selectedMonth.getMonth() + i,
				selectedMonth.getDate(),
			);

			matrices.push(getMonthsDateCellMatrix(relDate, locale));
		}
		return matrices;
	}, [selectedMonth, locale]);

	return html`<div class="calendar-wrapper">
		${repeat(
			monthMatrices,
			(_, i) => `cal-${i}`,
			(month) => html`
				<table class="${numberOfMonths === 1 ? 'is-single-month' : ''}">
					${repeat(
						month,
						(_, i) => `month-${i}`,
						(week) => html`
							<tr>
								${repeat(
									week,
									(day) => day.date,
									(day) => html`
										<td>
											<div
												class="
													date-cell
												${isSelected(new Date(day.date), startDate, endDate) ? 'selected-cell' : ''}
													${day.isToday && day.isCurrentMonth ? 'today-cell' : ''}
													${!day.isCurrentMonth ? 'other-month-cell' : ''}
												"
												tabindex=${day.isToday ? '0' : '-1'}
											>
												${day.day}
											</div>
										</td>
									`,
								)}
							</tr>
						`,
					)}
				</table>
			`,
		)}
	</div> `;
};

const styles = css`
	:host {
		--cell-size: calc(var(--cz-spacing) * 10);
	}

	.calendar-wrapper {
		display: flex;
	}

	table {
		padding: calc(var(--cz-spacing) * 6);
	}

	tr {
		margin-bottom: var(--cz-spacing);
	}

	.date-cell {
		width: var(--cell-size);
		height: var(--cell-size);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-full);
		user-select: none;
		cursor: pointer;
	}

	.date-cell:hover {
		background: var(--cz-color-bg-primary-hover);
	}

	.selected-cell {
		background: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
	}

	.selected-cell:hover {
		background: var(--cz-color-bg-brand-solid-hover);
	}

	.today-cell {
		position: relative;
		background: var(--cz-color-bg-secondary);
	}

	.today-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.today-cell::after {
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

	.other-month-cell {
		color: transparent;
	}

	.is-single-month .other-month-cell {
		color: var(--cz-color-text-placeholder-subtle);
	}
`;

customElements.define(
	'cosmoz-calendar',
	component(CosmozCalendar, {
		observedAttributes: ['locale', 'number-of-months'],
		styleSheets: [normalize, styles],
	}),
);

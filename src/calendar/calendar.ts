import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { ensureDate } from '@neovici/cosmoz-utils/date';
import { component, css, html, useMemo, useProperty } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import { getMonthsDateCellMatrix } from './utils';

type CalendarProps = HTMLElement & {
	value?: string;
	locale?: string;
	numberOfMonths?: string;
};

const CosmozCalendar = (host: CalendarProps) => {
	const { locale: _locale, numberOfMonths: _numberOfMonths } = host;
	const locale = useMemo(() => _locale ?? navigator.language, [_locale]);
	const numberOfMonths = Number(_numberOfMonths ?? 2);
	const [value] = useProperty<string>('value');
	const date = useMemo(() => ensureDate(value) ?? new Date(), [value]);

	const monthMatrices = useMemo(() => {
		const matrices = [];
		for (let i = 0; i < numberOfMonths; i++) {
			const relDate = new Date(
				date.getFullYear(),
				date.getMonth() + i,
				date.getDate(),
			);

			matrices.push(getMonthsDateCellMatrix(relDate, locale));
		}
		return matrices;
	}, [date, locale]);

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

	.today-cell {
		background: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
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

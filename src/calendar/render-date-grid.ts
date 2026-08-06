import { html } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import { renderDate } from './render-date';
import { DateCellMatrix } from './utils';

type RenderDateGridOptions = {
	endDate: Date | undefined;
	focusedDate: Date;
	locale: string;
	maxDate: Date | undefined;
	minDate: Date | undefined;
	month: DateCellMatrix;
	numberOfMonths: number;
	onClick: (date: Date) => void;
	onFocus: (date: Date) => void;
	onKeyDown: (e: KeyboardEvent) => void;
	startDate: Date | undefined;
	weekdayNames: string[];
	onPointerEnter: (date: Date) => void;
};

export const renderDateGrid = ({
	endDate,
	focusedDate,
	locale,
	maxDate,
	minDate,
	month,
	numberOfMonths,
	onClick,
	onFocus,
	onKeyDown,
	startDate,
	weekdayNames,
	onPointerEnter,
}: RenderDateGridOptions) => html`
	<table @keydown=${onKeyDown}>
		<thead>
			<tr>
				${repeat(
					weekdayNames,
					(i) => i,
					(weekday) => html`<th><div class="weekday">${weekday}</div></th>`,
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
							(day) =>
								renderDate({
									day,
									endDate,
									focusedDate,
									locale,
									maxDate,
									minDate,
									numberOfMonths,
									onClick,
									onFocus,
									startDate,
									onPointerEnter,
								}),
						)}
					</tr>
				`,
			)}
		</tbody>
	</table>
`;

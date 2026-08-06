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
	onClick: (e: MouseEvent) => void;
	onFocus: (e: FocusEvent) => void;
	onKeyDown: (e: KeyboardEvent) => void;
	onPointerDown: (e: PointerEvent) => void;
	onPointerEnter: (e: PointerEvent) => void;
	startDate: Date | undefined;
	weekdayNames: string[];
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
	onPointerDown,
	onPointerEnter,
	startDate,
	weekdayNames,
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
									onPointerDown,
									onPointerEnter,
									startDate,
								}),
						)}
					</tr>
				`,
			)}
		</tbody>
	</table>
`;

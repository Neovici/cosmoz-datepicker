import { html } from '@pionjs/pion';
import { format, isSameDay } from 'date-fns';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import {
	DateCell,
	ifDisabled,
	ifEnd,
	ifStart,
	isDisabled,
	isInRange,
	isSelected,
} from './utils';

type RenderDateOptions = {
	day: DateCell;
	endDate: Date | undefined;
	focusedDate: Date;
	locale: string;
	maxDate: Date | undefined;
	minDate: Date | undefined;
	numberOfMonths: number;
	onClick: (date: Date) => void;
	onFocus: (date: Date) => void;
	startDate: Date | undefined;
	onPointerEnter: (date: Date) => void;
};

export const renderDate = ({
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
}: RenderDateOptions) => {
	const date = new Date(day.iso);

	return html`
		<td
			class="${isInRange(date, startDate, endDate, focusedDate)
				? 'in-range'
				: ''}"
		>
			<div
				class=${classMap({
					'date-cell': true,
					'selected-cell': isSelected(date, startDate, endDate),
					'focused-highlighted-cell':
						!endDate && !!startDate && isSameDay(date, focusedDate),
					'today-cell': day.isToday && day.isCurrentMonth,
					'other-month-cell': !day.isCurrentMonth,
					'hidden-cell': !day.isCurrentMonth && numberOfMonths > 1,
				})}
				role="button"
				tabindex=${isSameDay(date, focusedDate) ? '0' : '-1'}
				aria-label=${date.toLocaleString(locale, {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
				aria-disabled=${ifDefined(ifDisabled(day, minDate, maxDate))}
				data-date=${ifDefined(
					day.isCurrentMonth ? format(date, 'yyyy-MM-dd') : undefined,
				)}
				data-disabled=${ifDefined(ifDisabled(day, minDate, maxDate))}
				data-start=${ifDefined(ifStart(day, startDate))}
				data-end=${ifDefined(ifEnd(day, endDate))}
				@pointerdown=${(e: PointerEvent) => {
					if (isDisabled(day, minDate, maxDate)) {
						e.preventDefault();
					}
				}}
				@click=${() => !isDisabled(day, minDate, maxDate) && onClick(date)}
				@pointerenter=${() => onPointerEnter(date)}
				@focus=${() => onFocus(date)}
			>
				${day.day}
			</div>
		</td>
	`;
};

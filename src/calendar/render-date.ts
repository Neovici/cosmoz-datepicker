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
	setFocusedDate: (date: Date) => void;
	setIsFocused: (isFocused: boolean) => void;
	startDate: Date | undefined;
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
	setFocusedDate,
	setIsFocused,
	startDate,
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
				@click=${() => !isDisabled(day, minDate, maxDate) && onClick(date)}
				@focus=${() => {
					setFocusedDate(date);
					setIsFocused(true);
				}}
			>
				${day.day}
			</div>
		</td>
	`;
};

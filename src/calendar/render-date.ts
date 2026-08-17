import { spreadProps } from '@neovici/cosmoz-utils/directives/spread-props';
import { html } from '@pionjs/pion';
import { format, isSameDay } from 'date-fns';
import { t } from 'i18next';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import {
	DateCell,
	ifDisabled,
	ifEnd,
	ifInRangeOrSelected,
	ifStart,
	isFocusHighlighted,
	isInRange,
	isInRangeOrSelected,
	isSelected,
	isSelecting,
	resolveAutofocus,
} from './utils';

type RenderDateOptions = {
	day: DateCell;
	endDate: Date | undefined;
	focusedDate: Date;
	locale: string;
	maxDate: Date | undefined;
	minDate: Date | undefined;
	isSingleDateMode: boolean;
	numberOfMonths: number;
	onClick: (e: MouseEvent) => void;
	onFocus: (e: FocusEvent) => void;
	onPointerDown: (e: PointerEvent) => void;
	onPointerEnter: (e: PointerEvent) => void;
	startDate: Date | undefined;
};

type AriaLabelOptions = Pick<
	RenderDateOptions,
	'day' | 'endDate' | 'focusedDate' | 'locale' | 'startDate'
> & {
	date: Date;
	isRangeMode: boolean;
};

const getAriaDateLabel = (
	date: Date,
	startDate: Date | undefined,
	endDate: Date | undefined,
	locale: string,
) => {
	const opts: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	if (
		startDate &&
		endDate &&
		(ifStart(date, startDate) || ifEnd(date, endDate))
	) {
		return [
			t('Selected range: {startDate} to {endDate}', {
				startDate: startDate.toLocaleString(locale, opts),
				endDate: endDate.toLocaleString(locale, opts),
			}),
			date.toLocaleString(locale, opts),
		].join(', ');
	}

	return date.toLocaleString(locale, opts);
};

const getAriaLabel = ({
	day,
	date,
	startDate,
	endDate,
	focusedDate,
	locale,
	isRangeMode,
}: AriaLabelOptions) =>
	[
		isSelecting(startDate, endDate, isRangeMode) && t('Selecting'),
		getAriaDateLabel(date, startDate, endDate, locale),
		day.isToday && day.isCurrentMonth && t('Today'),
		ifStart(date, startDate) && isRangeMode && t('Start date'),
		ifEnd(date, endDate) && t('End date'),
		!isSelecting(startDate, endDate, isRangeMode) &&
			isInRangeOrSelected(date, startDate, endDate, focusedDate, isRangeMode) &&
			t('Selected'),
	]
		.filter(Boolean)
		.join(', ');

export const renderDate = ({
	day,
	endDate,
	focusedDate,
	locale,
	maxDate,
	minDate,
	isSingleDateMode,
	numberOfMonths,
	onClick,
	onFocus,
	onPointerDown,
	onPointerEnter,
	startDate,
}: RenderDateOptions) => {
	const date = new Date(day.iso);
	const isRangeMode = !isSingleDateMode;
	const isHidden = !day.isCurrentMonth && numberOfMonths > 1;
	const disabled = ifDisabled(date, day.isCurrentMonth, minDate, maxDate);
	const ariaDisabled = disabled || !day.isCurrentMonth ? 'true' : undefined;

	const tableCellProps = {
		role: 'gridcell',
		ariaHidden: isHidden ? 'true' : undefined,
		ariaDisabled,
		ariaSelected: ifInRangeOrSelected(
			date,
			startDate,
			endDate,
			focusedDate,
			isRangeMode,
		),
	};

	const dateProps = {
		role: 'button',
		tabIndex: isSameDay(date, focusedDate) ? 0 : -1,
		ariaLabel: getAriaLabel({
			day,
			date,
			startDate,
			endDate,
			focusedDate,
			locale,
			isRangeMode,
		}),
		ariaDisabled,
		autofocus: resolveAutofocus(day, startDate),
	};

	return html`
		<td ?data-hidden=${isHidden} ${spreadProps(tableCellProps)}>
			<div
				class=${classMap({
					'date-cell-wrapper': true,
					'in-range':
						isRangeMode && isInRange(date, startDate, endDate, focusedDate),
				})}
			>
				<div
					class=${classMap({
						'date-cell': true,
						'selected-cell': isSelected(date, startDate, endDate),
						'focused-highlighted-cell': isFocusHighlighted(
							date,
							startDate,
							endDate,
							focusedDate,
							isRangeMode,
						),
						'today-cell': day.isToday && day.isCurrentMonth,
						'other-month-cell': !day.isCurrentMonth,
					})}
					data-date=${ifDefined(
						day.isCurrentMonth ? format(date, 'yyyy-MM-dd') : undefined,
					)}
					data-testid=${ifDefined(
						day.isCurrentMonth
							? `date-${format(date, 'yyyy-MM-dd')}`
							: undefined,
					)}
					data-disabled=${ifDefined(disabled)}
					data-start=${ifDefined(ifStart(date, startDate))}
					data-end=${ifDefined(ifEnd(date, endDate))}
					@pointerdown=${onPointerDown}
					@click=${onClick}
					@pointerenter=${onPointerEnter}
					@focus=${onFocus}
					${spreadProps(dateProps)}
				>
					${day.day}
				</div>
			</div>
		</td>
	`;
};

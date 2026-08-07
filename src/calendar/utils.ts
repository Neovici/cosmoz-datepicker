import { ensureDate } from '@neovici/cosmoz-utils/date';
import {
	addDays,
	addMonths,
	endOfMonth,
	isAfter,
	isBefore,
	isSameDay,
	isToday,
	isWithinInterval,
	startOfMonth,
	subDays,
} from 'date-fns';
import { getWeekStartDay, startOfWeek } from '../utils';

export const getWeekdayNames = (locale: string) => {
	const weekStartDay = getWeekStartDay(locale);
	const fmt = new Intl.DateTimeFormat(locale, { weekday: 'short' });
	const weekdayNames = Array.from(
		{ length: 7 },
		(_, i) => fmt.format(new Date(2023, 0, 1 + i + weekStartDay)), // 2023-1-1 is a Sunday
	);
	return weekdayNames;
};

export const getMonthName = (date: Date, locale: string) =>
	Intl.DateTimeFormat(locale, { month: 'long' }).format(date);

export type DateCell = {
	day: number;
	month: number;
	iso: string;
	isToday: boolean;
	isCurrentMonth: boolean;
};

export type DateCellMatrix = DateCell[][];

export const getMonthsDateCellMatrix = (
	date: Date,
	locale: string,
): DateCellMatrix => {
	const monthStart = startOfMonth(date);
	const monthStartWeekStart = startOfWeek(monthStart, locale);

	const VISIBLE_WEEKS = 6;

	const cells: DateCellMatrix = [];
	for (let i = 0; i < VISIBLE_WEEKS; i++) {
		const weekOfCells = [];
		for (let j = 0; j < 7; j++) {
			const cellDate = addDays(monthStartWeekStart, i * 7 + j);

			const cell: DateCell = {
				month: cellDate.getMonth(),
				day: cellDate.getDate(),
				iso: cellDate.toISOString(),
				isToday: isToday(cellDate),
				isCurrentMonth: monthStart.getMonth() === cellDate.getMonth(),
			};

			weekOfCells.push(cell);
		}

		cells.push(weekOfCells);
	}

	return cells;
};

export const isSelected = (
	date: Date,
	startDate: Date | undefined,
	endDate: Date | undefined,
) => {
	if (
		(startDate && isSameDay(date, startDate)) ||
		(endDate && isSameDay(date, endDate))
	) {
		return true;
	}

	return false;
};

export const isInRange = (
	date: Date,
	startDate: Date | undefined,
	endDate: Date | undefined,
	focusedDate: Date | undefined,
) => {
	if (
		endDate &&
		startDate &&
		isWithinInterval(date, { start: startDate, end: endDate })
	) {
		return true;
	}
	if (
		!endDate &&
		focusedDate &&
		startDate &&
		isWithinInterval(date, { start: startDate, end: focusedDate })
	) {
		return true;
	}

	return false;
};

export const isDisabled = (
	date: Date,
	minDate: Date | undefined,
	maxDate: Date | undefined,
): boolean => {
	if (
		(minDate && isBefore(date, minDate)) ||
		(maxDate && isAfter(date, maxDate))
	) {
		return true;
	}

	return false;
};

export const ifDisabled = (
	date: Date,
	isCurrentMonth: boolean,
	minDate: Date | undefined,
	maxDate: Date | undefined,
) =>
	isCurrentMonth && isDisabled(date, minDate, maxDate) ? 'true' : undefined;

export const ifStart = (day: DateCell, startDate: Date | undefined) =>
	startDate && isSameDay(new Date(day.iso), startDate) ? true : undefined;

export const ifEnd = (day: DateCell, endDate: Date | undefined) =>
	endDate && isSameDay(new Date(day.iso), endDate) ? true : undefined;

export const isBeforeVisibleMonths = (date: Date, selectedMonth: Date) =>
	isBefore(date, startOfMonth(selectedMonth));

export const isAfterVisibleMonths = (
	date: Date,
	selectedMonth: Date,
	numberOfMonths: number,
) => isAfter(date, endOfMonth(addMonths(selectedMonth, numberOfMonths - 1)));

export const getKeyboardDate = (e: KeyboardEvent, date: Date) => {
	const keyboardDates: Record<string, Date> = {
		ArrowLeft: subDays(date, 1),
		ArrowRight: addDays(date, 1),
		ArrowUp: subDays(date, 7),
		ArrowDown: addDays(date, 7),
	};

	return keyboardDates[e.key];
};

export const getDateFromEvent = <E extends Event>(e: E) =>
	ensureDate((e.target as HTMLDivElement).dataset.date);

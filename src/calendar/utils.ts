import {
	addDays,
	isAfter,
	isBefore,
	isSameDay,
	isToday,
	isWithinInterval,
	startOfMonth,
	subDays,
} from 'date-fns';

export const getWeekStartDay = (locale: string) => {
	const localeInfo = new Intl.Locale(locale);
	const weekInfo = localeInfo.getWeekInfo?.();
	const weekStartDay = weekInfo?.firstDay ?? 1; // 1-7 Mon - Sun
	return weekStartDay % 7; // 0-6 Sun - Mon
};

export const getDaysSinceWeekStart = (date: Date, locale: string) => {
	const weekStartDay = getWeekStartDay(locale);
	const weekDay = date.getDay(); // 0-6 Sun - Mon

	return (weekDay - weekStartDay + 7) % 7;
};

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

const startOfWeek = (date: Date, locale: string) => {
	return subDays(date, getDaysSinceWeekStart(date, locale));
};

type DateCell = {
	day: number;
	month: number;
	iso: string;
	isToday: boolean;
	isCurrentMonth: boolean;
};

type DateCellMatrix = DateCell[][];

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
) => {
	if (
		startDate &&
		endDate &&
		isWithinInterval(date, { start: startDate, end: endDate })
	) {
		return true;
	}

	return false;
};

export const isDisabled = (
	day: DateCell,
	minDate: Date | undefined,
	maxDate: Date | undefined,
): boolean => {
	if (!day.isCurrentMonth) {
		return true;
	}

	if (
		(minDate && isBefore(new Date(day.iso), minDate)) ||
		(maxDate && isAfter(new Date(day.iso), maxDate))
	) {
		return true;
	}

	return false;
};

export const ifDisabled = (
	day: DateCell,
	minDate: Date | undefined,
	maxDate: Date | undefined,
) => (isDisabled(day, minDate, maxDate) ? 'true' : undefined);

export const ifStart = (day: DateCell, startDate: Date | undefined) =>
	startDate && isSameDay(new Date(day.iso), startDate) ? true : undefined;

export const ifEnd = (day: DateCell, endDate: Date | undefined) =>
	endDate && isSameDay(new Date(day.iso), endDate) ? true : undefined;

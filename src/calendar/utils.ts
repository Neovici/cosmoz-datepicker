import {
	format,
	isAfter,
	isBefore,
	isSameDay,
	isToday,
	startOfMonth,
} from 'date-fns';

const getWeekStartDay = (locale: string) => {
	const localeInfo = new Intl.Locale(locale);
	const weekInfo = localeInfo.getWeekInfo?.();
	const weekStartDay = weekInfo?.firstDay ?? 1; // 1-7 Mon - Sun
	return weekStartDay % 7; // 0-6 Sun - Mon
};

const startOfWeek = (date: Date, locale: string) => {
	const weekStartDay = getWeekStartDay(locale);
	const weekDay = date.getDay(); // 0-6 Sun - Mon

	return new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() - (weekDay - weekStartDay),
	);
};

type DateCell = {
	day: number;
	month: number;
	date: string;
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
			const cellDate = new Date(
				monthStartWeekStart.getFullYear(),
				monthStartWeekStart.getMonth(),
				monthStartWeekStart.getDate() + (i * 7 + j),
			);

			const cell: DateCell = {
				month: cellDate.getMonth(),
				day: cellDate.getDate(),
				date: format(cellDate, 'yyyy-MM-dd'),
				isToday: isToday(cellDate),
				isCurrentMonth: monthStart.getMonth() === cellDate.getMonth(),
			};

			weekOfCells.push(cell);
		}

		cells.push(weekOfCells);
	}

	return cells;
};

export const isSelected = (date: Date, startDate?: Date, endDate?: Date) => {
	if (
		(startDate && isSameDay(date, startDate)) ||
		(endDate && isSameDay(date, endDate))
	) {
		return true;
	}

	return false;
};

export const isDisabled = (
	day: DateCell,
	minDate?: Date,
	maxDate?: Date,
): boolean => {
	if (!day.isCurrentMonth) {
		return true;
	}

	if (
		(minDate && isBefore(new Date(day.date), minDate)) ||
		(maxDate && isAfter(new Date(day.date), maxDate))
	) {
		return true;
	}

	return false;
};

export const ifDisabled = (day: DateCell, minDate?: Date, maxDate?: Date) =>
	isDisabled(day, minDate, maxDate) ? 'true' : undefined;

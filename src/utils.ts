import { getDaysInMonth } from 'date-fns';

/**
 * Format a greeting message.
 * @param greeting - The greeting word (e.g., "Hello")
 * @param name - The name to greet (e.g., "World")
 * @returns Formatted greeting string
 */
export const formatGreeting = (greeting: string, name: string): string => {
	if (!greeting && !name) return '';
	if (!greeting) return name;
	if (!name) return greeting;
	return `${greeting}, ${name}!`;
};

export type DateType = 'year' | 'month' | 'day';

export const isDateType = (
	type: Intl.DateTimeFormatPartTypes,
): type is DateType => ['year', 'month', 'day'].includes(type);

const resetInput = (value: number) => String(value).slice(-1);

export const parseDayInput = (
	value: number,
	year: string,
	month: string,
	prev: string,
) => {
	let daysInMonth = 31;
	if (month !== '' && year !== '') {
		daysInMonth = getDaysInMonth(new Date(Number(year), Number(month) - 1));
	}

	let newDay;
	if (value === daysInMonth + 1 && Number(prev) === daysInMonth) {
		newDay = value % daysInMonth;
	} else if (value > daysInMonth) {
		newDay = resetInput(value);
	} else if (value < 0) {
		newDay = daysInMonth;
	} else {
		newDay = value;
	}

	return String(newDay);
};

export const parseMonthInput = (value: number, prev: string) => {
	let newMonth;
	if (value === 13 && Number(prev) === 12) {
		newMonth = value % 12;
	} else if (value > 12) {
		newMonth = resetInput(value);
	} else if (value < 0) {
		newMonth = 12;
	} else {
		newMonth = value;
	}

	return String(newMonth);
};

export const parseYearInput = (value: number) => {
	let newYear;
	if (value > 9999) {
		newYear = resetInput(value);
	} else if (value < 1) {
		newYear = 9999;
	} else {
		newYear = value;
	}

	return String(newYear);
};

export const getLocaleMonthString = (month: number, locale: string) => {
	if (month === 0) {
		return String(month);
	}

	const date = new Date(2000, month - 1, 1);
	const parts = Intl.DateTimeFormat(locale).formatToParts(date);

	const localeMonth = parts.find((p) => p.type === 'month')!.value;
	return localeMonth;
};

export const getLocaleDayString = (day: number, locale: string) => {
	if (day === 0) {
		return String(day);
	}

	const date = new Date(2000, 0, day);
	const parts = Intl.DateTimeFormat(locale).formatToParts(date);

	const localeDay = parts.find((p) => p.type === 'day')!.value;
	return localeDay;
};

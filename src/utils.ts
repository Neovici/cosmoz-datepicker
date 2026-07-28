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

export type DateObject = {
	year: string;
	month: string;
	day: string;
};

const resetInput = (value: number) => String(value).slice(-1);

export const parseDayInput = (input: string, prev: DateObject) => {
	if (input === '' || isNaN(Number(input))) {
		return '';
	}

	const value = Number(input);

	let daysInMonth = 31;
	if (prev.month !== '' && prev.year !== '') {
		daysInMonth = getDaysInMonth(
			new Date(Number(prev.year), Number(prev.month) - 1),
		);
	}

	let newDay;
	if (value === daysInMonth + 1 && Number(prev.day) === daysInMonth) {
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

export const parseMonthInput = (input: string, prev: string) => {
	if (input === '' || isNaN(Number(input))) {
		return '';
	}

	const value = Number(input);
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

export const parseYearInput = (input: string) => {
	if (input === '' || isNaN(Number(input))) {
		return '';
	}

	const value = Number(input);
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

export const getLocaleMonthString = (
	monthStr: string | number,
	locale: string,
) => {
	if (monthStr === '') {
		return '';
	}

	const month = Number(monthStr);
	if (month === 0) {
		return String(month);
	}

	const date = new Date(2000, month - 1, 1);
	const parts = Intl.DateTimeFormat(locale, {
		numberingSystem: 'latn',
		calendar: 'gregory',
	}).formatToParts(date);

	const localeMonth = parts.find((p) => p.type === 'month')!.value;
	return localeMonth;
};

export const getLocaleDayString = (dayStr: string | number, locale: string) => {
	if (dayStr === '') {
		return '';
	}

	const day = Number(dayStr);
	if (day === 0) {
		return String(day);
	}

	const date = new Date(2000, 0, day);
	const parts = Intl.DateTimeFormat(locale, {
		numberingSystem: 'latn',
		calendar: 'gregory',
	}).formatToParts(date);

	const localeDay = parts.find((p) => p.type === 'day')!.value;
	return localeDay;
};

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

export const parseDayInput = (value: number, month?: string, year?: string) => {
	let daysInMonth = 31;
	if (month && month !== '' && year && year !== '') {
		daysInMonth = getDaysInMonth(new Date(Number(year), Number(month) - 1));
	}

	let newDay;
	if (value > daysInMonth) {
		newDay = resetInput(value);
	} else if (value < 1) {
		newDay = daysInMonth;
	} else {
		newDay = value;
	}

	return String(newDay);
};

export const parseMonthInput = (value: number) => {
	let newMonth;
	if (value > 12) {
		newMonth = resetInput(value);
	} else if (value < 1) {
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

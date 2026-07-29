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

type DateInputPattern = {
	input: string;
	min: 0 | 1;
	max: number;
	previous: string;
};

const getMaxDay = ({ year, month }: DateObject) => {
	if (month === '' || year === '') {
		return 31;
	}

	return getDaysInMonth(new Date(Number(year), Number(month) - 1));
};

const shouldRollover = (value: number, max: number, previous?: string) =>
	value === max + 1 && Number(previous) === max;

const shouldRollunder = (value: number, min: 0 | 1) => value < min;

const isOverflow = (value: number, max: number) => value > max;

const parseDateInput = ({ input, min, max, previous }: DateInputPattern) => {
	if (input === '') {
		return '';
	}

	if (isNaN(Number(input))) {
		return previous;
	}

	const value = Number(input);

	if (shouldRollover(value, max, previous)) {
		return String(value % max);
	}

	if (shouldRollunder(value, min)) {
		return String(max);
	}

	if (isOverflow(value, max)) {
		return String(value).slice(-1);
	}

	return String(value);
};

export const parseDayInput = (input: string, prev: DateObject) => {
	return parseDateInput({
		input,
		min: 0,
		max: getMaxDay(prev),
		previous: prev.day,
	});
};

export const parseMonthInput = (input: string, prev: DateObject) => {
	return parseDateInput({ input, min: 0, max: 12, previous: prev.month });
};

export const parseYearInput = (input: string, prev: DateObject) => {
	return parseDateInput({ input, min: 1, max: 9999, previous: prev.year });
};

export const offsetDateInput = (
	type: DateType,
	date: DateObject,
	offset: 1 | -1,
) => {
	const input = String(Number(date[type] || '0') + offset);

	if (type === 'year') {
		return parseYearInput(input, date);
	}

	if (type === 'month') {
		return parseDateInput({ input, min: 1, max: 12, previous: date.month });
	}

	return parseDateInput({
		input,
		min: 1,
		max: getMaxDay(date),
		previous: date.day,
	});
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

export const getPlaceholder = (type: DateType) => {
	switch (type) {
		case 'year':
			return 'YYYY';
		case 'month':
			return 'MM';
		case 'day':
			return 'DD';
	}
};

export const getCharacterWidth = (date: DateObject, type: DateType) => {
	return Math.max(date[type].length, getPlaceholder(type).length);
};

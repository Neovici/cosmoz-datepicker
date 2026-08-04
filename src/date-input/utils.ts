import { format, getDaysInMonth } from 'date-fns';

export type DateType = 'year' | 'month' | 'day';

export const EMPTY_DATE_VALUE = '';

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
	max: number;
	previous: string;
};

export const getMaxDay = ({ year, month }: DateObject) => {
	if (month === EMPTY_DATE_VALUE || year === EMPTY_DATE_VALUE) {
		return 31;
	}

	return getDaysInMonth(new Date(Number(year), Number(month) - 1));
};

const isOverflow = (value: number, max: number) => value > max;

const parseDateInput = ({ input, max, previous }: DateInputPattern) => {
	if (input === EMPTY_DATE_VALUE) {
		return EMPTY_DATE_VALUE;
	}

	if (isNaN(Number(input))) {
		return previous;
	}

	const value = Number(input);

	if (isOverflow(value, max)) {
		return String(value).slice(-1);
	}

	return String(value);
};

export const parseDayInput = (input: string, prev: DateObject) =>
	parseDateInput({
		input,
		max: getMaxDay(prev),
		previous: prev.day,
	});

export const parseMonthInput = (input: string, prev: DateObject) =>
	parseDateInput({ input, max: 12, previous: prev.month });

export const parseYearInput = (input: string, prev: DateObject) =>
	parseDateInput({ input, max: 9999, previous: prev.year });

const wrapOverflowingDate = ({
	value,
	offset,
	min,
	max,
}: {
	value: string;
	offset: number;
	min: number;
	max: number;
}) => {
	const newValue = Number(value) + offset;

	if (newValue > max) {
		return String(min);
	}

	if (newValue < min) {
		return String(max);
	}

	return String(newValue);
};

export const getIncrementedDayWithWrapping = (
	date: DateObject,
	offset: number,
) =>
	wrapOverflowingDate({
		value: date.day,
		offset,
		min: 1,
		max: getMaxDay(date),
	});

export const getIncrementedMonthWithWrapping = (
	date: DateObject,
	offset: number,
) => wrapOverflowingDate({ value: date.month, offset, min: 1, max: 12 });

export const getIncrementedYearWithWrapping = (
	date: DateObject,
	offset: number,
) => wrapOverflowingDate({ value: date.year, offset, min: 1, max: 9999 });

export const getLocaleMonthString = (
	monthStr: string | number,
	locale: string,
) => {
	if (monthStr === EMPTY_DATE_VALUE) {
		return EMPTY_DATE_VALUE;
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
	if (dayStr === EMPTY_DATE_VALUE) {
		return EMPTY_DATE_VALUE;
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

export const dateObjectToDateString = ({ day, month, year }: DateObject) =>
	format(new Date(Number(year), Number(month) - 1, Number(day)), 'yyyy-MM-dd');

export const isValidDateInput = (date: DateObject) =>
	date.year.length === 4 &&
	Number(date.year) >= 1 &&
	Number(date.year) <= 9999 &&
	Number(date.month) >= 1 &&
	Number(date.month) <= 12 &&
	Number(date.day) >= 1 &&
	Number(date.day) <= getDaysInMonth(dateObjectToDateString(date)) &&
	Object.values(date).every((v) => v !== EMPTY_DATE_VALUE);

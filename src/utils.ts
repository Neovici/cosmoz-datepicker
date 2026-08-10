import { ensureDate } from '@neovici/cosmoz-utils/date';
import { invoke } from '@neovici/cosmoz-utils/function';
import { format, isAfter, isBefore, subDays } from 'date-fns';
import { t } from 'i18next';
import { RangePreset } from './presets';
import type { DateRange } from './use-datepicker';

export const getWeekStartDay = (locale: string) => {
	const localeInfo = new Intl.Locale(locale);
	const weekInfo = localeInfo.getWeekInfo?.();
	const weekStartDay = weekInfo?.firstDay ?? 1; // 1-7 Mon - Sun
	return weekStartDay % 7; // 0-6 Sun - Mon
};

const getDaysSinceWeekStart = (date: Date, locale: string) => {
	const weekStartDay = getWeekStartDay(locale);
	const weekDay = date.getDay(); // 0-6 Sun - Mon

	return (weekDay - weekStartDay + 7) % 7;
};

export const startOfWeek = (date: Date, locale: string) => {
	return subDays(date, getDaysSinceWeekStart(date, locale));
};

export const getTriggerText = (
	start: string | undefined,
	end: string | undefined,
	locale: string,
) => {
	const startDate = ensureDate(start);
	const endDate = ensureDate(end);

	if (startDate && endDate) {
		const formatter = new Intl.DateTimeFormat(locale, {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		});
		return `${formatter.format(startDate)} – ${formatter.format(endDate)}`;
	}

	return t('Select dates');
};

export const closeDropdown = (e: MouseEvent) =>
	e.target?.dispatchEvent(new Event('select', { bubbles: true }));

export const getValidDate = (
	date: Date,
	minDate: Date | undefined,
	maxDate: Date | undefined,
) => {
	if (minDate && isBefore(date, minDate)) {
		return minDate;
	}

	if (maxDate && isAfter(date, maxDate)) {
		return maxDate;
	}

	return date;
};

export const getValidDateString = (
	dateStr: string,
	min: string | undefined,
	max: string | undefined,
) => {
	const date = ensureDate(dateStr) as Date;
	const minDate = ensureDate(min);
	const maxDate = ensureDate(max);
	return format(getValidDate(date, minDate, maxDate), 'yyyy-MM-dd');
};

export const liftPreset = (
	{ start, end }: RangePreset,
	setValue: (value: DateRange) => void,
	min: string | undefined,
	max: string | undefined,
) => {
	setValue({
		start: getValidDateString(invoke(start), min, max),
		end: getValidDateString(invoke(end), min, max),
	});
};

export const isPresetActive = (
	preset: RangePreset,
	start: string | undefined,
	end: string | undefined,
) =>
	!!start &&
	!!end &&
	start === invoke(preset.start) &&
	end === invoke(preset.end);

import { ensureDate } from '@neovici/cosmoz-utils/date';
import { StateUpdater } from '@pionjs/pion';
import { subDays } from 'date-fns';
import { t } from 'i18next';
import { RangePreset } from './presets';

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

export const liftPreset = (
	{ start, end }: RangePreset,
	setStart: StateUpdater<string | undefined>,
	setEnd: StateUpdater<string | undefined>,
) => {
	setStart(start);
	setEnd(end);
};

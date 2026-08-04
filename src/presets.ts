import {
	addDays,
	endOfMonth,
	endOfYear,
	format,
	startOfMonth,
	startOfYear,
	subDays,
	subMonths,
	subWeeks,
} from 'date-fns';
import { t } from 'i18next';
import { startOfWeek } from './utils';

export type RangePreset = {
	label: string;
	start: () => string;
	end: () => string;
};

export const getRangePresets = (locale: string): RangePreset[] => [
	{
		label: t('Today'),
		start: () => format(new Date(), 'yyyy-MM-dd'),
		end: () => format(new Date(), 'yyyy-MM-dd'),
	},
	{
		label: t('Yesterday'),
		start: () => format(subDays(new Date(), 1), 'yyyy-MM-dd'),
		end: () => format(subDays(new Date(), 1), 'yyyy-MM-dd'),
	},
	{
		label: t('This week'),
		start: () => format(startOfWeek(new Date(), locale), 'yyyy-MM-dd'),
		end: () =>
			format(addDays(startOfWeek(new Date(), locale), 6), 'yyyy-MM-dd'),
	},
	{
		label: t('Last week'),
		start: () =>
			format(subWeeks(startOfWeek(new Date(), locale), 1), 'yyyy-MM-dd'),
		end: () =>
			format(subDays(startOfWeek(new Date(), locale), 1), 'yyyy-MM-dd'),
	},
	{
		label: t('This month'),
		start: () => format(startOfMonth(new Date()), 'yyyy-MM-dd'),
		end: () => format(endOfMonth(new Date()), 'yyyy-MM-dd'),
	},
	{
		label: t('Last month'),
		start: () => format(subMonths(startOfMonth(new Date()), 1), 'yyyy-MM-dd'),
		end: () => format(subMonths(endOfMonth(new Date()), 1), 'yyyy-MM-dd'),
	},
	{
		label: t('This year'),
		start: () => format(startOfYear(new Date()), 'yyyy-MM-dd'),
		end: () => format(endOfYear(new Date()), 'yyyy-MM-dd'),
	},
];

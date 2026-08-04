import { addDays, format, subDays } from 'date-fns';
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
];

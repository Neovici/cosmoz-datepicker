import { format, subDays } from 'date-fns';
import { t } from 'i18next';

export type RangePreset = {
	label: string;
	start: () => string;
	end: () => string;
};

export const getRangePresets = (): RangePreset[] => [
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
];

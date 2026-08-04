import { ensureDate } from '@neovici/cosmoz-utils/date';
import { StateUpdater } from '@pionjs/pion';
import { t } from 'i18next';
import { RangePreset } from './presets';

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

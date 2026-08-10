import { CosmozButtonElement } from '@neovici/cosmoz-button';
import { useCallback, useMemo, useProperty } from '@pionjs/pion';
import { isAfter, isBefore } from 'date-fns';
import { getRangePresets, RangePreset } from './presets';
import { useMediaMatch } from './use-media-match';
import { getValidDateString } from './utils';

export type DateRange = {
	start?: string;
	end?: string;
};

export interface Props {
	value?: DateRange;
	locale?: string;
	min?: string;
	max?: string;
	presets?: RangePreset[];
	disabled?: boolean;
	noPresets?: boolean;
	singleCalendar?: boolean;
	triggerSize?: CosmozButtonElement['size'];
	triggerVariant?: CosmozButtonElement['variant'];
}

export const useDatepicker = (host: Props) => {
	const {
		locale: _locale,
		min,
		max,
		presets,
		singleCalendar = false,
		disabled,
		noPresets,
		triggerSize,
		triggerVariant,
	} = host;
	const locale = _locale ?? navigator.language;
	const [value, setValue] = useProperty<DateRange>('value');
	const { start, end } = value ?? {};
	const isNarrow = useMediaMatch('(width < 735px)');
	const isSingleCalendar = singleCalendar || isNarrow;
	const numberOfMonths = isSingleCalendar ? 1 : 2;
	const rangePresets = useMemo(
		() => presets ?? getRangePresets(locale),
		[locale, presets],
	);
	const onStartInput = useCallback(
		(e: CustomEvent<{ value: string }>) =>
			setValue({
				start: getValidDateString(e.detail.value, min, max),
				end,
			}),
		[min, max, end, setValue],
	);

	const onEndInput = useCallback(
		(e: CustomEvent<{ value: string }>) =>
			setValue({
				start,
				end: getValidDateString(e.detail.value, min, max),
			}),
		[min, max, start, setValue],
	);

	const onStartInputBlur = useCallback(() => {
		if (start && end && isAfter(new Date(start), new Date(end))) {
			setValue({ start, end: start });
		}
	}, [start, end, setValue]);

	const onEndInputBlur = useCallback(() => {
		if (start && end && isBefore(new Date(end), new Date(start))) {
			setValue({ start: end, end });
		}
	}, [start, end, setValue]);

	return {
		end,
		isSingleCalendar,
		locale,
		numberOfMonths,
		onEndInput,
		onStartInput,
		rangePresets,
		setValue,
		start,
		value,
		disabled,
		noPresets,
		min,
		max,
		triggerSize,
		triggerVariant,
		onStartInputBlur,
		onEndInputBlur,
	};
};

import { CosmozButtonElement } from '@neovici/cosmoz-button';
import { useProperty } from '@neovici/cosmoz-utils/hooks/use-property';
import { useCallback, useMemo } from '@pionjs/pion';
import { getRangePresets, RangePreset } from './presets';
import { useMediaMatch } from './use-media-match';
import { getValidDateString } from './utils';

export interface Props {
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
	const [start, setStart] = useProperty<string>('start');
	const [end, setEnd] = useProperty<string>('end');
	const isNarrow = useMediaMatch('(width < 735px)');
	const isSingleCalendar = singleCalendar || isNarrow;
	const numberOfMonths = isSingleCalendar ? 1 : 2;
	const rangePresets = useMemo(
		() => presets ?? getRangePresets(locale),
		[locale, presets],
	);

	const onStartInput = useCallback(
		(e: CustomEvent<{ value: string }>) =>
			setStart(getValidDateString(e.detail.value, min, max)),
		[min, max],
	);

	const onEndInput = useCallback(
		(e: CustomEvent<{ value: string }>) =>
			setEnd(getValidDateString(e.detail.value, min, max)),
		[min, max],
	);

	return {
		end,
		isSingleCalendar,
		locale,
		numberOfMonths,
		onEndInput,
		onStartInput,
		rangePresets,
		setEnd,
		setStart,
		start,
		disabled,
		noPresets,
		min,
		max,
		triggerSize,
		triggerVariant,
	};
};

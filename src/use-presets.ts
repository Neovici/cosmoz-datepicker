import { invoke } from '@neovici/cosmoz-utils/function';
import { useCallback, useMemo } from '@pionjs/pion';
import { DatePreset, getRangePresets, RangePreset } from './presets';
import { getValidDateString } from './utils';

/**
 * Range presets for `range` mode; in `single` mode, date presets with the one
 * matching the value, and picking one.
 */
export const usePresets = ({
	presets,
	single,
	noPresets,
	locale,
	value,
	min,
	max,
	setValue,
	setHostValue,
}: {
	presets?: RangePreset[] | DatePreset[];
	single: boolean;
	noPresets?: boolean;
	locale: string;
	value: unknown;
	min?: string;
	max?: string;
	setValue: (value: string) => void;
	setHostValue: (value: string) => void;
}) => {
	const rangePresets = useMemo(
		() =>
			single
				? []
				: ((presets as RangePreset[] | undefined) ?? getRangePresets(locale)),
		[single, locale, presets],
	);
	const datePresets =
		single && !noPresets ? ((presets as DatePreset[] | undefined) ?? []) : [];
	const activePreset = datePresets.find(
		(preset) => invoke(preset.value) === value,
	);
	const pickPreset = useCallback(
		(preset: DatePreset) => {
			const picked = getValidDateString(invoke(preset.value), min, max);
			setValue(picked);
			setHostValue(picked);
		},
		[min, max, setValue, setHostValue],
	);
	return { rangePresets, datePresets, activePreset, pickPreset };
};

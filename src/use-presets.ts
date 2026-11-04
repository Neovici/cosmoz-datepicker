import { invoke } from '@neovici/cosmoz-utils/function';
import { useCallback, useMemo } from '@pionjs/pion';
import { DatePreset, getRangePresets, RangePreset } from './presets';
import { getValidDateString } from './utils';

/**
 * Range presets for `range` mode; in `single` mode, date presets with the one
 * matching the pending value, and picking one. Like a range preset, a picked
 * date is committed when the popover closes.
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
}: {
	presets?: RangePreset[] | DatePreset[];
	single: boolean;
	noPresets?: boolean;
	locale: string;
	value: unknown;
	min?: string;
	max?: string;
	setValue: (value: string) => void;
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
		(preset: DatePreset) =>
			setValue(getValidDateString(invoke(preset.value), min, max)),
		[min, max, setValue],
	);
	return { rangePresets, datePresets, activePreset, pickPreset };
};

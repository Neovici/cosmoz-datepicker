import { CosmozButtonElement } from '@neovici/cosmoz-button';
import { useCallback, useMemo, useProperty, useState } from '@pionjs/pion';
import { isAfter, isBefore } from 'date-fns';
import { getRangePresets, RangePreset } from './presets';
import { useDatepickerValue } from './use-datepicker-value';
import { useMediaMatch } from './use-media-match';
import { getValidDateString } from './utils';

export type DateRange = {
	start?: string;
	end?: string;
};

export type DatepickerMode = 'single' | 'range';

export type DatepickerValue = string | DateRange;

export interface Props {
	value?: DatepickerValue;
	mode?: DatepickerMode;
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
		mode = 'range',
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
	const isSingleDateMode = mode === 'single';
	const locale = _locale ?? navigator.language;
	const [hostValue, setHostValue] = useProperty<DatepickerValue>('value');
	const [value, setValue] = useState<DatepickerValue | undefined>(hostValue);
	const isNarrow = useMediaMatch('(width < 735px)');
	const isSingleCalendar = singleCalendar || isNarrow || isSingleDateMode;
	const numberOfMonths = isSingleCalendar ? 1 : 2;
	const [isOpen, setIsOpen] = useState(false);
	const { start, end } = useDatepickerValue(value, mode);
	const rangePresets = useMemo(
		() => presets ?? getRangePresets(locale),
		[locale, presets],
	);

	const onDropdownToggle = useCallback(
		({ newState }: ToggleEvent) => {
			if (newState === 'closed') {
				setHostValue(value);
			} else {
				setValue(hostValue);
			}

			setIsOpen(newState === 'open');
		},
		[value, hostValue, setIsOpen, setHostValue, setValue],
	);

	const onStartInput = useCallback(
		(e: CustomEvent<{ value: string }>) => {
			if (isSingleDateMode) {
				setValue(getValidDateString(e.detail.value, min, max));
				return;
			}

			setValue({
				start: getValidDateString(e.detail.value, min, max),
				end,
			});
		},
		[isSingleDateMode, min, max, end, setValue],
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
		if (
			!isSingleDateMode &&
			start &&
			end &&
			isAfter(new Date(start), new Date(end))
		) {
			setValue({ start, end: start });
		}
	}, [isSingleDateMode, start, end, setValue]);

	const onEndInputBlur = useCallback(() => {
		if (start && end && isBefore(new Date(end), new Date(start))) {
			setValue({ start: end, end });
		}
	}, [start, end, setValue]);

	return {
		end,
		isSingleCalendar,
		locale,
		mode,
		isSingleDateMode,
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
		isOpen,
		onDropdownToggle,
	};
};

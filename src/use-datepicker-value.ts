import { DatepickerMode, DatepickerValue } from './use-datepicker';
import { isDateRangeValue } from './utils';

export const useDatepickerValue = (
	value: DatepickerValue | undefined,
	mode: DatepickerMode,
) => {
	const start = isDateRangeValue(value, mode) ? value?.start : value;
	const end = isDateRangeValue(value, mode) ? value?.end : undefined;

	return {
		start,
		end,
	};
};

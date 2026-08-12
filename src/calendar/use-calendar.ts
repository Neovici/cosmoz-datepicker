import { ensureDate } from '@neovici/cosmoz-utils/date';
import {
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useState,
} from '@pionjs/pion';
import {
	addMonths,
	endOfMonth,
	format,
	isBefore,
	startOfMonth,
	subMonths,
} from 'date-fns';
import type { DatepickerMode, DatepickerValue } from '../use-datepicker';
import { useDatepickerValue } from '../use-datepicker-value';
import { getValidDate } from '../utils';
import {
	getDateFromEvent,
	getKeyboardDate,
	getMonthsDateCellMatrix,
	getWeekdayNames,
	isAfterVisibleMonths,
	isBeforeVisibleMonths,
	isDisabled,
} from './utils';

export type CalendarProps = HTMLElement & {
	value?: DatepickerValue;
	mode?: DatepickerMode;
	locale?: string;
	numberOfMonths?: string;
	min?: string;
	max?: string;
};

// eslint-disable-next-line max-statements
export const useCalendar = (host: CalendarProps) => {
	const {
		locale: _locale,
		mode = 'range',
		numberOfMonths: _numberOfMonths,
		min,
		max,
	} = host;
	const isSingleDateMode = mode === 'single';
	const locale = _locale ?? navigator.language;
	const numberOfMonths = Number(_numberOfMonths ?? 1);
	const [value, setValue] = useProperty<DatepickerValue>('value');
	const { start, end } = useDatepickerValue(value, mode);
	const startDate = useMemo(() => ensureDate(start), [start]);
	const endDate = useMemo(() => ensureDate(end), [end]);
	const minDate = useMemo(() => ensureDate(min), [min]);
	const maxDate = useMemo(() => ensureDate(max), [max]);
	const initialFocusedDate = useMemo(
		() => getValidDate(startDate ?? new Date(), minDate, maxDate),
		[startDate, minDate, maxDate],
	);
	const [selectedMonth, setSelectedMonth] = useState(initialFocusedDate);
	const [isFocused, setIsFocused] = useState(false);
	const [focusedDate, setFocusedDate] = useState(initialFocusedDate);
	const weekdayNames = useMemo(() => getWeekdayNames(locale), [locale]);

	useEffect(() => {
		if (isFocused) {
			const focusedCell = host.shadowRoot?.querySelector<HTMLElement>(
				`[data-date="${format(focusedDate, 'yyyy-MM-dd')}"]`,
			);

			focusedCell?.focus();
		}
	}, [focusedDate, host, isFocused]);

	const monthMatrices = useMemo(() => {
		const matrices = [];
		for (let i = 0; i < numberOfMonths; i++) {
			matrices.push(
				getMonthsDateCellMatrix(addMonths(selectedMonth, i), locale),
			);
		}
		return matrices;
	}, [selectedMonth, locale, numberOfMonths]);

	const handleSelect = useCallback(
		(date: Date) => {
			const dateString = format(date, 'yyyy-MM-dd');

			if (isSingleDateMode) {
				setValue(dateString);
				return;
			}

			if (!startDate && !endDate) {
				setValue({ start: dateString, end: undefined });
				return;
			}

			if (startDate && !endDate && isBefore(date, startDate)) {
				setValue({
					start: dateString,
					end: format(startDate, 'yyyy-MM-dd'),
				});
				return;
			}

			if (startDate && !endDate) {
				setValue({ start, end: dateString });
				return;
			}

			if (startDate && endDate) {
				setValue({ start: dateString, end: undefined });
			}
		},
		[isSingleDateMode, startDate, endDate, start, setValue],
	);

	const focusDate = useCallback(
		(date: Date) => {
			const nextDate = getValidDate(date, minDate, maxDate);

			if (isBeforeVisibleMonths(nextDate, selectedMonth)) {
				setSelectedMonth((prev) => subMonths(prev, numberOfMonths));
			}

			if (isAfterVisibleMonths(nextDate, selectedMonth, numberOfMonths)) {
				setSelectedMonth((prev) => addMonths(prev, numberOfMonths));
			}

			setFocusedDate(nextDate);
		},
		[
			minDate,
			maxDate,
			numberOfMonths,
			selectedMonth,
			setFocusedDate,
			setSelectedMonth,
		],
	);

	useEffect(() => {
		if (isBeforeVisibleMonths(focusedDate, selectedMonth)) {
			const newDate = getValidDate(
				startOfMonth(selectedMonth),
				minDate,
				maxDate,
			);
			setFocusedDate(newDate);
		}

		if (isAfterVisibleMonths(focusedDate, selectedMonth, numberOfMonths)) {
			const newDate = getValidDate(
				endOfMonth(addMonths(selectedMonth, numberOfMonths - 1)),
				minDate,
				maxDate,
			);
			setFocusedDate(newDate);
		}
	}, [
		focusedDate,
		maxDate,
		minDate,
		numberOfMonths,
		selectedMonth,
		setFocusedDate,
	]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (!(e.target instanceof Element)) {
				return;
			}

			const dateCell = e.target.closest<HTMLElement>('[data-date]');

			if (!dateCell?.dataset.date || dateCell.dataset.disabled === 'true') {
				return;
			}

			const date = ensureDate(dateCell.dataset.date) as Date;

			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				handleSelect(date);
				return;
			}

			const nextDate = getKeyboardDate(e, date);

			if (!nextDate) {
				return;
			}

			e.preventDefault();
			focusDate(nextDate);
		},
		[focusDate, handleSelect],
	);

	const onClick = useCallback(
		(e: MouseEvent) => {
			const date = getDateFromEvent(e);

			if (!date || isDisabled(date, minDate, maxDate)) {
				return;
			}

			handleSelect(date);
		},
		[handleSelect, minDate, maxDate],
	);

	const onPointerDown = useCallback(
		(e: PointerEvent) => {
			const date = getDateFromEvent(e);

			if (!date || isDisabled(date, minDate, maxDate)) {
				e.preventDefault();
			}
		},
		[minDate, maxDate],
	);

	const onPointerEnter = useCallback(
		(e: PointerEvent) => {
			const date = getDateFromEvent(e);

			if (
				!isSingleDateMode &&
				date &&
				startDate &&
				!endDate &&
				!isDisabled(date, minDate, maxDate)
			) {
				setFocusedDate(date);
			}
		},
		[isSingleDateMode, startDate, endDate, minDate, maxDate, setFocusedDate],
	);

	const onFocus = useCallback(
		(e: FocusEvent) => {
			const date = getDateFromEvent(e);

			if (!date) {
				return;
			}

			setFocusedDate(date);
			setIsFocused(true);
		},
		[startDate, endDate, setFocusedDate, setIsFocused],
	);

	return {
		endDate,
		focusedDate,
		isSingleDateMode,
		locale,
		maxDate,
		minDate,
		monthMatrices,
		numberOfMonths,
		onClick,
		onKeyDown,
		selectedMonth,
		setIsFocused,
		setSelectedMonth,
		startDate,
		weekdayNames,
		onPointerEnter,
		onFocus,
		onPointerDown,
	};
};

import { ensureDate } from '@neovici/cosmoz-utils/date';
import {
	useCallback,
	useEffect,
	useHost,
	useMemo,
	useProperty,
	useState,
} from '@pionjs/pion';
import {
	DateObject,
	dateObjectToDateString,
	DateType,
	EMPTY_DATE_VALUE,
	getIncrementedDayWithWrapping,
	getIncrementedMonthWithWrapping,
	getIncrementedYearWithWrapping,
	getLocaleDayString,
	getLocaleMonthString,
	isValidDateInput,
	parseDayInput,
	parseMonthInput,
	parseYearInput,
} from './utils';

export type ValueChangedEvent = CustomEvent<{ value: string }>;

type DateInputProps = HTMLElement & {
	value?: string;
	locale?: string;
};

const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	numberingSystem: 'latn',
	calendar: 'gregory',
};

const initializeState = (date: Date | undefined, locale: string): DateObject =>
	date
		? {
				year: String(date.getFullYear()),
				month: getLocaleMonthString(date.getMonth() + 1, locale),
				day: getLocaleDayString(date.getDate(), locale),
			}
		: {
				year: EMPTY_DATE_VALUE,
				month: EMPTY_DATE_VALUE,
				day: EMPTY_DATE_VALUE,
			};

export const useDateInput = () => {
	const host = useHost<DateInputProps>();
	const [value, setValue] = useProperty<string>('value');
	const { locale: _locale } = host;
	const locale = useMemo(() => _locale ?? navigator.language, [_locale]);
	const date = useMemo(() => ensureDate(value), [value]);
	const parts = useMemo(
		() => Intl.DateTimeFormat(locale, options).formatToParts(date),
		[date, locale],
	);
	const [inputState, setInputState] = useState(initializeState(date, locale));

	useEffect(() => {
		setInputState(initializeState(date, locale));
	}, [date, locale]);

	useEffect(() => {
		if (isValidDateInput(inputState)) {
			setValue(dateObjectToDateString(inputState));
		}
	}, [inputState, setValue]);

	const onChange = useCallback(
		(e: ValueChangedEvent, type: DateType) => {
			const input = e.detail.value;
			setInputState((prev) => {
				if (type === 'year') {
					const year = parseYearInput(input, prev);
					return {
						...prev,
						year,
					};
				} else if (type === 'month') {
					const month = parseMonthInput(input, prev);
					return {
						...prev,
						month: getLocaleMonthString(month, locale),
					};
				}
				const day = parseDayInput(input, prev);
				return {
					...prev,
					day: getLocaleDayString(day, locale),
				};
			});
		},
		[locale, setInputState],
	);

	const onKeyDown = useCallback(
		(e: KeyboardEvent, type: DateType) => {
			if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
				e.preventDefault();
				setInputState((prev) => {
					const offset = e.key === 'ArrowUp' ? 1 : -1;

					if (type === 'year') {
						const year = getIncrementedYearWithWrapping(prev, offset);
						return { ...prev, year };
					}

					if (type === 'month') {
						const month = getIncrementedMonthWithWrapping(prev, offset);
						return { ...prev, month: getLocaleMonthString(month, locale) };
					}

					const day = getIncrementedDayWithWrapping(prev, offset);
					return { ...prev, day: getLocaleDayString(day, locale) };
				});
			}

			if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
				e.preventDefault();
				const focused = host.shadowRoot?.activeElement as
					| HTMLInputElement
					| undefined;
				if (!focused) {
					return;
				}

				const inputs = [
					...(host.shadowRoot?.querySelectorAll(
						'cosmoz-input',
					) as NodeListOf<HTMLInputElement>),
				];

				const index = inputs.indexOf(focused);
				if (e.key === 'ArrowLeft' && index - 1 >= 0) {
					inputs[index - 1].focus();
					return;
				}

				if (e.key === 'ArrowRight' && index + 1 < inputs.length) {
					inputs[index + 1].focus();
				}
			}
		},
		[host, locale, setInputState],
	);

	return {
		inputState,
		onChange,
		onKeyDown,
		parts,
	};
};

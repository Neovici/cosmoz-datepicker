import '@neovici/cosmoz-input';
import '@neovici/cosmoz-tokens';
import {
	component,
	css,
	html,
	useEffect,
	useProperty,
	useState,
} from '@pionjs/pion';
import { format } from 'date-fns';
import { live } from 'lit-html/directives/live.js';
import { repeat } from 'lit-html/directives/repeat.js';
import {
	DateType,
	EMPTY_DATE_VALUE,
	getCharacterWidth,
	getIncrementedDayWithWrapping,
	getIncrementedMonthWithWrapping,
	getIncrementedYearWithWrapping,
	getLocaleDayString,
	getLocaleMonthString,
	getPlaceholder,
	isDateType,
	parseDayInput,
	parseMonthInput,
	parseYearInput,
} from './utils';

type ValueChangedEvent = CustomEvent<{ value: string }>;

interface Props extends HTMLElement {
	value?: string;
	locale?: string;
	min?: string;
	max?: string;
}

const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	numberingSystem: 'latn',
	calendar: 'gregory',
};

const CosmozDateInput = (host: Props) => {
	const [value, setValue] = useProperty<string>('value', undefined);
	const { locale: _locale } = host;
	const locale = _locale ?? navigator.language;
	const date = value ? new Date(value) : undefined;
	const parts = Intl.DateTimeFormat(locale, options).formatToParts(date);
	const [inputState, setInputState] = useState(
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
				},
	);

	useEffect(() => {
		if (Object.values(inputState).every((v) => v !== EMPTY_DATE_VALUE)) {
			setValue(
				format(
					new Date(
						Number(inputState.year),
						Number(inputState.month) - 1,
						Number(inputState.day),
					),
					'yyyy-MM-dd',
				),
			);
		}
	}, [inputState]);

	const onChange = (e: ValueChangedEvent, type: DateType) => {
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
	};

	const onKeyDown = (e: KeyboardEvent, type: DateType) => {
		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			e.preventDefault();
			setInputState((prev) => {
				const offset = e.key === 'ArrowUp' ? 1 : -1;

				if (type === 'day') {
					const day = getIncrementedDayWithWrapping(prev, offset);
					return { ...prev, day: getLocaleDayString(day, locale) };
				}

				if (type === 'month') {
					const month = getIncrementedMonthWithWrapping(prev, offset);
					return { ...prev, month: getLocaleMonthString(month, locale) };
				}

				const year = getIncrementedYearWithWrapping(prev, offset);
				return { ...prev, year };
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
	};

	return repeat(
		parts,
		(_part, i) => i,
		({ value, type }) => {
			if (isDateType(type)) {
				return html`
					<cosmoz-input
						style="--min-chars: ${getCharacterWidth(inputState, type)}ch;"
						type="text"
						inputmode="numeric"
						no-label-float
						autocomplete="off"
						placeholder=${getPlaceholder(type)}
						.value=${live(inputState[type])}
						@value-changed=${(e: ValueChangedEvent) => onChange(e, type)}
						@keydown=${(e: KeyboardEvent) => onKeyDown(e, type)}
					></cosmoz-input>
				`;
			}

			if (type === 'literal') {
				return html`<span>${value}</span>`;
			}
		},
	);
};

const styles = css`
	:host {
		display: flex;
		align-items: center;
		gap: var(--cz-spacing);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: calc(var(--cz-spacing) * 3);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		width: min-content;
	}

	cosmoz-input {
		margin: 0;
		padding: 0 4px;
		box-sizing: content-box;
	}

	cosmoz-input:focus-within {
		background: var(--cz-color-bg-brand);
		border-radius: var(--cz-radius-sm);
	}

	cosmoz-input::part(input) {
		padding: 0;
		min-width: var(--min-chars);
		field-sizing: content;
		caret-color: transparent;
	}

	cosmoz-input::part(input)::selection {
		background: transparent;
	}

	cosmoz-input::part(wrap) {
		box-shadow: none;
		border-radius: 0;
	}
`;

customElements.define(
	'cosmoz-date-input',
	component(CosmozDateInput, {
		observedAttributes: ['min', 'max', 'locale'],
		styleSheets: [styles],
		shadowRootInit: {
			delegatesFocus: true,
			mode: 'open',
		},
	}),
);

export { CosmozDateInput as CosmozDatepicker };

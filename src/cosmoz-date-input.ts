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
	getLocaleDayString,
	getLocaleMonthString,
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
	const [value, setValue] = useProperty('value', '2026-04-21');
	const { locale: _locale } = host;
	const locale = _locale ?? navigator.language;
	const date = value ? new Date(value) : undefined;
	const parts = Intl.DateTimeFormat(locale, options).formatToParts(date);
	const [inputState, setInputState] = useState({
		year: date ? String(date.getFullYear()) : '',
		month: date ? getLocaleMonthString(date.getMonth() + 1, locale) : '',
		day: date ? getLocaleDayString(date.getDate(), locale) : '',
	});

	useEffect(() => {
		if (Object.values(inputState).every((v) => v !== '')) {
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

	const onFocus = (e: InputEvent) => {
		const target = e.currentTarget as HTMLInputElement;
		const input = target.shadowRoot?.querySelector('input');
		input?.select();
	};

	const onChange = (e: ValueChangedEvent, type: DateType) => {
		const input = e.detail.value;
		setInputState((prev) => {
			if (type === 'year') {
				const year = input === '' ? '' : parseYearInput(Number(input));
				return {
					...prev,
					year,
				};
			} else if (type === 'month') {
				const monthVal =
					input === '' ? '' : parseMonthInput(Number(input), prev.month);
				const month = getLocaleMonthString(Number(monthVal), locale);
				return {
					...prev,
					month,
				};
			}
			const dayVal =
				input === ''
					? ''
					: parseDayInput(Number(input), prev.year, prev.month, prev.day);
			const day = getLocaleDayString(Number(dayVal), locale);
			return {
				...prev,
				day,
			};
		});
	};

	return repeat(
		parts,
		(_part, i) => i,
		({ value, type }) => {
			if (isDateType(type)) {
				return html`
					<cosmoz-input
						style="width: ${String(inputState[type]).length > 0
							? String(inputState[type]).length
							: 2}ch;"
						type="number"
						no-label-float
						part=${type}
						no-spinner
						autocomplete="off"
						placeholder="0000"
						.value=${live(inputState[type])}
						@focus=${onFocus}
						@value-changed=${(e: ValueChangedEvent) => onChange(e, type)}
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
	}

	cosmoz-input {
		margin: 0;
	}

	cosmoz-input::part(input) {
		padding: 0;
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

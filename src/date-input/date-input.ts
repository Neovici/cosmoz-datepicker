import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { t } from 'i18next';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { styles } from './styles.css';
import { DateInputProps, useDateInput } from './use-date-input';
import {
	DateType,
	EMPTY_DATE_VALUE,
	getPlaceholder,
	isDateType,
} from './utils';

const aria: Record<DateType, { getLabel: () => string; valuemax: string }> = {
	year: {
		getLabel: () => t('Year'),
		valuemax: '9999',
	},
	month: {
		getLabel: () => t('Month'),
		valuemax: '12',
	},
	day: {
		getLabel: () => t('Day'),
		valuemax: '31',
	},
};

const getAriaLabel = (type: DateType, hostAriaLabel: string | null) =>
	[aria[type].getLabel(), hostAriaLabel].filter(Boolean).join(', ');

const CosmozDateInput = (host: DateInputProps) => {
	const {
		inputState,
		onChange,
		onKeyDown,
		onBlur,
		onClick,
		localeDateParts,
		hostAriaLabel,
	} = useDateInput(host);

	return repeat(
		localeDateParts,
		(_, i) => i,
		({ value: literalValue, type }) => {
			if (isDateType(type)) {
				const value = inputState[type];

				return html`
					<span class="date-input-part">
						<span class="date-input-sizer" aria-hidden="true"
							>${value || getPlaceholder(type)}</span
						>
						<input
							role="spinbutton"
							aria-label=${getAriaLabel(type, hostAriaLabel)}
							aria-valuemin="1"
							aria-valuemax=${aria[type].valuemax}
							aria-valuenow=${ifDefined(
								value !== EMPTY_DATE_VALUE ? value : undefined,
							)}
							aria-valuetext=${value !== EMPTY_DATE_VALUE ? value : t('Empty')}
							type="text"
							inputmode="numeric"
							autocomplete="off"
							spellcheck="false"
							data-type=${type}
							placeholder=${getPlaceholder(type)}
							.value=${live(value)}
							@click=${onClick}
							@blur=${onBlur}
							@input=${onChange}
							@keydown=${onKeyDown}
						/>
					</span>
				`;
			}

			if (type === 'literal') {
				return html`<span>${literalValue}</span>`;
			}
		},
	);
};

customElements.define(
	'cosmoz-date-input',
	component(CosmozDateInput, {
		observedAttributes: ['locale'],
		styleSheets: [normalize, styles],
		shadowRootInit: {
			delegatesFocus: true,
			mode: 'open',
		},
	}),
);

export { CosmozDateInput };

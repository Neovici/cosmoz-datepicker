import '@neovici/cosmoz-input';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { live } from 'lit-html/directives/live.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { styles } from './styles.css';
import { useDateInput, ValueChangedEvent } from './use-date-input';
import { getPlaceholder, isDateType } from './utils';

const CosmozDateInput = () => {
	const { inputState, onChange, onKeyDown, onBlur, localeDateParts } =
		useDateInput();

	return repeat(
		localeDateParts,
		(_, i) => i,
		({ value, type }) => {
			if (isDateType(type)) {
				return html`
					<span class="date-input-part">
						<span class="date-input-sizer" aria-hidden="true"
							>${inputState[type] || getPlaceholder(type)}</span
						>
						<cosmoz-input
							type="text"
							inputmode="numeric"
							no-label-float
							autocomplete="off"
							placeholder=${getPlaceholder(type)}
							.value=${live(inputState[type])}
							@blur=${onBlur}
							@value-changed=${(e: ValueChangedEvent) => onChange(e, type)}
							@keydown=${(e: KeyboardEvent) => onKeyDown(e, type)}
						></cosmoz-input>
					</span>
				`;
			}

			if (type === 'literal') {
				return html`<span>${value}</span>`;
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

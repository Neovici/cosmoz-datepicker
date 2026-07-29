import '@neovici/cosmoz-input';
import '@neovici/cosmoz-tokens';
import { component, html } from '@pionjs/pion';
import { live } from 'lit-html/directives/live.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { styles } from './index.css';
import { useDateInput, ValueChangedEvent } from './use-date-input';
import { getCharacterWidth, getPlaceholder, isDateType } from './utils';

interface Props extends HTMLElement {
	value?: string;
	locale?: string;
	min?: string;
	max?: string;
}

const CosmozDateInput = (host: Props) => {
	const { inputState, onChange, onKeyDown, parts } = useDateInput(host);

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

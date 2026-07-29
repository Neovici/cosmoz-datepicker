import '@neovici/cosmoz-input';
import '@neovici/cosmoz-tokens';
import { component, css, html } from '@pionjs/pion';
import { live } from 'lit-html/directives/live.js';
import { repeat } from 'lit-html/directives/repeat.js';
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

	:host(:focus-within) {
		box-shadow: var(--cz-focus-ring);
	}

	cosmoz-input {
		margin: 0;
		padding: 0 4px;
		box-sizing: content-box;
	}

	cosmoz-input:focus-within {
		background: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		border-radius: var(--cz-radius-sm);
	}

	cosmoz-input::part(input) {
		padding: 0;
		min-width: var(--min-chars);
		field-sizing: content;
		caret-color: transparent;
		color: inherit;
	}

	cosmoz-input:focus-within::part(input)::placeholder {
		color: inherit;
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

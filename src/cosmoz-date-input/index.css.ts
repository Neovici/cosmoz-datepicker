import { css } from '@pionjs/pion';

export const styles = css`
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

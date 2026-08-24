import { css } from '@pionjs/pion';

export const styles = css`
	:host {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 0.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		color: var(--cz-color-text-primary);
		padding: calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		width: min-content;
	}

	:host(:focus-within) {
		box-shadow: var(--cz-focus-ring);
	}

	.date-input-part {
		display: grid;
		padding: 0 calc(var(--cz-spacing) * 1);
	}

	.date-input-part:focus-within {
		background: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		border-radius: var(--cz-radius-sm);
	}

	.date-input-part > * {
		grid-area: 1 / 1;
	}

	.date-input-sizer {
		font: inherit;
		visibility: hidden;
	}

	input {
		appearance: none;
		box-shadow: none;
		caret-color: transparent;
		min-width: 0;
		outline: 0;
		width: 100%;
	}

	input::selection {
		background-color: rgba(0, 0, 0, 0.01);
	}

	input::placeholder {
		color: currentColor;
	}
`;

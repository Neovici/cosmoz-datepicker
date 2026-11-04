import { css } from '@pionjs/pion';

export const styles = css`
	.content {
		display: flex;
		background: var(--cz-color-bg-primary);
		border: 1px solid var(--cz-color-border-secondary);
		border-radius: var(--cz-radius-2xl);
		box-shadow: var(--cz-shadow-xl);
		color: var(--cz-color-text-primary);
		font-size: var(--cz-text-base);
	}

	.range-presets {
		width: calc(var(--cz-spacing) * 38);
		padding: calc(var(--cz-spacing) * 3);
		flex-shrink: 0;
		border-right: 1px solid var(--cz-color-border-secondary);
		overflow: auto;
		contain: size;
	}

	@media (max-width: 1023px) {
		.range-presets {
			display: none;
		}
	}

	.range-presets cosmoz-button::part(button) {
		justify-content: flex-start;
		font-weight: var(--cz-font-weight-medium);
		overflow: hidden;
	}

	.range-presets cosmoz-button[active]::part(button) {
		background: var(--cz-color-bg-secondary);
	}

	/* single-date presets: a column beside the calendar, a row above it when narrow */
	.date-presets {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 0.5);
		min-width: calc(var(--cz-spacing) * 48);
		padding: calc(var(--cz-spacing) * 3);
		flex-shrink: 0;
		border-right: 1px solid var(--cz-color-border-secondary);
	}

	/* label on the left, its date muted on the right */
	.date-presets cosmoz-button {
		--cosmoz-button-justify-content: flex-start;
	}

	.date-presets cosmoz-button::part(button) {
		gap: calc(var(--cz-spacing) * 4);
		font-weight: var(--cz-font-weight-medium);
	}

	.date-presets cosmoz-button[active]::part(button) {
		background: var(--cz-color-bg-secondary);
	}

	.preset-date {
		margin-inline-start: auto;
		color: var(--cz-color-text-tertiary);
		font-weight: var(--cz-font-weight-regular);
		font-variant-numeric: tabular-nums;
	}

	@media (max-width: 734px) {
		.content:has(.date-presets) {
			flex-direction: column;
		}

		.date-presets {
			flex-direction: row;
			flex-wrap: wrap;
			width: auto;
			border-right: 0;
			border-bottom: 1px solid var(--cz-color-border-secondary);
		}

		.date-presets cosmoz-button {
			flex: 1 1 auto;
		}

		.date-presets cosmoz-button::part(button) {
			gap: calc(var(--cz-spacing) * 1.5);
		}

		.preset-date {
			margin-inline-start: 0;
		}
	}

	footer {
		display: flex;
		justify-content: space-between;
		gap: calc(var(--cz-spacing) * 3);
		padding: calc(var(--cz-spacing) * 4);
		border-top: 1px solid var(--cz-color-border-secondary);
	}

	.footer-left {
		display: flex;
		gap: calc(var(--cz-spacing) * 2);
		align-items: center;
		justify-content: space-evenly;
	}

	:host([mode='single']),
	:host([single-calendar]) {
		.range-presets {
			display: none;
		}

		cosmoz-calendar {
			display: flex;
			justify-content: center;
			padding: calc(var(--cz-spacing) * 4) calc(var(--cz-spacing) * 3);
		}
	}

	:host([single-calendar]):not([mode='single']) {
		cosmoz-calendar {
			padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 8);
		}

		footer {
			flex-direction: column;
		}
	}

	@media (max-width: 734px) {
		:host(:not([mode='single'])) {
			cosmoz-calendar {
				display: flex;
				justify-content: center;
				padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 8);
			}

			footer {
				flex-direction: column;
			}
		}
	}

	/* field: the trigger reads as a form input, like a select */
	:host([field]) {
		display: block;
	}

	:host([field]) cosmoz-dropdown-next,
	:host([field]) cosmoz-button[slot='button'] {
		display: flex;
		width: 100%;
	}

	:host([field]) cosmoz-button[slot='button'] {
		--cosmoz-button-justify-content: flex-start;
	}

	/* the popover keeps its own width instead of stretching to the field */
	:host([field]) .content {
		width: max-content;
	}

	:host([field]) cosmoz-button[slot='button']::part(button) {
		background: var(--cz-color-bg-primary);
		border-color: transparent;
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-xs);
		backdrop-filter: none;
		color: var(--cz-color-text-primary);
		font-size: var(--cz-text-sm);
	}

	:host([field]) cosmoz-button[slot='button']::part(button):hover {
		background: var(--cz-color-bg-primary_hover, var(--cz-color-bg-primary));
	}

	:host([field]) cosmoz-button[slot='button'] svg {
		color: var(--cz-color-text-quaternary);
	}
`;

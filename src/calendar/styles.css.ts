import { css } from '@pionjs/pion';

export const styles = css`
	:host {
		--cell-size: calc(var(--cz-spacing) * 10);
		color: var(--cz-color-text-primary);
	}

	.calendar {
		display: flex;
	}

	.separator {
		width: 1px;
		align-self: stretch;
		background: var(--cz-color-border-secondary);
		flex-shrink: 0;
	}

	.month-wrapper {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 3);
	}

	.month-wrapper.padded {
		padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 6);
	}

	header {
		display: grid;
		align-items: center;
		grid-template-columns: 36px 1fr 36px;
		grid-template-areas: 'a b c';
	}

	.month-label {
		grid-area: b;
		text-align: center;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.prev-button {
		grid-area: a;
	}

	.next-button {
		grid-area: c;
	}

	cosmoz-button::part(button) {
		padding: calc(var(--cz-spacing) * 2);
	}

	table {
		border-collapse: collapse;
	}

	tr {
		border-bottom: var(--cz-spacing) solid transparent;
	}

	.weekday {
		width: var(--cell-size);
		height: var(--cell-size);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.date-cell-wrapper {
		position: relative;
	}

	td:not([data-hidden]) .date-cell-wrapper.in-range {
		background: var(--cz-color-bg-secondary);
		border-radius: 0;
	}

	.date-cell-wrapper.in-range:has(.date-cell[data-start]),
	td:first-child .date-cell-wrapper.in-range {
		border-top-left-radius: var(--cz-radius-full);
		border-bottom-left-radius: var(--cz-radius-full);
	}

	.date-cell-wrapper.in-range:has(.date-cell[data-end]),
	td:last-child .date-cell-wrapper.in-range {
		border-top-right-radius: var(--cz-radius-full);
		border-bottom-right-radius: var(--cz-radius-full);
	}

	td:not([data-hidden]) + td[data-hidden] .date-cell-wrapper.in-range::after {
		content: '';
		position: absolute;
		inset: 0;

		background: linear-gradient(
			to left,
			transparent,
			var(--cz-color-bg-secondary)
		);
	}

	td[data-hidden]:has(+ td:not([data-hidden]))
		.date-cell-wrapper.in-range::after {
		content: '';
		position: absolute;
		inset: 0;

		background: linear-gradient(
			to right,
			transparent,
			var(--cz-color-bg-secondary)
		);
	}

	.date-cell {
		position: relative;
		width: var(--cell-size);
		height: var(--cell-size);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-full);
		user-select: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}

	.date-cell:not([data-disabled='true'], .other-month-cell):hover {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-medium);
	}

	.date-cell[data-disabled='true'] {
		cursor: not-allowed;
		color: var(--cz-color-text-placeholder-subtle);
	}

	.date-cell:focus-within {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}

	.date-cell.today-cell {
		background: var(--cz-color-bg-secondary);
	}

	.date-cell.today-cell::after {
		content: '';
		width: 4px;
		height: 4px;
		border-radius: var(--cz-radius-full);
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell.today-cell::after,
	.date-cell.focused-highlighted-cell.today-cell::after {
		background: var(--cz-color-text-on-brand);
	}

	.date-cell.today-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.in-range .date-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.date-cell.selected-cell,
	.date-cell.focused-highlighted-cell {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell:hover,
	.date-cell.focused-highlighted-cell:hover {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid-hover);
	}

	.date-cell.other-month-cell {
		cursor: default;
		color: var(--cz-color-text-placeholder-subtle);
	}

	td[data-hidden] .date-cell {
		visibility: hidden;
	}
`;

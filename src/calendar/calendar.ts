import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import { renderDateGrid } from './render-date-grid';
import { renderHeader } from './render-header';
import { styles } from './styles.css';
import { CalendarProps, useCalendar } from './use-calendar';

const CosmozCalendar = (host: CalendarProps) => {
	const {
		endDate,
		focusedDate,
		locale,
		maxDate,
		minDate,
		monthMatrices,
		numberOfMonths,
		onClick,
		onFocus,
		onKeyDown,
		selectedMonth,
		setIsFocused,
		setSelectedMonth,
		startDate,
		weekdayNames,
		onPointerEnter,
	} = useCalendar(host);

	return html`<div
		class="calendar"
		@focus=${() => setIsFocused(true)}
		@blur=${() => setIsFocused(false)}
	>
		${repeat(
			monthMatrices,
			(_, i) => `cal-${i}`,
			(month, i) => [
				html`
					<div class="month-wrapper ${numberOfMonths > 1 ? 'padded' : ''}">
						${[
							renderHeader({
								index: i,
								locale,
								numberOfMonths,
								selectedMonth,
								setSelectedMonth,
							}),
							renderDateGrid({
								endDate,
								focusedDate,
								locale,
								maxDate,
								minDate,
								month,
								numberOfMonths,
								onClick,
								onFocus,
								onKeyDown,
								startDate,
								weekdayNames,
								onPointerEnter,
							}),
						]}
					</div>
				`,
				when(i < numberOfMonths - 1, () => html`<div class="separator"></div>`),
			],
		)}
	</div> `;
};

customElements.define(
	'cosmoz-calendar',
	component(CosmozCalendar, {
		observedAttributes: ['locale', 'number-of-months'],
		styleSheets: [normalize, styles],
	}),
);

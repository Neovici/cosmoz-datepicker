import '@neovici/cosmoz-button';
import {
	chevronLeftIcon,
	chevronRightIcon,
} from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { addMonths, format, isSameDay, subMonths } from 'date-fns';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import { styles } from './styles.css';
import { CalendarProps, useCalendar } from './use-calendar';
import {
	getMonthName,
	ifDisabled,
	ifEnd,
	ifStart,
	isDisabled,
	isInRange,
	isSelected,
} from './utils';

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
		onKeyDown,
		selectedMonth,
		setFocusedDate,
		setIsFocused,
		setSelectedMonth,
		startDate,
		weekdayNames,
	} = useCalendar(host);

	return html`<div
		class="wrapper"
		@focus=${() => setIsFocused(true)}
		@blur=${() => setIsFocused(false)}
	>
		${repeat(
			monthMatrices,
			(_, i) => `cal-${i}`,
			(month, i) => [
				html`
					<div class="month-wrapper ${numberOfMonths > 1 ? 'padded' : ''}">
						<header>
							${when(
								i === 0,
								() => html`
									<cosmoz-button
										size="sm"
										variant="tertiary"
										class="prev-button"
										@click=${() =>
											setSelectedMonth(
												subMonths(selectedMonth, numberOfMonths),
											)}
										>${chevronLeftIcon()}</cosmoz-button
									>
								`,
							)}
							<h2 class="month-label">
								${getMonthName(addMonths(selectedMonth, i), locale)}
								${selectedMonth.getFullYear()}
							</h2>
							${when(
								i === monthMatrices.length - 1,
								() => html`
									<cosmoz-button
										size="sm"
										variant="tertiary"
										class="next-button"
										@click=${() =>
											setSelectedMonth(
												addMonths(selectedMonth, numberOfMonths),
											)}
										>${chevronRightIcon()}</cosmoz-button
									>
								`,
							)}
						</header>
						<table @keydown=${onKeyDown}>
							<thead>
								<tr>
									${repeat(
										weekdayNames,
										(i) => i,
										(weekday) => html`
											<th><div class="weekday">${weekday}</div></th>
										`,
									)}
								</tr>
							</thead>
							<tbody>
								${repeat(
									month,
									(_, i) => `month-${i}`,
									(week) => html`
										<tr>
											${repeat(
												week,
												(day) => day.iso,
												(day) => {
													const date = new Date(day.iso);

													return html`
														<td
															class="${isInRange(
																date,
																startDate,
																endDate,
																focusedDate,
															)
																? 'in-range'
																: ''}"
														>
															<div
																class=${classMap({
																	'date-cell': true,
																	'selected-cell': isSelected(
																		date,
																		startDate,
																		endDate,
																	),
																	'focused-highlighed-cell':
																		!endDate && isSameDay(date, focusedDate),
																	'today-cell':
																		day.isToday && day.isCurrentMonth,
																	'other-month-cell': !day.isCurrentMonth,
																	'hidden-cell':
																		!day.isCurrentMonth && numberOfMonths > 1,
																})}
																role="button"
																tabindex=${isSameDay(date, focusedDate)
																	? '0'
																	: '-1'}
																aria-label=${date.toLocaleString(locale, {
																	weekday: 'long',
																	year: 'numeric',
																	month: 'long',
																	day: 'numeric',
																})}
																aria-disabled=${ifDefined(
																	ifDisabled(day, minDate, maxDate),
																)}
																data-date=${ifDefined(
																	day.isCurrentMonth
																		? format(date, 'yyyy-MM-dd')
																		: undefined,
																)}
																data-disabled=${ifDefined(
																	ifDisabled(day, minDate, maxDate),
																)}
																data-start=${ifDefined(ifStart(day, startDate))}
																data-end=${ifDefined(ifEnd(day, endDate))}
																@click=${() =>
																	!isDisabled(day, minDate, maxDate) &&
																	onClick(date)}
																@focus=${() => {
																	setFocusedDate(date);
																	setIsFocused(true);
																}}
															>
																${day.day}
															</div>
														</td>
													`;
												},
											)}
										</tr>
									`,
								)}
							</tbody>
						</table>
					</div>
				`,
				when(
					i < monthMatrices.length - 1,
					() => html`<div class="separator"></div>`,
				),
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

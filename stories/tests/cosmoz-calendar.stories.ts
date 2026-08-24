import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import {
	getAllByShadowRole,
	getByShadowLabelText,
	getByShadowTestId,
	getByShadowText,
} from 'shadow-dom-testing-library';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/calendar';
import type { CalendarProps } from '../../src/calendar/use-calendar';
import { CalendarArgs } from '../helper';

const dates = {
	start: '2026-08-14',
	end: '2026-08-18',
	inRange: '2026-08-16',
	beforeStart: '2026-08-10',
	nextDayAfterStart: '2026-08-15',
	oneWeekAfterStart: '2026-08-21',
	min: '2026-08-10',
	max: '2026-08-20',
	beforeMin: '2026-08-09',
	afterMax: '2026-08-21',
	lastOfMonth: '2026-08-31',
	firstOfNextMonth: '2026-09-01',
};

const meta: Meta<CalendarArgs> = {
	title: 'Tests/CosmozCalendar',
	component: 'cosmoz-calendar',
	tags: ['!autodocs'],
	args: {
		mode: 'range',
		value: {
			start: dates.start,
			end: dates.end,
		},
		min: '',
		max: '',
		numberOfMonths: 2,
	},
};

export default meta;

type Story = StoryObj<CalendarArgs>;

const renderWithLocale = (locale: string) => (args: CalendarArgs) => html`
	<cosmoz-calendar
		mode=${args.mode}
		locale=${locale}
		number-of-months=${args.numberOfMonths}
		.value=${args.value}
		.min=${args.min || undefined}
		.max=${args.max || undefined}
	></cosmoz-calendar>
`;

const getCalendar = (canvasElement: HTMLElement) => {
	const calendar =
		canvasElement.querySelector<CalendarProps>('cosmoz-calendar');
	expect(calendar).toBeTruthy();
	return calendar!;
};

const getDateButton = (canvasElement: HTMLElement, date: string) =>
	getByShadowTestId<HTMLElement>(canvasElement, `date-${date}`);

export const MinMaxRange: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: {
			start: dates.start,
			end: undefined,
		},
		min: dates.min,
		max: dates.max,
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);

		await step('marks dates outside min and max as disabled', async () => {
			const beforeMin = getDateButton(canvasElement, dates.beforeMin);
			const afterMax = getDateButton(canvasElement, dates.afterMax);
			const min = getDateButton(canvasElement, dates.min);
			const max = getDateButton(canvasElement, dates.max);

			expect(beforeMin.ariaDisabled).toBe('true');
			expect(
				beforeMin.closest<HTMLElement>('[role="gridcell"]')?.ariaDisabled,
			).toBe('true');
			expect(afterMax.ariaDisabled).toBe('true');
			expect(
				afterMax.closest<HTMLElement>('[role="gridcell"]')?.ariaDisabled,
			).toBe('true');
			expect(min.ariaDisabled).toBeNull();
			expect(max.ariaDisabled).toBeNull();
		});

		await step(
			'ignores disabled dates when selecting a range end',
			async () => {
				await userEvent.click(getDateButton(canvasElement, dates.afterMax));
				await waitFor(() =>
					expect(calendar.value).toEqual({
						start: dates.start,
						end: undefined,
					}),
				);

				await userEvent.click(getDateButton(canvasElement, dates.max));
				await waitFor(() =>
					expect(calendar.value).toEqual({
						start: dates.start,
						end: dates.max,
					}),
				);
			},
		);
	},
};

export const NumberOfCalendars: Story = {
	render: renderWithLocale('en-US'),
	play: async ({ canvasElement, step }) => {
		await step('renders the configured number of calendar grids', async () => {
			const grids = getAllByShadowRole(canvasElement, 'grid');
			expect(grids).toHaveLength(2);
			expect(getDateButton(canvasElement, dates.start)).toBeTruthy();
			expect(getDateButton(canvasElement, dates.firstOfNextMonth)).toBeTruthy();
		});
	},
};

export const SelectionMode: Story = {
	render: renderWithLocale('en-US'),
	args: {
		mode: 'single',
		value: dates.start,
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);

		await step('stores a string value in single date mode', async () => {
			await userEvent.click(getDateButton(canvasElement, dates.end));
			await waitFor(() => expect(calendar.value).toBe(dates.end));
		});

		await step('selects only the chosen date in single date mode', async () => {
			expect(
				getDateButton(canvasElement, dates.start).closest<HTMLElement>(
					'[role="gridcell"]',
				)?.ariaSelected,
			).toBeNull();
			expect(
				getDateButton(canvasElement, dates.end).closest<HTMLElement>(
					'[role="gridcell"]',
				)?.ariaSelected,
			).toBe('true');
		});
	},
};

export const LocaleSwedenFirstDayOfWeek: Story = {
	render: renderWithLocale('sv-SE'),
	args: {
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		await step('starts the week on the locale first day', async () => {
			expect(getByShadowText(canvasElement, 'mån')).toBeTruthy();
		});
	},
};

export const LocaleUsFirstDayOfWeek: Story = {
	render: renderWithLocale('en-US'),
	args: {
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		await step('starts the week on the locale first day', async () => {
			expect(getByShadowText(canvasElement, 'Sun')).toBeTruthy();
		});
	},
};

export const SwapsEndBeforeStart: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: {
			start: dates.start,
			end: undefined,
		},
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);

		await step(
			'swaps range endpoints when the end is before the start',
			async () => {
				await userEvent.click(getDateButton(canvasElement, dates.beforeStart));
				await waitFor(() =>
					expect(calendar.value).toEqual({
						start: dates.beforeStart,
						end: dates.start,
					}),
				);
			},
		);
	},
};

export const RangeSelection: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: {
			start: dates.start,
			end: dates.end,
		},
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		await step('marks dates inside the selected range', async () => {
			expect(
				getDateButton(canvasElement, dates.inRange).closest<HTMLElement>(
					'[role="gridcell"]',
				)?.ariaSelected,
			).toBe('true');
		});
	},
};

export const KeyboardNavigation: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: {
			start: dates.start,
			end: undefined,
		},
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);
		const start = getDateButton(canvasElement, dates.start);

		await step('moves focus by day and week with arrow keys', async () => {
			start.focus();
			await waitFor(() =>
				expect(calendar.shadowRoot?.activeElement).toBe(start),
			);

			await userEvent.keyboard('{ArrowRight}');
			await waitFor(() =>
				expect(calendar.shadowRoot?.activeElement).toBe(
					getDateButton(canvasElement, dates.nextDayAfterStart),
				),
			);

			await userEvent.keyboard('{ArrowLeft}');
			await userEvent.keyboard('{ArrowDown}');
			await waitFor(() =>
				expect(calendar.shadowRoot?.activeElement).toBe(
					getDateButton(canvasElement, dates.oneWeekAfterStart),
				),
			);

			await userEvent.keyboard('{ArrowUp}');
			await waitFor(() =>
				expect(calendar.shadowRoot?.activeElement).toBe(
					getDateButton(canvasElement, dates.start),
				),
			);
		});

		await step('selects the focused date with the keyboard', async () => {
			await userEvent.keyboard('{ArrowRight}{Enter}');
			await waitFor(() =>
				expect(calendar.value).toEqual({
					start: dates.start,
					end: dates.nextDayAfterStart,
				}),
			);
		});
	},
};

export const HeaderMonthNavigation: Story = {
	render: renderWithLocale('en-US'),
	args: {
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		await step('moves to the next visible month from the header', async () => {
			await userEvent.click(getByShadowLabelText(canvasElement, 'Next month'));
			await waitFor(() =>
				expect(getByShadowText(canvasElement, 'September 2026')).toBeTruthy(),
			);
		});

		await step(
			'moves to the previous visible month from the header',
			async () => {
				await userEvent.click(
					getByShadowLabelText(canvasElement, 'Previous month'),
				);
				await waitFor(() =>
					expect(getByShadowText(canvasElement, 'August 2026')).toBeTruthy(),
				);
				expect(getDateButton(canvasElement, dates.start)).toBeTruthy();
			},
		);
	},
};

export const KeyboardMonthNavigation: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: {
			start: dates.start,
			end: undefined,
		},
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);

		await step(
			'moves to the next month when focus passes the visible month',
			async () => {
				getDateButton(canvasElement, dates.lastOfMonth).focus();
				await waitFor(() =>
					expect(calendar.shadowRoot?.activeElement).toBe(
						getDateButton(canvasElement, dates.lastOfMonth),
					),
				);

				await userEvent.keyboard('{ArrowRight}');
				await waitFor(() =>
					expect(calendar.shadowRoot?.activeElement).toBe(
						getDateButton(canvasElement, dates.firstOfNextMonth),
					),
				);
				expect(getByShadowText(canvasElement, 'September 2026')).toBeTruthy();
			},
		);

		await step(
			'moves to the previous month when focus leaves the visible month',
			async () => {
				await userEvent.keyboard('{ArrowLeft}');
				await waitFor(() =>
					expect(calendar.shadowRoot?.activeElement).toBe(
						getDateButton(canvasElement, dates.lastOfMonth),
					),
				);
				expect(getByShadowText(canvasElement, 'August 2026')).toBeTruthy();
			},
		);
	},
};

export const TodaySemantics: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: {},
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const today = new Date().toISOString().slice(0, 10);

		await step('marks today', async () => {
			expect(getDateButton(canvasElement, today).ariaLabel).toContain('Today');
		});
	},
};

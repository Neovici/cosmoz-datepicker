import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import '../../src/calendar';
import type { CalendarProps } from '../../src/calendar/use-calendar';
import type { DateRange } from '../../src/use-datepicker';
import {
	CalendarArgs,
	dateArgType,
	dateRangeArgType,
	modeArgType,
} from '../helper';

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
	argTypes: {
		mode: modeArgType,
		value: dateRangeArgType,
		min: dateArgType,
		max: dateArgType,
	},
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

const getCell = (calendar: CalendarProps, date: string) => {
	const cell = calendar.shadowRoot?.querySelector<HTMLElement>(
		`[data-date="${date}"]`,
	);
	expect(cell).toBeTruthy();
	return cell!;
};

const getGridCell = (cell: HTMLElement) => {
	const gridCell = cell.closest<HTMLElement>('[role="gridCell"]');
	expect(gridCell).toBeTruthy();
	return gridCell!;
};

const getFirstWeekday = (calendar: CalendarProps) =>
	calendar.shadowRoot?.querySelector('thead th')?.textContent?.trim();

const expectRangeValue = async (
	calendar: CalendarProps,
	expected: DateRange,
) => {
	await waitFor(() => expect(calendar.value).toEqual(expected));
};

const expectSingleValue = async (calendar: CalendarProps, expected: string) => {
	await waitFor(() => expect(calendar.value).toBe(expected));
};

const expectActiveDate = async (calendar: CalendarProps, date: string) => {
	await waitFor(() =>
		expect(calendar.shadowRoot?.activeElement).toBe(getCell(calendar, date)),
	);
};

const getMonthLabels = (calendar: CalendarProps) =>
	[...(calendar.shadowRoot?.querySelectorAll('header h2') ?? [])]
		.map((label) => label.textContent?.trim())
		.filter(Boolean);

const getHeaderButton = (calendar: CalendarProps, label: string) => {
	const button = calendar.shadowRoot?.querySelector<HTMLElement>(
		`cosmoz-button[aria-label="${label}"]`,
	);
	expect(button).toBeTruthy();
	return button!;
};

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
			expect(getCell(calendar, dates.beforeMin).dataset.disabled).toBe('true');
			expect(getGridCell(getCell(calendar, dates.beforeMin)).ariaDisabled).toBe(
				'true',
			);
			expect(getCell(calendar, dates.afterMax).dataset.disabled).toBe('true');
			expect(getGridCell(getCell(calendar, dates.afterMax)).ariaDisabled).toBe(
				'true',
			);
			expect(getCell(calendar, dates.min).dataset.disabled).toBeUndefined();
			expect(getCell(calendar, dates.max).dataset.disabled).toBeUndefined();
		});

		await step(
			'ignores disabled dates when selecting a range end',
			async () => {
				await userEvent.click(getCell(calendar, dates.afterMax));
				await expectRangeValue(calendar, {
					start: dates.start,
					end: undefined,
				});

				await userEvent.click(getCell(calendar, dates.max));
				await expectRangeValue(calendar, {
					start: dates.start,
					end: dates.max,
				});
			},
		);
	},
};

export const NumberOfCalendars: Story = {
	render: renderWithLocale('en-US'),
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);

		await step('renders the configured number of calendar grids', async () => {
			const grids = within(
				calendar.shadowRoot as unknown as HTMLElement,
			).getAllByRole('grid');
			expect(grids).toHaveLength(2);
			expect(getCell(calendar, dates.start)).toBeTruthy();
			expect(getCell(calendar, dates.firstOfNextMonth)).toBeTruthy();
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
			await userEvent.click(getCell(calendar, dates.end));
			await expectSingleValue(calendar, dates.end);
		});

		await step('selects only the chosen date in single date mode', async () => {
			expect(
				getGridCell(getCell(calendar, dates.start)).ariaSelected,
			).toBeNull();
			expect(getGridCell(getCell(calendar, dates.end)).ariaSelected).toBe(
				'true',
			);
		});
	},
};

export const LocaleSwedenFirstDayOfWeek: Story = {
	render: renderWithLocale('sv-SE'),
	args: {
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);

		await step('starts the week on the locale first day', async () => {
			expect(getFirstWeekday(calendar)).toBe('mån');
		});
	},
};

export const LocaleUsFirstDayOfWeek: Story = {
	render: renderWithLocale('en-US'),
	args: {
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);

		await step('starts the week on the locale first day', async () => {
			expect(getFirstWeekday(calendar)).toBe('Sun');
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
				await userEvent.click(getCell(calendar, dates.beforeStart));
				await expectRangeValue(calendar, {
					start: dates.beforeStart,
					end: dates.start,
				});
			},
		);

		await step('marks the swapped range start and end', async () => {
			expect(getCell(calendar, dates.beforeStart).dataset.start).toBe('true');
			expect(getCell(calendar, dates.start).dataset.end).toBe('true');
		});
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
		const calendar = getCalendar(canvasElement);

		await step('marks dates inside the selected range', async () => {
			expect(getGridCell(getCell(calendar, dates.inRange)).ariaSelected).toBe(
				'true',
			);
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
		const start = getCell(calendar, dates.start);

		await step('moves focus by day and week with arrow keys', async () => {
			start.focus();
			await expectActiveDate(calendar, dates.start);

			await userEvent.keyboard('{ArrowRight}');
			await expectActiveDate(calendar, dates.nextDayAfterStart);

			await userEvent.keyboard('{ArrowLeft}');
			await userEvent.keyboard('{ArrowDown}');
			await expectActiveDate(calendar, dates.oneWeekAfterStart);

			await userEvent.keyboard('{ArrowUp}');
			await expectActiveDate(calendar, dates.start);
		});

		await step('selects the focused date with the keyboard', async () => {
			await userEvent.keyboard('{ArrowRight}{Enter}');
			await expectRangeValue(calendar, {
				start: dates.start,
				end: dates.nextDayAfterStart,
			});
		});
	},
};

export const HeaderMonthNavigation: Story = {
	render: renderWithLocale('en-US'),
	args: {
		numberOfMonths: 1,
	},
	play: async ({ canvasElement, step }) => {
		const calendar = getCalendar(canvasElement);

		await step('moves to the next visible month from the header', async () => {
			await userEvent.click(getHeaderButton(calendar, 'Next month'));
			await waitFor(() =>
				expect(getMonthLabels(calendar)).toEqual(['September 2026']),
			);
		});

		await step(
			'moves to the previous visible month from the header',
			async () => {
				await userEvent.click(getHeaderButton(calendar, 'Previous month'));
				await waitFor(() =>
					expect(getMonthLabels(calendar)).toEqual(['August 2026']),
				);
				expect(getCell(calendar, dates.start)).toBeTruthy();
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
				getCell(calendar, dates.lastOfMonth).focus();
				await expectActiveDate(calendar, dates.lastOfMonth);

				await userEvent.keyboard('{ArrowRight}');
				await expectActiveDate(calendar, dates.firstOfNextMonth);
				expect(getMonthLabels(calendar)).toEqual(['September 2026']);
			},
		);

		await step(
			'moves to the previous month when focus leaves the visible month',
			async () => {
				await userEvent.keyboard('{ArrowLeft}');
				await expectActiveDate(calendar, dates.lastOfMonth);
				expect(getMonthLabels(calendar)).toEqual(['August 2026']);
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
		const calendar = getCalendar(canvasElement);
		const today = new Date().toISOString().slice(0, 10);

		await step('marks today', async () => {
			expect(getCell(calendar, today).ariaLabel).toContain('Today');
		});
	},
};

import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import {
	getByShadowLabelText,
	getByShadowRole,
	getByShadowTestId,
	getByShadowText,
} from 'shadow-dom-testing-library';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/cosmoz-datepicker';
import type { Props } from '../../src/use-datepicker';
import {
	DatepickerArgs,
	dateArgType,
	dateRangeArgType,
	modeArgType,
} from '../helper';

const dates = {
	start: '2026-08-14',
	end: '2026-08-18',
	afterStart: '2026-08-16',
	afterEnd: '2026-08-20',
	presetStart: '2026-08-03',
	presetEnd: '2026-08-07',
};

const meta: Meta<DatepickerArgs> = {
	title: 'Tests/CosmozDatepicker',
	component: 'cosmoz-datepicker',
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
		disabled: false,
		noPresets: true,
		singleCalendar: true,
		presets: undefined,
		triggerSize: '',
		triggerVariant: 'secondary',
	},
};

export default meta;

type Story = StoryObj<DatepickerArgs>;
type DatepickerElement = HTMLElement & Props;

const renderDatepicker = (args: DatepickerArgs) => html`
	<cosmoz-datepicker
		mode=${args.mode}
		locale="en-US"
		trigger-variant=${args.triggerVariant}
		.value=${args.value}
		.min=${args.min || undefined}
		.max=${args.max || undefined}
		.presets=${args.presets}
		?disabled=${args.disabled}
		?no-presets=${args.noPresets}
		?single-calendar=${args.singleCalendar}
	></cosmoz-datepicker>
`;

const getDatepicker = (canvasElement: HTMLElement) => {
	const datepicker =
		canvasElement.querySelector<DatepickerElement>('cosmoz-datepicker');
	expect(datepicker).toBeTruthy();
	return datepicker!;
};

const getDateButton = (canvasElement: HTMLElement, date: string) =>
	getByShadowTestId<HTMLElement>(canvasElement, `date-${date}`);

export const CalendarSelectionSyncsRange: Story = {
	render: renderDatepicker,
	play: async ({ canvasElement, step }) => {
		const datepicker = getDatepicker(canvasElement);
		const trigger = getByShadowLabelText<HTMLElement>(
			canvasElement,
			'Date picker',
		);

		await step(
			'syncs calendar range selection to inputs and trigger',
			async () => {
				await userEvent.click(trigger);
				await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));

				await userEvent.click(getDateButton(canvasElement, dates.afterStart));
				await waitFor(() =>
					expect(datepicker.value).toEqual({
						start: dates.afterStart,
						end: undefined,
					}),
				);
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^month, start date$/iu,
					}).value,
				).toBe('8');
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^day, start date$/iu,
					}).value,
				).toBe('16');
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^year, start date$/iu,
					}).value,
				).toBe('2026');

				await userEvent.click(getDateButton(canvasElement, dates.afterEnd));
				await waitFor(() =>
					expect(datepicker.value).toEqual({
						start: dates.afterStart,
						end: dates.afterEnd,
					}),
				);
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^month, end date$/iu,
					}).value,
				).toBe('8');
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^day, end date$/iu,
					}).value,
				).toBe('20');
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^year, end date$/iu,
					}).value,
				).toBe('2026');
				expect(trigger.textContent).toContain('Aug 16, 2026');
				expect(trigger.textContent).toContain('Aug 20, 2026');
			},
		);
	},
};

export const SingleDateSync: Story = {
	render: renderDatepicker,
	args: {
		mode: 'single',
		value: dates.start,
	},
	play: async ({ canvasElement, step }) => {
		const datepicker = getDatepicker(canvasElement);
		const trigger = getByShadowLabelText<HTMLElement>(
			canvasElement,
			'Date picker',
		);

		await step('syncs single date calendar selection', async () => {
			await userEvent.click(trigger);
			await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));

			await userEvent.click(getDateButton(canvasElement, dates.afterStart));
			await waitFor(() => expect(datepicker.value).toBe(dates.afterStart));

			await waitFor(() => {
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^month$/iu,
					}).value,
				).toBe('8');
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^day$/iu,
					}).value,
				).toBe('16');
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^year$/iu,
					}).value,
				).toBe('2026');
			});
			expect(trigger.textContent).toContain('Aug 16, 2026');
		});
	},
};

export const DropdownOpenClose: Story = {
	render: renderDatepicker,
	play: async ({ canvasElement, step }) => {
		const trigger = getByShadowLabelText<HTMLElement>(
			canvasElement,
			'Date picker',
		);

		await step('opens from the trigger', async () => {
			await userEvent.click(trigger);
			await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));
			expect(getByShadowRole(canvasElement, 'dialog')).toBeTruthy();
		});

		await step('closes from the OK button', async () => {
			await userEvent.click(
				getByShadowRole(canvasElement, 'button', { name: /^ok$/iu }),
			);
			await waitFor(() => expect(trigger.ariaExpanded).toBe('false'));
		});
	},
};

export const DisabledState: Story = {
	render: renderDatepicker,
	args: {
		disabled: true,
	},
	play: async ({ canvasElement, step }) => {
		const trigger = getByShadowLabelText<HTMLElement>(
			canvasElement,
			'Date picker',
		);

		await step('does not open while disabled', async () => {
			await userEvent.click(trigger);
			expect(trigger.ariaDisabled).toBe('true');
			expect(trigger.ariaExpanded).toBe('false');
		});
	},
};

export const PresetSyncsRange: Story = {
	render: renderDatepicker,
	args: {
		noPresets: false,
		singleCalendar: false,
		presets: [
			{
				label: 'Work week',
				start: dates.presetStart,
				end: dates.presetEnd,
			},
		],
	},
	// Presets are intentionally hidden on narrow viewports
	globals: {
		viewport: { value: 'desktop', isRotated: false },
	},
	play: async ({ canvasElement, step }) => {
		const datepicker = getDatepicker(canvasElement);
		const trigger = getByShadowLabelText<HTMLElement>(
			canvasElement,
			'Date picker',
		);

		await step(
			'syncs preset selection to calendar, inputs, and trigger',
			async () => {
				await userEvent.click(trigger);
				await waitFor(() => expect(trigger.ariaExpanded).toBe('true'));

				await userEvent.click(
					getByShadowRole(canvasElement, 'button', {
						name: 'Work week',
					}),
				);
				const preset = getByShadowText<HTMLElement>(
					canvasElement,
					'Work week',
					{
						selector: 'cosmoz-button',
					},
				);
				await waitFor(() =>
					expect(datepicker.value).toEqual({
						start: dates.presetStart,
						end: dates.presetEnd,
					}),
				);
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^day, start date$/iu,
					}).value,
				).toBe('3');
				expect(
					getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
						name: /^day, end date$/iu,
					}).value,
				).toBe('7');
				expect(preset.ariaPressed).toBe('true');
				expect(trigger.textContent).toContain('Aug 3, 2026');
				expect(trigger.textContent).toContain('Aug 7, 2026');
			},
		);
	},
};

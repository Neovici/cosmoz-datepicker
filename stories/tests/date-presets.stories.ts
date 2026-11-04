import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import {
	getByShadowLabelText,
	getByShadowRole,
} from 'shadow-dom-testing-library';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/cosmoz-datepicker';
import type { Props } from '../../src/use-datepicker';
import { DatepickerArgs } from '../helper';

const dates = { start: '2026-08-14' };

const meta: Meta<DatepickerArgs> = {
	title: 'Tests/CosmozDatepicker/DatePresets',
	component: 'cosmoz-datepicker',
	tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<DatepickerArgs>;
type DatepickerElement = HTMLElement & Props;

const renderDatepicker = (args: DatepickerArgs) => html`
	<cosmoz-datepicker
		mode="single"
		locale="en-US"
		.value=${args.value}
		.min=${args.min || undefined}
		.presets=${args.presets}
	></cosmoz-datepicker>
`;

const getDatepicker = (canvasElement: HTMLElement) =>
	canvasElement.querySelector<DatepickerElement>('cosmoz-datepicker')!;

const datePresets = [
	{ label: 'Earliest', value: dates.start },
	{ label: 'In 2 weeks', value: '2026-08-24', title: 'Usual lead time' },
];

const presetButton = (canvasElement: HTMLElement, name: RegExp) =>
	getByShadowRole<HTMLElement>(canvasElement, 'button', { name });

const openPopover = async (canvasElement: HTMLElement) => {
	const trigger = getByShadowLabelText<HTMLElement>(
		canvasElement,
		'Date picker',
		{ depth: 1 },
	);
	await userEvent.click(trigger);
	return trigger;
};

const confirm = (canvasElement: HTMLElement) =>
	userEvent.click(presetButton(canvasElement, /^OK$/u));

export const SingleDatePresetsSelect: Story = {
	render: renderDatepicker,
	args: {
		value: '2026-08-24',
		presets: datePresets,
	},
	play: async ({ canvasElement, step }) => {
		const datepicker = getDatepicker(canvasElement);

		await step('presets live in the popover', async () => {
			const host = presetButton(canvasElement, /^Earliest/u).getRootNode();
			expect(
				((host as ShadowRoot).host as HTMLElement).closest('[role="dialog"]'),
			).not.toBeNull();
			await openPopover(canvasElement);
		});

		await step('marks the preset matching the value', async () => {
			const later = presetButton(canvasElement, /^In 2 weeks\s*Mon, Aug 24$/u);
			await waitFor(() => expect(later.ariaPressed).toBe('true'));
			expect(
				presetButton(canvasElement, /^Earliest\s*Fri, Aug 14$/u).ariaPressed,
			).toBe('false');
		});

		await step(
			'a picked preset is committed like a calendar date',
			async () => {
				await userEvent.click(presetButton(canvasElement, /^Earliest/u));
				await waitFor(() =>
					expect(presetButton(canvasElement, /^Earliest/u).ariaPressed).toBe(
						'true',
					),
				);
				expect(datepicker.value).toBe('2026-08-24');
				await confirm(canvasElement);
				await waitFor(() => expect(datepicker.value).toBe(dates.start));
			},
		);
	},
};

export const SingleDatePresetsCustomDate: Story = {
	render: renderDatepicker,
	args: {
		value: '2026-09-01',
		presets: datePresets,
	},
	play: async ({ canvasElement }) => {
		const trigger = await openPopover(canvasElement);
		await waitFor(() => expect(trigger.textContent).toContain('Sep 1, 2026'));
		expect(presetButton(canvasElement, /^Earliest/u).ariaPressed).toBe('false');
	},
};

export const SingleDatePresetsRespectMin: Story = {
	render: renderDatepicker,
	args: {
		value: undefined,
		min: '2026-08-20',
		presets: datePresets,
	},
	play: async ({ canvasElement }) => {
		const datepicker = getDatepicker(canvasElement);
		await openPopover(canvasElement);
		await userEvent.click(presetButton(canvasElement, /^Earliest/u));
		await confirm(canvasElement);
		await waitFor(() => expect(datepicker.value).toBe('2026-08-20'));
	},
};

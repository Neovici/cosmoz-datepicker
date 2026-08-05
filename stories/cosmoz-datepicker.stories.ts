import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-datepicker';

const meta: Meta = {
	title: 'CosmozDatepicker',
	component: 'cosmoz-datepicker',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Swedish: Story = {
	name: 'sv-SE',
	render: () =>
		html`<cosmoz-datepicker
			.start=${'2026-08-01'}
			.end=${'2026-08-04'}
			locale="sv-SE"
		></cosmoz-datepicker>`,
};

export const EnglishEmpty: Story = {
	name: 'en-US no value',
	render: () => html`<cosmoz-datepicker locale="en-US"></cosmoz-datepicker>`,
};

export const EnglishUs: Story = {
	name: 'en-US',
	render: () =>
		html`<cosmoz-datepicker
			.start=${'2026-08-01'}
			.end=${'2026-08-04'}
			locale="en-US"
		></cosmoz-datepicker>`,
};

export const EnglishUsMinMax: Story = {
	name: 'en-US Min Max',
	render: () =>
		html`<cosmoz-datepicker
			.start=${'2026-08-11'}
			.end=${'2026-08-14'}
			min="2026-08-04"
			max="2026-08-24"
			locale="en-US"
		></cosmoz-datepicker>`,
};

export const EnglishUsSingleCalendar: Story = {
	name: 'en-US Single Calendar',
	render: () =>
		html`<cosmoz-datepicker
			.start=${'2026-08-11'}
			.end=${'2026-08-14'}
			locale="en-US"
			single-calendar
		></cosmoz-datepicker>`,
};

export const EnglishUsPresets: Story = {
	name: 'en-US Custom Presets',
	render: () =>
		html`<cosmoz-datepicker
			.start=${'2026-08-01'}
			.end=${'2026-08-04'}
			locale="en-US"
			.presets=${[
				{
					label: 'Today tomorrow',
					start: new Date(),
					end: new Date().setDate(new Date().getDate() + 1),
				},
				{
					label: 'In one month',
					start: new Date().setMonth(new Date().getMonth() + 1),
					end: new Date().setMonth(new Date().getMonth() + 1),
				},
			]}
		></cosmoz-datepicker>`,
};

export const EnglishUsNoPresets: Story = {
	name: 'en-US No Presets',
	render: () =>
		html`<cosmoz-datepicker
			.start=${'2026-08-01'}
			.end=${'2026-08-04'}
			locale="en-US"
			no-presets
		></cosmoz-datepicker>`,
};

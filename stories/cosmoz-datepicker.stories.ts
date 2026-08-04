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

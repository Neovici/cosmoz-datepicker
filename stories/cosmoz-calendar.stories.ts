import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/calendar';

const meta: Meta = {
	title: 'CosmozCalendar',
	component: 'cosmoz-calendar',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Swedish: Story = {
	name: 'sv-SE Two Calendars',
	render: () =>
		html`<cosmoz-calendar
			.start=${'2026-07-12'}
			.end=${'2026-07-17'}
			.min=${'2026-07-09'}
			locale="sv-SE"
		></cosmoz-calendar>`,
};

export const SwedishSingle: Story = {
	name: 'sv-SE One Calendar',
	render: () =>
		html`<cosmoz-calendar
			locale="sv-SE"
			number-of-months="1"
		></cosmoz-calendar>`,
};

export const EnglishUs: Story = {
	name: 'en-US Two Calendars',
	render: () => html`<cosmoz-calendar locale="en-US"></cosmoz-calendar>`,
};

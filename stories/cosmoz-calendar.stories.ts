import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/calendar';

const currentMonthDate = (day: number) => {
	const date = new Date();
	date.setDate(day);

	return date.toISOString().slice(0, 10);
};

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
			.start=${currentMonthDate(12)}
			.end=${currentMonthDate(17)}
			locale="sv-SE"
			number-of-months="2"
		></cosmoz-calendar>`,
};

export const SwedishMinMax: Story = {
	name: 'sv-SE Min Max Set',
	render: () =>
		html`<cosmoz-calendar
			.start=${currentMonthDate(12)}
			.end=${currentMonthDate(17)}
			.min=${currentMonthDate(9)}
			.max=${currentMonthDate(22)}
			locale="sv-SE"
			number-of-months="2"
		></cosmoz-calendar>`,
};

export const SwedishSingle: Story = {
	name: 'sv-SE One Calendar',
	render: () =>
		html`<cosmoz-calendar
			locale="sv-SE"
			.start=${currentMonthDate(12)}
			.end=${currentMonthDate(17)}
		></cosmoz-calendar>`,
};

export const EnglishUs: Story = {
	name: 'en-US Two Calendars',
	render: () =>
		html`<cosmoz-calendar
			locale="en-US"
			number-of-months="2"
			.start=${currentMonthDate(12)}
			.end=${currentMonthDate(17)}
		></cosmoz-calendar>`,
};

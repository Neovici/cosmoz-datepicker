import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/date-input';

const meta: Meta = {
	title: 'CosmozDateInput',
	component: 'cosmoz-date-input',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Swedish: Story = {
	name: 'sv-SE',
	render: () => html`<cosmoz-date-input locale="sv-SE"></cosmoz-date-input>`,
};

export const EnglishUs: Story = {
	name: 'en-US',
	render: () => html`<cosmoz-date-input locale="en-US"></cosmoz-date-input>`,
};

export const German: Story = {
	name: 'de-DE',
	render: () => html`<cosmoz-date-input locale="de-DE"></cosmoz-date-input>`,
};

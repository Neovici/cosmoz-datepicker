import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-date-input';

const meta: Meta = {
	title: 'CosmozDateInput',
	component: 'cosmoz-date-input',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => html`<cosmoz-date-input></cosmoz-date-input>`,
};

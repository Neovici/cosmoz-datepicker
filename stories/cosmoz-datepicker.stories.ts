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

export const Default: Story = {
	render: () => html`<cosmoz-datepicker></cosmoz-datepicker>`,
};

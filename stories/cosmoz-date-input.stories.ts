import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/date-input';
import {
	dateArgType,
	DateInputArgs,
	localeArgType,
	renderDateInput,
} from './helper';

const meta: Meta<DateInputArgs> = {
	title: 'CosmozDateInput',
	component: 'cosmoz-date-input',
	tags: ['autodocs'],
	argTypes: {
		locale: localeArgType,
		value: dateArgType,
	},
	args: {
		locale: 'US',
		value: '2026-08-01',
	},
};

export default meta;

type Story = StoryObj<DateInputArgs>;

export const DateInput: Story = {
	render: renderDateInput,
};

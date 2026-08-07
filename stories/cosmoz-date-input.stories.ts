import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/date-input';
import {
	currentMonthDate,
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
		value: currentMonthDate(1),
	},
};

export default meta;

type Story = StoryObj<DateInputArgs>;

export const DateInput: Story = {
	render: renderDateInput,
};

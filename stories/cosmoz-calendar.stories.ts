import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/calendar';
import {
	CalendarArgs,
	currentMonthDate,
	dateArgType,
	dateRangeArgType,
	localeArgType,
	renderCalendar,
} from './helper';

const meta: Meta<CalendarArgs> = {
	title: 'CosmozCalendar',
	component: 'cosmoz-calendar',
	tags: ['autodocs'],
	render: renderCalendar,
	argTypes: {
		locale: localeArgType,
		value: dateRangeArgType,
		min: dateArgType,
		max: dateArgType,
		numberOfMonths: {
			control: 'number',
			description: 'Number of visible calendar months.',
		},
	},
	args: {
		value: {
			start: currentMonthDate(12),
			end: currentMonthDate(17),
		},
		min: '',
		max: '',
		numberOfMonths: 2,
	},
};

export default meta;

type Story = StoryObj<CalendarArgs>;

export const Calendar: Story = {};

export const MinMax: Story = {
	args: {
		min: currentMonthDate(9),
		max: currentMonthDate(22),
	},
};

export const SingleMonth: Story = {
	args: {
		numberOfMonths: 1,
	},
};

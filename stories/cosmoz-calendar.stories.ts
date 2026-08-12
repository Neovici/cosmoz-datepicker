import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/calendar';
import {
	CalendarArgs,
	currentMonthDate,
	dateArgType,
	dateRangeArgType,
	localeArgType,
	modeArgType,
	renderCalendar,
} from './helper';

const meta: Meta<CalendarArgs> = {
	title: 'CosmozCalendar',
	component: 'cosmoz-calendar',
	tags: ['autodocs'],
	render: renderCalendar,
	argTypes: {
		locale: localeArgType,
		mode: modeArgType,
		value: dateRangeArgType,
		min: dateArgType,
		max: dateArgType,
		numberOfMonths: {
			control: 'number',
			description: 'Number of visible calendar months.',
		},
	},
	args: {
		mode: 'range',
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

export const Basic: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Basic date range calendar.',
			},
		},
	},
};

export const MinMax: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Minimum and maximum allowed date boundaries set.',
			},
		},
	},
	args: {
		min: currentMonthDate(9),
		max: currentMonthDate(22),
	},
};

export const SingleCalendar: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Single visible calendar month.',
			},
		},
	},
	args: {
		numberOfMonths: 1,
	},
};

export const SingleDate: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Single date selection mode.',
			},
		},
	},
	args: {
		mode: 'single',
		value: currentMonthDate(12),
	},
};

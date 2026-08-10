import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-datepicker';
import {
	currentMonthDate,
	dateArgType,
	DatepickerArgs,
	dateRangeArgType,
	localeArgType,
	renderDatepicker,
} from './helper';

const meta: Meta<DatepickerArgs> = {
	title: 'CosmozDatepicker',
	component: 'cosmoz-datepicker',
	tags: ['autodocs'],
	render: renderDatepicker,
	argTypes: {
		locale: localeArgType,
		value: dateRangeArgType,
		min: dateArgType,
		max: dateArgType,
		disabled: {
			control: 'boolean',
			description: 'Disables opening the datepicker dropdown.',
		},
		noPresets: {
			control: 'boolean',
			description: 'Hides the built-in range preset buttons.',
		},
		singleCalendar: {
			control: 'boolean',
			description: 'Forces a single calendar month layout.',
		},
		customPresets: {
			control: 'boolean',
			description: 'Uses a small custom presets array.',
		},
		triggerSize: {
			control: 'select',
			options: ['sm', 'md', 'lg', 'xl'],
			description: 'Optional cosmoz-button trigger size.',
		},
		triggerVariant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary'],
			description: 'cosmoz-button trigger variant.',
		},
	},
	args: {
		value: {
			start: currentMonthDate(1),
			end: currentMonthDate(4),
		},
		min: '',
		max: '',
		disabled: false,
		noPresets: false,
		singleCalendar: false,
		customPresets: false,
		triggerSize: '',
		triggerVariant: 'secondary',
	},
};

export default meta;

type Story = StoryObj<DatepickerArgs>;

export const Datepicker: Story = {};

export const Empty: Story = {
	args: {
		value: {},
	},
};

export const MinMax: Story = {
	args: {
		value: {
			start: currentMonthDate(11),
			end: currentMonthDate(14),
		},
		min: currentMonthDate(4),
		max: currentMonthDate(24),
	},
};

export const SingleCalendar: Story = {
	args: {
		value: {
			start: currentMonthDate(11),
			end: currentMonthDate(14),
		},
		singleCalendar: true,
	},
};

export const CustomPresets: Story = {
	args: {
		customPresets: true,
	},
};

export const NoPresets: Story = {
	args: {
		noPresets: true,
	},
};

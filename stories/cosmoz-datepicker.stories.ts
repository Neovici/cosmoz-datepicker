import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-datepicker';
import {
	dateArgType,
	DatepickerArgs,
	localeArgType,
	renderDatepicker,
} from './helper';

const meta: Meta<DatepickerArgs> = {
	title: 'CosmozDatepicker',
	component: 'cosmoz-datepicker',
	tags: ['autodocs'],
	argTypes: {
		locale: localeArgType,
		start: dateArgType,
		end: dateArgType,
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
			options: ['', 'sm', 'md', 'lg', 'xl'],
			description: 'Optional cosmoz-button trigger size.',
		},
		triggerVariant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary'],
			description: 'cosmoz-button trigger variant.',
		},
	},
	args: {
		start: '2026-08-01',
		end: '2026-08-04',
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

export const Datepicker: Story = {
	render: renderDatepicker,
};

export const Empty: Story = {
	args: {
		start: '',
		end: '',
	},
};

export const MinMax: Story = {
	args: {
		start: '2026-08-11',
		end: '2026-08-14',
		min: '2026-08-04',
		max: '2026-08-24',
	},
};

export const SingleCalendar: Story = {
	args: {
		start: '2026-08-11',
		end: '2026-08-14',
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

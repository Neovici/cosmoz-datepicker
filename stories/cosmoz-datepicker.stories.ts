import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-datepicker';
import {
	currentMonthDate,
	customPresets,
	dateArgType,
	DatepickerArgs,
	dateRangeArgType,
	localeArgType,
	modeArgType,
	renderDatepicker,
} from './helper';

const meta: Meta<DatepickerArgs> = {
	title: 'CosmozDatepicker',
	component: 'cosmoz-datepicker',
	tags: ['autodocs'],
	render: renderDatepicker,
	argTypes: {
		locale: localeArgType,
		mode: modeArgType,
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
		presets: {
			control: 'object',
			description: 'Consumer-provided range presets replacing the defaults.',
			table: {
				type: {
					summary: 'RangePreset[]',
				},
			},
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
		mode: 'range',
		value: {
			start: currentMonthDate(1),
			end: currentMonthDate(4),
		},
		min: '',
		max: '',
		disabled: false,
		noPresets: false,
		singleCalendar: false,
		presets: undefined,
		triggerSize: '',
		triggerVariant: 'secondary',
	},
};

export default meta;

type Story = StoryObj<DatepickerArgs>;

export const Basic: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Basic date range picker.',
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
		value: {
			start: currentMonthDate(11),
			end: currentMonthDate(14),
		},
		min: currentMonthDate(4),
		max: currentMonthDate(24),
	},
};

export const SingleCalendar: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Single calendar layout for ranges.',
			},
		},
	},
	args: {
		value: {
			start: currentMonthDate(11),
			end: currentMonthDate(14),
		},
		singleCalendar: true,
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

export const EmptyState: Story = {
	parameters: {
		docs: {
			description: {
				story: 'No selected dates set.',
			},
		},
	},
	args: {
		value: {},
	},
};

export const CustomPresets: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Custom range presets configured.',
			},
		},
	},
	args: {
		presets: customPresets,
	},
};

export const NoPresets: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Range preset buttons hidden.',
			},
		},
	},
	args: {
		noPresets: true,
	},
};

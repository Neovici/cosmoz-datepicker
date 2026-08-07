import { html } from '@pionjs/pion';
import { addDays, addMonths, format } from 'date-fns';
import { ifDefined } from 'lit-html/directives/if-defined.js';

export const localeOptions = ['US', 'Sweden', 'Germany'] as const;

export type LocaleOption = (typeof localeOptions)[number];

export const localeCodes: Record<LocaleOption, string> = {
	US: 'en-US',
	Sweden: 'sv-SE',
	Germany: 'de-DE',
};

export interface DateRangeArgs {
	locale: LocaleOption;
	start?: string;
	end?: string;
	min?: string;
	max?: string;
}

export interface DateInputArgs {
	locale: LocaleOption;
	value?: string;
}

export interface CalendarArgs extends DateRangeArgs {
	numberOfMonths: number;
}

export interface DatepickerArgs extends DateRangeArgs {
	disabled: boolean;
	noPresets: boolean;
	singleCalendar: boolean;
	customPresets: boolean;
	triggerSize?: string;
	triggerVariant: string;
}

export const localeArgType = {
	control: 'select',
	options: localeOptions,
	description: 'Locale used for formatting dates.',
};

export const dateArgType = {
	control: 'text',
	description: 'Date string in yyyy-MM-dd format. Leave empty for no value.',
};

export const currentMonthDate = (day: number) => {
	const date = new Date();
	date.setDate(day);

	return date.toISOString().slice(0, 10);
};

const emptyToUndefined = (value?: string) => value || undefined;

const getLocale = (locale: LocaleOption) => localeCodes[locale];

const customPresets = [
	{
		label: 'Today tomorrow',
		start: format(new Date(), 'yyyy-MM-dd'),
		end: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
	},
	{
		label: 'In one month',
		start: format(addMonths(new Date(), 1), 'yyyy-MM-dd'),
		end: format(addMonths(new Date(), 1), 'yyyy-MM-dd'),
	},
];

export const renderDateInput = (args: DateInputArgs) => html`
	<cosmoz-date-input
		locale=${getLocale(args.locale)}
		.value=${emptyToUndefined(args.value)}
	></cosmoz-date-input>
`;

export const renderCalendar = (args: CalendarArgs) => html`
	<cosmoz-calendar
		locale=${getLocale(args.locale)}
		number-of-months=${args.numberOfMonths}
		.start=${emptyToUndefined(args.start)}
		.end=${emptyToUndefined(args.end)}
		.min=${emptyToUndefined(args.min)}
		.max=${emptyToUndefined(args.max)}
	></cosmoz-calendar>
`;

export const renderDatepicker = (args: DatepickerArgs) => html`
	<cosmoz-datepicker
		locale=${ifDefined(emptyToUndefined(getLocale(args.locale)))}
		trigger-size=${ifDefined(emptyToUndefined(args.triggerSize))}
		trigger-variant=${ifDefined(emptyToUndefined(args.triggerVariant))}
		.start=${emptyToUndefined(args.start)}
		.end=${emptyToUndefined(args.end)}
		.min=${emptyToUndefined(args.min)}
		.max=${emptyToUndefined(args.max)}
		.presets=${args.customPresets ? customPresets : undefined}
		?disabled=${args.disabled}
		?no-presets=${args.noPresets}
		?single-calendar=${args.singleCalendar}
	></cosmoz-datepicker>
`;

import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/date-input';
import type { DateInputProps } from '../../src/date-input/use-date-input';
import type { DateType } from '../../src/date-input/utils';
import { dateArgType, DateInputArgs } from '../helper';

const meta: Meta<DateInputArgs> = {
	title: 'Tests/CosmozDateInput',
	component: 'cosmoz-date-input',
	tags: ['!autodocs'],
	argTypes: {
		value: dateArgType,
	},
	args: {
		value: '2026-08-14',
	},
};

export default meta;

type Story = StoryObj<DateInputArgs>;

const localeSeparators = {
	'sv-SE': '-',
	'en-US': '/',
};

const renderWithLocale = (locale: string) => (args: DateInputArgs) => html`
	<cosmoz-date-input .value=${args.value || undefined} locale=${locale}>
	</cosmoz-date-input>
`;

const getDateInput = (canvasElement: HTMLElement) => {
	const dateInput =
		canvasElement.querySelector<DateInputProps>('cosmoz-date-input');
	expect(dateInput).toBeTruthy();
	return dateInput!;
};

const getPartInput = (dateInput: DateInputProps, type: DateType) => {
	const input = dateInput.shadowRoot?.querySelector<HTMLInputElement>(
		`input[data-type="${type}"]`,
	);
	expect(input).toBeTruthy();
	return input!;
};

const getParts = (dateInput: DateInputProps) => ({
	year: getPartInput(dateInput, 'year'),
	month: getPartInput(dateInput, 'month'),
	day: getPartInput(dateInput, 'day'),
});

const expectPartValues = async (
	dateInput: DateInputProps,
	expected: Partial<Record<DateType, string>>,
) => {
	await waitFor(() => {
		Object.entries(expected).forEach(([type, value]) => {
			expect(getPartInput(dateInput, type as DateType).value).toBe(value);
		});
	});
};

const expectValue = async (dateInput: DateInputProps, value: string) => {
	await waitFor(() => expect(dateInput.value).toBe(value));
};

const typeValue = async (input: HTMLInputElement, value: string) => {
	input.focus();
	input.select();
	await userEvent.type(input, value);
};

const getDatePartContainer = (dateInput: DateInputProps, type: DateType) => {
	const datePart = dateInput.shadowRoot?.querySelector(
		`span:has(input[data-type="${type}"])`,
	);
	expect(datePart).toBeTruthy();
	return datePart!;
};

export const ParsesValue: Story = {
	render: renderWithLocale('en-US'),
	play: async ({ canvasElement, step, args }) => {
		const dateInput = getDateInput(canvasElement);
		const { year, month, day } = getParts(dateInput);

		await step('parses the input date value into date parts', async () => {
			const parsedValue = `${year.value.padStart(4, '0')}-${month.value.padStart(2, '0')}-${day.value.padStart(2, '0')}`;
			expect(parsedValue).toEqual(args.value);
		});
	},
};

export const EmptyPlaceholders: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: '',
	},
	play: async ({ canvasElement, step }) => {
		const dateInput = getDateInput(canvasElement);
		const { year, month, day } = getParts(dateInput);

		await step('shows placeholders for empty date parts', async () => {
			expect(month.placeholder).toBe('MM');
			expect(day.placeholder).toBe('DD');
			expect(year.placeholder).toBe('YYYY');
			await expectPartValues(dateInput, { month: '', day: '', year: '' });
		});
	},
};

export const LocaleSweden: Story = {
	render: renderWithLocale('sv-SE'),
	play: async ({ canvasElement, step }) => {
		const dateInput = getDateInput(canvasElement);
		const dateParts = [...(dateInput.shadowRoot?.children ?? [])];

		await step('renders the locale correct date separator', async () => {
			const renderedSeparator = dateParts[1]?.textContent;
			expect(renderedSeparator).toEqual(localeSeparators['sv-SE']);
		});

		await step('renders date parts in the locale correct order', async () => {
			expect(dateParts.indexOf(getDatePartContainer(dateInput, 'year')!)).toBe(
				0,
			);
			expect(dateParts.indexOf(getDatePartContainer(dateInput, 'month')!)).toBe(
				2,
			);
			expect(dateParts.indexOf(getDatePartContainer(dateInput, 'day')!)).toBe(
				4,
			);
		});
	},
};

export const LocaleUs: Story = {
	render: renderWithLocale('en-US'),
	play: async ({ canvasElement, step }) => {
		const dateInput = getDateInput(canvasElement);
		const dateParts = [...(dateInput.shadowRoot?.children ?? [])];

		await step('renders the locale correct date separator', async () => {
			const renderedSeparator = dateParts[1]?.textContent;
			expect(renderedSeparator).toEqual(localeSeparators['en-US']);
		});

		await step('renders date parts in the locale correct order', async () => {
			expect(dateParts.indexOf(getDatePartContainer(dateInput, 'year')!)).toBe(
				4,
			);
			expect(dateParts.indexOf(getDatePartContainer(dateInput, 'month')!)).toBe(
				0,
			);
			expect(dateParts.indexOf(getDatePartContainer(dateInput, 'day')!)).toBe(
				2,
			);
		});
	},
};

export const ArrowKeyWrapping: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: '2024-12-31',
	},
	play: async ({ canvasElement, step }) => {
		const dateInput = getDateInput(canvasElement);
		const { month, day } = getParts(dateInput);

		await step('wraps the month when incrementing past December', async () => {
			month.focus();
			await userEvent.keyboard('{ArrowUp}');
			await expectPartValues(dateInput, { month: '1' });
			await expectValue(dateInput, '2024-01-31');
		});

		await step('wraps the month when decrementing before January', async () => {
			await userEvent.keyboard('{ArrowDown}');
			await expectPartValues(dateInput, { month: '12' });
			await expectValue(dateInput, '2024-12-31');
		});

		await step('wraps the day within the current month', async () => {
			day.focus();
			await userEvent.keyboard('{ArrowUp}');
			await expectPartValues(dateInput, { day: '1' });
			await expectValue(dateInput, '2024-12-01');
		});
	},
};

export const ArrowKeyNavigation: Story = {
	render: renderWithLocale('en-US'),
	play: async ({ canvasElement, step }) => {
		const dateInput = getDateInput(canvasElement);
		const { year, month, day } = getParts(dateInput);

		await step('moves focus between date parts with arrow keys', async () => {
			month.focus();
			expect(dateInput.shadowRoot?.activeElement).toBe(month);

			await userEvent.keyboard('{ArrowRight}');
			expect(dateInput.shadowRoot?.activeElement).toBe(day);

			await userEvent.keyboard('{ArrowRight}');
			expect(dateInput.shadowRoot?.activeElement).toBe(year);

			await userEvent.keyboard('{ArrowLeft}');
			expect(dateInput.shadowRoot?.activeElement).toBe(day);
		});
	},
};

export const OverflowTypingReset: Story = {
	render: renderWithLocale('en-US'),
	args: {
		value: '2024-09-15',
	},
	play: async ({ canvasElement, step }) => {
		const dateInput = getDateInput(canvasElement);
		const { month, day } = getParts(dateInput);

		await step(
			'resets overflowing month input to the last typed digit',
			async () => {
				await typeValue(month, '91');
				await expectPartValues(dateInput, { month: '1' });
				await expectValue(dateInput, '2024-01-15');
			},
		);

		await step(
			'resets overflowing day input to the last typed digit',
			async () => {
				await typeValue(day, '99');
				await expectPartValues(dateInput, { day: '9' });
				await expectValue(dateInput, '2024-01-09');
			},
		);
	},
};

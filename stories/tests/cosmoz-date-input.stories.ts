import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import {
	getAllByShadowRole,
	getAllByShadowText,
	getByShadowRole,
} from 'shadow-dom-testing-library';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/date-input';
import type { DateInputProps } from '../../src/date-input/use-date-input';
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

const typeValue = async (input: HTMLInputElement, value: string) => {
	input.focus();
	input.select();
	await userEvent.type(input, value);
};

export const ParsesValue: Story = {
	render: renderWithLocale('en-US'),
	play: async ({ canvasElement, step, args }) => {
		const year = getByShadowRole<HTMLInputElement>(
			canvasElement,
			'spinbutton',
			{
				name: /year/iu,
			},
		);
		const month = getByShadowRole<HTMLInputElement>(
			canvasElement,
			'spinbutton',
			{
				name: /month/iu,
			},
		);
		const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
			name: /day/iu,
		});

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
		const year = getByShadowRole<HTMLInputElement>(
			canvasElement,
			'spinbutton',
			{
				name: /year/iu,
			},
		);
		const month = getByShadowRole<HTMLInputElement>(
			canvasElement,
			'spinbutton',
			{
				name: /month/iu,
			},
		);
		const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
			name: /day/iu,
		});

		await step('shows placeholders for empty date parts', async () => {
			expect(month.placeholder).toBe('MM');
			expect(day.placeholder).toBe('DD');
			expect(year.placeholder).toBe('YYYY');
			expect(month.value).toBe('');
			expect(day.value).toBe('');
			expect(year.value).toBe('');
		});
	},
};

export const LocaleSweden: Story = {
	render: renderWithLocale('sv-SE'),
	play: async ({ canvasElement, step }) => {
		await step('renders the locale correct date separator', async () => {
			expect(
				getAllByShadowText(canvasElement, localeSeparators['sv-SE']),
			).toHaveLength(2);
		});

		await step('renders date parts in the locale correct order', async () => {
			const [firstInput, secondInput, thirdInput] =
				getAllByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton');

			expect(firstInput.ariaLabel).toBe('Year');
			expect(secondInput.ariaLabel).toBe('Month');
			expect(thirdInput.ariaLabel).toBe('Day');
		});
	},
};

export const LocaleUs: Story = {
	render: renderWithLocale('en-US'),
	play: async ({ canvasElement, step }) => {
		await step('renders the locale correct date separator', async () => {
			expect(
				getAllByShadowText(canvasElement, localeSeparators['en-US']),
			).toHaveLength(2);
		});

		await step('renders date parts in the locale correct order', async () => {
			const [firstInput, secondInput, thirdInput] =
				getAllByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton');

			expect(firstInput.ariaLabel).toBe('Month');
			expect(secondInput.ariaLabel).toBe('Day');
			expect(thirdInput.ariaLabel).toBe('Year');
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
		const month = getByShadowRole<HTMLInputElement>(
			canvasElement,
			'spinbutton',
			{
				name: /month/iu,
			},
		);
		const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
			name: /day/iu,
		});

		await step('wraps the month when incrementing past December', async () => {
			month.focus();
			await userEvent.keyboard('{ArrowUp}');
			await waitFor(() => expect(month.value).toBe('1'));
			await waitFor(() => expect(dateInput.value).toBe('2024-01-31'));
		});

		await step('wraps the month when decrementing before January', async () => {
			await userEvent.keyboard('{ArrowDown}');
			await waitFor(() => expect(month.value).toBe('12'));
			await waitFor(() => expect(dateInput.value).toBe('2024-12-31'));
		});

		await step('wraps the day within the current month', async () => {
			day.focus();
			await userEvent.keyboard('{ArrowUp}');
			await waitFor(() => expect(day.value).toBe('1'));
			await waitFor(() => expect(dateInput.value).toBe('2024-12-01'));
		});
	},
};

export const ArrowKeyNavigation: Story = {
	render: renderWithLocale('en-US'),
	play: async ({ canvasElement, step }) => {
		const dateInput = getDateInput(canvasElement);
		const year = getByShadowRole<HTMLInputElement>(
			canvasElement,
			'spinbutton',
			{
				name: /year/iu,
			},
		);
		const month = getByShadowRole<HTMLInputElement>(
			canvasElement,
			'spinbutton',
			{
				name: /month/iu,
			},
		);
		const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
			name: /day/iu,
		});

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
		const month = getByShadowRole<HTMLInputElement>(
			canvasElement,
			'spinbutton',
			{
				name: /month/iu,
			},
		);
		const day = getByShadowRole<HTMLInputElement>(canvasElement, 'spinbutton', {
			name: /day/iu,
		});

		await step(
			'resets overflowing month input to the last typed digit',
			async () => {
				await typeValue(month, '91');
				await waitFor(() => expect(month.value).toBe('1'));
				await waitFor(() => expect(dateInput.value).toBe('2024-01-15'));
			},
		);

		await step(
			'resets overflowing day input to the last typed digit',
			async () => {
				await typeValue(day, '99');
				await waitFor(() => expect(day.value).toBe('9'));
				await waitFor(() => expect(dateInput.value).toBe('2024-01-09'));
			},
		);
	},
};

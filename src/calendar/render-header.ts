import {
	chevronLeftIcon,
	chevronRightIcon,
} from '@neovici/cosmoz-icons/untitled';
import { html } from '@pionjs/pion';
import { addMonths, subMonths } from 'date-fns';
import { when } from 'lit-html/directives/when.js';
import { getMonthName } from './utils';

type RenderHeaderOptions = {
	index: number;
	locale: string;
	monthCount: number;
	numberOfMonths: number;
	selectedMonth: Date;
	setSelectedMonth: (value: Date | ((prev: Date) => Date)) => void;
};

export const renderHeader = ({
	index,
	locale,
	monthCount,
	numberOfMonths,
	selectedMonth,
	setSelectedMonth,
}: RenderHeaderOptions) => html`
	<header>
		${when(
			index === 0,
			() => html`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					@click=${() =>
						setSelectedMonth(subMonths(selectedMonth, numberOfMonths))}
					>${chevronLeftIcon()}</cosmoz-button
				>
			`,
		)}
		<h2 class="month-label">
			${getMonthName(addMonths(selectedMonth, index), locale)}
			${selectedMonth.getFullYear()}
		</h2>
		${when(
			index === monthCount - 1,
			() => html`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					@click=${() =>
						setSelectedMonth(addMonths(selectedMonth, numberOfMonths))}
					>${chevronRightIcon()}</cosmoz-button
				>
			`,
		)}
	</header>
`;

import '@neovici/cosmoz-button';
import {
	chevronLeftIcon,
	chevronRightIcon,
} from '@neovici/cosmoz-icons/untitled';
import { html } from '@pionjs/pion';
import { addMonths, subMonths } from 'date-fns';
import { t } from 'i18next';
import { when } from 'lit-html/directives/when.js';

type RenderHeaderOptions = {
	index: number;
	locale: string;
	numberOfMonths: number;
	selectedMonth: Date;
	setSelectedMonth: (value: Date | ((prev: Date) => Date)) => void;
};

export const renderHeader = ({
	index,
	locale,
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
					aria-label=${t('Previous month')}
					@click=${() =>
						setSelectedMonth(subMonths(selectedMonth, numberOfMonths))}
					><span aria-hidden="true">${chevronLeftIcon()}</span></cosmoz-button
				>
			`,
		)}
		<h2 class="month-label" aria-live="polite" aria-atomic="true">
			${addMonths(selectedMonth, index).toLocaleString(locale, {
				month: 'long',
				year: 'numeric',
			})}
		</h2>
		${when(
			index === numberOfMonths - 1,
			() => html`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					aria-label=${t('Next month')}
					@click=${() =>
						setSelectedMonth(addMonths(selectedMonth, numberOfMonths))}
					><span aria-hidden="true">${chevronRightIcon()}</span></cosmoz-button
				>
			`,
		)}
	</header>
`;

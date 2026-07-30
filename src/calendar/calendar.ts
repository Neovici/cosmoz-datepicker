import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { ensureDate } from '@neovici/cosmoz-utils/date';
import { component, html, useMemo, useProperty } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import { getMonthsDateCellMatrix } from './utils';

type CalendarProps = HTMLElement & {
	value?: string;
	locale?: string;
};

const CosmozCalendar = (host: CalendarProps) => {
	const { locale: _locale } = host;
	const locale = useMemo(() => _locale ?? navigator.language, [_locale]);
	const [value] = useProperty<string>('value');
	const date = useMemo(() => ensureDate(value) ?? new Date(), [value]);

	const dateCells = useMemo(
		() => getMonthsDateCellMatrix(date, locale),
		[date, locale],
	);

	return html`<table>
		${repeat(
			dateCells,
			(_, i) => i,
			(week) => html`
				<tr>
					${repeat(
						week,
						(day) => day.date,
						(day) => html` <td>${day.day}</td> `,
					)}
				</tr>
			`,
		)}
	</table>`;
};

customElements.define(
	'cosmoz-calendar',
	component(CosmozCalendar, {
		observedAttributes: ['locale'],
		styleSheets: [normalize],
	}),
);

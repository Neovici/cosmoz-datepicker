import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';

const CosmozCalendar = () => {
	return html`<div>Cosmoz Calendar</div>`;
};

customElements.define(
	'cosmoz-calendar',
	component(CosmozCalendar, {
		observedAttributes: ['locale'],
		styleSheets: [normalize],
	}),
);

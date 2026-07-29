import { component, css, html } from '@pionjs/pion';
import './date-input';

interface Props {
	value?: string;
	min?: string;
	max?: string;
}

const CosmozDatepicker = (props: Props) => {
	return html`
		<cosmoz-date-input .value=${props.value} locale="sv-SE"></cosmoz-date-input>
	`;
};

const styles = css``;

customElements.define(
	'cosmoz-datepicker',
	component(CosmozDatepicker, {
		observedAttributes: ['min', 'max'],
		styleSheets: [styles],
		shadowRootInit: { delegatesFocus: true, mode: 'open' },
	}),
);

export { CosmozDatepicker };

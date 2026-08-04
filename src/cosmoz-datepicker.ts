import '@neovici/cosmoz-button';
import { useProperty } from '@neovici/cosmoz-utils/hooks/use-property';
import { component, css, html, lift } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import './calendar';
import './date-input';

interface Props {
	value?: string;
	min?: string;
	max?: string;
}

const CosmozDatepicker = (host: Props) => {
	const { min, max } = host;
	const [start, setStart] = useProperty('start');
	const [end, setEnd] = useProperty('end');

	return html`
		<cosmoz-calendar
			locale="sv-SE"
			number-of-months="2"
			.min=${ifDefined(min)}
			.max=${ifDefined(max)}
			.start=${start}
			.end=${end}
			@start-changed=${lift(setStart)}
			@end-changed=${lift(setEnd)}
		></cosmoz-calendar>

		<footer>
			<div class="footer-left">
				<cosmoz-date-input
					locale="sv-SE"
					.value=${start}
					@value-changed=${lift(setStart)}
				></cosmoz-date-input>
				<span>–</span>
				<cosmoz-date-input
					locale="sv-SE"
					.value=${end}
					@value-changed=${lift(setEnd)}
				></cosmoz-date-input>
			</div>
			<div>
				<cosmoz-button>OK</cosmoz-button>
			</div>
		</footer>
	`;
};

const styles = css`
	footer {
		display: flex;
		justify-content: space-between;
		padding: calc(var(--cz-spacing) * 4);
		border-top: 1px solid var(--cz-color-border-secondary);
	}

	.footer-left {
		display: flex;
		gap: calc(var(--cz-spacing) * 2);
		align-items: center;
	}
`;

customElements.define(
	'cosmoz-datepicker',
	component(CosmozDatepicker, {
		observedAttributes: ['min', 'max'],
		styleSheets: [styles],
		shadowRootInit: { delegatesFocus: true, mode: 'open' },
	}),
);

export { CosmozDatepicker };

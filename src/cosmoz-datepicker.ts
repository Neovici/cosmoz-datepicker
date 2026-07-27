import { component, html, useState } from '@pionjs/pion';

interface Props {
	greeting?: string;
}

const CosmozDatepicker = (props: Props) => {
	const [count, setCount] = useState(0);
	const { greeting = 'Hello' } = props;

	return html`
		<p>${greeting}, World! Count: ${count}</p>
		<button @click=${() => setCount(count + 1)}>Increment</button>
	`;
};

customElements.define(
	'cosmoz-datepicker',
	component(CosmozDatepicker, {
		observedAttributes: ['greeting'],
	}),
);

export { CosmozDatepicker };

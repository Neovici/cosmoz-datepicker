import '@neovici/cosmoz-tokens';
import { within as withinShadow } from 'shadow-dom-testing-library';
import { ensureStorybookI18nInitialized } from './i18n.js';

let i18nInitPromise;

const initializeStorybookI18n = () => {
	if (i18nInitPromise != null) {
		return i18nInitPromise;
	}

	i18nInitPromise = ensureStorybookI18nInitialized();
	return i18nInitPromise;
};

export default {
	loaders: [async () => initializeStorybookI18n()],
	parameters: {
		options: {
			storySort: {
				order: ['CosmozDatepicker', 'CosmozCalendar', 'CosmozDateInput'],
			},
		},
		docs: {
			source: {
				excludeDecorators: true,
				type: 'code',
				transform: (source) => {
					const match = source.match(/html`([\s\S]*?)`/u);
					return match?.[1]?.trim() ?? source;
				},
			},
		},
	},
	// Augment the canvas with shadow-dom-testing-library queries
	beforeEach({ canvasElement, canvas }) {
		Object.assign(canvas, { ...withinShadow(canvasElement) });
	},
};

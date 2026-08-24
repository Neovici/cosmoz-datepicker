import '@neovici/cosmoz-tokens';
import { html } from '@pionjs/pion';
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
	decorators: [
		(story, context) => {
			const isDark = context.globals?.theme === 'dark';

			if (isDark) {
				document.documentElement.classList.add('dark-mode');
			} else {
				document.documentElement.classList.remove('dark-mode');
			}

			return html`
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

					.story-root {
						font-family: var(--cz-font-body);
						color: var(--cz-color-text-primary);
						background: var(--cz-color-bg-primary);
						min-height: 100%;
					}
				</style>
				<div class="story-root">${story()}</div>
			`;
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'sun', title: 'Light' },
					{ value: 'dark', icon: 'moon', title: 'Dark' },
				],
				dynamicTitle: true,
			},
		},
	},
};

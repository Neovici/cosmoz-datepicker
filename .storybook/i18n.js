import i18next from 'i18next';

export const resources = {
	en: { translation: {} },
};

export const ensureStorybookI18nInitialized = async () => {
	if (i18next.isInitialized) {
		return;
	}

	await i18next.init({
		resources,
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			prefix: '{',
			suffix: '}',
		},
	});
};

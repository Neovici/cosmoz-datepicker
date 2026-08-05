import '@neovici/cosmoz-button';
import '@neovici/cosmoz-dropdown';
import { calendarIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { useProperty } from '@neovici/cosmoz-utils/hooks/use-property';
import { useStyleSheet } from '@neovici/cosmoz-utils/hooks/use-stylesheet';
import { component, html, lift, useCallback, useMemo } from '@pionjs/pion';
import { t } from 'i18next';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import './calendar';
import './date-input';
import { getRangePresets, RangePreset } from './presets';
import { styles } from './styles.css';
import { useMediaMatch } from './use-media-match';
import {
	closeDropdown,
	getTriggerText,
	getValidDateString,
	liftPreset,
} from './utils';

interface Props {
	locale?: string;
	min?: string;
	max?: string;
	presets?: RangePreset[];
	disabled?: boolean;
	noPresets?: boolean;
	singleCalendar?: boolean;
}

const CosmozDatepicker = (host: Props) => {
	const {
		locale: _locale,
		min,
		max,
		disabled,
		presets,
		noPresets,
		singleCalendar = false,
	} = host;
	const locale = _locale ?? navigator.language;
	const [start, setStart] = useProperty<string>('start');
	const [end, setEnd] = useProperty<string>('end');
	const isNarrow = useMediaMatch('(width < 735px)');
	const isSingleCalendar = singleCalendar || isNarrow;
	const numberOfMonths = isSingleCalendar ? 1 : 2;
	const rangePresets = useMemo(
		() => presets ?? getRangePresets(locale),
		[locale, presets],
	);

	const onStartInput = useCallback(
		(e: CustomEvent<{ value: string }>) =>
			setStart(getValidDateString(e.detail.value, min, max)),
		[min, max],
	);

	const onEndInput = useCallback(
		(e: CustomEvent<{ value: string }>) =>
			setEnd(getValidDateString(e.detail.value, min, max)),
		[min, max],
	);

	useStyleSheet(
		when(
			isSingleCalendar,
			() =>
				`
		cosmoz-calendar {
			display: flex;
			justify-content: center;
			padding: calc(var(--cz-spacing) * 4) calc(var(--cz-spacing) * 8);
		}

		footer {
			flex-direction: column;
		}
`,
		),
	);

	return html`
		<cosmoz-dropdown-next ?disabled=${ifDefined(disabled)}>
			<cosmoz-button slot="button" variant="secondary"
				>${calendarIcon()} ${getTriggerText(start, end, locale)}</cosmoz-button
			>

			<div class="content">
				${when(
					!noPresets,
					() => html`
						<div class="range-presets">
							${repeat(
								rangePresets,
								(i) => i.label,
								(preset) => html`
									<cosmoz-button
										variant="tertiary"
										full-width
										@click=${() =>
											liftPreset(preset, setStart, setEnd, min, max)}
										>${preset.label}</cosmoz-button
									>
								`,
							)}
						</div>
					`,
				)}

				<div class="main">
					<cosmoz-calendar
						locale=${locale}
						number-of-months=${numberOfMonths}
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
								locale=${locale}
								.value=${start}
								@value-changed=${onStartInput}
							></cosmoz-date-input>
							<span>–</span>
							<cosmoz-date-input
								locale=${locale}
								.value=${end}
								@value-changed=${onEndInput}
							></cosmoz-date-input>
						</div>
						<div>
							<cosmoz-button
								?full-width=${isSingleCalendar}
								@click=${closeDropdown}
								>${t('Apply')}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`;
};

customElements.define(
	'cosmoz-datepicker',
	component(CosmozDatepicker, {
		observedAttributes: [
			'locale',
			'min',
			'max',
			'disabled',
			'no-presets',
			'single-calendar',
		],
		styleSheets: [normalize, styles],
		shadowRootInit: { delegatesFocus: true, mode: 'open' },
	}),
);

export { CosmozDatepicker };

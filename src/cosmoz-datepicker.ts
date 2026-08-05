import '@neovici/cosmoz-button';
import '@neovici/cosmoz-dropdown';
import { calendarIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, lift } from '@pionjs/pion';
import { t } from 'i18next';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import './calendar';
import './date-input';
import { styles } from './styles.css';
import { Props, useDatepicker } from './use-datepicker';
import { closeDropdown, getTriggerText, liftPreset } from './utils';

const CosmozDatepicker = (host: Props) => {
	const {
		end,
		isSingleCalendar,
		locale,
		numberOfMonths,
		onEndInput,
		onStartInput,
		rangePresets,
		setEnd,
		setStart,
		start,
		min,
		max,
		disabled,
		noPresets,
	} = useDatepicker(host);

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

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
import {
	closeDropdown,
	getTriggerText,
	isPresetActive,
	liftPreset,
} from './utils';

const CosmozDatepicker = (host: Props) => {
	const {
		end,
		isSingleCalendar,
		locale,
		mode,
		isSingleDateMode,
		numberOfMonths,
		onEndInput,
		onStartInput,
		rangePresets,
		setValue,
		start,
		value,
		min,
		max,
		disabled,
		noPresets,
		triggerSize,
		triggerVariant = 'secondary',
		onStartInputBlur,
		onEndInputBlur,
		isOpen,
		setIsOpen,
	} = useDatepicker(host);

	return html`
		<cosmoz-dropdown-next
			?disabled=${disabled}
			@dropdown-toggle=${() => setIsOpen((prev) => !prev)}
			aria-disabled=${ifDefined(disabled ? 'true' : undefined)}
		>
			<cosmoz-button
				slot="button"
				type="button"
				exposedparts="button: trigger"
				variant=${triggerVariant}
				size=${ifDefined(triggerSize)}
				aria-label=${t('Date picker')}
				aria-disabled=${ifDefined(disabled ? 'true' : undefined)}
				aria-haspopup="dialog"
				aria-expanded=${isOpen ? 'true' : 'false'}
				?disabled=${disabled}
			>
				${calendarIcon()}
				${getTriggerText(start, end, locale, isSingleDateMode)}
			</cosmoz-button>

			<div class="content">
				${when(
					!(noPresets || isSingleCalendar || isSingleDateMode),
					() => html`
						<div class="range-presets">
							${repeat(
								rangePresets,
								(i) => i.label,
								(preset) => html`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${isPresetActive(preset, start, end)}
										aria-pressed=${isPresetActive(preset, start, end)
											? 'true'
											: 'false'}
										@click=${() => liftPreset(preset, setValue, min, max)}
										>${preset.label}</cosmoz-button
									>
								`,
							)}
						</div>
					`,
				)}

				<div class="main">
					<cosmoz-calendar
						autofocus
						mode=${mode}
						locale=${locale}
						number-of-months=${numberOfMonths}
						.min=${ifDefined(min)}
						.max=${ifDefined(max)}
						.value=${value}
						@value-changed=${lift(setValue)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								aria-label=${ifDefined(
									!isSingleDateMode ? t('Start date') : undefined,
								)}
								locale=${locale}
								.value=${start}
								@value-changed=${onStartInput}
								@blur=${onStartInputBlur}
							></cosmoz-date-input>
							${when(
								!isSingleDateMode,
								() => html`
									<span>–</span>
									<cosmoz-date-input
										aria-label=${t('End date')}
										locale=${locale}
										.value=${end}
										@value-changed=${onEndInput}
										@blur=${onEndInputBlur}
									></cosmoz-date-input>
								`,
							)}
						</div>
						<div>
							<cosmoz-button
								?full-width=${isSingleCalendar}
								@click=${closeDropdown}
								>${t('OK')}</cosmoz-button
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
			'mode',
			'no-presets',
			'single-calendar',
			'trigger-size',
			'trigger-variant',
		],
		styleSheets: [normalize, styles],
		shadowRootInit: { delegatesFocus: true, mode: 'open' },
	}),
);

export { CosmozDatepicker };

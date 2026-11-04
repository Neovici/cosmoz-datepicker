import '@neovici/cosmoz-button';
import '@neovici/cosmoz-dropdown';
import { calendarIcon, checkIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { invoke } from '@neovici/cosmoz-utils/function';
import { component, html, lift } from '@pionjs/pion';
import { t } from 'i18next';
import { nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import './calendar';
import './date-input';
import { styles } from './styles.css';
import { Props, useDatepicker } from './use-datepicker';
import {
	closeDropdown,
	getPresetDateText,
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
		onDropdownToggle,
		datePresets,
		activePreset,
		pickPreset,
	} = useDatepicker(host);

	const dropdown = html`
		<cosmoz-dropdown-next
			?disabled=${disabled}
			@dropdown-toggle=${onDropdownToggle}
			aria-disabled=${ifDefined(disabled ? 'true' : undefined)}
		>
			<cosmoz-button
				slot="button"
				type="button"
				exportparts="button:trigger"
				variant=${triggerVariant}
				size=${ifDefined(triggerSize)}
				aria-label=${t('Date picker')}
				aria-disabled=${ifDefined(disabled ? 'true' : undefined)}
				aria-haspopup="dialog"
				aria-expanded=${isOpen ? 'true' : 'false'}
				?disabled=${disabled}
			>
				${calendarIcon()}
				${activePreset
					? t('Select date')
					: getTriggerText(start, end, locale, isSingleDateMode)}
			</cosmoz-button>

			<div class="content" role="dialog">
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

	if (!datePresets.length) return dropdown;

	return html`<div class="date-presets" role="group">
		${repeat(
			datePresets,
			(preset) => preset.label,
			(preset) => {
				const active = preset === activePreset;
				return html`<cosmoz-button
					type="button"
					variant="secondary"
					size=${ifDefined(triggerSize)}
					title=${ifDefined(preset.title)}
					aria-pressed=${active ? 'true' : 'false'}
					?disabled=${disabled}
					@click=${() => pickPreset(preset)}
					>${active ? checkIcon({ slot: 'prefix' }) : nothing}${preset.label}
					<span class="preset-date"
						>${getPresetDateText(invoke(preset.value), locale)}</span
					></cosmoz-button
				>`;
			},
		)}
		${dropdown}
	</div>`;
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

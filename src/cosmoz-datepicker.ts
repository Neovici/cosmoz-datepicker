import '@neovici/cosmoz-button';
import '@neovici/cosmoz-dropdown';
import { calendarIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { useProperty } from '@neovici/cosmoz-utils/hooks/use-property';
import { component, css, html, lift, useMemo } from '@pionjs/pion';
import { t } from 'i18next';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import './calendar';
import './date-input';
import { getRangePresets, RangePreset } from './presets';
import { getTriggerText, liftPreset } from './utils';

interface Props {
	locale?: string;
	min?: string;
	max?: string;
	presets?: RangePreset[];
	disabled?: boolean;
	noPresets?: boolean;
}

const CosmozDatepicker = (host: Props) => {
	const { locale: _locale, min, max, disabled, presets, noPresets } = host;
	const locale = _locale ?? navigator.language;
	const [start, setStart] = useProperty<string>('start');
	const [end, setEnd] = useProperty<string>('end');
	const rangePresets = useMemo(
		() => presets ?? getRangePresets(locale),
		[locale, presets],
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
										@click=${() => liftPreset(preset, setStart, setEnd)}
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
								locale=${locale}
								.value=${start}
								@value-changed=${lift(setStart)}
							></cosmoz-date-input>
							<span>–</span>
							<cosmoz-date-input
								locale=${locale}
								.value=${end}
								@value-changed=${lift(setEnd)}
							></cosmoz-date-input>
						</div>
						<div>
							<cosmoz-button
								@click=${(e: MouseEvent) =>
									e.target?.dispatchEvent(
										new Event('select', { bubbles: true }),
									)}
								>${t('Apply')}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`;
};

const styles = css`
	.content {
		display: flex;
		background: var(--cz-color-bg-primary);
		border: 1px solid var(--cz-color-border-secondary);
		border-radius: var(--cz-radius-2xl);
		box-shadow: var(--cz-shadow-xl);
	}

	.range-presets {
		width: calc(var(--cz-spacing) * 38);
		padding: calc(var(--cz-spacing) * 3);
		flex-shrink: 0;
		border-right: 1px solid var(--cz-color-border-secondary);
		overflow: auto;
		contain: size;
	}

	.range-presets cosmoz-button::part(button) {
		justify-content: flex-start;
		font-weight: var(--cz-font-weight-medium);
		overflow: hidden;
	}

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
		observedAttributes: ['locale', 'min', 'max', 'disabled', 'no-presets'],
		styleSheets: [normalize, styles],
		shadowRootInit: { delegatesFocus: true, mode: 'open' },
	}),
);

export { CosmozDatepicker };

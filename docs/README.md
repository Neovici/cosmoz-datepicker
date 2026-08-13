# @neovici/cosmoz-datepicker

Single date or date range picker web component for Neovici applications.

Part of the [Neovici](https://neovici.se) design system.

## Installation

```bash
npm install @neovici/cosmoz-datepicker
```

## Usage

```javascript
import '@neovici/cosmoz-datepicker';
```

```html
<cosmoz-datepicker></cosmoz-datepicker>
```

Set and observe the selected value with the `value` property. Dates use `yyyy-MM-dd` strings.

```html
<cosmoz-datepicker id="datepicker"></cosmoz-datepicker>

<script type="module">
	const datepicker = document.querySelector('#datepicker');

	datepicker.value = {
		start: '2026-08-01',
		end: '2026-08-07',
	};

	datepicker.addEventListener('value-changed', (e) => {
		console.log('value', e.detail.value);
	});
</script>
```

## Properties And Attributes

| Property         | Attribute         | Type                               | Default              | Description                                                      |
| ---------------- | ----------------- | ---------------------------------- | -------------------- | ---------------------------------------------------------------- |
| `value`          | -                 | `string \| DateRange \| undefined` | `undefined`          | Selected date string in single mode, or selected range object.   |
| `mode`           | `mode`            | `'single' \| 'range'`              | `'range'`            | Controls whether one date or a date range is selected.           |
| `locale`         | `locale`          | `string`                           | `navigator.language` | Locale used for formatting dates and determining week start day. |
| `min`            | `min`             | `string \| undefined`              | `undefined`          | Earliest selectable date as a `yyyy-MM-dd` string.               |
| `max`            | `max`             | `string \| undefined`              | `undefined`          | Latest selectable date as a `yyyy-MM-dd` string.                 |
| `presets`        | -                 | `RangePreset[]`                    | built-in presets     | Custom preset buttons for range mode.                            |
| `disabled`       | `disabled`        | `boolean`                          | `false`              | Disables opening the datepicker dropdown.                        |
| `noPresets`      | `no-presets`      | `boolean`                          | `false`              | Hides preset buttons in range mode.                              |
| `singleCalendar` | `single-calendar` | `boolean`                          | `false`              | Forces a single-month calendar layout.                           |
| `triggerSize`    | `trigger-size`    | `CosmozButtonElement['size']`      | `md`                 | Optional size for the trigger button.                            |
| `triggerVariant` | `trigger-variant` | `CosmozButtonElement['variant']`   | `'secondary'`        | Variant for the trigger button.                                  |

```typescript
type DateRange = {
	start?: string;
	end?: string;
};

type RangePreset = {
	label: string;
	start: string | (() => string);
	end: string | (() => string);
};
```

## Single And Range Modes

Use `mode="single"` to select one date, where `value` is a `yyyy-MM-dd` string. Single mode always uses one calendar month and does not support presets.

Use `mode="range"` to select a start and end date, where `value` is a `DateRange` object. `presets`, `noPresets`, and `singleCalendar` are range-mode exclusive properties.

## Presets

By default, the datepicker shows presets for today, yesterday, this week, last week, this month, last month, and this year in range mode.

Provide `presets` to replace the range-mode presets. Each preset has a `label`, `start`, and `end`. The dates can be fixed `yyyy-MM-dd` strings or functions that return `yyyy-MM-dd` strings, which is useful for dynamic ranges relative to the current date.

```javascript
datepicker.presets = [
	{
		label: 'Tomorrow',
		start: () => {
			const date = new Date();
			date.setDate(date.getDate() + 1);
			return date.toISOString().slice(0, 10);
		},
		end: () => {
			const date = new Date();
			date.setDate(date.getDate() + 1);
			return date.toISOString().slice(0, 10);
		},
	},
	{
		label: 'Project launch window',
		start: '2026-09-01',
		end: '2026-09-30',
	},
];
```

Use `no-presets` to hide preset buttons:

```html
<cosmoz-datepicker no-presets></cosmoz-datepicker>
```

## Min/Max Bounds

```html
<cosmoz-datepicker min="2026-08-01" max="2026-08-31"></cosmoz-datepicker>
```

Selected date values and preset values are clamped to the configured bounds.

## Events

| Event           | Detail                                                  | Description                            |
| --------------- | ------------------------------------------------------- | -------------------------------------- |
| `value-changed` | `{ value: string \| { start?: string, end?: string } }` | Fired when the selected value changes. |

## Styling

The trigger button exposes the `trigger` part for external styling:

```css
cosmoz-datepicker::part(trigger) {
	min-width: 16rem;
}
```

## Design Tokens

This component uses CSS custom properties from `@neovici/cosmoz-tokens`. The tokens are automatically applied but can be customized at the application level.

## Accessibility

The datepicker supports keyboard navigation in the calendar and uses localized date input order based on `locale` or `navigator.language`.

When the dropdown opens, focus is delegated to the calendar. Use arrow keys to move by day or week, and `Enter` or `Space` to select the focused date. The previous and next month buttons have accessible labels, and the visible month heading is announced when it changes.

Calendar dates expose localized accessible names that include state such as today, start date, and end date. Disabled dates are marked with `aria-disabled`, selected dates and ranges are marked with `aria-selected`, preset buttons expose `aria-pressed`, and decorative navigation icons are hidden from assistive technology.

The footer date inputs are segmented spinbuttons for year, month, and day. Their order follows the configured locale, and `ArrowUp` or `ArrowDown` increments or decrements the focused segment.

Use the `disabled` attribute when the datepicker should not be interactive.

## Internationalization

UI text is managed via [`i18next`](https://www.i18next.com/). The English text is used as the translation key, so it works out of the box when no translations are loaded.

Consumers must initialize i18next before using the component:

```js
import i18next from 'i18next';

i18next.init({
	lng: 'en',
	resources: {},
	interpolation: {
		prefix: '{',
		suffix: '}',
	},
});
```

To provide translations, use `i18next.addResourceBundle()` or any i18next backend:

```js
i18next.addResourceBundle('sv', 'translation', {
	Today: 'Idag',
	Yesterday: 'I går',
	'This week': 'Denna vecka',
	'Last week': 'Förra veckan',
	'This month': 'Denna månad',
	'Last month': 'Förra månaden',
	'This year': 'Detta år',
	'Select date': 'Välj datum',
	'Select dates': 'Välj datum',
	'Date picker': 'Datumväljare',
	'Previous month': 'Föregående månad',
	'Next month': 'Nästa månad',
	'Start date': 'Startdatum',
	'End date': 'Slutdatum',
	'Selected range: {startDate} to {endDate}':
		'Valt intervall: {startDate} till {endDate}',
	Selecting: 'Väljer',
	Selected: 'Vald',
	Year: 'År',
	Month: 'Månad',
	Day: 'Dag',
	Empty: 'Tomt',
	OK: 'OK',
});
```

### Translation Keys

| Key                                        | Used in                                    |
| ------------------------------------------ | ------------------------------------------ |
| `Today`                                    | Built-in preset label and date aria label  |
| `Yesterday`                                | Built-in preset label                      |
| `This week`                                | Built-in preset label                      |
| `Last week`                                | Built-in preset label                      |
| `This month`                               | Built-in preset label                      |
| `Last month`                               | Built-in preset label                      |
| `This year`                                | Built-in preset label                      |
| `Select date`                              | Trigger placeholder in single mode         |
| `Select dates`                             | Trigger placeholder in range mode          |
| `Date picker`                              | Trigger button aria label                  |
| `Previous month`                           | Previous month button aria label           |
| `Next month`                               | Next month button aria label               |
| `Start date`                               | Start input aria label and date aria label |
| `End date`                                 | End input aria label and date aria label   |
| `Selected range: {startDate} to {endDate}` | Range boundary date aria label             |
| `Selecting`                                | Date aria label while selecting a range    |
| `Selected`                                 | Selected date aria label                   |
| `Year`                                     | Date input year segment aria label         |
| `Month`                                    | Date input month segment aria label        |
| `Day`                                      | Date input day segment aria label          |
| `Empty`                                    | Empty date input segment aria value text   |
| `OK`                                       | Dropdown confirm button                    |

Month names, weekday names, formatted dates, date input order, and week start day are locale-driven through `Intl` and the `locale` property rather than i18next translation keys.

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook:start

# Run tests
npm run test

# Build
npm run build
```

## License

Apache-2.0

# @neovici/cosmoz-datepicker

Date picker web component for Neovici applications.

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

Set and observe the selected range with the `start` and `end` properties. Dates use `yyyy-MM-dd` strings.

```html
<cosmoz-datepicker id="datepicker"></cosmoz-datepicker>

<script type="module">
	const datepicker = document.querySelector('#datepicker');

	datepicker.start = '2026-08-01';
	datepicker.end = '2026-08-07';

	datepicker.addEventListener('start-changed', (e) => {
		console.log('start', e.detail.value);
	});

	datepicker.addEventListener('end-changed', (e) => {
		console.log('end', e.detail.value);
	});
</script>
```

## Properties And Attributes

| Property         | Attribute         | Type                             | Default              | Description                                                      |
| ---------------- | ----------------- | -------------------------------- | -------------------- | ---------------------------------------------------------------- |
| `start`          | -                 | `string \| undefined`            | `undefined`          | Start date as a `yyyy-MM-dd` string.                             |
| `end`            | -                 | `string \| undefined`            | `undefined`          | End date as a `yyyy-MM-dd` string.                               |
| `locale`         | `locale`          | `string`                         | `navigator.language` | Locale used for formatting dates and determining week start day. |
| `min`            | `min`             | `string \| undefined`            | `undefined`          | Earliest selectable date as a `yyyy-MM-dd` string.               |
| `max`            | `max`             | `string \| undefined`            | `undefined`          | Latest selectable date as a `yyyy-MM-dd` string.                 |
| `presets`        | -                 | `RangePreset[]`                  | built-in presets     | Custom range preset buttons.                                     |
| `disabled`       | `disabled`        | `boolean`                        | `false`              | Disables opening the datepicker dropdown.                        |
| `noPresets`      | `no-presets`      | `boolean`                        | `false`              | Hides range preset buttons.                                      |
| `singleCalendar` | `single-calendar` | `boolean`                        | `false`              | Forces a single-month calendar layout.                           |
| `triggerSize`    | `trigger-size`    | `CosmozButtonElement['size']`    | `undefined`          | Optional size for the trigger button.                            |
| `triggerVariant` | `trigger-variant` | `CosmozButtonElement['variant']` | `'secondary'`        | Variant for the trigger button.                                  |

## Range Presets

By default, the datepicker shows presets for today, yesterday, this week, last week, this month, last month, and this year.

Provide `presets` to replace them. Each preset has a `label`, `start`, and `end`. The dates can be fixed `yyyy-MM-dd` strings or functions that return `yyyy-MM-dd` strings, which is useful for dynamic ranges relative to the current date.

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

Selected dates and preset values are clamped to the configured bounds.

## Events

| Event           | Detail              | Description                        |
| --------------- | ------------------- | ---------------------------------- |
| `start-changed` | `{ value: string }` | Fired when the start date changes. |
| `end-changed`   | `{ value: string }` | Fired when the end date changes.   |

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

Use the `disabled` attribute when the datepicker should not be interactive.

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

---
'@neovici/cosmoz-datepicker': minor
---

Single date mode supports presets. Pass `presets` as `{ label, value, title? }` (an ISO date or a function returning one): they show as buttons with their date before the calendar trigger. Picking one sets the value at once, clamped to `min`/`max`; the selected preset is pressed and checked. While a preset is selected the trigger reads "Select date" instead of repeating the date.

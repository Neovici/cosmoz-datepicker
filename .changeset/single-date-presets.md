---
'@neovici/cosmoz-datepicker': minor
---

Single date mode supports presets. Pass `presets` as `{ label, value, title? }` (an ISO date or a function returning one): they show in a column beside the calendar, like the range presets, each with its date. Picking one selects that date, clamped to `min`/`max`, and it is committed when the popover closes. On narrow screens the presets wrap in a row above the calendar.

New `field` attribute: the trigger reads as a form input (full width, left-aligned, input border), for use among other form fields.

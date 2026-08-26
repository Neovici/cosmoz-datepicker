---
'@neovici/cosmoz-datepicker': patch
---

Only update the `value` property when the dropdown closes, instead of on every calendar/input change, so consumers see the final selection once the user is done picking.

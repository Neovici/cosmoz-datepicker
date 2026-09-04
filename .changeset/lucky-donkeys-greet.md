---
'@neovici/cosmoz-datepicker': patch
---

Allow `@neovici/cosmoz-dropdown` 8.x in the dependency range (`^7.7.1 || ^8.0.0`).
The `cosmoz-dropdown-next` element used by the datepicker is unchanged between
7.7.1 and 8.0.0, so both major versions are supported. This lets applications
using `@neovici/cosmoz-autocomplete` 14 (which requires dropdown 8) coexist
with the datepicker without duplicate copies.

Also upgrades `@changesets/cli` to ^3, required by `changesets/action@v2` used
in the repository's release CI.
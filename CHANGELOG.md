# Changelog

## 1.0.4

### Patch Changes

- 4198255: Allow `@neovici/cosmoz-dropdown` 8.x in the dependency range (`^7.7.1 || ^8.0.0`).
  The `cosmoz-dropdown-next` element used by the datepicker is unchanged between
  7.7.1 and 8.0.0, so both major versions are supported. This lets applications
  using `@neovici/cosmoz-autocomplete` 14 (which requires dropdown 8) coexist
  with the datepicker without duplicate copies.

  Also upgrades `@changesets/cli` to ^3, required by `changesets/action@v2` used
  in the repository's release CI.

## 1.0.3

### Patch Changes

- 52bc100: Export datepicker value and preset types from the package root.

## 1.0.2

### Patch Changes

- de2ff8a: Only update the `value` property when the dropdown closes, instead of on every calendar/input change, so consumers see the final selection once the user is done picking.

## 1.0.1

### Patch Changes

- 233e30a: Fix the exported trigger button part name.

## 1.0.0

### Major Changes

- dd23ebe: Release 1.0.0.

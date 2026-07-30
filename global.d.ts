// Global ambient type declarations for this project.

// TypeScript's built-in Intl types don't yet include
// Intl.Locale.prototype.getWeekInfo() (part of the Intl Locale Info
// proposal). This augments the global Intl namespace so it type-checks.
// See: https://github.com/tc39/proposal-intl-locale-info
declare namespace Intl {
	interface WeekInfo {
		firstDay: number;
		weekend: number[];
		minimalDays: number;
	}

	interface Locale {
		getWeekInfo(): WeekInfo;
	}
}

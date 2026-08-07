import { useEffect, useMemo, useState } from '@pionjs/pion';

export const useMediaMatch = (query: string) => {
	const match = useMemo(() => matchMedia(query), [query]);
	const [isMatch, setIsMatch] = useState(match.matches);

	useEffect(() => {
		const onMatch = (e: MediaQueryListEvent) =>
			setIsMatch((prev) => (prev !== e.matches ? e.matches : prev));

		match.addEventListener('change', onMatch);
		return () => match.removeEventListener('change', onMatch);
	}, [match]);

	return isMatch;
};

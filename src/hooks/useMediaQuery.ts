import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
	const [isQueryMatching, setIsQueryMatching] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);

		if (media.matches !== isQueryMatching) {
			setIsQueryMatching(media.matches);
		}

		const updateMatch = () => setIsQueryMatching(media.matches);

		media.addEventListener('change', updateMatch);
		return () => window.removeEventListener('change', updateMatch);
	}, [isQueryMatching, query]);

	return isQueryMatching;
};

export default useMediaQuery;

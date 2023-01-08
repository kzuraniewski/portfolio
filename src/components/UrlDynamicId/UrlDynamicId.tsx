import { useEffect, useRef } from 'react';
import type { UrlScrollSyncProps } from './types';
import useScroll from '../../lib/useScroll';

export default function UrlDynamicId({
	onChange,
	children,
}: UrlScrollSyncProps) {
	const ref = useRef<HTMLDivElement>(null);

	const updateUrlId = () => {
		const elements = ref.current?.querySelectorAll(':scope > [id]');
		if (!elements) return;

		const upperElements = Array.from(elements).filter((element) => {
			const { top } = element.getBoundingClientRect();
			return top < window.innerHeight / 2;
		});

		if (!upperElements.length) return;
		const id = (upperElements.at(-1) as Element).id;
		if (
			!id.length ||
			id === new URL(window.location.href).hash.substring(1)
		)
			return;

		window.history.pushState(null, '', `#${id}`);
		onChange?.(id);
	};

	useEffect(updateUrlId, []);

	useScroll(updateUrlId);

	return <div ref={ref}>{children}</div>;
}

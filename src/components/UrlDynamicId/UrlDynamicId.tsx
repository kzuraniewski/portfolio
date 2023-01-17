import { useCallback, useEffect, useRef, useState } from 'react';
import type { UrlScrollSyncProps } from './types';
import useScroll from '../../lib/useScroll';
import { useStore } from '../../lib/context';
import _ from 'lodash';
import React from 'react';

export default function UrlDynamicId({ children }: UrlScrollSyncProps) {
	const parentRef = useRef<HTMLDivElement | null>(null);
	// const [currentSectionIndex, setStore] = useStore(
	// 	(store) => store.currentSectionIndex
	// );
	const [a, sa] = useState<any>();

	const handleScroll = useCallback(() => {
		if (!parentRef.current) return;

		const elements = Array.from(parentRef.current.children).filter(
			(el) => el.id
		);

		const currentSection = _.findLast(elements, (element) => {
			const { top, bottom } = element.getBoundingClientRect();
			const altitude = (bottom + top) / 2;

			const { pageTop, height } = window.visualViewport;
			const viewportAltitude = (pageTop + pageTop + height) / 2;

			console.log(
				altitude,
				viewportAltitude,
				altitude < viewportAltitude
			);

			return altitude < viewportAltitude;
		});

		// setStore({ currentSectionIndex ?? 0 });
		sa(`${currentSection}, {currentSection?.getBoundingClientRect().top}`);
	}, [parentRef.current]);

	useEffect(() => console.log(a), [a]);

	useScroll(handleScroll);

	return <div ref={parentRef}>{children}</div>;
}

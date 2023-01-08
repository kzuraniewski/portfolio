'use client';

import React, { useEffect, useRef, useState } from 'react';
import HeaderLink from '../HeaderLink';
import style from './style.module.scss';
import type { HeaderProps, Position } from './types.d';

export default function Header({ currentId }: HeaderProps) {
	const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const [highlightPosition, setHighlightPosition] = useState<Position | null>(
		null
	);
	const [highlightVisible, setHighlightVisible] = useState(false);

	const highlightIndex = currentId ? sectionIds.indexOf(currentId) : -1;

	useEffect(() => {
		if (!highlightPosition && linkRefs.current[0]) {
			setHighlightPosition(getElementRectCenter(linkRefs.current[0]));
			setHighlightVisible(true);
		}

		const highlightedElement = linkRefs.current[highlightIndex];
		if (!highlightedElement) {
			if (highlightPosition) setHighlightVisible(false);
			return;
		}

		const newPosition = getElementRectCenter(highlightedElement);

		setHighlightVisible(true);
		setHighlightPosition(newPosition);
	}, [highlightIndex]);

	return (
		<header className={style.root}>
			<ul className={style.links}>
				{sectionIds.map((sectionId, index) => (
					<li key={sectionId}>
						<HeaderLink
							ref={(el) => (linkRefs.current[index] = el)}
							href={`#${sectionId}`}
							highlighted={index === highlightIndex}
						>
							{sectionId}
						</HeaderLink>
					</li>
				))}
			</ul>

			<div
				style={{
					left: highlightPosition?.x,
					top: highlightPosition?.y,
					opacity: highlightVisible ? 100 : 0,
				}}
				className={style.highlight}
			/>
		</header>
	);
}

function getElementRectCenter(element: HTMLElement): Position {
	const rect = element.getBoundingClientRect();
	return {
		x: (rect.right + rect.left) / 2,
		y: (rect.bottom + rect.top) / 2,
	};
}

const sectionIds = ['home', 'about', 'contact'];

import { useRef } from 'react';
import { useStore } from '../lib/context';
import HeaderLink from './HeaderLink';

export type Position = {
	x: number;
	y: number;
};

export default function Header() {
	const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const [currentSectionIndex] = useStore(
		(store) => store.currentSectionIndex
	);

	const firstLink = linkRefs.current[0];
	const currentLink = linkRefs.current[currentSectionIndex];
	// prettier-ignore
	const highlightPosition = currentLink ? getElementRectCenter(currentLink)
							: firstLink ? getElementRectCenter(firstLink)
							: null;

	console.log(linkRefs.current, highlightPosition);

	return (
		<header className="sticky top-0 p-10">
			<ul className="flex justify-center gap-10">
				{sectionIds.map((sectionId, index) => (
					<li key={sectionId}>
						<HeaderLink
							ref={(el) => (linkRefs.current[index] = el)}
							href={`#${sectionId}`}
							highlighted={index === currentSectionIndex}
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
					opacity: highlightPosition ? 100 : 0,
				}}
				className="absolute w-1 h-1 -translate-x-1/2 translate-y-4 rounded-full bg-white"
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

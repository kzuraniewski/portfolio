import { useRef } from 'react';
import { useStore } from '../../lib/context';
import HeaderLink from '../HeaderLink';
import style from './style.module.scss';
import type { HeaderProps, Position } from './types.d';

export default function Header({}: HeaderProps) {
	const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const [currentSectionIndex] = useStore(store => store.currentSectionIndex);

	const firstLink = linkRefs.current[0];
	const currentLink = linkRefs.current[currentSectionIndex];
	// prettier-ignore
	const highlightPosition = currentLink ? getElementRectCenter(currentLink)
							: firstLink ? getElementRectCenter(firstLink)
							: null;

	console.log(linkRefs.current, highlightPosition);

	return (
		<header className={style.root}>
			<ul className={style.links}>
				{sectionIds.map((sectionId, index) => (
					<li key={sectionId}>
						<HeaderLink
							ref={el => (linkRefs.current[index] = el)}
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

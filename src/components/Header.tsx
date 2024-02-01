import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { Button } from '@/components/Button';
import Container from '@/components/Container';
import { Reference, References } from '@/components/References';
import cn from '@/lib/cn';
import { navigation, personalLinks } from '@/lib/data';
import useScroll from '@/lib/useScroll';

const NO_COLLAPSE_AREA_HEIGHT = 100;

type MountState = 'mounted' | 'floating' | 'collapsed';

// FIXME: after double refresh, header in mounted state. Should depend on scrollY

export const Header = () => {
	const [mountState, setMountState] = useState<MountState>('mounted');
	const [isHovered, setIsHovered] = useState(false);

	useScroll(
		(direction) => {
			if (window.scrollY === 0) {
				setMountState('mounted');
				return;
			}

			if (
				direction === 'up' ||
				window.scrollY <= NO_COLLAPSE_AREA_HEIGHT ||
				isHovered
			) {
				setMountState('floating');
			} else {
				setMountState('collapsed');
			}
		},
		[isHovered],
	);

	return (
		<header
			// prettier-ignore
			className={cn(
				'sticky top-0 z-50 w-full transition-all duration-300 border-b-2 border-dashed border-b-secondary bg-primary',
				{ '-translate-y-full': mountState === 'collapsed' },
				{ 'bg-opacity-80 backdrop-blur-sm shadow-xl': mountState === 'floating' }
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Container className="flex items-center gap-12 py-5">
				<nav className="grow">
					<ul className="flex gap-10">
						{navigation.map(({ href, label }, index) => (
							<li key={`nav-${index}`}>
								<a
									href={href}
									className="font-display uppercase tracking-wider text-light before:mr-0.5 before:text-accent before:content-['#'] hover:text-accent hover:no-underline"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<References>
					<Reference href={personalLinks.github}>
						<FaGithub />
					</Reference>

					<Reference href={personalLinks.linkedIn}>
						<FaLinkedin />
					</Reference>
				</References>

				<Button variant="primary">Resume</Button>
			</Container>
		</header>
	);
};

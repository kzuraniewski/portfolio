import React, { useState } from 'react';
import { Trans } from '@lingui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import LanguageToggle from '@/components/ui/LanguageToggle';
import cn from '@/lib/cn';
import { navigation, personalLinks } from '@/lib/data';
import useScroll from '@/hooks/useScroll';

import ThemeToggle from './ThemeToggle';

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
				{ 'bg-opacity-0': mountState === 'mounted' },
				{ '-translate-y-full': mountState === 'collapsed' },
				{ 'bg-opacity-80 backdrop-blur-sm shadow-xl': mountState === 'floating' },
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
									className="text-inherit font-display uppercase tracking-wider before:mr-0.5 before:text-accent before:content-['#'] hover:text-accent hover:no-underline"
								>
									<Trans id={label.id} />
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="flex gap-6">
					<ThemeToggle />

					<LanguageToggle />
				</div>

				<ul className="flex justify-center gap-8">
					<li>
						<Button
							icon
							as="a"
							href={personalLinks.github}
							target="_blank"
						>
							<FaGithub />
						</Button>
					</li>

					<li>
						<Button
							icon
							as="a"
							href={personalLinks.linkedIn}
							target="_blank"
						>
							<FaLinkedin />
						</Button>
					</li>
				</ul>
			</Container>
		</header>
	);
};

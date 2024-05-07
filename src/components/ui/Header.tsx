import React, { useState } from 'react';
import { Trans } from '@lingui/react';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa6';

import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import LanguageToggle from '@/components/ui/LanguageToggle';
import ThemeToggle from '@/components/ui/ThemeToggle';
import cn from '@/lib/cn';
import { navigation, personalLinks } from '@/lib/data';
import { tailwindConfig } from '@/lib/util';
import useMediaQuery from '@/hooks/useMediaQuery';
import useScroll from '@/hooks/useScroll';

const NO_COLLAPSE_AREA_HEIGHT = 100;

type MountState = 'mounted' | 'floating' | 'collapsed';

// FIXME: after double refresh, header in mounted state. Should depend on scrollY

export const Header = () => {
	const [mountState, setMountState] = useState<MountState>('mounted');
	const [isHovered, setIsHovered] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const isCollapsible = useMediaQuery(
		`(min-width: ${tailwindConfig.theme.screens.md})`,
	);

	const toggleNav = () => {
		setIsNavOpen((isOpen) => !isOpen);
	};

	useScroll(
		(direction) => {
			if (window.scrollY === 0) {
				setMountState('mounted');
				return;
			}

			if (
				direction === 'up' ||
				window.scrollY <= NO_COLLAPSE_AREA_HEIGHT ||
				isHovered ||
				!isCollapsible
			) {
				setMountState('floating');
			} else {
				setMountState('collapsed');
				setIsNavOpen(false);
			}
		},
		[isHovered, isCollapsible],
	);

	return (
		<header
			// prettier-ignore
			className={cn(
				'fixed top-0 z-50 w-full transition-all duration-300 border-b-2 border-dashed border-b-secondary bg-primary',
				{ 'bg-opacity-0': mountState === 'mounted' },
				{ '-translate-y-full': mountState === 'collapsed' },
				{ 'bg-opacity-80 backdrop-blur-sm shadow-xl': mountState === 'floating' || isNavOpen },
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Container className="flex min-h-header flex-wrap items-center gap-12 py-5">
				<Button icon className="mr-auto md:hidden" onClick={toggleNav}>
					<FaBars />
				</Button>

				<nav
					className={cn(
						'order-last w-full grow md:visible md:order-none md:w-auto',
						{ 'max-md:hidden': !isNavOpen },
					)}
				>
					<ul className="flex flex-col gap-5 md:flex-row md:gap-10">
						{navigation.map(({ href, label }, index) => (
							<li key={`nav-${index}`}>
								<a
									href={href}
									className="font-display uppercase tracking-wider text-light before:mr-0.5 before:text-accent before:content-['#'] hover:text-accent hover:no-underline"
									onClick={() => setIsNavOpen(false)}
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

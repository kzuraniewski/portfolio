import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import cn from '../lib/cn';
import useScroll from '../lib/useScroll';
import { Button } from './Button';
import Container from './Container';
import { Reference, References } from './References';

const NO_COLLAPSE_AREA_HEIGHT = 100;

type MountState = 'mounted' | 'floating' | 'collapsed';

export const Header = () => {
	const [mountState, setMountState] = useState<MountState>('mounted');

	useScroll((direction) => {
		if (window.scrollY === 0) {
			setMountState('mounted');
			return;
		}

		const collapsible = window.scrollY > NO_COLLAPSE_AREA_HEIGHT;

		if (direction === 'up' || !collapsible) {
			setMountState('floating');
		} else {
			setMountState('collapsed');
		}
	});

	return (
		<header
			// prettier-ignore
			className={cn(
				'fixed z-50 w-full transition-all border-b-2 border-dashed border-b-secondary bg-primary',
				{ '-translate-y-full': mountState === 'collapsed' },
				{ 'bg-opacity-80 backdrop-blur-sm shadow-xl': mountState === 'floating' }
			)}
		>
			<Container className="flex items-center gap-12 py-5">
				<nav className="grow">
					<ul className="flex gap-10">
						{navigation.map(({ href, label }, index) => (
							<li key={`nav-${index}`}>
								<a
									href={href}
									className="tracking-wider text-light hover:no-underline hover:text-accent before:content-['#'] before:mr-0.5 before:text-accent"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<References>
					{references.map(({ href, Icon }, index) => (
						<Reference href={href} key={`reference-${index}`}>
							<Icon />
						</Reference>
					))}
				</References>

				<Button>Resume</Button>
			</Container>
		</header>
	);
};

const references = [
	{
		href: 'https://github.com/kzuraniewski',
		Icon: FaGithub,
	},
	{
		href: 'https://www.linkedin.com/in/karol-zuraniewski',
		Icon: FaLinkedin,
	},
];

const navigation = [
	{
		label: 'About',
		href: '#about',
	},
	{
		label: 'Experience',
		href: '#experience',
	},
	{
		label: 'Projects',
		href: '#projects',
	},
];

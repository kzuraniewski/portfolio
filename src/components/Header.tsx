import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import cn from '../lib/cn';
import useScroll from '../lib/useScroll';
import { Button } from './Button';
import Container from './Container';
import { Reference, References } from './References';

type MountState = 'mounted' | 'floating' | 'collapsed';

export const Header = () => {
	const [mountState, setMountState] = useState<MountState>('mounted');
	const rootRef = useRef<HTMLElement>(null);

	useScroll(
		(direction) => {
			if (
				!rootRef.current ||
				window.scrollY < rootRef.current.offsetHeight
			) {
				setMountState('mounted');
				return;
			}

			if (direction === 'up') {
				setMountState('floating');
			} else {
				setMountState('collapsed');
			}
		},
		{ offset: 20 }
	);

	return (
		<header
			ref={rootRef}
			// prettier-ignore
			className={cn(
				'fixed z-50 w-full transition-transform border-b-2 border-dashed border-b-secondary bg-primary',
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

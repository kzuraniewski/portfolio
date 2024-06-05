import { useState } from 'react';
import { Trans } from '@lingui/react';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa6';

import { LanguageToggle, ThemeToggle } from '@/components/templates';
import { Button, CollapsibleBar } from '@/components/ui';
import cn from '@/lib/cn';
import { navigation, personalLinks } from '@/lib/data';

import {
	Content,
	Links,
	NavLink,
	NavList,
	NavToggleButton,
	Toggles,
} from './Header.styles';

export const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen((isOpen) => !isOpen);
	};

	return (
		<CollapsibleBar
			expanded={isNavOpen}
			onCollapse={() => setIsNavOpen(false)}
		>
			<Content>
				<NavToggleButton icon onClick={toggleNav}>
					<FaBars />
				</NavToggleButton>

				<nav
					className={cn(
						'order-last w-full grow md:visible md:order-none md:w-auto',
						{ 'max-md:hidden': !isNavOpen },
					)}
				>
					<NavList>
						{navigation.map(({ href, label }, index) => (
							<li key={`nav-${index}`}>
								<NavLink
									href={href}
									onClick={() => setIsNavOpen(false)}
								>
									<Trans id={label.id} />
								</NavLink>
							</li>
						))}
					</NavList>
				</nav>

				<Toggles>
					<ThemeToggle />

					<LanguageToggle />
				</Toggles>

				<Links>
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
				</Links>
			</Content>
		</CollapsibleBar>
	);
};

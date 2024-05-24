import React, { useState } from 'react';
import { Trans } from '@lingui/react';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa6';

import LanguageToggle from '@/components/templates/LanguageToggle';
import ThemeToggle from '@/components/templates/ThemeToggle';
import { Button } from '@/components/ui/Button';
import CollapsibleBar from '@/components/ui/CollapsibleBar';
import cn from '@/lib/cn';
import { navigation, personalLinks } from '@/lib/data';

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
			<div className="container flex min-h-header flex-wrap items-center gap-12 py-5">
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
			</div>
		</CollapsibleBar>
	);
};

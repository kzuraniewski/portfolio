import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Button } from './Button';
import { Reference, References } from './References';
import Container from './Container';

export const Header = () => {
	return (
		<header className="fixed z-50 w-full border-b-2 border-dashed bg-primary border-b-secondary">
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

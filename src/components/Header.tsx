import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Reference, References } from './References';
import { Button } from './Button';

export default function Header() {
	return (
		<header className="container fixed flex items-center justify-end gap-12 py-7">
			<References>
				{references.map(({ href, Icon }, index) => (
					<Reference href={href} key={`reference-${index}`}>
						<Icon />
					</Reference>
				))}
			</References>

			<Button>Resume</Button>
		</header>
	);
}

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

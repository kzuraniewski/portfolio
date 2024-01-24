import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Button } from './Button';
import { Reference, References } from './References';

export const Header = () => {
	return (
		<header className="container fixed flex items-center justify-end gap-12 py-5 border-b-2 border-dashed bg-charcoal border-b-gunmetal">
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

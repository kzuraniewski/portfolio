import { Button } from '@/components/ui';
import tw from '@/lib/tw';

export const Content = tw.div`
	container
	min-h-header
	py-5
	flex
	flex-wrap
	items-center
	gap-12
`;

export const NavToggleButton = tw(Button)`
	mr-auto

	md:hidden
`;

export const NavList = tw.ul`
	flex
	flex-col
	gap-5

	md:flex-row
	md:gap-10
`;

export const NavLink = tw.a`
	font-display
	uppercase
	tracking-wider
	text-light

	before:content-['#']
	before:mr-0.5
	before:text-accent

	hover:text-accent
	hover:no-underline
`;

export const Toggles = tw.div`
	flex
	gap-6
`;

export const Links = tw.ul`
	flex
	justify-center
	gap-8
`;

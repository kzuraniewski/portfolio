import { LinkHTMLAttributes } from 'react';

export type LinkProps = {
	props: LinkHTMLAttributes<any>;
};

export default function Link({ props }: LinkProps) {
	return (
		<a
			{...props}
			className="font-bold underline transition-colors decoration-transparent hover:decoration-current"
		/>
	);
}

import { ReactNode } from 'react';

export type ReferencesProps = {
	children?: ReactNode;
};

export const References = ({ children }: ReferencesProps) => {
	return <ul className="flex justify-center gap-8">{children}</ul>;
};

export type ReferenceProps = {
	href: string;
	children?: ReactNode;
};

export const Reference = ({ href, children }: ReferenceProps) => {
	return (
		<li>
			<a href={href} className="block hover:text-mustard [&>svg]:w-7 [&>svg]:h-7 [&>svg]:transition-colors">
				{children}
			</a>
		</li>
	);
};

import cx from 'classnames';
import { forwardRef } from 'react';

export type HeaderLinkProps = {
	href: string;
	highlighted?: boolean;
	children?: React.ReactNode;
};

const HeaderLink = forwardRef<HTMLAnchorElement, HeaderLinkProps>(
	({ href, highlighted = false, children }, ref) => (
		<a
			ref={ref}
			href={href}
			className={cx(
				'relative hover:text-gray-500 uppercase font-normal transition-colors',
				{ 'text-gray-600': highlighted }
			)}
		>
			{children}
		</a>
	)
);

export default HeaderLink;

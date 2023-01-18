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
				'relative text-gray-300 hover:text-gray-50 uppercase font-normal transition-colors',
				{ 'text-gray-100': highlighted }
			)}
		>
			{children}
		</a>
	)
);

export default HeaderLink;

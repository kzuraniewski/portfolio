import cx from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';

export type HeaderLinkProps = PropsWithChildren<{
	href: string;
	highlighted?: boolean;
}>;

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

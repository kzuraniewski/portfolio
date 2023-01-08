import Link from 'next/link';
import cx from 'classnames';
import style from './style.module.scss';
import { forwardRef } from 'react';
import type { HeaderLinkProps } from './types.d';

const HeaderLink = forwardRef<HTMLAnchorElement, HeaderLinkProps>(
	({ href, highlighted = false, children }, ref) => (
		<Link
			ref={ref}
			href={href}
			className={cx(style.root, { [style.highlighted]: highlighted })}
		>
			{children}
		</Link>
	)
);

export default HeaderLink;

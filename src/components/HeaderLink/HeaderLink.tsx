import cx from 'classnames';
import style from './style.module.scss';
import { forwardRef } from 'react';
import type { HeaderLinkProps } from './types.d';

const HeaderLink = forwardRef<HTMLAnchorElement, HeaderLinkProps>(
	({ href, highlighted = false, children }, ref) => (
		<a ref={ref} href={href} className={cx(style.root, { [style.highlighted]: highlighted })}>
			{children}
		</a>
	)
);

export default HeaderLink;

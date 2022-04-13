import React from 'react';
import styles from '../styles/components/Layout.module.scss';

export type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default Layout;

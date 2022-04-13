import React from 'react';

export type LinkProps = {
	to: string;
	label: string;
};

const Link = ({ to, label }: LinkProps) => {
	return (
		<a className='link' href={to}>
			{label}
		</a>
	);
};

export default Link;

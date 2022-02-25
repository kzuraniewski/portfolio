import React from 'react';

/**
 * @param {object} props
 * @param {string} props.to - href
 * @param {string} props.label - label
 */
const Link = ({ to, label }) => {
	return (
		<a className='link' href={to}>
			{label}
		</a>
	);
};

export default Link;

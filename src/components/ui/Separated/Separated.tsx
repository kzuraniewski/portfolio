import { SeparatedProps } from './Separated.types';
import { defaultIndexSelector, joinChildren } from './Separated.utils';

export const Separated = <RootElement extends React.ElementType = 'div'>({
	separator,
	as,
	indexSelector = defaultIndexSelector,
	children,
	...props
}: SeparatedProps<RootElement>) => {
	const RootElement = as ?? 'div';

	return (
		<RootElement {...props}>
			{separator
				? joinChildren(children, separator, indexSelector)
				: children}
		</RootElement>
	);
};

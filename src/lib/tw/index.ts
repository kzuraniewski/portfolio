import React from 'react';

import cn from '@/lib/cn';

import intrinsicTags from './intrinsicTags';
import {
	Component,
	StyleableElementType,
	Tw,
	UnknownPropsWithClassName,
} from './types';

// TODO: Custom props for styled components

const createStyledComponentFactory =
	<Type extends StyleableElementType>(type: Type) =>
	(classes: TemplateStringsArray) =>
	({ className, ...other }: React.ComponentProps<Type>) =>
		React.createElement(type, {
			className: cn(classes, className),
			...other,
		});

// prettier-ignore
const tw = (
	<C extends Component<UnknownPropsWithClassName>>
	(component: C) => createStyledComponentFactory(component)
) as Tw;

intrinsicTags.forEach((tag) => {
	tw[tag] = createStyledComponentFactory(tag);
});

export default tw;

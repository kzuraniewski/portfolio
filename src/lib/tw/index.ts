import React, { forwardRef } from 'react';

import cn from '@/lib/cn';

import intrinsicTags from './intrinsicTags';
import {
	Component,
	StyleableElementType,
	Tw,
	UnknownPropsWithClassName,
} from './types';

// TODO: Custom props for styled components
// FIXME: Invalid type inference for generic components

const createStyledComponentFactory =
	<Type extends StyleableElementType>(type: Type) =>
	(classes: TemplateStringsArray) =>
		forwardRef<Type, React.ComponentProps<Type>>(
			({ className, ...other }, ref) =>
				React.createElement(type, {
					className: cn(classes, className),
					ref,
					...other,
				}),
		) as Component<React.ComponentProps<Type>>;

// prettier-ignore
const tw = (
	<C extends Component<UnknownPropsWithClassName>>
	(component: C) => createStyledComponentFactory(component)
) as Tw;

intrinsicTags.forEach((tag) => {
	tw[tag] = createStyledComponentFactory(tag);
});

export default tw;

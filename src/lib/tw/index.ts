import React, { forwardRef } from 'react';

import cn from '@/lib/cn';

import intrinsicTags from './intrinsicTags';
import {
	ClassTemplateParser,
	Component,
	isTemplateArgumentPrimitive,
	StyleableElementType,
	TemplateArgument,
	Tw,
	UnknownProps,
	UnknownPropsWithClassName,
} from './types';

// FIXME: Invalid type inference for generic components
// FIXME: Fix code highlight when prop type applied in VSCode

const parseClassTemplate: ClassTemplateParser = (props, classes, ...args) => {
	return classes
		.map((clazz, index) => {
			const argument = args[index];

			if (!argument) return clazz;
			if (isTemplateArgumentPrimitive(argument))
				return `${clazz} ${argument}`;

			return `${clazz} ${argument(props)}`;
		})
		.join(' ');
};

const createStyledComponentFactory =
	<Type extends StyleableElementType>(type: Type) =>
	<CustomProps extends UnknownProps = undefined>(
		classes: TemplateStringsArray,
		...args: TemplateArgument<React.ComponentProps<Type> & CustomProps>[]
	) =>
		forwardRef<Type, React.ComponentProps<Type> & CustomProps>(
			(props, ref) => {
				const { className, ...other } = props;
				const parsedClassTemplate = parseClassTemplate(
					props,
					classes,
					...args,
				);

				return React.createElement(type, {
					className: cn(parsedClassTemplate, className),
					ref,
					...other,
				});
			},
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

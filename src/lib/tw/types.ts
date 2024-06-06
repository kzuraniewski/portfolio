import intrinsicTags from './intrinsicTags';

export type IntrinsicTag = (typeof intrinsicTags)[number];

export type UnknownProps = Record<string, unknown> | object | undefined;

export type UnknownPropsWithClassName = UnknownProps & { className?: string };

export type Component<Props extends UnknownProps = undefined> = (
	props: Props,
) => JSX.Element;

export type TemplateArgumentPrimitive = string | number | false | undefined;

export const isTemplateArgumentPrimitive = (
	value: unknown,
): value is TemplateArgumentPrimitive => {
	if (typeof value === 'boolean' && value === true) return false;

	return (['string', 'number', 'undefined'] as unknown[]).includes(
		typeof value,
	);
};

export type TempalteArgumentFunction<Props extends UnknownProps> = (
	props: Props,
) => TemplateArgumentPrimitive;

export type TemplateArgument<Props extends UnknownProps> =
	| TempalteArgumentFunction<Props>
	| TemplateArgumentPrimitive;

export type StyledComponentFactory<Props extends UnknownPropsWithClassName> = <
	CustomProps extends UnknownProps = object,
>(
	classes: TemplateStringsArray,
	...args: TemplateArgument<Props & CustomProps>[]
) => Component<Props & CustomProps>;

export type ClassTemplateParser = <Props extends UnknownPropsWithClassName>(
	props: Props,
	classes: TemplateStringsArray,
	...args: TemplateArgument<Props>[]
) => string;

export type StyleableComponent = Component<UnknownPropsWithClassName>;

export type StyleableElementType = StyleableComponent | IntrinsicTag;

// prettier-ignore
export type TwFunction =
	<Props extends UnknownPropsWithClassName>
	(component: Component<Props>) =>
		StyledComponentFactory<Props>;

export type TwProperties = {
	[K in IntrinsicTag]: StyledComponentFactory<JSX.IntrinsicElements[K]>;
};

export type Tw = TwFunction & TwProperties;

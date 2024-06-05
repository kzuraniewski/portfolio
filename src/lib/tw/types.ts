import intrinsicTags from './intrinsicTags';

export type IntrinsicTag = (typeof intrinsicTags)[number];

export type UnknownProps = Record<string, unknown> | object | undefined;

export type UnknownPropsWithClassName = UnknownProps & { className?: string };

export type Component<Props extends UnknownProps = undefined> = (
	props: Props,
) => JSX.Element;

export type StyledComponentFactory<Props extends UnknownPropsWithClassName> = (
	classes: TemplateStringsArray,
) => Component<Props>;

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

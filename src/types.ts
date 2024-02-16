/**
 * Defines props for a polymorphic component.
 * Supplements base props with `as` and inherits from the specified component or element
 */
export type PolymorphicProps<
	BaseProps extends Record<string, unknown>,
	RootElement extends React.ElementType,
> = BaseProps &
	Omit<React.ComponentProps<RootElement>, keyof BaseProps> & {
		as?: RootElement;
	};

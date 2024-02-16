export type PolymorphicProps<
	BaseProps extends Record<string, unknown>,
	RootElement extends React.ElementType,
> = BaseProps &
	Omit<React.ComponentProps<RootElement>, keyof BaseProps> & {
		as?: RootElement;
	};

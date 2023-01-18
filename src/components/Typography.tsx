export type TypographyProps = {
	children?: React.ReactNode;
};

export default function Typography({ children }: TypographyProps) {
	// TODO: Add variants other than h1
	return <h1 className="text-7xl font-bold mb-6">{children}</h1>;
}

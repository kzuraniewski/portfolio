export type StackProps = {
	children?: React.ReactNode;
};

export default function Stack({ children }: StackProps) {
	return <div className="flex items-center justify-between">{children}</div>;
}

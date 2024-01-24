import { PropsWithChildren } from 'react';

export type PaperProps = PropsWithChildren<{}>;

export default function Paper({ children }: PaperProps) {
	return <div className="p-3 bg-white shadow-sm">{children}</div>;
}

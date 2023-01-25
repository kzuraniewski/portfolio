import { PropsWithChildren } from 'react';

export type PaperProps = PropsWithChildren<{}>;

export default function Paper({ children }: PaperProps) {
	return <div className="bg-white shadow-sm p-3">{children}</div>;
}

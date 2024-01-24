import cn from 'classnames';
import { PropsWithChildren, useContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import { TabsContext } from './Tabs';

// TODO: Partial
export type TabProps = PropsWithChildren<{
	label: React.ReactNode;
}>;

export default function Tab({ label, children }: TabProps) {
	const tab = useRef<HTMLDivElement>(null);
	const { heading, currentTab, setCurrentTab } = useContext(TabsContext);

	const isSelected = currentTab === label;

	// FIXME: select the first tab as default
	if (!currentTab) setCurrentTab(label);

	return (
		<div ref={tab}>
			{heading?.current &&
				createPortal(
					<button
						className={cn(
							'px-5 py-1 text-sm font-semibold uppercase transition-colors bg-slate-50 first-of-type:rounded-l last-of-type:rounded-r',
							{ 'bg-yellow-200': isSelected }
						)}
						onClick={() => setCurrentTab(label)}
					>
						{label}
					</button>,
					heading.current
				)}

			{isSelected && children}
		</div>
	);
}

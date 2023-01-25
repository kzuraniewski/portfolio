import React, {
	createContext,
	PropsWithChildren,
	RefObject,
	useRef,
	useState,
} from 'react';

export type TabsProps = PropsWithChildren<{}>;

const TabsContext = createContext<{
	heading: RefObject<Element> | null;
	currentTab: any;
	setCurrentTab: React.Dispatch<React.SetStateAction<any>>;
}>({
	heading: null,
	currentTab: null,
	setCurrentTab: () => {},
});

export default function Tabs({ children }: TabsProps) {
	const heading = useRef<HTMLDivElement>(null);
	const [currentTab, setCurrentTab] = useState<any>(null);

	return (
		<TabsContext.Provider
			value={{
				heading,
				currentTab,
				setCurrentTab,
			}}
		>
			<div className="flex mb-2" ref={heading} />
			{children}
		</TabsContext.Provider>
	);
}

export { TabsContext };

// FIXME: This component is vulnerable to hot reload

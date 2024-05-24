import { HTMLAttributes, useState } from 'react';
import tailwindConfig from '@root/tailwind.config';

import cn from '@/lib/cn';
import useMediaQuery from '@/hooks/useMediaQuery';
import useScroll from '@/hooks/useScroll';

// FIXME: after double refresh, header in mounted state. Should depend on scrollY

const NO_COLLAPSE_AREA_HEIGHT = 100;

type MountState = 'mounted' | 'floating' | 'collapsed';

export type CollapsibleBarProps = HTMLAttributes<HTMLDivElement> & {
	expanded?: boolean;
	className?: string;
	children?: React.ReactNode;
	onMount?: () => void;
	onFloat?: () => void;
	onCollapse?: () => void;
};

export const CollapsibleBar = ({
	expanded,
	className,
	children,
	onMount,
	onFloat,
	onCollapse,
	...props
}: CollapsibleBarProps) => {
	const [mountState, setMountState] = useState<MountState>('mounted');
	const [isHovered, setIsHovered] = useState(false);

	const isCollapsible = useMediaQuery(
		`(min-width: ${tailwindConfig.theme.screens.md})`,
	);

	useScroll(
		(direction) => {
			if (window.scrollY === 0) {
				setMountState('mounted');
				onMount?.();
				return;
			}

			if (
				direction === 'up' ||
				window.scrollY <= NO_COLLAPSE_AREA_HEIGHT ||
				isHovered ||
				!isCollapsible
			) {
				setMountState('floating');
				onFloat?.();
			} else {
				setMountState('collapsed');
				onCollapse?.();
			}
		},
		[isHovered, isCollapsible],
	);

	return (
		<header
			// prettier-ignore
			className={cn(
				'fixed top-0 z-50 w-screen transition-all duration-300 border-b-2 border-dashed border-b-secondary bg-primary',
				{ 'bg-opacity-0': mountState === 'mounted' },
				{ '-translate-y-full': mountState === 'collapsed' },
				{ 'bg-opacity-80 backdrop-blur-sm shadow-xl': mountState === 'floating' || expanded },
				className
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			{...props}
		>
			{children}
		</header>
	);
};

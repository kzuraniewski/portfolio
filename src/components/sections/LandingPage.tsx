import React from 'react';
import { Trans } from '@lingui/macro';
import { FaArrowTurnDown } from 'react-icons/fa6';

import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import Polygon from '@/components/ui/Polygon';

export default function LandingPage() {
	return (
		<section
			id="home"
			className="relative flex h-[70vh] flex-col items-center justify-center"
		>
			<span className="text-small tracking-wide text-accent">
				<Trans>My name is</Trans>
			</span>
			<h1 className="mb-10 font-display text-8xl font-bold leading-tight">
				Karol Żuraniewski
			</h1>

			<Divider className="mb-7 w-48" />

			<Polygon
				variant="dashed"
				color="accent"
				padding={[10, 20]}
				getPoints={(width, height) => [
					[45, 10],
					[width - 10, 20],
					[width - 70, height - 5],
					[10, height - 30],
				]}
			>
				<Polygon
					padding={20}
					getPoints={(width, height) => [
						[5, 10],
						[width, 0],
						[width - 15, height],
						[0, height - 10],
					]}
				>
					<p className="max-w-sm text-center">
						<Trans>
							I&apos;m a fullstack web developer that specializes
							in TypeScript, React and Java.
						</Trans>
					</p>
				</Polygon>
			</Polygon>

			<Button
				variant="primary"
				size="big"
				href="#about"
				className="absolute -bottom-10"
			>
				<Trans>See more</Trans>
				<FaArrowTurnDown className="ml-2 inline-block w-2" />
			</Button>
		</section>
	);
}

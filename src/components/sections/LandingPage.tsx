import React from 'react';
import { Trans } from '@lingui/macro';
import { FaArrowTurnDown } from 'react-icons/fa6';

import { Button, Divider, Polygon } from '../ui';

export default function LandingPage() {
	return (
		<section
			id="home"
			className="relative flex h-[80vh] items-center pt-header"
		>
			<div className="container flex flex-col items-center">
				<span className="text-small tracking-wide text-accent">
					<Trans>My name is</Trans>
				</span>
				<h1 className="mb-10 text-center font-display text-7xl font-bold leading-tight md:text-8xl">
					Karol Żuraniewski
				</h1>

				<Divider className="mb-7 w-48" />

				<Polygon
					variant="dashed"
					color="accent"
					className="px-5 py-3"
					getPoints={(width, height) => [
						[45, 10],
						[width - 10, 20],
						[width - 70, height - 5],
						[10, height - 30],
					]}
				>
					<Polygon
						className="p-5"
						getPoints={(width, height) => [
							[5, 10],
							[width, 0],
							[width - 15, height],
							[0, height - 10],
						]}
					>
						<p className="max-w-sm text-center text-on-secondary">
							<Trans>
								I&apos;m a fullstack web developer that
								specializes in TypeScript, React and Java.
							</Trans>
						</p>
					</Polygon>
				</Polygon>

				<Button
					as="a"
					variant="primary"
					size="big"
					href="#about"
					className="absolute -bottom-10"
				>
					<Trans>Get to know me</Trans>
					<FaArrowTurnDown className="ml-2 inline-block w-2" />
				</Button>
			</div>
		</section>
	);
}

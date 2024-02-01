import { FaArrowTurnDown } from 'react-icons/fa6';

import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import PolygonBackground from '@/components/PolygonBackground';

export default function LandingPage() {
	return (
		<section
			id="home"
			className="relative flex flex-col items-center justify-center h-[70vh]"
		>
			<span className="tracking-wide text-small text-accent">
				My name is
			</span>
			<h1 className="mb-10 font-bold leading-tight font-display text-8xl">
				Karol Żuraniewski
			</h1>

			<Divider className="w-48 mb-7" />

			<PolygonBackground
				padding={[10, 20]}
				background="accent"
				getPoints={(width, height) => [
					[45, 10],
					[width - 10, 20],
					[width - 70, height - 5],
					[10, height - 30],
				]}
			>
				<PolygonBackground
					padding={20}
					getPoints={(width, height) => [
						[5, 10],
						[width, 0],
						[width - 15, height],
						[0, height - 10],
					]}
				>
					<p className="max-w-sm text-center">
						I'm a fullstack web developer that specializes in
						TypeScript, React and Java.
					</p>
				</PolygonBackground>
			</PolygonBackground>

			<Button
				variant="primary"
				size="big"
				href="#about"
				className="absolute -bottom-10"
			>
				See more
				<FaArrowTurnDown className="inline-block w-2 ml-2" />
			</Button>
		</section>
	);
}

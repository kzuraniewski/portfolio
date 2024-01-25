import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { FaArrowTurnDown } from 'react-icons/fa6';

export default function LandingPage() {
	return (
		<section id="home" className="h-screen">
			<div className="flex items-center justify-between h-full">
				<div>
					<span className="tracking-wide text-small text-accent">
						My name is
					</span>
					<h1>Karol Żuraniewski</h1>

					<Divider className="w-48" />

					<p className="max-w-sm mb-10">
						And I'm a web developer that specializes in TypeScript,
						React and Java.
					</p>

					<Button variant="big" href="#about">
						See more
						<FaArrowTurnDown className="inline-block w-2 ml-2" />
					</Button>
				</div>

				<div className="border border-secondary w-[400px] 2xl:w-[500px] h-[400px] 2xl:h-[500px]" />
			</div>
		</section>
	);
}

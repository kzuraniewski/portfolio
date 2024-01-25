import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { FaArrowTurnDown } from 'react-icons/fa6';

export default function LandingPage() {
	return (
		<section id="home" className="py-24 h-[95vh]">
			<div className="flex items-center justify-between">
				<div>
					<span className="tracking-wide text-small text-mustard">
						My name is
					</span>
					<h1 className="mb-6 font-bold leading-tight text-7xl">
						Karol Żuraniewski
					</h1>

					<Divider className="w-48" />

					<p className="max-w-sm mb-10">
						And I'm a web developer that specializes in TypeScript,
						React and Java.
					</p>

					<Button variant="big">
						See more
						<FaArrowTurnDown className="inline-block w-2 ml-2" />
					</Button>
				</div>

				<div className="border border-gunmetal w-[500px] h-[500px]" />
			</div>
		</section>
	);
}

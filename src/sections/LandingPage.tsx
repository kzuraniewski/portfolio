import { Button } from '../components/Button';

export default function LandingPage() {
	return (
		<section className="py-16 h-[95vh]">
			<div className="flex items-center justify-between">
				<div>
					<span className="-ml-2 tracking-wide text-small text-mustard">
						My name is
					</span>
					<h1 className="mb-6 font-bold leading-tight text-7xl">
						Karol Żuraniewski
					</h1>

					<div className="flex-grow w-48 my-5 border-b-2 border-dashed border-b-gunmetal" />

					<p className="max-w-sm mb-10">
						And I'm a web developer that specializes in TypeScript,
						React and Java.
					</p>

					<Button variant="big">See more</Button>
				</div>

				<div className="border border-gunmetal w-[500px] h-[500px]" />
			</div>
		</section>
	);
}

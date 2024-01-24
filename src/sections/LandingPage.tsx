import { Button } from '../components/Button';

export default function LandingPage() {
	return (
		<section className="py-16 h-[95vh]">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="mb-6 font-light text-7xl">Some title</h1>

					<p className="max-w-sm mb-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce facilisis, ipsum sit amet pretium molestie, libero
						diam luctus elit, rhoncus semper nunc turpis et est.
					</p>

					<Button variant="big">Fancy cta</Button>
				</div>

				<div className="border border-black w-[600px] h-[500px]" />
			</div>
		</section>
	);
}

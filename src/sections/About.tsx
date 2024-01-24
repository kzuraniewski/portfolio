import { Skills } from '../components';

export default function LandingPage() {
	return (
		<section className="py-48">
			<div className="flex justify-between">
				<div>
					<h2 className="mb-4 text-3xl font-bold uppercase">
						About me
					</h2>
					<p className="max-w-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce facilisis, ipsum sit amet pretium molestie, libero
						diam luctus elit, rhoncus semper nunc turpis et est.
					</p>
				</div>

				<div className="w-1/2 max-w-lg">
					<Skills />
				</div>
			</div>
		</section>
	);
}

import { Stack } from '../components';

export default function LandingPage() {
	return (
		<section className="py-48">
			<Stack>
				<div>
					<h2 className="text-3xl uppercase font-bold mb-4">
						About me
					</h2>
					<p className="max-w-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce facilisis, ipsum sit amet pretium molestie, libero
						diam luctus elit, rhoncus semper nunc turpis et est.
					</p>
				</div>
			</Stack>
		</section>
	);
}

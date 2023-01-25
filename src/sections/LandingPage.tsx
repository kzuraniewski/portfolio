export default function LandingPage() {
	return (
		<section className="py-16 h-[95vh]">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-7xl font-light mb-6">Some title</h1>

					<p className="max-w-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce facilisis, ipsum sit amet pretium molestie, libero
						diam luctus elit, rhoncus semper nunc turpis et est.
					</p>

					<button className="uppercase text-lg border border-gray-400 rounded-md px-4 py-1 mt-12 transition-colors hover:bg-yellow-400 hover:border-yellow-400 hover:text-gray-900">
						Fancy cta
					</button>
				</div>

				<div className="border border-black w-[600px] h-[500px]" />
			</div>
		</section>
	);
}

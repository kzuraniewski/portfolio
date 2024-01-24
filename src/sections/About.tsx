import { Divider } from '../components/Divider';

export default function LandingPage() {
	return (
		<section className="py-24">
			<div className="flex items-center gap-8">
				<h2 className="relative text-3xl font-bold uppercase w-max">
					<span className="text-mustard">#</span> About me
				</h2>

				<Divider className="flex-grow mr-10" />
			</div>
		</section>
	);
}

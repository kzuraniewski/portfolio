import { Divider } from '../components/Divider';

export default function LandingPage() {
	return (
		<section className="py-24">
			<div className="flex items-center gap-8 mb-16">
				<h2 className="relative text-3xl font-bold uppercase w-max">
					<span className="text-mustard">#</span> About me
				</h2>

				<Divider className="flex-grow mr-10" />
			</div>

			<p className="text-center w-2/3 mx-auto mb-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse bibendum auctor blandit. Donec porta sapien at
				fermentum venenatis. Aenean finibus posuere cursus. Donec
				tristique hendrerit diam nec blandit. Maecenas dictum bibendum
				nunc, nec varius nisl varius non.
			</p>

			<p className="text-center w-2/3 mx-auto mb-5">
				Etiam pretium lobortis erat consequat consectetur. Proin at
				ipsum a dolor facilisis convallis. Phasellus egestas, felis in
				cursus ultrices, urna urna scelerisque nisi, eu euismod sem
				mauris sit amet ligula. Integer ac orci quis nulla varius
				pulvinar.
			</p>
		</section>
	);
}

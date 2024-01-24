import Section from '../components/Section';

export default function LandingPage() {
	return (
		<Section title="About me">
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
		</Section>
	);
}

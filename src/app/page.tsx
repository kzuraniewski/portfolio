import LandingPage from '../sections/LandingPage';

export default function Home() {
	return (
		<>
			<LandingPage />
			<section
				style={{ height: '50vh', border: '1px solid red' }}
				id="home"
			>
				home
				<div id="asd" />
			</section>
			<section
				style={{ height: '70vh', border: '1px solid red' }}
				id="about"
			>
				about
			</section>
			<section
				style={{ height: '90vh', border: '1px solid red' }}
				id="contact"
			>
				contact
			</section>
			<section
				style={{ height: '90vh', border: '1px solid red' }}
				id="contact1"
			>
				contact1
			</section>
			<section
				style={{ height: '90vh', border: '1px solid red' }}
				id="contact2"
			>
				contact2
			</section>
		</>
	);
}

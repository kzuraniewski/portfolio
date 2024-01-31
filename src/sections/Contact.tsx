import { Divider } from '@/components/Divider';
import PolygonBackground from '@/components/PolygonBackground';
import { Section, SubSection } from '@/components/Section';
import { Separated } from '@/components/Separated';

const Contact = () => {
	return (
		<Section title="Contact me" id="contact">
			<Separated
				separator={<Divider vertical className="self-center h-52" />}
				className="flex items-start justify-between w-4/5 gap-10 mx-auto"
			>
				<div className="w-2/5 [&>p]:mb-5">
					<p>
						I am currently open to work, so if you found my
						portfolio interesting, feel free to contact me.
					</p>

					<SubSection title="Need a website?" className="mb-0">
						<p>
							I also develop websites as a freelancer. If you are
							in need of one, reach out to me.
						</p>
					</SubSection>
				</div>

				<div className="flex flex-col items-center gap-10">
					<PolygonBackground
						padding={[20, 30]}
						getPoints={(width, height) => [
							[0, 10],
							[width, 0],
							[width - 20, height],
							[10, height - 5],
						]}
						className="mt-5 w-max"
					>
						Contact me at{' '}
						<a href="mailto:zuraniewski.karol@gmail.com">
							zuraniewski.karol@gmail.com
						</a>
					</PolygonBackground>

					<div className='text-sm'>
						Or call me: <a href="tel:+48503129246">503 129 246</a>
					</div>
				</div>
			</Separated>
		</Section>
	);
};

export default Contact;

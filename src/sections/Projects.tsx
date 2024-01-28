import { Section } from '../components/Section';

export default function Projects() {
	return <Section title="Projects" id="projects"></Section>;
}

type ProjectData = {
	name: string;
	previewImage: string;
	url: string;
}

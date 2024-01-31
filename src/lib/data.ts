export const personalLinks = {
	github: 'https://github.com/kzuraniewski',
	linkedIn: 'https://www.linkedin.com/in/karol-zuraniewski',
};

export const navigation = [
	{
		label: 'Home',
		href: '#',
	},
	{
		label: 'About',
		href: '#about',
	},
	{
		label: 'Projects',
		href: '#projects',
	},
];

export const mainTechIcons = [
	{
		src: '/react-logo.png',
		alt: 'React logo',
	},
	{
		src: '/typescript-logo.png',
		alt: 'TypeScript logo',
	},
	{
		src: '/mui-logo.png',
		alt: 'MUI logo',
	},
	{
		src: '/java-logo.png',
		alt: 'Java logo',
	},
	{
		src: '/nodejs-logo.svg',
		alt: 'Node.js logo',
	},
	{
		src: '/wordpress-logo.png',
		alt: 'Wordpress logo',
	},
];

export const companies = [
	{
		timeSpan: '09.2022 - 08.2023',
		name: 'All for One Poland',
		description: 'test a41',
	},
	{
		timeSpan: '02.2022 - 07.2022',
		name: 'Olimp Agency',
		description: 'test oa',
	},
];

export type ProjectData = {
	name: string;
	description: string;
	tech: string[];
	links: {
		github: string;
		website?: string;
	};
	previewImage?: string;
	featured?: boolean;
	wip?: boolean;
};

export const projects: ProjectData[] = [
	{
		name: 'Photography Website',
		featured: true,
		wip: true,
		description: 'Photography portfolio website with image preview',
		previewImage: '/preview/photo-website.png',
		tech: ['Next.js', 'MUI', 'TypeScript'],
		links: {
			github: 'https://github.com/kzuraniewski/photos',
		},
	},
	{
		name: 'Catalog',
		featured: true,
		description: 'PDF viewer with annotation edit tool',
		previewImage: '/preview/catalog.png',
		tech: ['Next.js', 'MUI', 'TypeScript'],
		links: {
			github: 'https://github.com/kzuraniewski/catalog',
			website: 'https://catalog-view.vercel.app',
		},
	},
	{
		name: 'Simulator 8086',
		featured: true,
		description: 'A web app simulating the Intel 8086 processor',
		previewImage: '/preview/8086.png',
		tech: ['React', 'MUI', 'TypeScript'],
		links: {
			github: 'https://github.com/kzuraniewski/symulator-8086',
		},
	},
	{
		name: 'Interactive Comments',
		featured: true,
		description: 'Interactive comment thread system',
		previewImage: '/preview/interactive-comments.png',
		tech: ['React', 'CSS', 'JavaScript'],
		links: {
			github: 'https://github.com/kzuraniewski/interactive-comments',
			website: 'https://interactive-comments-beta.vercel.app',
		},
	},

	{
		name: 'Link Board',
		description:
			'A web app allowing the user to store links in grouped tiles',
		previewImage: '#',
		tech: ['React', 'SASS', 'Firebase', 'JavaScript'],
		links: {
			github: 'https://github.com/kzuraniewski/photos',
		},
	},
	{
		name: 'Hand Over',
		description: "Example charity company's website",
		previewImage: '#',
		tech: ['React', 'SASS', 'JavaScript'],
		links: {
			github: 'https://github.com/kzuraniewski/photos',
		},
	},
];

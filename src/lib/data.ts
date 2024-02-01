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
	{
		label: 'Contact',
		href: '#contact',
	},
];

export type Icon = {
	src: string;
	alt: string;
};

export const techIcons = {
	react: {
		src: '/icons/react-logo.png',
		alt: 'React logo',
	},
	typeScript: {
		src: '/icons/typescript-logo.png',
		alt: 'TypeScript logo',
	},
	mui: {
		src: '/icons/mui-logo.png',
		alt: 'MUI logo',
	},
	java: {
		src: '/icons/java-logo.png',
		alt: 'Java logo',
	},
	nodeJs: {
		src: '/icons/nodejs-logo.svg',
		alt: 'Node.js logo',
	},
	wordPress: {
		src: '/icons/wordpress-logo.png',
		alt: 'Wordpress logo',
	},
	docker: {
		src: '/icons/docker-logo.png',
		alt: 'Docker logo',
	},
	postgres: {
		src: '/icons/postgres-logo.png',
		alt: 'PostgreSQL logo',
	},
} satisfies Record<string, Icon>;

export const mainTechIcons: Icon[] = [
	techIcons.react,
	techIcons.typeScript,
	techIcons.mui,
	techIcons.java,
	techIcons.nodeJs,
	techIcons.postgres,
	techIcons.docker,
	techIcons.wordPress,
];

// prettier-ignore
export const learningIcons: Icon[] = [
	techIcons.java,
	techIcons.docker,
];

export const companies = [
	{
		timeSpan: 'Sep. 2022 - Aug. 2023',
		name: 'All for One Poland',
		summary: [
			'Web app UI and backend development using React, Spring and PostgreSQL',
			'Improving and implementing new aspects related to user interfaces and SAP data processing',
			'Development of UI and RPA processes with MUI and Node.js',
		],
		positions: ['Junior Fullstack Developer'],
	},
	{
		timeSpan: 'Feb. 2022 - July 2022',
		name: 'Olimp Agency',
		summary: [
			'Portfolio website design and development using Wordpress and React',
			'E-commerce service development and maintenance in Wordpress',
			'Bypassing editor limitations with hand written custom JS and CSS to improve the UI in the existing projects',
			'Backend maintenance for E-commerce serivces using PHP',
		],
		positions: ['Frontend Developer', 'Wordpress Developer'],
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
		name: 'PDF Catalog',
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
		name: 'Intel 8086 Simulator',
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
		description: 'Interactive social media comment thread system',
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

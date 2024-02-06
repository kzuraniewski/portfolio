import { msg } from '@lingui/macro';

export const personalLinks = {
	github: 'https://github.com/kzuraniewski',
	linkedIn: 'https://www.linkedin.com/in/karol-zuraniewski',
};

export const navigation = [
	{
		label: msg`Home`,
		href: '#',
	},
	{
		label: msg`About`,
		href: '#about',
	},
	{
		label: msg`Projects`,
		href: '#projects',
	},
	{
		label: msg`Contact`,
		href: '#contact',
	},
];

export const techIcons = {
	react: {
		src: '/icons/react-logo.png',
		alt: msg`React logo`,
	},
	typeScript: {
		src: '/icons/typescript-logo.png',
		alt: msg`TypeScript logo`,
	},
	mui: {
		src: '/icons/mui-logo.png',
		alt: msg`MUI logo`,
	},
	java: {
		src: '/icons/java-logo.png',
		alt: msg`Java logo`,
	},
	nodeJs: {
		src: '/icons/nodejs-logo.svg',
		alt: msg`Node.js logo`,
	},
	wordPress: {
		src: '/icons/wordpress-logo.png',
		alt: msg`Wordpress logo`,
	},
	docker: {
		src: '/icons/docker-logo.png',
		alt: msg`Docker logo`,
	},
	postgres: {
		src: '/icons/postgres-logo.png',
		alt: msg`PostgreSQL logo`,
	},
};

export type Icon = (typeof techIcons)[keyof typeof techIcons];

export type TechStack = {
	icon: Icon;
	highlighted?: boolean;
}[];

export const mainTechStack: TechStack = [
	{ icon: techIcons.react, highlighted: true },
	{ icon: techIcons.typeScript, highlighted: true },
	{ icon: techIcons.mui },
	{ icon: techIcons.java },
	{ icon: techIcons.nodeJs },
	{ icon: techIcons.postgres },
	{ icon: techIcons.docker },
	{ icon: techIcons.wordPress },
];

// prettier-ignore
export const learningTechStack: TechStack = [
	{ icon: techIcons.docker, highlighted: true },
	{ icon: techIcons.java },
];

export const companies = [
	{
		timeSpan: msg`Sep. 2022 - Aug. 2023`,
		name: 'All for One Poland',
		summary: [
			msg`Web app UI and backend development using React, Spring and PostgreSQL`,
			msg`Improving and implementing new aspects related to user interfaces and SAP data processing`,
			msg`Development of UI and RPA processes with MUI and Node.js`,
		],
		positions: ['Junior Fullstack Developer'],
	},
	{
		timeSpan: msg`Feb. 2022 - July 2022`,
		name: 'Olimp Agency',
		summary: [
			msg`Portfolio website design and development using Wordpress and React`,
			msg`E-commerce service development and maintenance in Wordpress`,
			msg`Bypassing editor limitations with hand written custom JS and CSS to improve the UI in the existing projects`,
			msg`Backend maintenance for E-commerce serivces using PHP`,
		],
		positions: ['Frontend Developer', 'Wordpress Developer'],
	},
];

export type CompanyData = (typeof companies)[number];

export const projects = [
	{
		name: msg`Photography Website`,
		featured: true,
		wip: true,
		description: msg`Photography portfolio website with image preview`,
		previewImage: '/preview/photo-website.png',
		tech: ['Next.js', 'MUI', 'TypeScript'],
		links: {
			github: 'https://github.com/kzuraniewski/photos',
		},
	},
	{
		name: msg`PDF Catalog`,
		featured: true,
		description: msg`PDF viewer with annotation edit tool`,
		previewImage: '/preview/catalog.png',
		tech: ['Next.js', 'MUI', 'TypeScript'],
		links: {
			github: 'https://github.com/kzuraniewski/catalog',
			website: 'https://catalog-view.vercel.app',
		},
	},
	{
		name: msg`Intel 8086 Simulator`,
		featured: true,
		description: msg`A web app simulating the Intel 8086 processor`,
		previewImage: '/preview/8086.png',
		tech: ['React', 'MUI', 'TypeScript'],
		links: {
			github: 'https://github.com/kzuraniewski/symulator-8086',
		},
	},
	{
		name: msg`Interactive Comments`,
		featured: true,
		description: msg`Interactive social media comment thread system`,
		previewImage: '/preview/interactive-comments.png',
		tech: ['React', 'CSS', 'JavaScript'],
		links: {
			github: 'https://github.com/kzuraniewski/interactive-comments',
			website: 'https://interactive-comments-beta.vercel.app',
		},
	},

	{
		name: msg`Link Board`,
		description: msg`A web app allowing the user to store links in grouped tiles`,
		previewImage: '#',
		tech: ['React', 'SASS', 'Firebase', 'JavaScript'],
		links: {
			github: 'https://github.com/kzuraniewski/photos',
		},
	},
	{
		name: msg`Hand Over`,
		description: msg`Example charity company's website`,
		previewImage: '#',
		tech: ['React', 'SASS', 'JavaScript'],
		links: {
			github: 'https://github.com/kzuraniewski/photos',
		},
	},
];

export type ProjectData = (typeof projects)[number];

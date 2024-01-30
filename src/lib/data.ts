import { FaGithub, FaLinkedin } from 'react-icons/fa6';

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

export const references = [
	{
		href: 'https://github.com/kzuraniewski',
		Icon: FaGithub,
	},
	{
		href: 'https://www.linkedin.com/in/karol-zuraniewski',
		Icon: FaLinkedin,
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

export const projects = [
	{
		name: 'Test',
		url: 'test',
		previewImage: '/test.png',
	},
];

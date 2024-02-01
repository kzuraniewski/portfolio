import Container from '@/components/Container';

const Footer = () => {
	return (
		<footer className="border-t-2 border-dashed border-secondary text-center text-sm">
			<Container className="py-8">
				<a
					href="https://github.com/kzuraniewski/portfolio"
					className="text-light hover:text-accent"
					target="_blank"
				>
					Designed and developed by Karol Żuraniewski
				</a>
			</Container>
		</footer>
	);
};

export default Footer;

import Container from '@/components/Container';

const Footer = () => {
	return (
		<footer className="text-sm text-center border-t-2 border-dashed border-secondary">
			<Container className="py-16">
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

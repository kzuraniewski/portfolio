import { Trans } from '@lingui/macro';

import { Button } from '@/components/ui';

import {
	Content,
	ContentDivider,
	CtaArrowIcon,
	IntroPolygonInner,
	IntroPolygonOuter,
	IntroText,
	Root,
	Title,
	TitlePrefix,
} from './LandingPage.styles';

export const LandingPage = () => {
	return (
		<Root id="home">
			<Content>
				<TitlePrefix>
					<Trans>My name is</Trans>
				</TitlePrefix>
				<Title>Karol Żuraniewski</Title>

				<ContentDivider />

				<IntroPolygonOuter
					variant="dashed"
					color="accent"
					getPoints={(width, height) => [
						[45, 10],
						[width - 10, 20],
						[width - 70, height - 5],
						[10, height - 30],
					]}
				>
					<IntroPolygonInner
						getPoints={(width, height) => [
							[5, 10],
							[width, 0],
							[width - 15, height],
							[0, height - 10],
						]}
					>
						<IntroText>
							<Trans>
								I&apos;m a fullstack web developer that
								specializes in TypeScript, React and Java.
							</Trans>
						</IntroText>
					</IntroPolygonInner>
				</IntroPolygonOuter>

				<Button
					as="a"
					variant="primary"
					size="big"
					href="#about"
					className="absolute -bottom-10"
				>
					<Trans>Get to know me</Trans>
					<CtaArrowIcon />
				</Button>
			</Content>
		</Root>
	);
};

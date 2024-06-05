import { HTMLAttributes } from 'react';

import {
	BannerPolygon,
	Image,
	LinkIcon,
	Overlay,
	PreviewLink,
	Root,
} from './ProjectPreview.styles';

export type ProjectPreviewProps = HTMLAttributes<HTMLDivElement> & {
	image: string;
	link: string;
	alt: string;
	banner?: string | null;
};

const ProjectPreview = ({
	image,
	link,
	alt,
	banner,
	...props
}: ProjectPreviewProps) => {
	return (
		<Root {...props}>
			{banner && (
				<BannerPolygon
					color="accent"
					getPoints={(width, height) => [
						[30, 0],
						[width - 13, 5],
						[width - 4, height],
						[0, height - 5],
					]}
				>
					{banner}
				</BannerPolygon>
			)}

			<PreviewLink href={link} target="_blank" rel="noreferrer">
				<Overlay>
					{link} <LinkIcon />
				</Overlay>

				<Image src={image} alt={alt} />
			</PreviewLink>
		</Root>
	);
};

export default ProjectPreview;

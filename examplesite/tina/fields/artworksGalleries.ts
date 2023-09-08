import { TinaField } from 'tinacms';

export const artworksGalleries: TinaField<false> = {
	label: 'Artworks',
	name: 'artworks',
	type: 'string',
	description: 'Galeries for artworks',
	list: true,
	options: [
		{
			value: 'gallery',
			label: 'gallery',
		},
		{
			value: 'archive',
			label: 'archive',
		},
		{
			value: 'home',
			label: 'home (only for 👑)',
		},
	],
};

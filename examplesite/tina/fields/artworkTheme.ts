import { TinaField } from 'tinacms';

export const artworkTheme: TinaField<false> = {
	label: 'Theme',
	name: 'themes',
	type: 'string',
	description: 'Artwork subject',
	list: true,
	options: [
		{
			value: 'abstract',
			label: 'abstract',
		},
		{
			value: 'figurtative',
			label: 'figurtative',
		},
		{
			value: 'others',
			label: 'others',
		},
	],
};

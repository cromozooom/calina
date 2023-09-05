// import { TinaField } from 'tinacms';

export const shortcodeHero = {
	name: 'hero',
	label: 'hero',
	match: {
		start: '{{%',
		end: '%}}',
	},
	fields: [
		{
			label: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			label: 'Side',
			name: 'side',
			type: 'string',
			options: [
				{
					value: 'left',
					label: 'left',
				},
				{
					value: 'right',
					label: 'right',
				},
				{
					value: 'center',
					label: 'center',
				},
			],
		},
		{
			name: 'children',
			type: 'rich-text',
		},
		{
			type: 'image',
			name: 'asset',
			label: 'Asset',
			required: true,
		},
	],
};

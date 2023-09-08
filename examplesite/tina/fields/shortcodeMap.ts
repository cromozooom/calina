// import { TinaField } from 'tinacms';

export const shortcodeMap = {
	name: 'map',
	label: 'map',
	match: {
		start: '{{%',
		end: '%}}',
	},
	fields: [
		{
			label: 'Title',
			name: 'title',
			type: 'string',
			required: true,
		},
		{
			name: 'children',
			type: 'rich-text',
		},
		{
			name: 'map',
			label: 'map',
			type: 'string',
			required: true,
			description: 'take only the src tag from iframe',
		},
	],
};

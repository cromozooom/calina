// import { TinaField } from 'tinacms';
import { headerLevel } from './_fields';

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
			label: 'Header level',
			name: 'headerLevel',
			type: 'string',
			options: [
				{
					value: '1',
					label: 'Heading 1',
				},
				{
					value: '2',
					label: 'Heading 2',
				},
				{
					value: '3',
					label: 'Heading 3',
				},
				{
					value: '4',
					label: 'Heading 4',
				},
				{
					value: '5',
					label: 'Heading 5',
				},
				{
					value: '6',
					label: 'Heading 6',
				},
			],
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

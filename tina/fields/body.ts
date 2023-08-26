import { TinaField } from 'tinacms';

export const body: TinaField<false> = {
	type: 'rich-text',
	name: 'body',
	label: 'Body',
	isBody: true,
	templates: [
		{
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
		},
		{
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
		},
	],
};

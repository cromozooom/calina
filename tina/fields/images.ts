import { TinaField } from 'tinacms';

export const images: TinaField<false> = {
	type: 'object',
	label: 'Images',
	name: 'images',
	list: true,
	ui: {
		itemProps: (item) => {
			// Field values are accessed by item?.<Field name>
			return { label: item?.title };
		},
	},
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'Title',
		},
		{
			type: 'image',
			name: 'asset',
			label: 'Asset',
			required: true,
		},
		{
			label: '👑 Type',
			name: 'type',
			type: 'string',
			description: 'Premium Member Only',
			// ui: {
			// 	// component: 'textarea',
			// 	validate: (value) => {
			// 		if (value !== 'basic') {
			// 			return 'This field si only for Premium Member, set to basic';
			// 		}
			// 	},
			// },

			options: [
				{
					value: 'basic',
					label: 'basic',
				},
				{
					value: 'details',
					label: 'details',
				},
				{
					value: 'sym',
					label: 'sym',
				},
				{
					value: 'full',
					label: 'full',
				},
			],
		},
	],
};

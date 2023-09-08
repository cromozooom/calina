import { TinaField } from 'tinacms';

export const dimensions: TinaField<false> = {
	label: 'Dimensions',
	name: 'dimensions',
	type: 'object',
	description: 'in centimeters',
	fields: [
		{
			label: 'Height',
			name: 'height',
			type: 'number',
			description: 'in cm',
			required: true,
			// ui: {
			// 	validate: (value) => {
			// 		if (typeof value !== 'number') {
			// 			return 'This should be a number';
			// 		}
			// 	},
			// },
		},
		{
			label: 'Width',
			name: 'width',
			type: 'number',
			description: 'in cm',
			required: true,
		},
		{
			label: 'Thickness',
			name: 'thickness',
			description: 'in cm',
			type: 'number',
		},
		{
			label: 'Description',
			name: 'dimensionDescription',
			description: 'a brief descripn woud be "single pannel" or "multipannel artwork", ~60 characters',
			type: 'string',
			ui: {
				validate: (value) => {
					if (value?.length > 65) {
						return 'Title cannot be more than 40 characters long';
					}
				},
			},
		},
	],
};

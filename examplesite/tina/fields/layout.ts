import { TinaField } from 'tinacms';

export const layout: TinaField<false> = {
	label: 'Layout',
	// description: 'only available for Premium Member',
	name: 'layout',
	type: 'string',
	// ui: {
	// 	validate: (value) => {
	// 		if (value !== 'exhibition') {
	// 			return '⚠️ Changing this is only for Premium Member (change back to exhibition)';
	// 		}
	// 	},
	// },
	options: [
		{
			value: 'exhibition',
			label: 'exhibition',
		},
		{
			value: 'event',
			label: 'event',
		},
		{
			value: 'market',
			label: 'market',
		},
	],
	// ui: {
	// 	component: 'hidden',
	// },
};

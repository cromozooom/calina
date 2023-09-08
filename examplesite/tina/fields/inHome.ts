import { TinaField } from 'tinacms';

export const inHome: TinaField<false> = {
	label: '👑 In Home Page',
	description: 'Add this item to home page',
	name: 'inHome',
	type: 'boolean',
	ui: {
		validate: (value) => {
			if (value === true) {
				return '⚠️ Turning this on is only for Premium';
			}
		},
	},
};

import { TinaField } from 'tinacms';

export const weight: TinaField<false> = {
	label: '💰 Weight',
	name: 'weight',
	type: 'number',
	description: 'is used only for store',
	ui: {
		validate: (value) => {
			if (value > 0) {
				return 'only for store owners / please set back to "0"';
			}
		},
	},
};

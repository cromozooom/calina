import { TinaField } from 'tinacms';

export const price: TinaField<false> = {
	label: '💰 Price',
	name: 'price',
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

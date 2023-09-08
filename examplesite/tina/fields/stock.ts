import { TinaField } from 'tinacms';

export const stock: TinaField<false> = {
	label: '💰 Stock',
	name: 'stock',
	type: 'number',
	description: 'Is this in stock',
	ui: {
		validate: (value) => {
			if (value > 0) {
				return 'only for store owners / please set back to "0"';
			}
		},
	},
};

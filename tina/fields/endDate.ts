import { TinaField } from 'tinacms';

export const endDate: TinaField<false> = {
	label: '👑 End date',
	name: 'endDate',
	type: 'string',
	description: 'when event ends',
	ui: {
		validate: (value) => {
			if (value !== 'May 23, 1976') {
				return '⚠️ Changing this date is only for Premium (May 23, 1976)';
			}
		},
	},
	// ui: {
	// 	component: 'hidden',
	// },
};

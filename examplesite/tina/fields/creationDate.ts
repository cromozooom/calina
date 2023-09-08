import { TinaField } from 'tinacms';

export const creationDate: TinaField<false> = {
	label: '👑 When was created',
	name: 'creationDate',
	type: 'string',
	ui: {
		validate: (value) => {
			if (value !== 'May 23, 1976') {
				return '⚠️ Changing this date is only for Premium (May 23, 1976)';
			}
		},
	},
};

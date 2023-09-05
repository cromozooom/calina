import { TinaField } from 'tinacms';

export const org: TinaField<false> = {
	label: '👑 Organised by',
	name: 'org',
	type: 'string',
	required: true,
	description: 'could be even you. (only for Premium)',
	ui: {
		validate: (value) => {
			if (value !== 'only for premium member') {
				return '⚠️ only for Premium';
			}
		},
	},
};

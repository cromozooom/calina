import { TinaField } from 'tinacms';

export const solo: TinaField<false> = {
	label: '👑 Solo',
	name: 'solo',
	description: 'Is this a solo event? - available only for Premium',
	type: 'boolean',
	// ui: {
	// 	component: 'hidden',
	// },
	ui: {
		validate: (value) => {
			if (value !== true) {
				return '⚠️ Turning this on is only for Premium';
			}
		},
	},
};

import { TinaField } from 'tinacms';

export const materials: TinaField<false> = {
	label: '👑 Materials',
	name: 'materials',
	type: 'string',
	ui: {
		validate: (value) => {
			if (value?.length > 0) {
				return 'Only for Premium Member';
			}
		},
	},
};

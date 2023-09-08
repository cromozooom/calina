import { TinaField } from 'tinacms';

export const technique: TinaField<false> = {
	label: 'Technique used',
	name: 'techniqueUsed',
	type: 'string',
	ui: {
		validate: (value) => {
			if (value?.length > 120) {
				return 'Title cannot be more than 120 characters long';
			}
		},
	},
};

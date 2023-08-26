import { TinaField } from 'tinacms';

export const pageTitle: TinaField<false> = {
	label: 'Title',
	name: 'title',
	type: 'string',
	isTitle: true,
	required: true,
	description: 'Keep it Brief - this will become link (~60 characters)',
	ui: {
		validate: (value) => {
			if (value === 'small caps please') {
				return 'Change with a meaningful name small caps';
			} else {
				if (value?.length > 65) {
					return 'file name cannot be more than 65 characters long as it becomes link to the page';
				}
			}
		},
	},
};

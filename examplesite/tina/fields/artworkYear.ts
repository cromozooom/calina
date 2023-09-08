import { TinaField } from 'tinacms';

export const artworkYear: TinaField<false> = {
	label: 'Year',
	name: 'years',
	type: 'string',
	description: 'Creation year',
	ui: {
		component: 'date',
		dateFormat: 'YYYY',
		parse: (value) => value && value.format('YYYY'),
	},
};

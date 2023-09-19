import { TinaField } from 'tinacms';

export const artworkYear: TinaField<false> = {
	label: 'Year',
	name: 'years',
	type: 'datetime',
	description: 'Creation year',
	ui: {
		timeFormat: 'YYYY',
	},
};

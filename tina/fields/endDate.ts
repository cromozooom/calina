import { TinaField } from 'tinacms';

export const endDate: TinaField<false> = {
	label: '👑 End date',
	name: 'endDate',
	type: 'datetime',
	description: 'when event ends',
	ui: {
		timeFormat: 'YYYY:MM:DD:hh:mm',
	},
};

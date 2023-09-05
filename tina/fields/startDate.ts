import { TinaField } from 'tinacms';

export const startDate: TinaField<false> = {
	label: 'Start date',
	name: 'startDate',
	type: 'datetime',
	description: 'when event starts',
	ui: {
		timeFormat: 'YYYY:MM:DD:HH:mm',
	},
};

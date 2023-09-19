import { TinaField } from 'tinacms';

export const creationDate: TinaField<false> = {
	label: 'When was created',
	name: 'creationDate',
	type: 'datetime',
	ui: {
		timeFormat: 'YYYY:MM:DD:HH:mm',
	},
};

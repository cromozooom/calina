import { TinaField } from 'tinacms';

export const date: TinaField<false> = {
	label: 'Date',
	name: 'date',
	type: 'datetime',
	description: 'this should be today',
	// ui: {
	// 	component: 'hidden',
	// },
};

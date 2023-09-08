import { TinaField } from 'tinacms';

export const events: TinaField<false> = {
	label: 'event',
	name: 'events',
	type: 'string',
	description: 'event type',
	// list: true,
	options: [
		{
			value: 'event',
			label: 'event',
		},
		{
			value: 'exhibition',
			label: 'exhibition',
		},
		{
			value: 'solo',
			label: 'solo',
		},
		{
			value: 'other',
			label: 'other',
		},
	],
};

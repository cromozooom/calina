import { TinaField } from 'tinacms';

export const headerLevel: TinaField<false> = {
	label: 'Header level',
	name: 'headerLevel',
	type: 'string',
	options: [
		{
			value: '1',
			label: 'Heading 1',
		},
		{
			value: '2',
			label: 'Heading 2',
		},
		{
			value: '3',
			label: 'Heading 3',
		},
		{
			value: '4',
			label: 'Heading 4',
		},
		{
			value: '5',
			label: 'Heading 5',
		},
		{
			value: '6',
			label: 'Heading 6',
		},
	],
};

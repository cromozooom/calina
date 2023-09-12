// import { TinaField } from 'tinacms';

export const shortcodeFigure = {
	name: 'figure',
	label: 'Figure',
	match: {
		start: '{{<',
		end: '>}}',
	},
	fields: [
		{
			type: 'image',
			name: 'src',
			label: 'Asset',
			required: true,
		},
	],
};

import { TinaField } from 'tinacms';

export const location: TinaField<false> = {
	label: '👑 Location',
	name: 'location',
	type: 'object',
	fields: [
		{
			label: '👑 Line 1',
			name: 'line1',
			type: 'string',
			ui: {
				validate: (value) => {
					if (value?.length > 0) {
						return 'This field si only for Premium Member';
					}
				},
			},
		},
		{
			label: '👑 Line 2',
			name: 'line2',
			type: 'string',
			ui: {
				validate: (value) => {
					if (value?.length > 0) {
						return 'This field si only for Premium Member';
					}
				},
			},
		},
		{
			label: '👑 Post code',
			name: 'postCode',
			type: 'string',
			ui: {
				validate: (value) => {
					if (value?.length > 0) {
						return 'This field si only for Premium Member';
					}
				},
			},
		},
		{
			label: '👑 City',
			name: 'city',
			type: 'string',
			ui: {
				validate: (value) => {
					if (value?.length > 0) {
						return 'This field si only for Premium Member';
					}
				},
			},
		},

		{
			label: '👑 Link Direction',
			name: 'linkDirection',
			type: 'string',
			ui: {
				validate: (value) => {
					if (value?.length > 0) {
						return 'This field si only for Premium Member';
					}
				},
			},
		},
		{
			label: '👑 Map',
			name: 'map',
			type: 'string',
			ui: {
				validate: (value) => {
					if (value?.length > 0) {
						return 'This field si only for Premium Member';
					}
				},
			},
		},
	],
};

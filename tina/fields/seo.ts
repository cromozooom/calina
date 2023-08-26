import { TinaField } from 'tinacms';

export const seo: TinaField<false> = {
	label: 'Seo',
	name: 'seo',
	type: 'object',
	fields: [
		{
			label: 'Title',
			name: 'seo_title',
			type: 'string',
			description:
				'Title cannot be ~60 characters long as it becomes title of the page - (https://www.semrush.com/blog/title-tag/)',
			ui: {
				validate: (value) => {
					if (value?.length > 65) {
						return '';
					}
				},
			},
		},
		{
			label: 'Short name',
			name: 'short_name',
			type: 'string',
			description: 'used in breadkrumbs -it will be deprecated',
		},
		{
			label: '👑 Description (for snippets)',
			name: 'meta_description',
			type: 'string',
			description:
				'Premium Member Only - https://developers.google.com/search/docs/appearance/snippet#meta-descriptions',
			ui: {
				component: 'textarea',
				validate: (value) => {
					if (value?.length > 0) {
						return 'This field si only for Premium Member';
					}
				},
			},
		},
	],
};

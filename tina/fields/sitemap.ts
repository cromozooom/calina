import { TinaField } from 'tinacms';

export const sitemap: TinaField<false> = {
	label: '👑 Sitemap',
	description: 'remove this page from siteamp',
	name: 'siteMap',
	type: 'boolean',
	ui: {
		validate: (value) => {
			if (value === false) {
				return '⚠️ Turning this of is only for Premium';
			}
		},
	},
};

import { defineConfig } from 'tinacms';
import { customBranch } from './branch';
import {
	artworksGalleries,
	artworkTheme,
	artworkYear,
	creationDate,
	body,
	date,
	dimensions,
	draft,
	images,
	materials,
	pageTitle,
	price,
	seo,
	subTitle,
	technique,
	layout,
	startDate,
	stock,
	sitemap,
	weight,
	link,
	placeDescription,
	events,
	org,
	solo,
	location,
	endDate,
	inHome,
} from './fields/_fields';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || customBranch;

export default defineConfig({
	clientId: process.env.TINA_CLIENT_ID!,
	branch:
		process.env.TINA_BRANCH! ||
		// custom branch env override
		process.env.VERCEL_GIT_COMMIT_REF! ||
		// Vercel branch env
		process.env.HEAD!,
	// Netlify branch env
	token: process.env.TINA_TOKEN!,
	build: {
		outputFolder: 'admin',
		publicFolder: 'static',
	},
	media: {
		tina: {
			mediaRoot: 'uploads',
			publicFolder: 'content',
		},
	},

	schema: {
		collections: [
			{
				name: 'head',
				label: 'Head pages',
				path: 'content',
				match: {
					exclude: '**/**/uploads/_index',
					include: '**/**/_index',
				},
				format: 'md',
				fields: [draft, pageTitle, body, seo],
			},
			{
				name: 'artwork',
				label: 'Artworks',
				path: 'content/artwork',
				match: {
					exclude: '**/**/_index',
				},
				format: 'md',
				defaultItem: () => {
					return {
						layout: 'artwork',
						date: new Date().toISOString(),
						title: 'small caps please',
						siteMap: true,
						inHome: false,
						price: 0,
						weight: 0,
						stock: 0,
						years: 1976,
						creationDate: 'May 23, 1976',
					};
				},
				// ui: {
				// 	filename: {
				// 		// if disabled, the editor can not edit the filename
				// 		readonly: true,
				// 		// Example of using a custom slugify function
				// 		slugify: (values) => {
				// 			// Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
				// 			return `${values?.title?.toLowerCase().replace(/ /g, '-')}`;
				// 		},
				// 	},
				// },
				fields: [
					draft,
					pageTitle,
					date,
					artworkYear,
					artworkTheme,
					artworksGalleries,
					technique,
					dimensions,
					body,
					images,
					seo,
					creationDate,
					materials,
					stock,
					price,
					weight,
					sitemap,
					layout,
				],
			},
			{
				name: 'event',
				label: 'Events',
				path: 'content/event',
				match: {
					exclude: '**/**/_index',
				},
				defaultItem: () => {
					return {
						eventCategory: 'exhibition',
						layout: 'event',
						date: new Date().toISOString(),
						endDate: 'May 23, 1976',
						hour: 'only for premium member',
						solo: true,
						org: 'only for premium member',
					};
				},
				fields: [
					draft,
					pageTitle,
					subTitle,
					date,
					startDate,
					link,
					placeDescription,
					events,
					body,
					seo,
					org,
					solo,
					inHome,
					location,
					endDate,

					{
						label: '👑 Event Category',
						description: '⚠️ should be event',
						name: 'eventCategory',
						type: 'string',
						// ui: {
						// 	component: 'hidden',
						// },
					},
					layout,
				],
			},
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				fields: [draft, pageTitle, subTitle, date, seo, body, sitemap],
			},
			{
				name: 'pages',
				label: 'Pages',
				path: 'content',
				match: {
					include: '**/**/index',
				},
				fields: [draft, pageTitle, subTitle, date, seo, body, sitemap],
			},
		],
	},
	search: {
		tina: {
			indexerToken: process.env.TINA_SEARCH_TOKEN!,
			stopwordLanguages: ['eng'],
		},
		indexBatchSize: 100,
		maxSearchIndexFieldLength: 100,
	},
});

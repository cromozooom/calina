import { defineConfig } from 'tinacms';
import { customBranch } from './branch';
import {
	artworksGalleries,
	artworkTheme,
	artworkYear,
	body,
	dimensions,
	draft,
	images,
	pageTitle,
	seo,
	technique,
	layout,
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
					{
						label: 'Date',
						name: 'date',
						type: 'datetime',
						description: 'this should be today',
						ui: {
							component: 'hidden',
						},
					},
					artworkYear,
					artworkTheme,
					artworksGalleries,
					technique,
					dimensions,
					body,
					images,
					seo,

					{
						label: '👑 When was created',
						name: 'creationDate',
						type: 'string',
						ui: {
							validate: (value) => {
								if (value !== 'May 23, 1976') {
									return '⚠️ Changing this date is only for Premium (May 23, 1976)';
								}
							},
						},
					},
					{
						label: '👑 Materials',
						name: 'materials',
						type: 'string',
						ui: {
							validate: (value) => {
								if (value?.length > 0) {
									return 'Only for Premium Member';
								}
							},
						},
					},
					{
						label: '💰 Stock',
						name: 'stock',
						type: 'number',
						description: 'Is this in stock',
						ui: {
							validate: (value) => {
								if (value > 0) {
									return 'only for store owners / please set back to "0"';
								}
							},
						},
					},
					{
						label: '💰 Price',
						name: 'price',
						type: 'number',
						description: 'is used only for store',
						ui: {
							validate: (value) => {
								if (value > 0) {
									return 'only for store owners / please set back to "0"';
								}
							},
						},
					},
					{
						label: '💰 Weight',
						name: 'weight',
						type: 'number',
						description: 'is used only for store',
						ui: {
							validate: (value) => {
								if (value > 0) {
									return 'only for store owners / please set back to "0"';
								}
							},
						},
					},
					{
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
					},
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
					{
						label: 'Subtitle',
						name: 'sub_title',
						type: 'string',
						required: true,
						description: 'this will emphatised',
					},
					{
						label: 'Date',
						name: 'date',
						type: 'datetime',
						description: 'this should be today',
						ui: {
							component: 'hidden',
						},
					},
					{
						label: 'Start date',
						name: 'startDate',
						type: 'datetime',
						description: 'when event starts',
					},
					{
						label: 'Link to refferrence',
						name: 'link',
						type: 'string',
					},
					{
						label: 'Place',
						name: 'place',
						type: 'string',
					},
					{
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
					},
					body,
					seo,
					{
						label: '👑 Organised by',
						name: 'org',
						type: 'string',
						required: true,
						description: 'could be even you. (only for Premium)',
						ui: {
							validate: (value) => {
								if (value !== 'only for premium member') {
									return '⚠️ only for Premium';
								}
							},
						},
					},
					{
						label: '👑 Solo',
						name: 'solo',
						description: 'Is this a solo event? - available only for Premium',
						type: 'boolean',
						// ui: {
						// 	component: 'hidden',
						// },
						ui: {
							validate: (value) => {
								if (value !== true) {
									return '⚠️ Turning this on is only for Premium';
								}
							},
						},
					},
					{
						label: '👑 In Home Page',
						description: 'Add this item to home page',
						name: 'inHome',
						type: 'boolean',
						ui: {
							validate: (value) => {
								if (value === true) {
									return '⚠️ Turning this on is only for Premium';
								}
							},
						},
					},
					{
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
					},

					{
						label: '👑 End date',
						name: 'endDate',
						type: 'string',
						description: 'when event ends',
						ui: {
							validate: (value) => {
								if (value !== 'May 23, 1976') {
									return '⚠️ Changing this date is only for Premium (May 23, 1976)';
								}
							},
						},
						// ui: {
						// 	component: 'hidden',
						// },
					},
					{
						label: '👑 Hour format hh:mm',
						name: 'hour',
						type: 'string',
						description: 'don`t use AM/PM use 16.00 or 10.30',
						ui: {
							validate: (value) => {
								if (value !== 'only for premium member') {
									return '⚠️ Changing this hour is only for Premium (only for premium member)';
								}
							},
						},
					},

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
				fields: [draft, pageTitle, body],
			},
			{
				name: 'pages',
				label: 'Pages',
				path: 'content',
				match: {
					include: '**/**/index',
				},
				fields: [
					{
						label: 'Draft',
						name: 'draft',
						type: 'boolean',
					},
					{
						label: 'Title',
						name: 'title',
						type: 'string',
						isTitle: true,
						required: true,
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
						templates: [
							{
								name: 'hero',
								label: 'hero',
								match: {
									start: '{{%',
									end: '%}}',
								},
								fields: [
									{
										label: 'Title',
										name: 'title',
										type: 'string',
									},
									{
										label: 'Side',
										name: 'side',
										type: 'string',
										options: [
											{
												value: 'left',
												label: 'left',
											},
											{
												value: 'right',
												label: 'right',
											},
											{
												value: 'center',
												label: 'center',
											},
										],
									},
									{
										name: 'children',
										type: 'rich-text',
									},
									{
										type: 'image',
										name: 'asset',
										label: 'Asset',
										required: true,
									},
								],
							},
							{
								name: 'map',
								label: 'map',
								match: {
									start: '{{%',
									end: '%}}',
								},
								fields: [
									{
										label: 'Title',
										name: 'title',
										type: 'string',
										required: true,
									},
									{
										name: 'children',
										type: 'rich-text',
									},
									{
										name: 'map',
										label: 'map',
										type: 'string',
										required: true,
										description: 'take only the src tag from iframe',
									},
								],
							},
						],
					},
				],
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

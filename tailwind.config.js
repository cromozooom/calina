const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const { _brandDark, _brand, _accentDark, _accent, _neutralDark, _neutral } = require('./taylwind/theme');

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgba(var(${variableName}))`;
	};
}

module.exports = {
	darkMode: 'class',
	content: ['./hugo_stats.json'],
	safelist: [
		'[&>*:first-child>a]:rounded-s',
		'[&>*:last-child>a]:rounded-e',
		'[&>*:first-child>a]:border-s',
		'[&>*:last-child>a]:border-e',
		'[&>*:first-child>span]:rounded-s',
		'[&>*:last-child>span]:rounded-e',
		'[&>*:first-child>span]:border-s',
		'[&>*:last-child>span]:border-e',
		'[&>*:svg]:',

		// splide
		'.splide',
		'.splide .splide__pagination__page',
		'.splide .splide__pagination__page.is-active',
		'.splide .splide__arrow:disabled',
		'.splide .splide__arrow',
		'.splide .splide__arrow svg',
		'.splide .splide__pagination',
		'.splide .splide__pagination__page',

		// elevator
		'[&_div]:md:animate-toUpMD',
		'[&_div]:md:animate-toUpSlowMD',
		'[&_div]:animate-toUp',
		'[&_div]:animate-toUpSlow',
	],
	plugins: [typography, forms],
	theme: {
		extend: {
			colors: {
				brand: _brand,
				brandDark: _brandDark,
				accent: _accent,
				accentDark: _accentDark,
				neutral: _neutral,
				neutralDark: _neutralDark,
			},
			// ANIMATION for elevator
			keyframes: {
				toUp: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(calc((-1px * (var(--column-height)) / 2)))' },
				},
			},

			animation: {
				toUpMD: 'toUp calc(var(--column-height) / 250 * 1s) infinite linear',
				toUpSlowMD: 'toUp calc(var(--column-height) / 150 * 1s) infinite linear',
				toUp: 'toUp calc(var(--column-height) / 250 * 1s) infinite linear',
				toUpSlow: 'toUp calc(var(--column-height) / 80 * 1s) infinite linear',
			},

			fontFamily: {
				serif: ['Noto Serif', 'serif'],
				sans: ['Noto Sans', 'sans-serif'],
				mono: ['monospace'],
			},

			boxShadow: {
				myShadow: '0 3px 8px -4px rgba(0, 0, 0, 0.15)',
				'myShadow-hover': '0 15px 20px -5px rgba(0, 0, 0, 0.2)',
			},

			typography: (theme) => ({
				brand: {
					css: {
						'--tw-prose-body': theme('colors.neutral[11]'),
						'--tw-prose-headings': theme('colors.brand[11]'),
						'--tw-prose-lead': theme('colors.neutral[11]'),
						'--tw-prose-links': theme('colors.brand[9]'),
						'--tw-prose-bold': theme('colors.neutral[12]'),
						'--tw-prose-counters': theme('colors.brand[8]'),
						'--tw-prose-bullets': theme('colors.brand[8]'),
						'--tw-prose-hr': theme('colors.brand[5]'),
						'--tw-prose-quotes': theme('colors.brand[10]'),
						'--tw-prose-quote-borders': theme('colors.brand[7]'),
						'--tw-prose-captions': theme('colors.brand[7]'),
						'--tw-prose-code': theme('colors.brand[9]'),
						'--tw-prose-code-bg': theme('colors.brand[50]'),
						'--tw-prose-pre-code': theme('colors.brand[1]'),
						'--tw-prose-pre-bg': theme('colors.brand[9]'),
						'--tw-prose-th-borders': theme('colors.brand[3]'),
						'--tw-prose-td-borders': theme('colors.brand[2]'),
						'--tw-format-th-bg': theme('colors.brand[50]'),

						'--tw-prose-invert-body': theme('colors.neutralDark[11]'),
						'--tw-prose-invert-headings': theme('colors.brandDark[9]'),
						'--tw-prose-invert-lead': theme('colors.neutralDark[10]'),
						'--tw-prose-invert-links': theme('colors.brandDark[9]'),
						'--tw-prose-invert-bold': theme('colors.neutralDark[12]'),
						'--tw-prose-invert-counters': theme('colors.brandDark[8]'),
						'--tw-prose-invert-bullets': theme('colors.brandDark[8]'),
						'--tw-prose-invert-hr': theme('colors.brandDark[5]'),
						'--tw-prose-invert-quotes': theme('colors.brandDark[10]'),
						'--tw-prose-invert-quote-borders': theme('colors.brandDark[7]'),
						'--tw-prose-invert-captions': theme('colors.brandDark[7]'),
						'--tw-prose-invert-code': theme('colors.brandDark[9]'),
						'--tw-prose-invert-code-bg': theme('colors.brandDark[50]'),
						'--tw-prose-invert-pre-code': theme('colors.brandDark[1]'),
						'--tw-prose-invert-pre-bg': theme('colors.brandDark[9]'),
						'--tw-prose-invert-th-borders': theme('colors.brandDark[3]'),
						'--tw-prose-invert-td-borders': theme('colors.brandDark[2]'),
						'--tw-format-invert-th-bg': theme('colors.brandDark[50]'),
					},
				},
			}),
		},
	},
};

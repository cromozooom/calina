import { TinaField } from 'tinacms';
import { shortcodeHero, shortcodeMap } from './_shortcodes';

export const body: TinaField<false> = {
	type: 'rich-text',
	name: 'body',
	label: 'Body',
	isBody: true,
	templates: [shortcodeHero, shortcodeMap],
};

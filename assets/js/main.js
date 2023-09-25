// From main
import { siteTheme } from './lib/siteTheme';
import { scrollToReveal } from './lib/scrollToReveal';
import { initializeToolTips } from './lib/toolTip';

// From the Hugo template.
import * as params from '@params';

scrollToReveal();
siteTheme();
initializeToolTips();

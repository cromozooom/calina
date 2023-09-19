export function siteTheme() {
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
		document.documentElement.style.colorScheme = 'dark'; // Add this line
	} else {
		document.documentElement.classList.remove('dark');
		document.documentElement.style.colorScheme = 'light'; // Add this
	}
}

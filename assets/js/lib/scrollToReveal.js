export function scrollToReveal() {
	return {
		sticky: false,
		lastPos: window.scrollY + 0,
		scroll() {
			this.sticky = window.scrollY > this.$refs.navbar.offsetHeight && this.lastPos > window.scrollY;
			this.lastPos = window.scrollY;
		},
	};
}

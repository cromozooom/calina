import Alpine from 'alpinejs';

Alpine.directive('lazyload', (el) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src;
				img.srcset = img.dataset.srcset;
				observer.unobserve(img);
			}
		});
	});
	observer.observe(el);
});
export default Alpine;

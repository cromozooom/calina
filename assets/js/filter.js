document.addEventListener('alpine:init', () => {
	function alpineLoaded() {
		console.log('filter');
	}

	Alpine.data('collection', () => ({
		//  filter atributes
		viewAttributes: {
			price: true,
			shipping: true,
			weight: true,
			size: true,
			custom_order: true,
			dim: true,
			bach: true,
			id: true,
			discount15: true,
			discount20: true,
			discount25: true,
			type: true,
		},

		gridLayout: false,
		isLoading: true,
		themes: [],
		years: [],
		ratios: [],
		hues: [],

		batches: [],
		shapes: [],
		sizes: [],
		stocks: [],
		archives: [],
		filters: {
			theme: '',
			year: '',
			ratio: '',
			hue: '',

			batch: '',
			shape: '',
			size: '',
			stock: '',
			archive: '',
		},

		artworks: [],
		artworksCustomLinst: [],
		limit: 15,
		itemsPerPage: 2000,
		currentPage: 0,
		artworkCounter: 0,
		numberOfPages: null,

		haveLink: false,

		idList: [],
		linkIds: [],

		int: [],
		linkList: [],
		url: new URL(window.location.href),

		archive: false,

		// Get artworks
		async getArtworks() {
			this.int = await (await fetch('index.json')).json();
			this.isLoading = false;
			this.artworks = this.int;

			function getUniqueHues(artwork) {
				return [...new Set(artwork.hue)];
			}

			// Step 1: Create Buttons for Each Theme
			this.themes = [...new Set(this.artworks.flatMap((artwork) => artwork.theme))];
			this.years = [...new Set(this.artworks.map((artwork) => artwork.year))];
			this.ratios = [...new Set(this.artworks.map((artwork) => artwork.ratio))];
			this.huesx = [...new Set(this.artworks.flatMap((artwork) => artwork.hue))];
			this.hues = [...new Set(this.artworks.flatMap(getUniqueHues))];
			console.log(this.rations);
		},

		page() {
			filtered = this.filteredArtworks.slice(
				this.currentPage * this.itemsPerPage,
				(this.currentPage + 1) * this.itemsPerPage,
			);
			return filtered;
		},

		resetFilters() {
			this.filters.theme = '';
			this.filters.hue = '';
			this.filters.year = '';
			this.filters.ratio = '';
		},

		filtersHaveValue() {
			return Object.values(this.filters).some((value) => value !== '');
		},

		refreshLists() {
			console.log('fn: refreshLists');
		},

		get filteredArtworks() {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = entry.target;
						img.src = img.dataset.src;
						observer.unobserve(img);
					}
				});
			});
			// Observe all the images with a `data-src` attribute
			const images = document.querySelectorAll('img[data-src]');
			images.forEach((img) => observer.observe(img));

			const filtered = this.artworks.filter((item) => {
				for (var key in this.filters) {
					if (this.filters[key] === '') {
						continue;
					}

					if (!String(item[key]).includes(this.filters[key])) {
						return false;
					}
				}

				return true;
			});

			this.artworkCounter = filtered.length;

			console.log(filtered.length);

			const viewAttrs = this.computedViewAttributes;

			return filtered;
		},

		init() {
			this.getArtworks();
		},
	}));
});

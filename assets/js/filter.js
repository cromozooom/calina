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

		showFilters: false,
		showTints: false,

		gridLayout: false,
		isLoading: true,
		themes: [],
		orientations: [],
		years: [],
		ratios: [],
		sizes: [],
		hues: [],

		batches: [],
		shapes: [],
		stocks: [],
		archives: [],
		filters: {
			theme: '',
			year: '',
			ratio: '',
			size: '',
			hue: '',
			orientation: '',
			stock: '',

			batch: '',
			shape: '',
			size: '',
			archive: '',
		},

		artworks: [],
		artworksCustomLinst: [],
		limit: 20,
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

		// Computed property to sort hues
		get sortedHues() {
			return this.hues.sort((a, b) => a - b);
		},

		// count number of filter aplied
		get filtersCount() {
			const filters = this.filters;
			let count = 0;

			for (const key in filters) {
				if (filters[key] !== '') {
					count++;
				}
			}

			// for (const key in filters) {
			// 	if (key !== 'hue' && filters[key] !== '') {
			// 		count++;
			// 	}
			// }

			return count;
		},

		// Get artworks
		async getArtworks() {
			// remove hues list on scroll
			window.addEventListener('scroll', () => {
				// Update showTints here based on your conditions
				this.showTints = false; // or false
			});

			this.int = await (await fetch('index.json')).json();
			this.isLoading = false;
			this.artworks = this.int;

			function getUniqueHues(artwork) {
				return [...new Set(artwork.hue)];
			}

			// Step 1: Create Buttons for Each Theme
			this.themes = [...new Set(this.artworks.flatMap((artwork) => artwork.theme))];
			this.orientations = [...new Set(this.artworks.flatMap((artwork) => artwork.orientation))];
			this.stocks = [...new Set(this.artworks.map((artwork) => artwork.stock))];
			this.years = [...new Set(this.artworks.map((artwork) => artwork.year))];
			this.sizes = [...new Set(this.artworks.map((artwork) => artwork.size))];
			this.ratios = [...new Set(this.artworks.map((artwork) => artwork.ratio))];
			this.hues = [...new Set(this.artworks.flatMap((artwork) => artwork.hue))];
			console.log(this.rations);
		},

		page() {
			filtered = this.filteredArtworks.slice(
				this.currentPage * this.itemsPerPage,
				(this.currentPage + 1) * this.itemsPerPage,
			);
			return filtered;
		},

		// toggleStockFilter() {
		// console.log('line1' + this.filters.stock);
		// if (this.filters.stock === 'true') {
		// console.log('line2' + this.filters.stock);
		// this.filters.stock = ''; // Toggle to empty string (both true and false)
		// } else {
		// console.log('line3' + this.filters.stock);
		// this.filters.stock = 'true'; // Toggle to true
		// }
		// },

		toggleStockFilter() {
			if (this.filters.stock === 'true') {
				this.filters.stock = ''; // Toggle to empty string (both true and false)
			} else {
				this.filters.stock = 'true'; // Toggle to true
			}
		},

		resetFilter(filter) {
			this.filters[filter] = '';
		},
		resetFilters() {
			this.filters.theme = '';
			this.filters.hue = '';
			this.filters.year = '';
			this.filters.ratio = '';
			this.filters.orientation = '';
			this.filters.size = '';
			this.filters.stock = '';
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

					if (key === 'hue') {
						// Check if the selected hue value exists within the artwork's "hue" array
						if (!item.hue.includes(parseInt(this.filters.hue))) {
							return false;
						}
					} else {
						if (!String(item[key]).includes(this.filters[key])) {
							return false;
						}
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
			window.addEventListener('scroll', this.handleScroll);
			this.getArtworks();
		},

		destroy() {
			window.removeEventListener('scroll', this.handleScroll);
		},
	}));
});

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

		showFilters: true,
		showTints: false,

		gridLayout: false,
		isLoading: true,

		orientations: [],
		themes: [],
		years: [],
		ratios: [],
		sizes: [],
		widths: [],
		heights: [],
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
			width: '',
			height: '',

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

		// count number of filter aplied
		get filtersCount() {
			const filters = this.filters;
			let count = 0;

			for (const key in filters) {
				if (filters[key] !== '') {
					count++;
				}
			}

			return count;
		},

		// V01
		// itemCounts(item) {
		// 	const counts = {};
		// 	const filterKey = this.getFilterKey(item);
		// 	const filterValues = this[filterKey];

		// 	filterValues.forEach((value) => {
		// 		const filteredArtworks = this.filteredArtworks.filter((artwork) => artwork[item] === value);
		// 		counts[value] = filteredArtworks.length;
		// 	});

		// 	return counts;
		// },

		// V02

		// itemCounts(item) {
		// 	const counts = {};
		// 	const filterKey = this.getFilterKey(item); // Helper function to get the filter key dynamically
		// 	const filterValues = this[filterKey];

		// 	filterValues.forEach((value) => {
		// 		const filteredArtworks = this.filteredArtworks.filter((artwork) => {
		// 			if (Array.isArray(artwork[item])) {
		// 				return artwork[item].includes(value);
		// 			} else if (typeof artwork[item] === 'string') {
		// 				return artwork[item] === value;
		// 			}
		// 			return false;
		// 		});
		// 		counts[value] = filteredArtworks.length;
		// 	});

		// 	return counts;
		// },

		// V03

		// itemCounts(item) {
		// 	const counts = {};
		// 	const filterKey = this.getFilterKey(item); // Helper function to get the filter key dynamically
		// 	const filterValues = this[filterKey];

		// 	filterValues.forEach((value) => {
		// 		const filteredArtworks = this.filteredArtworks.filter((artwork) => {
		// 			if (item === 'width' || item === 'height') {
		// 				// Handle numeric comparisons for width and height
		// 				return parseInt(artwork[item]) === parseInt(value);
		// 			} else if (Array.isArray(artwork[item])) {
		// 				// Handle array comparison
		// 				return artwork[item].includes(value);
		// 			} else if (typeof artwork[item] === 'string') {
		// 				// Handle string comparison
		// 				return artwork[item] === value;
		// 			}
		// 			return false;
		// 		});
		// 		counts[value] = filteredArtworks.length;
		// 	});

		// 	return counts;
		// },

		// V04 works till HUES

		// itemCounts(item) {
		// 	const counts = {};
		// 	const filterKey = this.getFilterKey(item);
		// 	const filterValues = this[filterKey];

		// 	filterValues.forEach((value) => {
		// 		const filteredArtworks = this.filteredArtworks.filter((artwork) => {
		// 			if (item === 'width' || item === 'height' || item === 'year') {
		// 				// Handle numeric comparisons for width, height, and year
		// 				return parseInt(artwork[item]) === parseInt(value);
		// 			} else if (Array.isArray(artwork[item])) {
		// 				// Handle array comparison
		// 				return artwork[item].includes(value);
		// 			} else if (typeof artwork[item] === 'string') {
		// 				// Handle string comparison
		// 				return artwork[item] === value;
		// 			}
		// 			return false;
		// 		});
		// 		counts[value] = filteredArtworks.length;
		// 	});

		// 	return counts;
		// },

		// V05 fix hue

		itemCounts(item) {
			const counts = {};
			const filterKey = this.getFilterKey(item);
			const filterValues = this[filterKey];

			console.log('item:', item);
			// console.log('Filter Key:', filterKey);
			// console.log('Filter Values:', filterValues);

			filterValues.forEach((value) => {
				const filteredArtworks = this.filteredArtworks.filter((artwork) => {
					if (item === 'width' || item === 'height' || item === 'year') {
						// Handle numeric comparisons for width, height, and year
						return parseInt(artwork[item]) === parseInt(value);
					} else if (item === 'hue') {
						// Handle array comparison for hue
						// Ensure artwork[item] is an array before using includes method
						return Array.isArray(artwork[item]) && artwork[item].includes(parseInt(value));
					} else if (Array.isArray(artwork[item])) {
						// Handle array comparison for other array attributes
						return artwork[item].includes(value);
					} else if (typeof artwork[item] === 'string') {
						// Handle string comparison
						return artwork[item] === value;
					}
					return false;
				});
				counts[value] = filteredArtworks.length;
			});

			return counts;
		},

		// Helper function to get the filter key dynamically based on the filter item
		getFilterKey(item) {
			// Define a mapping of filter items to corresponding data properties
			const filterMapping = {
				width: 'sortedWidths',
				height: 'sortedHeights',
				hue: 'sortedHues',
				orientation: 'orientations',
				theme: 'themes',
				year: 'years',
				ratio: 'ratios',
				size: 'sizes',
				shape: 'shapes',
				stock: 'stocks',
				// Add more filter items here
			};
			return filterMapping[item];
		},

		sortedHues: [],
		sortedHeights: [],
		sortedWidths: [],
		sortNumbersAsc(array) {
			return array.sort((a, b) => a - b);
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

			// function getUniqueHues(artwork) {
			// 	return [...new Set(artwork.hue)];
			// }
			// function getUniqueHeights(artwork) {
			// 	return [...new Set(artwork.height)];
			// }
			// function getUniqueWidths(artwork) {
			// 	return [...new Set(artwork.width)];
			// }

			// Step 1: Create Buttons for Each Theme
			this.orientations = [...new Set(this.artworks.flatMap((artwork) => artwork.orientation))];
			this.themes = [...new Set(this.artworks.flatMap((artwork) => artwork.theme))];

			this.stocks = [...new Set(this.artworks.map((artwork) => artwork.stock))];
			this.years = [...new Set(this.artworks.map((artwork) => artwork.year))];
			this.heights = [...new Set(this.artworks.map((artwork) => parseInt(artwork.height)))];
			this.widths = [...new Set(this.artworks.map((artwork) => parseInt(artwork.width)))];
			this.sizes = [...new Set(this.artworks.map((artwork) => artwork.size))];
			this.ratios = [...new Set(this.artworks.map((artwork) => artwork.ratio))];
			this.hues = [...new Set(this.artworks.flatMap((artwork) => artwork.hue))];

			this.sortedHues = this.sortNumbersAsc(this.hues);
			this.sortedHeights = this.sortNumbersAsc(this.heights);
			this.sortedWidths = this.sortNumbersAsc(this.widths);
		},

		page() {
			filtered = this.filteredArtworks.slice(
				this.currentPage * this.itemsPerPage,
				(this.currentPage + 1) * this.itemsPerPage,
			);
			return filtered;
		},

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
			this.filters.width = '';
			this.filters.height = '';
		},

		filtersHaveValue() {
			return Object.values(this.filters).some((value) => value !== '');
		},

		refreshLists() {
			// console.log('fn: refreshLists');
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
					} else if (key === 'width' || key === 'height') {
						// Handle numeric comparisons
						if (parseInt(item[key]) !== parseInt(this.filters[key])) {
							return false;
						}
					} else if (key === 'orientation') {
						// Handle string comparison for orientation
						if (item[key] !== this.filters[key]) {
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

			const viewAttrs = this.computedViewAttributes;

			return filtered;
		},

		// V1 doesn't work
		// get filteredArtworks() {
		// 	const observer = new IntersectionObserver((entries) => {
		// 		entries.forEach((entry) => {
		// 			if (entry.isIntersecting) {
		// 				const img = entry.target;
		// 				img.src = img.dataset.src;
		// 				observer.unobserve(img);
		// 			}
		// 		});
		// 	});

		// 	// Observe all the images with a `data-src` attribute
		// 	const images = document.querySelectorAll('img[data-src]');
		// 	images.forEach((img) => observer.observe(img));

		// 	const filtered = this.artworks.filter((item) => {
		// 		for (var key in this.filters) {
		// 			if (this.filters[key] === '') {
		// 				continue;
		// 			}

		// 			if (key === 'hue' || key === 'width' || key === 'height') {
		// 				// Handle numeric comparisons
		// 				if (parseInt(item[key]) !== parseInt(this.filters[key])) {
		// 					return false;
		// 				}
		// 			} else if (key === 'orientation') {
		// 				// Handle string comparison for orientation
		// 				if (item[key] !== this.filters[key]) {
		// 					return false;
		// 				}
		// 			} else {
		// 				// Handle other properties with simple string comparison
		// 				if (!String(item[key]).includes(this.filters[key])) {
		// 					return false;
		// 				}
		// 			}
		// 		}

		// 		return true;
		// 	});

		// 	this.artworkCounter = filtered.length;

		// 	const viewAttrs = this.computedViewAttributes;

		// 	return filtered;
		// },

		init() {
			window.addEventListener('scroll', this.handleScroll);
			this.getArtworks();
		},

		destroy() {
			window.removeEventListener('scroll', this.handleScroll);
		},
	}));
});

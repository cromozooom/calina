// gallery.js

// Helper function to chunk an array into groups
function chunkArray(array, size) {
	const chunked = [];
	const chunkSize = Math.ceil(array.length / size);

	for (let i = 0; i < size; i++) {
		const start = i * chunkSize;
		const end = (i + 1) * chunkSize;
		chunked.push(array.slice(start, end));
	}

	return chunked;
}

// Alpine.js initialization
document.addEventListener('DOMContentLoaded', function () {
	const imageGroups = Alpine.store('imageGroups', {
		isMobile: window.innerWidth <= 768,
		columns: 0,
		columnHeights: [],
		imageGroups: [],
		images: [],
	});

	const calculateColumns = () => {
		if (window.innerWidth >= 1280) {
			return 4; // 4 columns on screens larger than or equal to 1280px
		} else if (window.innerWidth >= 768) {
			return 3; // 3 columns on screens larger than or equal to 768px
		} else {
			return 2; // 2 columns on screens less than 768px
		}
	};

	const updateColumns = () => {
		const newColumns = calculateColumns();
		if (newColumns !== imageGroups.columns) {
			imageGroups.columns = newColumns;
			const chunkedImages = chunkArray(imageGroups.images, newColumns);
			imageGroups.imageGroups = chunkedImages.map((group, index) => ({
				images: group.concat(group),
				animationClass:
					index % 2 === 0
						? '[&_div]:md:animate-toUpMD [&_div]:animate-toUpSlow'
						: '[&_div]:md:animate-toUpSlowMD [&_div]:animate-toUpSlow',
			}));
		}
	};

	// Fetch data from the API
	fetch('/artworks/gallery/index.json')
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Failed to fetch data from the API');
			}
		})
		.then((data) => {
			// Update the 'images' array with data from the API response
			imageGroups.images = data;
			// Initial column calculation
			updateColumns();
			// Calculate and set column heights and grid height
			calculateAndSetColumnHeights();
			calculateAndSetGridHeight();
		})
		.catch((error) => {
			console.error('Error fetching data from the API:', error);
		});

	// Listen for window resize events and update columns accordingly
	window.addEventListener('resize', updateColumns);

	// Calculate and set the column heights as CSS variables
	function calculateAndSetColumnHeights() {
		const colElements = document.querySelectorAll('.calcColHeight');
		const heights = Array.from(colElements).map((col) => col.offsetHeight);

		colElements.forEach((col, index) => {
			col.style.setProperty('--column-height', heights[index]);
			// Update the columnHeights array in Alpine.js store
			imageGroups.columnHeights[index] = heights[index];
		});
	}

	// Calculate and set the grid height as a CSS variable separately
	function calculateAndSetGridHeight() {
		const grid = document.querySelector('.elevator');
		const gridHeight = grid.offsetHeight;
		const gridHeightVar = gridHeight;

		// Set the CSS variable for .colGrid
		const boxElement = document.querySelector('.box');
		if (boxElement) {
			boxElement.style.setProperty('--grid-height', gridHeightVar);
		}
	}

	// Listen for the 'load' event on images to trigger the calculation
	window.addEventListener('load', () => {
		setTimeout(() => {
			calculateAndSetColumnHeights();
			calculateAndSetGridHeight();
		}, 1000);
	});

	// Recalculate heights on window resize
	window.addEventListener('resize', () => {
		calculateAndSetColumnHeights();
		calculateAndSetGridHeight();
	});
});

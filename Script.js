// Disable Edge Visual Search overlay on large images by adding a class
document.addEventListener('DOMContentLoaded', () => {
	try {
		const MIN_SIZE = 180; // Edge typically targets larger images
		document.querySelectorAll('img').forEach(img => {
			const w = img.naturalWidth || img.width || 0;
			const h = img.naturalHeight || img.height || 0;
			if (w >= MIN_SIZE && h >= MIN_SIZE) img.classList.add('disable-visual-search');
		});
	} catch (e) { console.error('Script.js error:', e); }
});

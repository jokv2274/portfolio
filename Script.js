// Disable Edge Visual Search overlay on large images by adding a class
document.addEventListener('DOMContentLoaded', () => {
	try {
		const MIN_SIZE = 180; // Edge typically targets larger images
		document.querySelectorAll('img').forEach(img => {
			const w = img.naturalWidth || img.width || 0;
			const h = img.naturalHeight || img.height || 0;
			if (w >= MIN_SIZE && h >= MIN_SIZE) {
				img.classList.add('disable-visual-search');

				// Ensure image still opens lightbox: delegate click to parent element.
				// Many pages use inline onclick="openLightbox(this)" on the img.
				// When pointer-events are disabled on the img, clicks fall through to the parent.
				const parent = img.parentElement;
				if (parent) {
					parent.style.cursor = img.style.cursor || 'pointer';
					parent.addEventListener('click', (e) => {
						// Prevent double-handling if the image itself still receives events
						e.preventDefault();
						e.stopPropagation();
						try {
							if (typeof openLightbox === 'function') {
								openLightbox(img);
							} else if (img.onclick) {
								img.onclick();
							}
						} catch (err) { /* ignore */ }
					});
				}
			}
		});
	} catch (e) { console.error('Script.js error:', e); }
});

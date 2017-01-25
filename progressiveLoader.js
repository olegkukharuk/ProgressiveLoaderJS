/**
 * ProgressiveLoaderJS <https://github.com/olegkukharuk/ProgressiveLoaderJS>
 * By Oleg Kukharuk
 * olegkukharuk@gmail.com
 * http://olegkukharuk.com
 */

// TODO: Add loading of background images

function progressiveLoader () {
	var items = document.getElementsByClassName('progressiveLoader'),
		  itemsCount = items.length,
		  itemsLoaded = 0;
	if (itemsCount > 0) {
		function load ( i ) {
			var element = items[ i ];
			var image = new Image();
				  image.src = element.getAttribute('data-original');
			image.onload = function () {
				element.src = element.getAttribute('data-original');
				itemsLoaded++;
				if (itemsCount !== itemsLoaded) {
					load ( itemsLoaded );
				}
			};
		}
		load (0);
	}
}
document.addEventListener("DOMContentLoaded", progressiveLoader);

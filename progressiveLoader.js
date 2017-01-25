/**
 * ProgressiveLoaderJS <https://github.com/olegkukharuk/ProgressiveLoaderJS>
 * By Oleg Kukharuk
 * olegkukharuk@gmail.com
 * http://olegkukharuk.com
 */

function progressiveLoader () {
	var items = document.getElementsByClassName('progressiveLoader'),
		  itemsCount = items.length,
		  itemsLoaded = 0;
	if (itemsCount > 0) {
		function load ( i ) {
			var element = items[ i ],
				  imageUrl = element.getAttribute('data-original');
			var image = new Image();
				  image.src = imageUrl;
			image.onload = function () {
				if (element.getAttribute('src') == null) {
					element.style.backgroundImage = 'url(' + imageUrl + ')';
				} else {
					element.src = imageUrl;
				}
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

define('app/DrawingLayer', ['core/dom'], function(dom) {

	function Drawing(elem, events) {

		var context = elem.getContext("2d");
		var drawables = [];

		this.init = function() {
			var self = this;

			dom.bind(window, "resize", function() {
				self.resize();
			});

			this.resize();
		};

		this.add = function(drawable) {
			drawables.push(drawable);
			drawable.draw(context);
			events.trigger('drawableadded', drawable);
		}
		
		this.clear = function() {
			context.clearRect(0, 0, elem.width, elem.height);
		};

		this.resize = function() {
			elem.width = elem.parentNode.scrollWidth;
			elem.height = elem.parentNode.scrollHeight;
		};

	};

	return Drawing;

});

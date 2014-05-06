define('app/ControlLayer', ['core/dom', 'app/Segment'], function(dom, Segment) {

	function ControlLayer(elem, events) {

		var context = elem.getContext("2d");
		var strokeWidth = 10;
		var strokeColor = '#009';
		var lastX;
		var lastY;
		
		this.init = function() {
			var self = this;
			
			dom.bind(elem, "mousemove", function(e) {
				self.renderCursor(e.pageX, e.pageY);
			});

			dom.bind(elem, "mousedown", function(e) {
				self.startDraw(e.pageX, e.pageY);
			});

			dom.bind(elem, "mouseup", function(e) {
				self.stopDraw(e.pageX, e.pageY);
			});

			dom.bind(elem, "mousemove", function(e) {
				self.nextDraw(e.pageX, e.pageY);
			});

			dom.bind(window, "resize", function(e) {
				self.resize()
			});

			this.resize();
			this.renderCursor();
		};

		this.startDraw = function(x, y) {
			context.beginPath();
			context.arc(x, y, strokeWidth / 2, 0, Math.PI * 2);
			context.fill();
			lastX = x;
			lastY = y;
		};

		this.stopDraw = function(x, y) {
			context.beginPath();
			context.arc(x, y, strokeWidth / 2, 0, Math.PI * 2);
			context.fill();
			lastX = null;
			lastY = null;
		};

		this.nextDraw = function(x, y) {
			if(lastX != null && lastY != null) {
				events.trigger('drawable', new Segment(lastX, lastY, x, y, strokeColor, strokeWidth));
				lastX = x;
				lastY = y;
			}
		};

		this.renderCursor = function(x, y) {
			context.clearRect(0, 0, elem.width, elem.height);
			context.beginPath();
			context.arc(x, y, strokeWidth / 2, 0, Math.PI * 2);
			context.fillStyle = strokeColor;
			context.fill();
		};

		this.resize = function() {
			elem.width = elem.parentNode.scrollWidth;
			elem.height = elem.parentNode.scrollHeight;
		};

	};

	return ControlLayer;

});
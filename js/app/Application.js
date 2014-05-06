define('app/Application', ['app/DrawingLayer', 'app/ControlLayer', 'app/EventManager'], function(DrawingLayer, ControlLayer, EventManager) {

	function Application() {

		var events = new EventManager();

		this.run = function() {
			var drawing = new DrawingLayer(document.getElementById("drawing"), events);
			drawing.init();

			events.bind('drawable', function(segment) {
				drawing.add(segment);
			});

			new ControlLayer(document.getElementById("ui"), events).init();
		};

	}

	return Application;

});
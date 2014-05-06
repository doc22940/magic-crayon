define('app/EventManager', ['core/array'], function(array) {

	function EventManager() {

		var map = {};

		this.bind = function(name, handler) {
			if (map[name] == null) {
				map[name] = [];
			}
			map[name].push(handler);
		};

		this.trigger = function(name, args) {
			if (map[name] != null) {
				array.each(map[name], function(handler) {
					handler.call(null, args);
				});
			}
		};

	}

	return EventManager;

});

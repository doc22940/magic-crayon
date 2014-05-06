define('core/dom', function() {

	/**
	 * @exports dom
	 */
	var dom = {

		/**
		 * @param el
		 * @param ev
		 * @param fn
		 */
		bind: function(el, ev, fn) {
			if (el.addEventListener)
				el.addEventListener(ev, fn, false);
			else if (el.attachEvent)
				el.attachEvent("on" + ev, fn)
			else
				el["on" + ev] = fn;
			return el;
		}

	};

	return dom;

});

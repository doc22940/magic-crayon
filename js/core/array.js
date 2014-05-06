define('core/array', function() {

	var array = {

		each: function(arr, visitor) {
			for (var i = 0; i < arr.length; ++i) {
				visitor.call(null, arr[i]);
			}
			return arr;
		}

	};

	return array;

});

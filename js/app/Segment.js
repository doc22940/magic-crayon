define('app/Segment', function() {

	function Segment(x1, y1, x2, y2, color, width) {

		this.x1 = function() {
			return x1;
		};

		this.y1 = function() {
			return y1;
		};

		this.x2 = function() {
			return x2;
		};

		this.y2 = function() {
			return y2;
		};

		this.color = function() {
			return color;
		};

		this.width = function() {
			return width;
		};

		this.draw = function(context) {
			context.beginPath();
			context.moveTo(x1, y1);
			context.lineTo(x2, y2);
			context.lineCap = "round";
			context.strokeStyle = color;
			context.lineWidth = width;
			context.stroke();
		}

	}

	return Segment;

});

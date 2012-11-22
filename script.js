var width = 10;

(function() {

	var drawing = document.getElementById("drawing");
	var context = drawing.getContext("2d");

	dom.bind(drawing, "mousedown", function(e) {
		startDraw(e.pageX, e.pageY);
	});
	dom.bind(drawing, "mouseup", function(e) {
		stopDraw(e.pageX, e.pageY);
	});
	dom.bind(drawing, "mousemove", function(e) {
		nextDraw(e.pageX, e.pageY);
	});

	var lastX;
	var lastY;

	function startDraw(x, y) {
		context.beginPath();
		context.arc(x, y, width / 2, 0, Math.PI * 2);
		context.fill();
		lastX = x;
		lastY = y;
	}
	function stopDraw(x, y) {
		context.beginPath();
		context.arc(x, y, width / 2, 0, Math.PI * 2);
		context.fill();
		lastX = null;
		lastY = null;
	}
	function nextDraw(x, y) {
		if(lastX != null && lastY != null) {
			context.beginPath();
			context.moveTo(lastX, lastY);
			context.lineTo(x, y);
			context.lineWidth = width;
			context.lineCap = "round";
			context.stroke();
			lastX = x;
			lastY = y;
		}
	}
	
	function clear() {
		context.clearRect(0, 0, drawing.width, drawing.height);
	}

	dom.bind(window, "resize", resize);
	resize();
	function resize() {
		drawing.width = drawing.parentNode.scrollWidth;
		drawing.height = drawing.parentNode.scrollHeight;
	}

})();

(function() {

	var ui = document.getElementById("ui");
	var context = ui.getContext("2d");
	
	dom.bind(drawing, "mousemove", function(e) {
		renderTool(e.pageX, e.pageY);
	});
	
	function renderTool(x, y) {
		context.clearRect(0, 0, ui.width, ui.height);
		context.beginPath();
		context.arc(x, y, width / 2, 0, Math.PI * 2);
		context.lineWidth = 1;
		context.stroke();
	}
	
	dom.bind(window, "resize", resize);
	resize();
	function resize() {
		ui.width = ui.parentNode.scrollWidth;
		ui.height = ui.parentNode.scrollHeight;
	}

})();
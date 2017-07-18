var scale = .35;
var canvas = "";
var over_head_canvas = "";
var grid = 8;

function setCanvas (save_canvas) {
	canvas = save_canvas;
}

function getCanvas() {
	return canvas;
}

function setOverHeadCanvas (save_canvas) {
	over_head_canvas = save_canvas;
}

function getOverHeadCanvas() {
	return over_head_canvas;
}

function init_draw_canvas () {
/* Setup the Canvas for the Workspace                                                  */
	var canvas = new fabric.Canvas('draw_canvas');
		canvas.setWidth(1028);
		canvas.setHeight(540);
		canvas.defaultCursor = 'default';
		canvas.selection= false;	//Disable Group Selection
		canvas.clear();
		setCanvas(canvas);
		setOverHeadCanvas(canvas);
	return;
}

function getScale() {
	return scale;
}

function setScale(s) {
	scale = s;
}

function draw_line(canvas, startX, startY, endX, endY) {
	canvas.add(new fabric.Line([startX, startY, endX, endY], {
        fill: 'red', hasBorders:false, hasControls: false
    }));
}

function drawGrid () {
    canvas = getCanvas();
	/* create grid for X  */
	for (var i = 0; i < (1050 / grid); i += 4) {
  		canvas.add(new fabric.Line([ i * grid, 0, i * grid, 550], { stroke: '#ccc', selectable: false}));
	}

	/* create grid for Y  */
	for (var i = 0; i < (600 / grid); i += 4) {
  		canvas.add(new fabric.Line([ 0, i * grid, 1050, i * grid], { stroke: '#ccc', selectable: false}))
	}
	canvas.renderAll();
}


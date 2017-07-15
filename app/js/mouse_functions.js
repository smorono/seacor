function load_mouse_functions(){
	var line, isDown;
	var feet;
	var inches;
	var myFraction
	var grid2 = 8;
    var canvas = getCanvas();
	
	canvas.on('mouse:down', function(o){
  		isDown = true;
  		var pointer = canvas.getPointer(o.e);
  		var x1 = Math.round(pointer.x / grid2) * grid2;
  		var y1 = Math.round(pointer.y / grid2) * grid2;
  		var points = [ x1, y1, x1, y1 ];
  		line = new fabric.Line(points, {
    		strokeWidth: 2,
    		fill: 'red',
    		stroke: 'black',
    		originX: 'center',
    		originY: 'center'
  		});

  		startX = line.get('x1');
  		startY = line.get('y1');
  		canvas.add(line);
	});

	canvas.on('mouse:move', function(o){
		var pointer = canvas.getPointer(o.e);
  		if (!isDown){
  			lastX = pointer.X;
  			lastY = pointer.Y;
  			return;
  		} else {
			var x = line.get('x2') - line.get('x1');
			var y = line.get('y2') - line.get('y1');
  			var length = (Math.hypot(x, y) * getScale());
  			feet = Math.trunc(length/20);
			inches = ((length/20) - feet) * 12.0;
			inches = Math.round(inches);
			document.getElementById("line_length").innerHTML = feet + "ft  " + inches + " inches";
//Snap to Grid
  			line.set({ x2: Math.round(pointer.x / grid2) * grid2, y2: Math.round(pointer.y / grid2) * grid2 });
  			canvas.renderAll();
  		}
	});

	canvas.on('mouse:up', function(o){
  		isDown = false;
  		var pointer = canvas.getPointer(o.e);
  		var caption = feet + "\' " + inches + '\"';
  		var offset = (pointer.x - startX)/2;
  		var offsetY = (pointer.y - startY)/2;
  		var myLeft = offset + startX + 4;
  		var myTop = offsetY + startY + 4;
  		var round_x = Math.round(pointer.x / grid2) * grid2;
  		var round_y = Math.round(pointer.y / grid2) * grid2;
  		var text = canvas.add(new fabric.IText(caption, {
  			left: myLeft,
  			fontWeight: 'bold',
  			top: myTop,
  			selectable: 'false',
  			fontFamily: 'calibri',
  			fill: 'black',
  			fontSize: 12,
  			hasBorders: 'false',
  			hasControls: 'false'
  		}));
  		// Make the BG transparent
  		canvas.setBackgroundColor(null, canvas.renderAll.bind(canvas));
	});
}
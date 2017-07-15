function show_overhead(canvas) {
canvas.clear();

var Left = 5;  
var Top = 5;

  var rect = new fabric.Rect({
    left: Left,
    top: Top,
    fill: "#dddddd",
    stroke: "#000",
    width: 500,
    height: 10,
    strokeWidth: 2,
    opacity: 1
  });

  var rect2 = new fabric.Rect({
    left: Left,
    top: Top,
    fill: "#dddddd",
    stroke: "#000",
    width: 10,
    height: 500,
    strokeWidth: 2,
    opacity: 1
  });

  var rect3 = new fabric.Rect({
    left: Left,
    top: 500,
    fill: "#dddddd",
    stroke: "#000",
    width: 500,
    height: 10,
    strokeWidth: 2,
    opacity: 1
  });

  var rect4 = new fabric.Rect({
    left: 500,
    top: Top,
    fill: "#dddddd",
    stroke: "#000",
    width: 10,
    height: 510,
    strokeWidth: 2,
    opacity: 1
  });

  var rect6 = new fabric.Rect({
    left: 7,
    top: Top + 2,
    fill: "#dddddd",
    stroke: "#dddddd",
    width: 10,
    height: 7,
    strokeWidth: 1,
    opacity: 1
  });

  var window = new fabric.Line([130, 10, 200, 10], {
    fill: "#ffffff",
    stroke: "#000",
    strokeWidth: 2
  });

  var rect7 = new fabric.Rect({
    left: 332,
    top: Top,
    fill: "#ffffff",
    stroke: "#000",
    width: 70,
    height: 10,
    strokeWidth: 2,
    opacity: 1
  });

  var window2 = new fabric.Line([332, 10, 402, 10], {
    fill: "#ffffff",
    stroke: "#000",
    strokeWidth: 2
  });


  canvas.add(rect);
  canvas.add(rect2);
  canvas.add(rect3);
  canvas.add(rect4);
  canvas.add(rect6);
  canvas.add(rect7);
  canvas.add(window2);
  var doorLeft = 55;
  var doorTop = Top;
  var doorWidth = 50;
  var doorHeight = 10;
  var doorOffset = doorLeft + 5;
  var doorSwingTop = Top;
  canvas.add(addDoorFrame(doorLeft, doorTop, doorWidth, doorHeight));
  // points from x/y to x/y
  var points = [doorOffset, doorTop, doorOffset, doorLeft];
  canvas.add(addDoor(points));
  //canvas.add(addDoorSwing(doorLeft - doorWidth, doorSwingTop));
canvas.add(addDoorSwing(10, 5));
  /*            Functions             */

  function addDoorSwing(strLeft, strTop) {
    var circle = new fabric.Circle({
      radius: 50,
//      left: parseInt(strLeft),
      top: parseInt(-46),
      angle: 0,
      startAngle: 0,
      endAngle: 1.5,
      stroke: 'black',
      strokeWidth: 2,
      fill: ''
    });
    return circle;
  }

  function addDoor(points) {
    line = new fabric.Line(points, {
      strokeWidth: 2,
      fill: 'red',
      stroke: 'black',
      originX: 'center',
      originY: 'center'
    });
    return line;
  }

  function addDoorFrame(strLeft, strTop, strWidth, strHeight) {
    var door = new fabric.Rect({
      left: parseInt(strLeft),
      top: parseInt(strTop),
      fill: "#ffffff",
      stroke: "#000",
      width: parseInt(strWidth),
      height: parseInt(strHeight),
      strokeWidth: 2,
      opacity: 1
    });
    return door;
  }
}
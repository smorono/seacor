//function click_function() {
var draw_json;
var view_json;

/*    Floorplan View 						*/
	$("#btn_floorplan").click(function() {
		console.log('Floorplan Clicked');

/*      Get the Canvas and clear it     	*/
        var canvas = getCanvas();
        view_json = canvas.toJSON();
        canvas.clear();

/*      Draw the Grid                 		*/
		drawGrid(canvas);

/*		Restore the Canvas from JSON 		*/
        canvas.loadFromJSON(draw_json, canvas.renderAll.bind(canvas));

/*      Show Floorplan and View Port DIVs 	*/
		$('#welcome_message').hide();
		$('#splash_screen').hide();
		$('#floor_plan').show();
		$('#view_port').show();

/*      Set Mouse Handlers             		*/
		load_mouse_functions(canvas);
	
	});


/*      Overhead View                 		*/
	$("#btn_overhead_view").click(function () {
		var canvas = getCanvas();
        draw_json = canvas.toJSON();
        //console.log(JSON.stringify(draw_json));
        canvas.clear();
        canvas.loadFromJSON(view_json, canvas.renderAll.bind(canvas));
		show_overhead(canvas);
		$('#splash_screen').hide();
		$('#view_port').show();
    });


/*      Clear the Canvas               */
	$("#btn_clear").click(function () {
		var canvas = getCanvas();
		canvas.clear();
    });

	$("#btn_scale_plus").click(function () {
		scale = parseFloat((getScale() + .05).toFixed(2));
		setScale(scale);
		$("label[for='lbl_scale']").html("Scale: " + scale);
    });

	$("#btn_scale_minus").click(function () {
		scale = parseFloat((getScale() - .05).toFixed(2));
		setScale(scale);
		$("label[for='lbl_scale']").html("Scale: " + scale);
    });

	$("#btn_zoom_plus").click(function () {
		var canvas = document.getElementById("draw_canvas");
		canvas.setZoom(canvas.getZoom() * 1.1 ) ;
    });

	$("#btn_zoom_minus").click(function () {
		var canvas = document.getElementById("draw_canvas");
		canvas.setZoom(canvas.getZoom() * .9 ) ;
    });

	$("#btn_refresh").click(function () {
  		location.reload();
  		//clearCanvas();
    });

	$("#btn_draw_mode_off").click(function () {
		canvas.isDrawingMode = !canvas.isDrawingMode;
    });

	$("#RH_out").click(function () {
		    $('#door_image').attr('src', 'arc.png');
    });

	$("#LH_out").click(function () {
		    $('#door_image').attr('src', 'arc2.png');
    });

	$("#RH_in").click(function () {
		    $('#door_image').attr('src', 'arc3.png');
    });

	$("#LH_in").click(function () {
		    $('#door_image').attr('src', 'arc4.png');
    });

	$('#update').on('click', function(event) {
		var canvas_floorplan = document.getElementById("canvas_floorplan");
		var myFeet = $("#text_width").val();
		//var scaled_width = 0;
		var scaled_width=(888/myFeet) * myFeet;
		canvas_floorplan.width = scaled_width;
	});

	$('#wall_name_btn').on('click', function(event) {
		var myWall = $("#input_wall_name").val();
		$("#wall_name").text(myWall);
    });

	$('#base_cabinet_btn').on('click', function(event) {
   		var myWidth = $('#base_cabinet_size').val();
   		var myURL = "drawings.php?width=" + myWidth + "&offset=1"
   		$.ajax({
      		url:myURL, complete: function (response) {
          		$('#output').html(response.responseText);
      		}, error: function () {$('#output').html('There was an error!');}
  		});
  		loadDrawing();
    });

	$('#accessories').on('click', function(event) {
             $('#welcome').hide();
             $('#accessory').show();
             $('#cabinets').hide();
             $('#layout2').hide();
     });

	$('#cabinet_btn').on('click', function(event) {
             $('#welcome').hide();
             $('#accessory').hide();
             $('#layout2').hide();
             $('#layout_grid').hide();
             $('#cabinets').show();
     });

    $( "#zoom_in" ).click(function() {
    	zoom_in();
    });
    $( "#zoom_out" ).click(function() {
    	zoom_out();
    });
    $( "#logout" ).click(function() {
    	logout();
    });
//}
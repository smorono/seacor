//function click_function() {
var draw_json;
var view_json;

/*    														Function setUpLayout 							*/
	function setUpLayout() {

/*      Get the Canvas and clear it     	*/
        var canvas = getCanvas();
        view_json = canvas.toJSON();
        canvas.clear();

/*      Draw the Grid                 		*/
		drawGrid(canvas);

/*		Restore the Canvas from JSON 		*/
        canvas.loadFromJSON, canvas.renderAll.bind(canvas);

/*      Show Floorplan and View Port DIVs 	*/
		$('#welcome_message').hide();
		$('#splash_screen').hide();
		$('#splash').hide();
		$('#floor_plan').show();
		$('#view_port').show();

/*      Set Mouse Handlers 					*/
		load_mouse_functions(canvas);
	
/*		Enable the layout Buttons			*/
		$("#btn_save_layout").prop("disabled", false);
		$("#btn_clear").prop("disabled", false);
	}
/*										End 																	*/


/* 															New Project Button Clicked                			*/
	$('#btn_new_project').click(function () {

/*      Save the ID of the Button and get the value   			*/
		var theButton = document.getElementById('btn_new_project');
		var save_btn = theButton.value;

/*      Change the label on the button to save 					*/		
		$('#btn_new_project').html('Save');

/*      Set a flag that save was clicked       					*/		
		theButton.value = 'save_true';

/*      Remove the class that has visability set to false 		*/
		$('#new-project').removeClass('new_project');

/*      Get the value from the textbox to add the project 		 */		
		var x = document.getElementById("new-project").value;

/* Check to see if we are in save state                          */
		if (save_btn == 'save_true') {
			addProject(x);

/* Reset the class back to new project                           */			
			$('#new-project').addClass('new_project');
			$('#btn_new_project').html('New');
			theButton.value = "false";

/* Show the screen to layout the walls, doors and windows        */
			$("#select_project").hide();
			setUpLayout();
		}
	})


/* 													Enable the confirmation box, set the attrbutes/events here   */
	$('[data-toggle=confirmation]').confirmation({
		rootSelector: '[data-toggle=confirmation]',
		onConfirm: function() {
			deleteConfirmed();
		}
	});


/*     													Show  Overhead View                              		*/
	function showOverhead(){
		var canvas = getCanvas();
        draw_json = canvas.toJSON();
        canvas.clear();
        canvas.loadFromJSON(view_json, canvas.renderAll.bind(canvas));
		show_overhead(canvas);
		$('#splash_screen').hide();
		$('#view_port').show();
    };

/*      												Add new project                							*/
	$("#btn_add").click(function () {
		var server = getDB();
		server.project.add( {
      		name: '1224 E. Trent Ave',
      		date: '07/24/17',
      		version: 1
  		} ).done( function ( item ) {
      		console.log("Item Added")
      		server.close();
  		} );
	})

/*      												Clear the Canvas 							             */
	$("#btn_clear").click(function () {
		var canvas = getCanvas();
		canvas.clear();
		drawGrid();
    });

/*														Save the Layout to Local Storage 						*/
	$('#btn_save_layout').click(function () {
        var canvas = getCanvas();
		var canvas_to_json = canvas.toJSON();
		localStorage.setItem('layout_drawing', canvas_to_json);
})


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
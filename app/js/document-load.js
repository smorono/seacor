// ** JQuery ** //
$( document ).ready(function() {
 // Load Html Files
    $("#header").load("header.html"); 
    $("#welcome_message").load("side_welcome.html"); 
    $("#floor_plan").load("floor_plan.html"); 
    $("#bottom_button").load("bottom_button.html"); 
    $.getScript('js/click_functions.js');
    $.getScript('js/mouse_functions.js');
    
// Show/Hide what we need
	$('#view_port').hide();
	$('#floor_plan').hide();
	$('#splash_screen').show();
	$('#welcome_message').show();

// Setup the click handlers for the buttons
	init_draw_canvas();

});

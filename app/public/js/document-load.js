// ** JQuery ** //
$( document ).ready(function() {
    console.log('Document Loaded');

 /* Load Html Files                                 */
    $("#header").load("header.html").delay(200);     //Bug in Firefox, wait .2 secs to load 
    $("#welcome_message").load("side_welcome.html"); 
    $("#floor_plan").load("floor_plan.html"); 
    $("#bottom_button").load("bottom_button.html");
    console.log('Html Files Loaded') 
    
/* Show/Hide what we need                           */
	$('#view_port').hide();
	$('#floor_plan').hide();
	$('#splash_screen').show();
	$('#welcome_message').show();

/* Setup and Init the Canvas                      */
	init_draw_canvas();

/* Load Script Files                                */
    $.getScript('js/click_functions.js', function() {
            console.log('click functions loaded');
        });
    $.getScript('js/mouse_functions.js', function() {
            console.log('mouse functions loaded');
        });

});

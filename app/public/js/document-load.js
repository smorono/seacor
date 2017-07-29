// ** JQuery ** //
$( document ).ready(function() {
    console.log('Document Loaded');

 /* Load Html Files                                 */
    $("#header").load("header.html").delay(200);     //Bug in Firefox, wait .2 secs to load 
 //   $("#welcome_message").load("side_welcome.html"); 
    $("#floor_plan").load("floor_plan.html"); 
    $("#bottom_button").load("bottom_button.html");
    $("#splash").load("splash.html");
    console.log('Html Files Loaded') 
    
/* Show/Hide what we need                           */
	$('#view_port').hide();
	$('#floor_plan').hide();
    $("#n_p_n").hide();
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

/* Just what it says!                                */
    setupAddressList();

/* Disable the Delete project button, gets enabled when a project is selected  */
    $("#btn_delete_project").prop("disabled", true);
//makeJSON();
/* Setup Local Storage                              
    //makeJSON();
    var result = JSON.parse(localStorage.getItem('projectData'));
    var x;
    for (x in result.project) {
        $("#project_list").append("<li class='radio'><label><input type='radio' name='optradio' value=" + x + ">" 
            + result.project[x].address + "</label></li>");
     }
*/
/* Add eventlistners for radio button, address selected 
    $('input:radio[name=optradio]').change(function() {
        //if (this.value='addr_radio') {
            console.log(this);
            //alert(this.id);
        //}
    });
*/
    
});

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

function addProject(new_project) {
	var projects = JSON.parse(localStorage.getItem('projectData'));

/*  Add the new project to the array, JSON parse returns a Array     */
	projects['project'].push({"address":new_project});

/*  Stringify converts the JSON Object into a string for storage      */	
	var JSONProjects = JSON.stringify(projects);
	localStorage.setItem('projectData', JSONProjects);
	updateProjectList();
}

function deleteProject(projectIndex) {
	var projects = JSON.parse(localStorage.getItem('projectData'));

/*  Delete the project from the array, JSON parse returns a Array     */
//	projects['project'].pop({"ad//dress":project});
	projects['project'].splice(projectIndex, 1);

/*  Stringify converts the JSON Object into a string for storage      */	
	var JSONProjects = JSON.stringify(projects);
	localStorage.setItem('projectData', JSONProjects);
	updateProjectList();
}

function updateProjectList() {
/*   Get the project data as a array                                   */
    var result = JSON.parse(localStorage.getItem('projectData'));

/*  Clear the project list                                             */
    $("#project_list").empty();
	setupAddressList();
}

function deleteConfirmed () {
	var radioValue = $("input[name='optradio']:checked").val();
	deleteProject(radioValue);
	$("#btn_delete_project").prop("disabled", true);
}

function setupAddressList() {
    var result = JSON.parse(localStorage.getItem('projectData'));
    var x;
    for (x in result.project) {
        $("#project_list").append("<li class='radio'><label><input type='radio' name='optradio' value=" + x + ">" 
            + result.project[x].address + "</label></li>");
     }

/* Add eventlistners for radio button                   */
/* Address selected - Enable the Delete Button -        */
    $('input:radio[name=optradio]').change(function() {
        $("#btn_delete_project").prop("disabled", false);
    });
}

/* Store the project information in local storage on the local machine */
/* Just a tempoary function to init the local storage, not usedmuch    */
function makeJSON () {
	var myObj = new Object();
	myObj = {
		"project" : [
			{"address":"1224 E. Trent Ave"}, {"address" : "273 Fairport Road"}
		]
	};
	myJSON = JSON.stringify(myObj);
	localStorage.setItem('projectData', myJSON);
}
// Select color input
// Select size input

//a variable is created to reference empty HTML table
const pixelCanvas = document.getElementById("pixelCanvas");

//inputs are collected as variables
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const td = document.getElementsByTagName('td');

//makes button generat new canvas
sizePicker.onsubmit = () => {
	event.preventDefault();
	scrapOld();
	makeGrid();
};

//scraps the old canvas when a new canvas is made
function scrapOld() {
	while (pixelCanvas.firstChild)
	pixelCanvas.removeChild(pixelCanvas.firstChild);
}

//makes the grid using for loop set to user input
function makeGrid(){
	for(let row = 0; row < inputHeight.value; row++){
		const tableRow = pixelCanvas.insertRow(row);
		for(let cell = 0; cell < inputWidth.value; cell++){
			const cellBlock = tableRow.insertCell(cell);
		}
	}
}

//page will load with premade grid
makeGrid();


//function expression to avoid rewriting for each event listener
//targets parent element. If child element is a TD the style is changed
//to match color input
var changeCell = function(e){
	if(e.target && e.target.nodeName == "TD"){
		e.target.style.backgroundColor = colorPicker.value
	}
}


//mouse events for click and dragover
pixelCanvas.addEventListener("dragover", changeCell);
pixelCanvas.addEventListener("click", changeCell);


//double click returns color to default
pixelCanvas.addEventListener("dblclick", function(e){
	if(e.target && e.target.nodeName == "TD"){
		e.target.style.backgroundColor = "#14f53c";
	}
});
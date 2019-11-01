function doFirst(){
	mypic= document.getElementById('facepic');
	mypic.addEventListener("dragstart", startDrag ,false);
	mypic.addEventListener("dragend", endDrag ,false);
	leftbox=document.getElementById('leftbox');
	leftbox.addEventListener("dragenter", dragenter ,false);
	leftbox.addEventListener("dragleave", dragleave ,false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();},false);
	leftbox.addEventListener("drop", dropped,false);
}
function endDrag(e){
	pic = e.target;
	pic.style.visibility = 'hidden'; 
}
function dragenter(e){
	e.preventDefault();
	leftbox.style.background="cyan";
	leftbox.style.border="3px solid blue";
}
function dragleave(e){
	e.preventDefault();
	leftbox.style.background="white";
	leftbox.style.border="3px solid black";
}
function startDrag(e){
	var code= '<img src="./photuu.png" width="250" height="250">';
	e.dataTransfer.setData('Text',code);
}
function dropped(e){
	e.preventDefault();
	leftbox.innerHTML= e.dataTransfer.getData('Text');
}
window.addEventListener("load", doFirst, false);
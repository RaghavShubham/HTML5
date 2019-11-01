function getStuff(){
	/*document.querySelector('#tuna').onclick=talk;*/
	var list=document.querySelectorAll('#tuna');
	for(var i=0; i<list.length; i++)
	{
		list[i].onclick=talk;	
	}
	/*list[1].onclick=talk; this makes it call the function talk only when we click the second element of the list*/
}
function talk(){
	alert('YOYOMA!');
}
window.onload=getStuff;
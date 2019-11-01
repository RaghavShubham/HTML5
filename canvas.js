function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	/*canvas.font="bold 36px Tahoma";
	canvas.textAlign="start";*/

	window.addEventListener("mousemove", Raghav, false);
	
	/* ADD IMAGE 
	var pic= new Image();
	pic.src="./photuu.png";
	pic.addEventListener("load", function(){canvas.drawImage(pic,10,10,x.width,x.height)},false);*/
	/*saving the canvas
	canvas.save();
	canvas.fillText("Let's begin", 10,30);
	canvas.rotate(1);
	canvas.fillText("After rotation", 60,10);
	canvas.restore();
	canvas.fillText("After restoration", 10,30);*/

	/* different transformations 
	canvas.fillText("start",10,30);
	canvas.translate(100,150);jp
	canvas.fillText("After translate",0,0);
	canvas.rotate(1);
	canvas.fillText("After rotate",0,0);
	canvas.scale(1.5,4);
	canvas.fillText("After scale",0,20); */
	/*var g = canvas.createLinearGradient(0,0,250,250);
	g.addColorStop(.0,"blue");
	g.addColorStop(.5,"cyan");
	g.addColorStop(1,"purple");
	canvas.fillStyle=g;
	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.lineTo(70,200);
	canvas.lineTo(300,200);
	canvas.closePath();
	canvas.fill();*/
	/*canvas.shadowOffsetX=4;
	canvas.shadowOffsetY=4;
	canvas.shadowBlur=6;
	canvas.shadowColor= 'rgba(255,0,255,.7)';
	canvas.font="bold 36px Tahoma";
	canvas.textAlign="end";
	canvas.fillText("OMGWTFAHOLE?",400 	,100);    shadow effects   */
	


	
	/*canvas.strokeStyle="purple";    adds colours to individual entities
	canvas.strokeRect(10,10,200,90);
	canvas.fillRect(10,150,200,100);
	canvas.clearRect(20,160,80,40);     clears the specified path out of the box*/
}
function Raghav(e){
	canvas.clearRect(0,0,600,400);
	var xpos= e.clientX;
	var ypos= e.clientY;
	canvas.fillRect(xpos-50,ypos-50,100,100);

}
window.addEventListener("load",doFirst,false);
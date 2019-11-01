function doFirst()
{
	barSize=600;
	myVideo=document.getElementById('myVideo');
	pButton=document.getElementById('playButton');
	bar=document.getElementById('defaultBar');
	pBar=document.getElementById('progressBar');
	if(pButton){
		pButton.addEventListener('click', playOrPause, false);
	}
	if(bar){
	bar.addEventListener('click', clickedBar, false);
	}
}

function playOrPause()
{
	if(!myVideo.paused && !myVideo.ended){
		myVideo.pause();
		pButton.innerHTML='Play';
		window.clearInterval(updateBar);	
	}	  
	else{
		myVideo.play();
		pButton.innerHTML='Pause';
		updateBar= setInterval(update, 500);
	}
}

function update()
{
	if(!myVideo.ended)
	{
		var size=parseInt(myVideo.currentTime*barSize/myVideo.duration);
		pBar.style.width=size+'px';
	}
	else
	{
		pBar.style.width='0px'
		pButton.innerHTML='Play';
		window.clearInterval(updateBar);
	}
}

function clickedBar(e){
	if(!myVideo.paused && !myVideo.ended)
	{
		var mouseX=e.pageX-bar.offsetLeft;
		var newtime=mouseX*myVideo.duration/barSize;
		myVideo.currentTime=newtime;
		pBar.style.width=mouseX+'px';
	}
}
window.addEventListener('load', doFirst,false);
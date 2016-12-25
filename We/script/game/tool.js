var title = document.getElementById("title");
var itemBar = document.getElementById("itemBar");
itemBar.style.left = "50px";
itemBar.style.top = "50px";
document.getElementById("title").onmousedown=function(e) 
{ 
	if(!e) 
		e = window.event; //IE 
	posX = e.clientX - parseInt(itemBar.style.left); 
	posY = e.clientY - parseInt(itemBar.style.top); 
	console.log(posX + "|" + posY);
	this.onmousemove = mousemove; 
} 

document.getElementById("title").onmouseup = function() { 
	title.onmousemove = null; 
} 

function mousemove(ev) 
{ 
	if(ev==null) 
		ev = window.event;//IE 
	itemBar.style.left = (ev.clientX - posX) + "px"; 
	itemBar.style.top = (ev.clientY - posY) + "px"; 
} 
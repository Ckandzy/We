var cross = document.getElementsByClassName("cross");
var title = document.getElementById("title");
var attrBar = document.getElementById("attrBar");
var feature = document.getElementsByClassName("feature");
var playersStatu = document.getElementById("playersStatu");
var titleIsDoMove = false;
var playersStatuIsDoMove = false;
attrBar.style.left = "50px";
attrBar.style.top = "50px";
playersStatu.style.left = "50px";
playersStatu.style.top = "50px";

// 状态栏
playersStatu.onmousedown = function(e) 
{ 
	if(!e) 
		e = window.event; //IE 
	posX = e.clientX - parseInt(playersStatu.style.left); 
	posY = e.clientY - parseInt(playersStatu.style.top); 
	playersStatuIsDoMove = true;
	console.log(playersStatuIsDoMove);
} 
playersStatu.onmouseup = function() {
	playersStatu.onmousemove = null; 
	playersStatuIsDoMove = false;
	console.log(playersStatuIsDoMove);
} 

playersStatu.onmousemove = function mousemove(e) 
{ 
	console.log(playersStatuIsDoMove);
	if(e==null) 
		e = window.event;//IE 
	if(!playersStatuIsDoMove) return;
	playersStatu.style.left = (e.clientX - posX) + "px"; 
	playersStatu.style.top = (e.clientY - posY) + "px"; 
}
// 属性栏
title.onmousedown=function(e) 
{ 
	if(!e) 
		e = window.event; //IE 
	posX = e.clientX - parseInt(attrBar.style.left); 
	posY = e.clientY - parseInt(attrBar.style.top); 
	titleIsDoMove = true;
} 
title.onmouseup = function() { 
	title.onmousemove = null; 
	titleIsDoMove = false;
} 
attrBar.onmousemove = function mousemove(e) 
{ 
	if(!titleIsDoMove) return;
	if(e==null) 
		e = window.event;//IE 
	attrBar.style.left = (e.clientX - posX) + "px"; 
	attrBar.style.top = (e.clientY - posY) + "px"; 
}

// 关闭按钮
cross[0].onclick = function(e){
	if(!e) 
		e = window.event; //IE 
	// alert("hello world");
	attrBar.style.display = "none";
}

feature[2].onclick = function(e){
	if(!e) 
		e = window.event; //IE 
	if(attrBar.style.display === "none"){
		attrBar.style.display = "block";
	}
	else{
		attrBar.style.display = "none";
	}
}

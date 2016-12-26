var cross = document.getElementsByClassName("cross");
var attrTitle = document.getElementById("attrTitle");
var itemTitle = document.getElementById("itemTitle");
var attrBar = document.getElementById("attrBar");
var itemBar = document.getElementById("itemBar");
var feature = document.getElementsByClassName("feature");
var playersStatu = document.getElementById("playersStatu");
var isDoMove = false,
currentTarget = '';
itemBar.style.left = "50px";
itemBar.style.top = "50px";
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
	isDoMove = true;
	currentTarget = 'p';
	console.log(isDoMove);
} 
playersStatu.onmouseup = function() {
	isDoMove = false;
} 
attrTitle.onmousedown=function(e) 
{ 
	if(!e) 
		e = window.event; //IE 
	posX = e.clientX - parseInt(attrBar.style.left); 
	posY = e.clientY - parseInt(attrBar.style.top); 
	isDoMove = true;
	currentTarget = 'a';
} 
attrTitle.onmouseup = function() { 
	isDoMove = false;
} 
itemTitle.onmousedown=function(e) 
{ 
	if(!e) 
		e = window.event; //IE 
	posX = e.clientX - parseInt(itemBar.style.left); 
	posY = e.clientY - parseInt(itemBar.style.top); 
	isDoMove = true;
	currentTarget = 'i';
} 
itemTitle.onmouseup = function() { 
	isDoMove = false;
} 
document.onmousemove = function mousemove(e)
{
	if(!isDoMove) return;
	if(e == null)
		e = window.event;//IE
	if(currentTarget === 'a'){
		attrBar.style.left = (e.clientX - posX) + "px";
		attrBar.style.top = (e.clientY - posY) + "px";
	}
	else if(currentTarget === 'p'){
		playersStatu.style.left = (e.clientX - posX) + "px";
		playersStatu.style.top = (e.clientY - posY) + "px";
	}
	else if(currentTarget === 'i'){
		itemBar.style.left = (e.clientX - posX) + "px";
		itemBar.style.top = (e.clientY - posY) + "px";
	}
}
// document.onmousemove = function mousemove(e) 
// { 
// 	if(!isDoMove) return;
// 	if(e == null) 
// 		e = window.event;//IE 
// 	if(e.target === attrBar){
// 		attrBar.style.left = (e.clientX - posX) + "px"; 
// 		attrBar.style.top = (e.clientY - posY) + "px"; 
// 	}
// 	else if(e.target === playersStatu){
// 		playersStatu.style.left = (e.clientX - posX) + "px"; 
// 		playersStatu.style.top = (e.clientY - posY) + "px"; 
// 	}

// }

// 关闭按钮
cross[0].onclick = function(e){
	if(!e) 
		e = window.event; //IE 
	// alert("hello world");
	itemBar.style.display = "none";
}
cross[1].onclick = function(e){
	if(!e) 
		e = window.event; //IE 
	// alert("hello world");
	attrBar.style.display = "none";
}
// 道具栏
feature[1].onclick = function(e){
	if(!e) 
		e = window.event; //IE 
	if(itemBar.style.display === "none"){
		itemBar.style.display = "block";
	}
	else{
		itemBar.style.display = "none";
	}
}
// 属性栏
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

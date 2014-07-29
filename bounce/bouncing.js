
var Globalball;
var dx;
var dy;
window.onload=function(){

var btnNew = document.getElementById("newball");
btnNew.addEventListener('click',buttonClick);
//var btnNew= document.getElementById("newball");
}

var buttonClick = function() {

	Globalball = new Ball(0,window.innerHeight/2,5,5);
	setInterval(Globalball.move,10);
}

var Ball = function(x,y,dx,dy){
	debugger;
	var ball = document.createElement("div");
	ball.style.display= "block";
	ball.style.width= "30px";
	ball.style.height= "30px";
	ball.style.backgroundColor= "blue";
	ball.style.borderRadius= "15px";
	ball.style.position = "relative";
	ball.style.top = y + 'px';
	ball.style.left = x + 'px';
	document.body.appendChild(ball);
	this.x = x;
	this.y = y;
	

this.move = function(){
		var oldXPosn = parseInt(ball.style.left.substring(0,ball.style.left.length-2));
		var oldYPosn = parseInt(ball.style.top.substring(0,ball.style.top.length-2));
		if( oldXPosn<0 || oldXPosn>(window.innerWidth-50))
		dx=-dx;
		if( oldYPosn<0 || oldYPosn>(window.innerHeight-50))
		dy=-dy;
		var newXposn = oldXPosn + dx;
		var newYPosn = oldYPosn + dy;
		ball.style.top=newYPosn;
		ball.style.left=newXposn;
	}
}




















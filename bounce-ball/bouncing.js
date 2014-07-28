


var x=10;
var y = window.innerHeight/2;
var dx = 5;
var dy = 3;

function draw()
{

var ball = document.getElementById("circle");
//ball=ball;
ball.style.position = "relative";
ball.style.top = y;
ball.style.left = x;



if( x<0 || x>(window.innerWidth-50))
dx=-dx;
if( y<0 || y>(window.innerHeight-50))
dy=-dy;
x=x+dx;
y=y+dy;
}

setInterval(draw,10);






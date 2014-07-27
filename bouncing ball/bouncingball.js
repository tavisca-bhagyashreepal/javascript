var x=10;
var y=100;
var dx=5;
var dy=5;
var ctx;
function bounce(){
	ctx= canvas.getContext('2d');
	setInterval(draw,10);

}


function draw(){

//alert("draw");
ctx.clearRect(0,0,200,200);
ctx.beginPath();
ctx.fillStyle="#0000ff";
ctx.arc(x,y,10,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();
//y=y+dy;

if(x<100 && y >=100){
x=x+dx;
y=y+dy;
}

else if(x<200 && y>100){
	x=x+dx;
	y=y-dy;

}

else if(x>100 && y<=100){
	x=x-dx;
	y=y-dy;
}

else {
	x=x-dx;
	y=y+dy;
}
//dx=Math.floor((Math.random() * 10) + );
//dy=dx; 
}
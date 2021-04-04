var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 300;
var y = 100;
var dx = 2;
var dy = -2;
var radius = 15;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(y<=radius || y>=canvas.height-radius){
		dy *=-1;
	}
	if(x<=radius || x>=canvas.width-radius){
		dx *=-1
	}
    drawBall();
    x += dx;
    y += dy;
    if(y<canvas.height-radius){
    	dy+= .1;
    }
}

setInterval(draw,10);





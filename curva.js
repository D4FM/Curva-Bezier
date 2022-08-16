//Dibujo de la curva de Bezier
const MiCanvas = document.getElementById("MiCanvas");
const context = MiCanvas.getContext("2d");

//Variables para la curva
var x0=0;
var y0=0;
var x1=0;
var y1=500;
var x2=500;
var y2=500;

//Curva
context.strokeStyle="#FF0000";
context.beginPath();
context.moveTo(x0,y0);
context.quadraticCurveTo(x1,y1,x2,y2);
context.stroke();

//Lineas horizontales
var x;
var y;
var i=0;
for (var t = 0; t<1.05;t=t+0.05){
	x = 1*(1-t)*(1-t)*x0 + 2*(1-t)*t*x1 + 1*t*t*x2;
	y = 1*(1-t)*(1-t)*y0 + 2*(1-t)*t*y1 + 1*t*t*y2;
	i = i+25;

	context.strokeStyle="#FF0000";
	context.beginPath();
	context.moveTo(0,i);
	context.lineTo(x,y);
	context.stroke();
}

//Lineas verticales
var i=0;
for (var t = 0; t<1.05;t=t+0.05){
	x = 1*(1-t)*(1-t)*x0 + 2*(1-t)*t*x1 + 1*t*t*x2;
	y = 1*(1-t)*(1-t)*y0 + 2*(1-t)*t*y1 + 1*t*t*y2;
	i = i+25;

	context.strokeStyle="#FF0000";
	context.beginPath();
	context.moveTo(i,500);
	context.lineTo(x,y);
	context.stroke();
}

console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();

var c1 = document.getElementById('myCanvas1');
var ctx1 = c1.getContext('2d');
ctx1.beginPath();
ctx1.strokeStyle = "lime";
ctx1.moveTo(150,25);
ctx1.lineTo(225,150);
ctx1.lineTo(75,150);
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "green";
ctx1.fill();

var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.strokeStyle = "blue";
ctx2.moveTo(150,25);
ctx2.lineTo(225,150);
ctx2.lineTo(150,275);
ctx2.lineTo(75,150);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "red";
ctx2.fill();

var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.strokeStyle = "red";
ctx3.moveTo(0,0);
ctx3.lineTo(300,300);
ctx3.lineTo(300,0);
ctx3.lineTo(0,300);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "blue";
ctx3.fill();

//challenges

var c4 = document.getElementById('myCanvas4');
var ctx4 = c4.getContext('2d');
ctx4.beginPath();
ctx4.strokeStyle = "orange";
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.lineTo(0,0);
ctx4.moveTo(150,150);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.lineTo(300,0);
ctx4.lineTo(150,0);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "brown";
ctx4.fill();

var c5 = document.getElementById('myCanvas5');
var ctx5 = c5.getContext('2d');
ctx5.beginPath();
ctx5.strokeStyle = "grey";
ctx5.moveTo(150,50);
ctx5.lineTo(200,200);
ctx5.arc(150,200,50,0,3.14);
ctx5.lineTo(150,50);
ctx5.stroke();
ctx5.fillStyle = "silver";
ctx5.fill();

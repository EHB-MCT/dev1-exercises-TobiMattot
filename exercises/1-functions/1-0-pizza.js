"use strict";



drawline();

function drawline(){
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.fillStyle = "yellow";
context.lineWidth = 5;
context.beginPath();
context.rect(50,50,100,100);
context.fill();
context.stroke();

context.beginPath();
context.fillStyle = "yellow";
context.lineWidth = 3;
context.strokeStyle = "black)";
context.arc(200,200,50,0, Math.PI * 2);
context.fill();
context.stroke();

}



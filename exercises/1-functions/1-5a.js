"use strict";

drawline();

function drawline(){
    
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "orange";
    context.rect(50,50,300,300);
    context.fill();

    context.beginPath();
    context.fillStyle = "blue";
    context.rect(50,250,300,100);
    context.fill();

    context.beginPath();
    context.arc(200,250,100,0*Math.PI,1*Math.PI,true);
    context.fillStyle = "yellow";
    context.fill();


}

"use strict";

drawline();

function drawline(){
    
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.rect(50,50,300,300);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = "lightblue";
    context.stroke();
    context.fill();


    context.beginPath();
    context.rect(50,50,250,250);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = "lightblue";
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(100,50,200,200);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = "lightblue";
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(150,100,150,150);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = "lightblue";
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(150,150,100,100);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = "lightblue";
    context.stroke();
    context.fill();
}
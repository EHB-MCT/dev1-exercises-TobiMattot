"use strict";

drawline();

function drawline(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
//Code voor T
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "orange";
    context.moveTo(50,100);
    context.lineTo(150,100);
    context.stroke();
   
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "orange";
    context.moveTo(100,100);
    context.lineTo(100,200);
    context.stroke();
// Code voor O
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.moveTo(180,120);
    context.lineTo(260,120);
    context.stroke();
   
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.moveTo(182,118);
    context.lineTo(182,200);
    context.stroke();
   
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.moveTo(260,118);
    context.lineTo(260,200);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.moveTo(180,198);
    context.lineTo(260,198);
    context.stroke();
//Code voor B
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.moveTo(290,100);
    context.lineTo(290,200);
    context.stroke();
   
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.moveTo(290,140);
    context.lineTo(330,175);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.moveTo(290,198);
    context.lineTo(330,173);
    context.stroke();
//Code voor I
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "purple";
    context.moveTo(360,140);
    context.lineTo(360,200);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "purple";
    context.moveTo(360,110);
    context.lineTo(360,130);
    context.stroke();
}




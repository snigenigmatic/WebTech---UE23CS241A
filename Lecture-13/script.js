const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = 800;
canvas.height = 600;
// border red
canvas.style.border = "5px solid red";

// draw a line
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.fillText("Hello World", 100, 270);
ctx.fillStyle = "blue";

ctx.fillRect(100, 300, 100, 100);
ctx.beginPath();
ctx.arc(300, 300, 50, 0, Math.PI * 2);
ctx.stroke();
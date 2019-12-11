var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)'
// c.fillRect(300, 300, 100, 100);


//Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = '#fa34a3'
// c.stroke();



// for(var i = 0; i < 200; i++) {
//     var date = new Date();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var randomColour = Math.random() * i * 10;
//     var randomColour2 = Math.random() * i * 10;
//     var randomColour3 = Math.random() * i * 10;
//     c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle = `rgba(${randomColour}, ${randomColour2}, ${randomColour3}, 1)`;
// c.stroke();
// }

//Arc / Circle

var x = 200;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0,innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    x+= 1;
}


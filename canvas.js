const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

class Circle {
    constructor(x, y, radius, colour, speedX, speedY) {
        //constructors
        this.x = x;
        this.y = y;
        this.speedX = speedX,
        this.speedY = speedY
        this.radius = radius;
        this.colour = colour;
    }

    //functions
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colour;
        ctx.fill();
    }

    update() {
        this.draw();
        if(this.x + this.radius > canvas.width || this.x - this.radius <= 0) {
            this.speedX = -this.speedX;
        }

        if(this.y + this.radius > canvas.height || this.y - this.radius <= 0) {
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY
    }
}

let blobs = [];
let numOfBlobs = 100;

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    blobs.forEach(blob => {
        blob.update()
    })

    blobs.forEach(backgroundStar => {
        backgroundStar.draw();
      })
}

for(let i = 0; i < numOfBlobs; i++) {
    const speedX = Math.random() * 5;
    const speedY = Math.random() * 5;
    const radius = 30;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.width - radius * 2) + radius;
    
    blobs.push(new Circle(x, y, radius, 'red', speedX, speedY))
}

    

animate();


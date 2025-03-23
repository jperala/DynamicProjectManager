// Select the canvas element
const canvas = document.getElementById('bubble_canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initBubbles();
});

// Array to hold bubble objects
let bubblesArray = [];

// Bubble class
class Bubble {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 20 + 5; // Random radius between 5 and 25
        this.speedY = Math.random() * 1.5 + 0.5; // Random upward speed
        this.color = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';
    }

    // Draw a bubble
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Update bubble position
    update() {
        this.y -= this.speedY;
        if (this.y < -this.radius) {
            // Reset bubble position to the bottom
            this.y = canvas.height + this.radius;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

// Initialize bubbles
function initBubbles() {
    bubblesArray = [];
    for (let i = 0; i < 100; i++) { // Number of bubbles
        bubblesArray.push(new Bubble());
    }
}

// Animate bubbles
function animateBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubblesArray.forEach(bubble => bubble.update());
    requestAnimationFrame(animateBubbles);
}

// Start the animation
initBubbles();
animateBubbles();

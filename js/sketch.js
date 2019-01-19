let radius;
let fbRadius = 32;
let anchorX;
let anchorY;

// feedback ball
let fbTheta;
let fbTheta_vel;
let fbTheta_acc;
let feedback;

function setup() {
	createCanvas(800, 600);

	anchorX = width / 2;
	anchorY = height / 2;

	radius = height * 0.45;
	fbTheta = -PI / 2;
	fbTheta_vel = 0;
	fbTheta_acc = 0;
	feedback = new Audio(anchorX, anchorY, radius, fbTheta, fbTheta_vel, fbTheta_acc);
}

function mouseClicked() {
	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
		feedback.go(0.1, -0.001);
	}
	return false;
}

function draw() {
	background(125);

	feedback.calc();
	feedback.draw();
	// draw larger ellipse
	fill(255);
	ellipse(anchorX, anchorY, (radius * 2) - 32);
}
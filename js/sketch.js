let radius;
let fbRadius = 32;

// feedback ball
let fbTheta;
let fbTheta_vel;
let fbTheta_acc;

function setup() {
	createCanvas(800, 600);

	radius = height * 0.45;
	fbTheta = -PI/2;
	fbTheta_vel = 0;
	fbTheta_acc = 0;
}

function mouseClicked() {
	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
		fbTheta_vel = 0.1;
		fbTheta_acc = -0.001;
	}

	return false;
}

function draw() {
	background(125);



	// translate to center
	translate(width / 2, height / 2);

	// Convert polar to cartesian
	let x = radius * cos(fbTheta);
	let y = radius * sin(fbTheta);

	// Draw the ellipse at the cartesian coordinate
	noStroke();
	fill(200);
	ellipse(x, y, fbRadius);

	// Apply acceleration and velocity to angle
	// (r remains static in this example)
	fbTheta_vel += fbTheta_acc;
	fbTheta += fbTheta_vel;
	if (fbTheta_vel <= 0) {
		fbTheta_acc = 0;
		fbTheta_vel = 0;
	}

	// draw larger ellipse
	fill(255);
	ellipse(0, 0, (radius * 2) - 32);
}
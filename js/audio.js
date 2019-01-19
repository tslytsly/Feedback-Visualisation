class Audio {
    constructor(x, y, r, theta, theta_vel, theta_acc) {
        this.x = x;
        this.y = y;
        this.r = 32;
        this.coordR = r;
        this.theta = theta;
        this.theta_vel = theta_vel;
        this.theta_acc = theta_acc;
        this.coordX;
        this.coordY;
    }

    calc() {
        // translate(width/2,height/2);
        // Convert polar to cartesian
        this.coordX = this.coordR * cos(this.theta);
        this.coordY = this.coordR * sin(this.theta);

        // Apply acceleration and velocity to angle
        // (r remains static in this example)
        this.theta_vel += this.theta_acc;
        this.theta += this.theta_vel;
        if (this.theta_vel <= 0) {
            this.theta_acc = 0;
            this.theta_vel = 0;
        }
    }

    draw() {
        // Draw the ellipse at the cartesian coordinate
        push();
        translate(this.x, this.y);
        noStroke();
        fill(200);
        ellipse(this.coordX, this.coordY, this.r);
        pop();
    }

    go(vel, acc) {
        this.theta_vel = vel;
        this.theta_acc = acc;
    }
}
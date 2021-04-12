
// https://www.red3d.com/cwr/boids/
// https://natureofcode.com/book/chapter-6-autonomous-agents/

/*
    * The three key components of autonomous agent

      - An autonomous agent has a limited ability to perceive environment.
      - An autonomous agent processes the information from its environment and calculates an action.
      - An autonomous agent has no leader. 
   
    * Craig Reynolds's steering behavior for Autonomous Characters

    In the late 1980s, computer scientist Craig Reynolds 
      developed algorithmic steering behaviors for animated characters.
    These behaviors allowed individual elements to navigate their digital environments 
      in a “lifelike” manner with strategies for fleeing, wandering, arriving, pursuing, evading, etc.
    The most famous example is Reynolds’s “boids” model for “flocking/swarming” behavior.

    * the motion of idealized vehicles

      - Action Selection -> a vehicle has a goal or goals and can select an action based on that goal.
      - Steering -> steering force = desired velocity - current velocity.
      - Locomotion -> how to move itself? something like left foot, right foot, left foot, and so on.

    * desired velocity & steering
      
      (desired velocity) = (target location) - (current location)
      (steering acc.) = (desired velocity) - (current velocity)
    
    * Flocking Behaviors

      - Separation : Steer to avoid colliding with its neighbors
      - Alignment  : Steer in the same direction as its neighbors
      - Cohesion   : Steer towards the center of its neighbors

    * Boids of Craig Reynolds

    In 1986, he made a computer model of coordinated animal motion such as bird flocks and fish schools.
    He called the generic simulated flocking creatures boids.
    The basic flocking model consists of three simple steering behaviors 
      which describe how an individual boid maneuvers 
      based on the positions and velocities its nearby flockmates: Separation, Alignment, Cohesion
*/

const flock = [];
let alignSlider, cohesionSlider, separationSlider;

function setup() {
    createCanvas(640, 360);
    alignSlider      = createSlider(0, 2, 1.5, 0.1);
    cohesionSlider   = createSlider(0, 2, 1.0, 0.1);
    separationSlider = createSlider(0, 2, 2.0, 0.1);
    for (let i = 0; i < 200; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background(0);
    for (const boid of flock) {
        
        boid.flock(flock, alignSlider.value(), cohesionSlider.value(), separationSlider.value());
        boid.update();
        boid.edges();
        boid.show();
    }
}

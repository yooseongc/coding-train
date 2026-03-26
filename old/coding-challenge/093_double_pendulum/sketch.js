
// https://www.myphysicslab.com/pendulum/double-pendulum-en.html
// https://github.com/myphysicslab/myphysicslab/blob/master/src/sims/pendulum/DoublePendulumApp.js

/*
    # Kinematics of the Double Pendulum

        - Kinematics means the relations of the parts of the device,
            without regard to forces.
        - In kinematics we are only trying to find expressions for the position,
            velocity, and accerlation in terms of the variables that specify
            the state of the device.
        - x = horizontal position of pendulum mass
        - y = vertical position of pendulum mass
        - theta = angle of pendulum (origin - vertical downwards, ccw in positive)
        - L = length of rod (constant)

        x1 = L1 * sin(theta1)
        y1 = - L1 * cos(theta1)
        x2 = x1 + L2 * sin(theta2)
        y2 = y1 - L2 * cos(theta2)

        x1' = theta1' * L1 * cos(theta1)
        y1' = theta1' * L1 * sin(theta1)
        x2' = x1' + theta2' * L2 * cos(theta2)
        y2' = y1' + theta2' * L2 * sin(theta2)

        x1'' = - theta1'^2 * L1 * sin(theta1) + theta1'' * L1 * cos(theta1)
        y1'' = theta1'^2 * L1 * cos(theta1) + theta1'' * L1 * sin(theta1)
        x2'' = x1'' - theta2'^2 * L2 * sin(theta2) + theta2'' * L2 * cos(theta2)
        y2'' = y1'' + theta2'^2 * L2 * cos(theta2) + theta2'' * L2 * sin(theta2)

    # Forces in the Double Pendulum

        - T = tension in the rod
        - m = mass of pendulum
        - g = gravitational constant

        m1 * x1'' = - T1 * sin(theat1) + T2 * sin(theta2)
        m1 * y1'' = T1 * cos(theta1) - T2 * cos(theta2) - m1 * g

        m2 * x2'' = - T2 * sin(theta2)
        m2 * y2'' = T2 * cos(theta2) - m2 * g

    # Direct Method for Finding Equations of Motion

        - goal : finding expressions for theta1'', theta2'' 
            in terms of theta1, theta1', theta2, theta2'
        - do some algebraic manipulation

        - the equations below are the equations of motion for the double pendulum

 	            −g (2 m1 + m2) sin θ1 − m2 g sin(θ1 − 2 θ2) − 2 sin(θ1 − θ2) m2 (θ2'2 L2 + θ1'2 L1 cos(θ1 − θ2))
        θ1'' =  --------------------------------------------------------------------------------------------------
                                    L1 (2 m1 + m2 − m2 cos(2 θ1 − 2 θ2))
        
                2 sin(θ1 − θ2) (θ1'2 L1 (m1 + m2) + g(m1 + m2) cos θ1 + θ2'2 L2 m2 cos(θ1 − θ2))
        θ2'' = 	--------------------------------------------------------------------------------------------------
                                    L2 (2 m1 + m2 − m2 cos(2 θ1 − 2 θ2))

    # Numerical Solution

        - The above equations are now close to the form needed for the Runge Kutta method.
        - The final step is convert these two 2nd order equations into four 1st order equations.
        - let w1 = angular velocity of top rod.
        - let w2 = angular velocity of bottom rod.
        - then,

        theta1' = w1
        theta2' = w2
        w1' = (eq above)
        w2' = (eq above)

        - This is now exactly the form needed to plug in to the Runge Kutta method for numerical solution of the system.
*/

const r1 = 125;  // L1 
const r2 = 125;  // L2
const m1 = 10;
const m2 = 10;

let a1 = 0;    // theta1
let a2 = 0;    // theta2
let a1_v = 0;  // theta1'
let a2_v = 0;  // theta2'

const g = 1; // gravity

let px2 = -1;
let py2 = -1;

let cx, cy;
let buffer;


function setup() {
    createCanvas(600, 600);
    pixelDensity(1);
    a1 = PI / 2;
    a2 = PI / 2;
    cx = width / 2;
    cy = 200;

    buffer = createGraphics(width, height);
    buffer.background(175);
    buffer.translate(cx, cy);
}

function draw() {
    background(175);
    imageMode(CORNER);
    image(buffer, 0, 0, width, height);

    let num1 = -g * (2 * m1 + m2) * sin(a1);
    let num2 = -m2 * g * sin(a1 - 2 * a2);
    let num3 = -2 * sin(a1 - a2) * m2;
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
    let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    const a1_a = (num1 + num2 + num3 * num4) / den;  // theta1''

    num1 = 2 * sin(a1 - a2);
    num2 = (a1_v * a1_v * r1 * (m1 + m2));
    num3 = g * (m1 + m2) * cos(a1);
    num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
    den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    const a2_a = (num1 * (num2 + num3 + num4)) / den;  // theta2''

    translate(cx, cy);
    stroke(0);
    strokeWeight(2);

    const x1 = r1 * sin(a1);
    const y1 = r1 * cos(a1);
    const x2 = x1 + r2 * sin(a2);
    const y2 = y1 + r2 * cos(a2);

    line(0, 0, x1, y1);
    fill(0);
    ellipse(x1, y1, m1, m1);

    line(x1, y1, x2, y2);
    fill(0);
    ellipse(x2, y2, m2, m2);

    // update
    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;

    // if damping needed
    // a1_v *= 0.99
    // a2_v *= 0.99

    buffer.stroke(0);
    if (frameCount > 1) {
        buffer.line(px2, py2, x2, y2);
    }
    px2 = x2;
    py2 = y2;
}

// https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp06_agents

/*
    green - 'food'
    red   - 'poison'

    vehicle has 
    - position
    - velocity
    - acceleration
    - health point (HP)
    - strategies => reinforcement learning (evolutionary)
    - and so on...

    steering force = desired velocity - current velocity
*/

const vehicles = [];
const food = [];
const poison = [];

const modes = {
    SEEKING: 'Mouse Seeking',
    EAT_FOOD: 'Eat Food',
    FOOD_POISON: 'Food & Poison',
    RANDOM_DNA: 'Food & Poison with Random DNA',
    EVOLUTION: 'Evolutionary Steering',
}

let debug;
let modeSelect;
let mode = modes.EVOLUTION;

const mutationProbability = 0.01;

function setup() {
    createCanvas(640, 360);
    
    // create vehicles
    for (let i = 0; i < 50; i++) {
        vehicles.push(new Vehicle(random(width), random(height)));
    }

    // create food
    for (let i = 0; i < 40; i++) {
        food.push(createVector(random(width), random(height)));
    }

    // create poison
    for (let i = 0; i < 20; i++) {
        poison.push(createVector(random(width), random(height)));
    }
    
    modeSelect = createSelect();
    for (const m in modes) {
        modeSelect.option(modes[m]);
    }
    modeSelect.value(mode);
    modeSelect.changed(() => {
        console.log(modeSelect.value());
        mode = modeSelect.value();
    })
    debug = createCheckbox('debug');
}

function mouseDragged() {
    vehicles.push(new Vehicle(mouseX, mouseY));
}

function draw() {
    background(0);

    if (mode === modes.SEEKING) {
        const mouse = createVector(mouseX, mouseY);
        fill(127);
        stroke(200);
        strokeWeight(2);
        ellipse(mouse.x, mouse.y, 48, 48);
        
        for (let i = vehicles.length - 1; i >= 0; i--) {
            const vehicle = vehicles[i];
            const steering = vehicle.seek(mouse);
            vehicle.applyForce(steering);
            vehicle.update();
            vehicle.display();
        }
    } else if (mode === modes.EAT_FOOD) { 
        if (random(1) < 0.1) {
            food.push(createVector(random(width), random(height)));
            food.push(createVector(random(width), random(height)));
            food.push(createVector(random(width), random(height)));
        }

        for (const f of food) {
            fill(0, 255, 0);
            noStroke();
            ellipse(f.x, f.y, 4, 4);
        }
        for (let i = vehicles.length - 1; i >= 0; i--) {
            const vehicle = vehicles[i];
            vehicle.seekFood(food);
            vehicle.update();
            vehicle.display();
        }
    } else if (mode === modes.FOOD_POISON) {
        if (frameCount === 1) {
            for (const v of vehicles) {
                v.dna = [2, -2, 20, 20];
            }
        }
        if (random(1) < 0.1) {
            food.push(createVector(random(width), random(height)));
        }
        if (random(1) < 0.01) {
            poison.push(createVector(random(width), random(height)));
        }

        for (const f of food) {
            fill(0, 255, 0);
            noStroke();
            ellipse(f.x, f.y, 4, 4);
        }
        for (const p of poison) {
            fill(255, 0, 0);
            noStroke();
            ellipse(p.x, p.y, 4, 4);
        }

        for (let i = vehicles.length - 1; i >= 0; i--) {
            const vehicle = vehicles[i];
            vehicle.health = 1;
            vehicle.boundaries();
            vehicle.behaviors(food, poison);
            vehicle.update();
            vehicle.display();
        }

    } else if (mode === modes.RANDOM_DNA) {

        if (random(1) < 0.1) {
            food.push(createVector(random(width), random(height)));
        }
        if (random(1) < 0.01) {
            poison.push(createVector(random(width), random(height)));
        }

        for (const f of food) {
            fill(0, 255, 0);
            noStroke();
            ellipse(f.x, f.y, 4, 4);
        }
        for (const p of poison) {
            fill(255, 0, 0);
            noStroke();
            ellipse(p.x, p.y, 4, 4);
        }

        for (let i = vehicles.length - 1; i >= 0; i--) {
            const vehicle = vehicles[i];
            vehicle.boundaries();
            vehicle.behaviors(food, poison);
            vehicle.update();
            vehicle.display();
            if (vehicle.dead()) {
                food.push(createVector(vehicle.position.x, vehicle.position.y));
                vehicles.splice(i, 1);
            }
        }

    } else if (mode === modes.EVOLUTION) {

        if (random(1) < 0.1) {
            food.push(createVector(random(width), random(height)));
        }
        if (random(1) < 0.01) {
            poison.push(createVector(random(width), random(height)));
        }

        for (const f of food) {
            fill(0, 255, 0);
            noStroke();
            ellipse(f.x, f.y, 4, 4);
        }
        for (const p of poison) {
            fill(255, 0, 0);
            noStroke();
            ellipse(p.x, p.y, 4, 4);
        }

        for (let i = vehicles.length - 1; i >= 0; i--) {
            const vehicle = vehicles[i];
            vehicle.boundaries();
            vehicle.behaviors(food, poison);
            vehicle.update();
            vehicle.display();
            const newVehicle = vehicle.clone();
            if (newVehicle) {
                vehicles.push(newVehicle);
            }
            if (vehicle.dead()) {
                food.push(createVector(vehicle.position.x, vehicle.position.y));
                vehicles.splice(i, 1);
            }
        }
    }
}

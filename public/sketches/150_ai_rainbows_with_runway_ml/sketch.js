
let rainbow;
let angle = 0;

const z = new Array(512);
const noises = new Array(512);


const model = new rw.HostedModel({
    url: "https://stylegan-yooseongc.hosted-models.runwayml.cloud/v1/",
    token: "uIRN7l0fS6TzYsaJzG7mww==",
});

function setup() {
    // createCanvas(512, 512).parent('#canvasDiv');
    noCanvas();
    rainbow = select('#rainbowImg').elt;

    for (let i = 0; i < 512; i++) {
        noises[i] = new NoiseLoop(20, -1, 1);
    }

    setInterval(async () => {
        for (let i = 0; i < 512; i++) {
            z[i] = noises[i].value(angle);
        }
        angle += PI * 2 / 7200;
        await generateRainbow();
    }, 250);
}

async function generateRainbow() {
    // console.log('generating rainbow...');
    const inputs = {
        "z": z,
        "truncation": 0.5
    };
    const outputs = await model.query(inputs);
    const { image } = outputs;
    rainbow.src = image;
    // console.log(outputs);
}



class NoiseLoop {

    constructor(diameter, min, max) {
        this.diameter = diameter;
        this.min = min;
        this.max = max;
        this.cx = random(1000);
        this.cy = random(1000);
    }

    value(angle) {
        const xoff = map(cos(angle), -1, 1, this.cx, this.cx + this.diameter);
        const yoff = map(sin(angle), -1, 1, this.cy, this.cy + this.diameter);
        const r = noise(xoff, yoff);
        return map(r, 0, 1, this.min, this.max);
    }

}


let oimg, img;
const scale = 20;
const sourceImages = [];

const brightnessValues = [];
const brightImages = [];

function preload() {
    oimg = loadImage('obama.jpg');

}

async function setup() {
    img = createImage(400, 500);
    img.copy(oimg, 0, 0, oimg.width, oimg.height, 0, 0, 400, 500);
    createCanvas(800, 500);
    pixelDensity(1);

    image(img, 0, 0);

    await loadAllImages();
    findBrightOnes();
    drawMosaic();

}

async function loadAllImages() {
    console.log('start loading images');
    const amount = 1084;
    const promises = [];
    for (let i = 0; i < amount; i++) {
        // await loadImage(`https://picsum.photos/${scale}/${scale}?image=${i}`, src => sourceImages.push(src));
        promises.push(new Promise((resolve, reject) => {
            sourceImages.push(loadImage(`https://picsum.photos/${scale}/${scale}?image=${i}`, src => resolve(src), err => resolve(err)));
        }));
    }
    await Promise.all(promises);
    console.log('finished loading images');
}

function findBrightOnes() {
    console.log('start making brightness imagemap');
    for (const simg of sourceImages) {
        let avg = 0;

        simg.loadPixels();
        const plen = simg.pixels.length;
        for (let i = 0; i < plen; i++) {
            const c = color(simg.pixels[i]);
            const b = brightness(c);
            avg += b;
        }
        avg /= plen;
        brightnessValues.push(avg);
    }

    for (let i = 0; i < 256; i++) {
        let record = 256;
        for (let j = 0; j < 256; j++) {
            const diff = abs(i - brightnessValues[j]);
            if (diff < record) {
                record = diff;
                brightImages[i] = sourceImages[j];
            }
        }
    }
    console.log('finished making brightness imagemap');
}

function drawMosaic() {
    img.loadPixels();
    for (let x = 0; x < img.width; x += scale) {
        for (let y = 0; y < img.height; y += scale) {
            const pixIndex = 4 * (x + y * img.width);
            const r = img.pixels[pixIndex];
            const g = img.pixels[pixIndex + 1];
            const b = img.pixels[pixIndex + 2];
            const c = color(r, g, b);
            const br = brightness(c);
            const imageIndex = floor(br);
            image(brightImages[imageIndex], 400 + x, y, scale, scale);
        }
    }
}

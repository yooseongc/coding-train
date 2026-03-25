
/** 
* Julia Set(망델브로 집합)
*  가스통 쥘리아가 고안한 프랙탈의 일종.
*  쥘리아 집합은 주어진 복소수 c에 대해서 다음 점화식에 따라 정의된 수열이
*    발산하지 않는 성질을 갖도록 하는 복소수 z의 집합.
*  z_{n+1} = z_{n}^2 + c
*  만델브로 집합의 점화식과 같지만, 
*  만델브로 집합은 z_0 = 0일 때 z를 발산하지 않게 하는 c의 집합이라면,
*  쥘리아 집합은 z를 발산하지 않게 하는 z의 집합으로
*  z와 c의 역할이 뒤바뀜.
* 
*  만델브로 집합과 마찬가지로 자기유사성 및 초기 조건의 민감성을 가짐.
*  
*/

let angle = 0;

// Maximum number of iterations for each point on the complex plane
const maxIterations = 100;

// Colors to be used for each possible iteration count
const colorsRed = [];
const colorsGreen = [];
const colorsBlue = [];
let frDiv;

function setup() {
    createCanvas(640, 360);
    pixelDensity(1);
    colorMode(HSB, 1);

    // Create Colors
    for (let n = 0; n < maxIterations; n++) {
        const hu = sqrt(n / maxIterations);
        const col = color(hu, 255, 150);
        colorsRed[n]   = red(col);
        colorsGreen[n] = green(col);
        colorsBlue[n]  = blue(col);
    }
    frDiv = createDiv('');
}

function draw() {
    
    const ca = cos(angle * 3.213);
    const cb = sin(angle);
    angle += 0.02;
    background(255);

    const w = 5;
    const h = w * (height / width);

    const xmin = - w / 2;
    const ymin = - h / 2;

    // x, y goes from min to max
    const xmax = xmin + w;
    const ymax = ymin + h;

    // Calculate amount we increment x, y for each pixel
    const dx = (xmax - xmin) / width;
    const dy = (ymax - ymin) / height;

    loadPixels();
    let y = ymin;
    for (let j = 0; j < height; j++) {
        let x = xmin;
        for (let i = 0; i < width; i++) {
            // Now we test, as we iterate z = z^2 + c does z tend towards infinity?
            let a = x;
            let b = y;
            let n = 0;
            while (n < maxIterations) {
                const aa = a * a;
                const bb = b * b;
                const twoab = 2 * a * b;
                a = aa - bb + ca;
                b = twoab + cb;
                if (a * a + b * b > 2.0) { break; }
                
                n++;   
            }
            
            const pix = (i + j * width) * 4;
            if (n === maxIterations) {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = 0;
                pixels[pix + 2] = 0;
            } else {
                pixels[pix + 0] = colorsRed[n];
                pixels[pix + 1] = colorsGreen[n];
                pixels[pix + 2] = colorsBlue[n];
            }
            x += dx;
        }
        y += dy;
    }
    updatePixels();
    frDiv.html(floor(frameRate()));
}

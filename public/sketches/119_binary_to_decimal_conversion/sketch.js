
// base
//    2 (binary)  : 0 or 1
//   10 (decimal) : 0 ~ 9
//   16 (hexademical) : 0 ~ 9, A ~ F 


const byte = [];
let num;

let resultP;

function setup() {
    createCanvas(400, 100);
    const w = width / 8;

    num = randomByte()
    for (let i = 0; i < 8; i++) {
        byte[i] = new Bit(w / 2 + i * w, 50, w - 4);
        byte[i].setState(num.charAt(i));
    }

    resultP = createP(`${num} -> ${binaryToDecimal(num)}`);
    resultP.style('font-size: 32pt;');
    const randomBtn = createButton('Random!');
    randomBtn.mouseClicked(() => {
        num = randomByte();
        for (let i = 0; i < 8; i++) {
            byte[i].setState(num.charAt(i));
        }
        resultP.html(`${num} -> ${binaryToDecimal(num)}`);
    })
}

function mousePressed() {
    for (let i = 0; i < byte.length; i++) {
        if (byte[i].toggle(mouseX, mouseY)) {
            num = num.substr(0, i) + ((num[i] === '1') ? '0' : '1') + num.substr(i+1, num.length);
            resultP.html(`${num} -> ${binaryToDecimal(num)}`);
            console.log(num);
        }
    }
}

function draw() {
    background(51);
    for (let i = 0; i < 8; i++) {
        byte[i].show();
    }
}

function binaryToDecimal(value) {
    return convertBaseToDecimal(value, 2);
}

function convertBaseToDecimal(value, base) {
    value = String(value);
    const len = value.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += Number(value.charAt(len - 1 - i)) * pow(base, i);
    }
    return sum;
}

function convertDemicalToBase(value, base) {
    const arr = [];
    while (true) {
        const quotitent = floor(value / base);
        const remainder = value % base;
        arr.unshift(remainder);
        value = quotitent;
        if (quotitent === 0) {
            break;
        }
    }
    return arr.reduce((a, c) => a + c, '');
}


function randomByte() {
    const rv = floor(random(255));
    return convertDemicalToBase(rv, 2).padStart(8, '0');
}
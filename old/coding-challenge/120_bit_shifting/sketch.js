
// base
//    2 (binary)  : 0 or 1
//   10 (decimal) : 0 ~ 9
//   16 (hexademical) : 0 ~ 9, A ~ F 


const byte = [];

let resultP;

function setup() {
    createCanvas(400, 100);
    const w = width / 8;

    const num = randomByte();
    for (let i = 0; i < 8; i++) {
        byte[i] = new Bit(w / 2 + i * w, 50, w - 4);
        byte[i].setState(num.charAt(i));
    }

    resultP = createP(`${getBinaryString()} -> ${binaryToDecimal(getBinaryString())}`);
    resultP.style('font-size: 32pt;');

    const unshiftBtn = createButton('<<');
    const shiftBtn = createButton('>>');
    
    unshiftBtn.mouseClicked(() => {
        unshiftBits();
        resultP.html(`${getBinaryString()} -> ${binaryToDecimal(getBinaryString())}`);
    });
    shiftBtn.mouseClicked(() => {
        shiftBits();
        resultP.html(`${getBinaryString()} -> ${binaryToDecimal(getBinaryString())}`);
    });
}

function shiftBits() {
    const dec = parseInt(binaryToDecimal(getBinaryString()));
    console.log(dec);
    const shifted = dec >> 1;
    console.log(shifted)
    const bin = decimalToBinary(shifted);
    console.log(bin)
    for (let i = 0; i < 8; i++) {
        byte[i].setState(bin.charAt(i));
    }
}

function unshiftBits() {
    const dec = parseInt(binaryToDecimal(getBinaryString()));
    const unshifted = (dec << 1) % 256;
    const bin = decimalToBinary(unshifted);
    for (let i = 0; i < 8; i++) {
        byte[i].setState(bin.charAt(i));
    }
}

function mousePressed() {
    for (let i = 0; i < byte.length; i++) {
        if (byte[i].toggle(mouseX, mouseY)) {
            resultP.html(`${getBinaryString()} -> ${binaryToDecimal(getBinaryString())}`);
        }
    }
}

function draw() {
    background(51);
    for (let i = 0; i < 8; i++) {
        byte[i].show();
    }
    resultP.html(`${getBinaryString()} -> ${binaryToDecimal(getBinaryString())}`);
}

function binaryToDecimal(value) {
    return convertBaseToDecimal(value, 2);
}

function decimalToBinary(value) {
    return convertDemicalToBase(value, 2);
}

function convertBaseToDecimal(value, base) {
    value = String(value);
    const len = value.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += Number(value.charAt(len - 1 - i)) * pow(base, i);
    }
    return '' + sum;
}

function getBinaryString() {
    return byte.map(bit => '' + bit.state).reduce((a, c) => a + c);
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
    return arr.reduce((a, c) => a + c, '').padStart(8, '0');
}


function randomByte() {
    const rv = floor(random(255));
    return convertDemicalToBase(rv, 2).padStart(8, '0');
}
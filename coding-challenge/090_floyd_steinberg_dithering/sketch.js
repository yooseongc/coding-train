

// https://en.wikipedia.org/wiki/Dither
// https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering
// https://en.wikipedia.org/wiki/Stippling

/*
    implement the Floyd-Steinberg Dithering algorithm
    and
    create a “image stippling” effect on an image


    1) What is dithering?

    제한된 색을 이용하여 응염이나 색을 나타내는 것이며, 여러 컬러의 색을 최대한 맞추는 과정.


    2) What is Floyd-Steinberg Dithering Algorithm?

    1976년 로버트 플로이드와 루이스 스타인버그가 고안한 영상 디더랑 알고리즘.
    영상을 왼쪽에서 오른쪽, 위에서 아래로 따라가면서 각각의 픽셀을 양자화함.
    양자화 오류는 주위 픽셀로 이전되지만, 이미 양자화된 픽셀은 영향을 받지 않음.
    또한, 픽셀의 값이 반올림 결과 내림이 된 픽셀이 많을수록 다음 픽셀은 올림이 될 가능성이 커지며,
    이로써 평균적인 양자화 오류는 0에 가까워짐.

    구현 중 홀수번째 줄과 짝수번째 줄의 디더링이 별도로 이루어지기도 하는데, 이를
    'serpentine scanning'이라 함.

    for each y
        for each x
            oldpixel := pixel[x][y]
            newpixel := find_closest_palette_color(oldpixel)
            pixel[x][y] := newpixel
            quant_error := oldpixel - newpixel
            pixel[x+1][y]   := pixel[x+1][y]   + 7/16 * quant_error
            pixel[x-1][y+1] := pixel[x-1][y+1] + 3/16 * quant_error
            pixel[x][y+1]   := pixel[x][y+1]   + 5/16 * quant_error
            pixel[x+1][y+1] := pixel[x+1][y+1] + 1/16 * quant_error    

    16비트 -> 8비트 일 때,
    find_closest_palette_color(oldpixel) = (oldpixel + 128) / 256

    The algorithm achieves dithering using error diffusion, 
      meaning it pushes (adds) the residual quantization error of a pixel 
      onto its neighboring pixels, to be dealt with later.

                *     7/16
        3/16   5/16   1/16

*/

let kitten;

function preload() {
    kitten = loadImage('images/kitten.jpg');
}

function setup() {
    createCanvas(kitten.width * 2, kitten.height);
    image(kitten, 0, 0);
    makeDithered(kitten, 1);
    image(kitten, kitten.width, 0);
    filter(GRAY); // apply gray filter to the whole canvas
}

function imageIndex(img, x, y) {
    return 4 * (x + y * img.width);
}

function getColorAtIndex(img, x, y) {
    const idx = imageIndex(img, x, y);
    const px = img.pixels;
    return color(px[idx], px[idx+1], px[idx+2], px[idx+3])
}

function setColorAtIndex(img, x, y, color) {
    const idx = imageIndex(img, x, y);
    const px = img.pixels;
    px[idx]   = red(color);
    px[idx+1] = green(color);
    px[idx+2] = blue(color);
    px[idx+3] = alpha(color);
}

function closestStep(steps, value) {
    // Finds the closest step for a given value
    // The step 0 is always included, so the number of steps is actually
    // step + 1
    return round(steps * value / 255) * floor(255 / steps);
}

function addError(img, factor, x, y, errR, errG, errB) {
    if (x < 0 || x >= img.width || y < 0 || y >= img.height) return;
    const clr = getColorAtIndex(img, x, y);
    const r = red(clr);
    const g = green(clr);
    const b = blue(clr);
    clr.setRed(r + errR * factor);
    clr.setGreen(g + errG * factor);
    clr.setBlue(b + errB * factor);
    setColorAtIndex(img, x, y, clr);
}

function distributeError(img, x, y, errR, errG, errB) {
    addError(img, 7 / 16, x + 1, y    , errR, errG, errB);
    addError(img, 3 / 16, x - 1, y + 1, errR, errG, errB);
    addError(img, 5 / 16, x    , y + 1, errR, errG, errB);
    addError(img, 1 / 16, x + 1, y + 1, errR, errG, errB);
}

function makeDithered(img, steps) {
    img.loadPixels();
    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            const clr = getColorAtIndex(img, x, y);
            const oldR = red(clr);
            const oldG = green(clr);
            const oldB = blue(clr);
            const newR = closestStep(steps, oldR);
            const newG = closestStep(steps, oldG);
            const newB = closestStep(steps, oldB);
            const newColor = color(newR, newG, newB);
            setColorAtIndex(img, x, y, newColor);

            const errR = oldR - newR;
            const errG = oldG - newG;
            const errB = oldB - newB;
            distributeError(img, x, y, errR, errG, errB);
        }
    }
    img.updatePixels();
}

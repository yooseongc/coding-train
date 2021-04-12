
/** 
 * Mandelbrot Set(망델브로 집합)
 *  브누아 망델브로가 고안한 프랙탈의 일종.
 *  다음의 점화식으로 정의된 수열이 발산하지 않는 성질을 갖도록 하는 복소수 c의 집합으로 정의.
 * 
 * z_n, c는 복소수
 * z_0 = 0  
 * z_{n+1} = (z_n)**2 + c
 * 
 * 복소수를 사용하지 않고 정의하려면, 모든 복소수를 실수부와 허수부로 분리하여 처리.
 * 즉, 2차원 벡터로 처리할 수 있음.
 * 여기서 c를 (a, b)로 변경함.
 * 이 때 식이 아래와 같이 변경
 * 
 * x_n, y_n, a, b는 실수, 
 * (x_0, y_0) = (0, 0)
 * x_{n+1} = x_n ** 2 - y_n ** 2 + a
 * y_{n+1} = 2 * x_n * y_n + b
 * 
 * 일반적인 집합 표기로는 f_c(z) = z**2 + c 로 표기함
 * 
 * # 집합을 그리는 방법
 *   - z_n의 절대값이 2보다 크다면 z_n은 발산함.
 *   - 이 때 c는 망델브로 집합에 속해 있지 않음.
 *   - 2라는 값은 발산하는 수열의 크기를 미리 막아주는 역할을 하는 경계값임.
 *   - 집합 안에 속해 있는 점의 경우 z_n이 발산하지 않으므로 무한히 계산해도 끝나지 않음.
 *   - 집합 안과 밖의 두 가지 영역만 의미 있지만,
 *     가시화 소프트웨어에서는 처음으로 경계값을 벗어는 z_n의 n 값에 따라 
 *     망델브로 집합 바깥의 영역을 다른 색으로 칠함.
 * 
 * # 성질
 *   - 자기유사성
 *   - 차원 : 2차원
 *   - Julia Set의 일종의 "지도"가 됨.
 *     Mandelbrot가 그려지는 복소 평면의 각 점이 Julia Set의 초기값과 일대일 대응이 될 수 있으며,
 *     Mandelbrot Set 내부의 점에 대응하는 Julia Set은 연결 공간이며, 바깥의 점들은 연결공간이 아님. 
 * 
 *  f(z) = z^2 + c
 *  start with z0 = 0,
 *  z1 = z0^2 + c = c
 *  z2 = z1^2 + c = c^2 + c
 *  z3 = z2^2 + c = (c^2 + c)^2 + c = c^4 + 2 * c^3 + c^2 + c
 *  ...
 *  for remaining bounded, all z_n should satisfy |z_n| <= 2   
 * 
 *  let c = a + b * i,
 *  c^2 + c = a^2 - b^2 + 2 * a * b * i + a + b * i
 *          = (a^2 - b^2 + a) + i * (2ab + b)
 *  
 */

let minSlider;
let maxSlider;
let frDiv;

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
    minSlider = createSlider(-2.5, 0, -2.5, 0.01);
    maxSlider = createSlider(0, 2.5, 2.5, 0.01);
    frDiv = createDiv('');
}

function draw() {
    const maxIterations = 100;
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            const minV = minSlider.value();
            const maxV = maxSlider.value();
            let a = map(x, 0, width, minV, maxV);
            let b = map(y, 0, height, minV, maxV);
            const a0 = a;
            const b0 = b;
            let n = 0;
            while (n < maxIterations) {
                const aa = a * a - b * b;
                const bb = 2 * a * b;
                a = aa + a0;
                b = bb + b0;
                if (a * a + b * b > 16) { break; }
                n++;
            }

            let bright = map(n, 0, maxIterations, 0, 1);
            bright = map(sqrt(bright), 0, 1, 100, 255);
            if (n === maxIterations) bright = 0;

            const pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
    frDiv.html(floor(frameRate()));
}

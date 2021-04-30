
function dft(x) {
    const X = [];
    const N = x.length;
    for (let k = 0; k < N; k++) {
        const sum = new Complex(0, 0);
        for (let n = 0; n < N; n++) {
            const phi = (TWO_PI * k * n) / N;
            const c = new Complex(cos(phi), -sin(phi));
            sum.add(x[n].mult(c));
        }
        sum.re = sum.re / N;
        sum.im = sum.im / N;
        const { re, im } = sum;
        const freq = k;
        const amp = sqrt(re * re + im * im);
        const phase = atan2(im, re);
        X[k] = { re, im, freq, amp, phase };
    }
    return X;
}

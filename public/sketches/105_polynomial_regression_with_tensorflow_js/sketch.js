
// https://js.tensorflow.org/

/* 
    tf.train.sgd(learningRate)
        Construct a tf.SGDOptimizer that uses stochastic gradient descent.

    tf.tain.Optimizer extends Serializable
        minimize(f, returnCost?, varList?) : execute f() and minimizes 
            the scalar output of f() by computing gradients of y with respect
            to the list of tranable variables provided by varList.
            If no list is provided, it defaults to all trainable variables.
        computeGradients(f, varList?) : Execute f() and computes the gradient
            of the scalar output of f() with respect to the list of trainable
            variables provided by varList. 
            If no list is provided, it defaults to all trainable variables.
        applyGradients(variableGradients) : updates variables by using
            the computed gradients.
            variableGradients - tf.Tensor

    SGD : 확률적 경사 하강법
        랜덤하게 추출한 일부 데이터에 대해 가중치를 조절함.
        W(t+1) = W(t) - learningRate * gradient,
            W : weight
            gradient => d Cost(w) / dw,
            Cost의 입력데이터에 대해 확률적으로 선택.
    
    ADAM : Adaptive Moment Estimation
        Momentum(gradient를 제곱하지 않은 값 사용)과 
        RMSprop (gradient 제곱을 지수평균한 값 사용)을 합친 경사하강법.

    use equation 
        y = a * x^3 + b * x^2 + c * x + d
    
*/


const xValues = [];
const yValues = [];

let a, b, c, d;
let dragging = false;

const learningRate = 0.2;
const optimizer = tf.train.sgd(learningRate);

function setup() {
    createCanvas(400, 400);
    a = tf.variable(tf.scalar(random(-1, 1)));
    b = tf.variable(tf.scalar(random(-1, 1)));
    c = tf.variable(tf.scalar(random(-1, 1)));
    d = tf.variable(tf.scalar(random(-1, 1)));
}

function loss(pred, labels) {
    // Using MSE : Mean Square Error
    return pred.sub(labels).square().mean();
}

function predict(x) {
    const xs = tf.tensor1d(x);
    // y = a * x^3 + b * x^2 + c * x + d
    const ys = xs.pow(tf.scalar(3)).mul(a)
                .add(xs.square().mul(b))
                .add(xs.mul(c))
                .add(d);
    return ys;
}

function mousePressed() {
    dragging = true;
}

function mouseReleased() {
    dragging = false;
}

function draw() {
    if (dragging) {
        if (mouseX < width && mouseY < height) {
            const x = map(mouseX, 0, width, -1, 1);
            const y = map(mouseY, 0, height, 1, -1);
            xValues.push(x);
            yValues.push(y);
        }
    }

    tf.tidy(() => {
        if (xValues.length > 0) {
            const ys = tf.tensor1d(yValues);
            // minimize MSE
            optimizer.minimize(() => loss(predict(xValues), ys));
        }
    });

    background(51);

    stroke(255);
    strokeWeight(8);
    for (let i = 0; i < xValues.length; i++) {
        const px = map(xValues[i], -1, 1, 0, width);
        const py = map(yValues[i], -1, 1, height, 0);
        point(px, py);
    }

    const curveX = [];
    for (let x = -1; x <= 1; x += 0.05) {
        curveX.push(x);
    }
    const ys = tf.tidy(() => predict(curveX));
    const curveY = ys.dataSync();
    ys.dispose();

    beginShape();
    noFill();
    stroke(255);
    strokeWeight(2);
    for (let i = 0; i < curveX.length; i++) {
        const x = map(curveX[i], -1, 1, 0, width);
        const y = map(curveY[i], -1, 1, height, 0);
        vertex(x, y);
    }
    endShape();
    

    strokeWeight(2);

    if (frameCount % 300 === 0) console.log(tf.memory());
}

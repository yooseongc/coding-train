
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
            
    
*/ 


const xValues = [];
const yValues = [];

let m, b;

const learningRate = 0.5;
const optimizer = tf.train.sgd(learningRate);

function setup() {
    createCanvas(400, 400);
    m = tf.variable(tf.scalar(random(1))); // 기울기
    b = tf.variable(tf.scalar(random(1))); // y-절편
}

function loss(pred, labels) {
    // Using MSE : Mean Square Error
    return pred.sub(labels).square().mean();
}

function predict(x) {
    const xs = tf.tensor1d(x);
    const ys = xs.mul(m).add(b);
    return ys;
}

function mousePressed() {
    if (mouseX > width || mouseY > height) return;
    const x = map(mouseX, 0, width, 0, 1);
    const y = map(mouseY, 0, height, 1, 0);
    xValues.push(x);
    yValues.push(y);
}

function draw() {

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
        const px = map(xValues[i], 0, 1, 0, width);
        const py = map(yValues[i], 0, 1, height, 0);
        point(px, py);
    } 

    const lineX = [0, 1];
    const ys = tf.tidy(() => predict(lineX));
    const lineY = ys.dataSync();
    ys.dispose();

    const x1 = map(lineX[0], 0, 1, 0, width);
    const x2 = map(lineX[1], 0, 1, 0, width);
    const y1 = map(lineY[0], 0, 1, height, 0);
    const y2 = map(lineY[1], 0, 1, height, 0);

    strokeWeight(2);
    line(x1, y1, x2, y2);

    if (frameCount % 300 === 0) console.log(tf.memory());
}


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

let model;
let xs;

const resolution = 20;
let cols;
let rows;

const trainXs = tf.tensor2d([
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1]
]);

const trainYs = tf.tensor2d([
    [ 0 ],
    [ 1 ],
    [ 1 ],
    [ 0 ]
]);

const learningRate = 0.05;
const optimizer = tf.train.adam(learningRate);

function setup() {
    createCanvas(400, 400);
    cols = width / resolution;
    rows = height / resolution;

    // inputs tensor
    const inputs = [];
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            inputs.push([i / cols, j / rows]);
        }
    }
    xs = tf.tensor2d(inputs);

    // make model
    model = tf.sequential();
    const hiddenLayer = tf.layers.dense({
        inputShape: [ 2 ],
        units: 32,
        activation: 'sigmoid'
    });
    const outputLayer = tf.layers.dense({
        units: 1,
        activation: 'sigmoid'
    });
    model.add(hiddenLayer);
    model.add(outputLayer);
    model.compile({
        optimizer: optimizer,
        loss: 'meanSquaredError'
    });

    setTimeout(train, 10);

}

async function train() {
    await trainModel();
    await train();
}

async function trainModel() {
    return model.fit(trainXs, trainYs, {
        shuffle: true,
        epochs: 1
    });
}


function draw() {
   
    background(0);
    textSize(8);
    textAlign(CENTER, CENTER);

    tf.tidy(() => {
        
        // Get the predictions
        const ys = model.predict(xs);
        const yValues = ys.dataSync();

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const idx = i * rows + j;
                const brightness = yValues[idx] * 255;
                fill(brightness);
                rect(i * resolution, j * resolution, resolution);
                fill(255 - brightness);
                text(nf(yValues[idx], 1, 2), (i + 0.5) * resolution, (j + 0.5) * resolution);
            }
        }
    });

    if (frameCount % 300 === 0) console.log(tf.memory());
}

import { Link } from 'react-router-dom'
import { CodeBlock } from '@study-ui/components'
import { useTitle } from '../../hooks/useTitle'

const matrixConstructorCode = `class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
    }
}`

const matrixMultiplyCode = `static multiply(a, b) {
    if (a.cols !== b.rows) {
        console.error('Columns of A must match rows of B.');
        return;
    }
    return new Matrix(a.rows, b.cols)
        .map((e, i, j) => {
            let sum = 0;
            for (let k = 0; k < a.cols; k++) {
                sum += a.data[i][k] * b.data[k][j];
            }
            return sum;
        });
}`

const matrixTransposeCode = `static transpose(matrix) {
    return new Matrix(matrix.cols, matrix.rows)
        .map((_, i, j) => matrix.data[j][i]);
}`

const activationFunctionCode = `class ActivationFunction {
    constructor(func, dfunc) {
        this.func = func;
        this.dfunc = dfunc;
    }
}

const sigmoid = new ActivationFunction(
    x => 1 / (1 + Math.exp(-x)),
    y => y * (1 - y)
);

const tanh = new ActivationFunction(
    x => Math.tanh(x),
    y => 1 - (y * y)
);`

const feedforwardCode = `predict(inputArray) {
    // Generating the Hidden Outputs
    const inputs = Matrix.fromArray(inputArray);
    const hidden = Matrix.multiply(this.weightsIH, inputs);
    hidden.add(this.biasH);
    // activation function
    hidden.map(this.activationFunction.func);

    // Generating the Output's Outputs
    const outputs = Matrix.multiply(this.weightsHO, hidden);
    outputs.add(this.biasO);
    outputs.map(this.activationFunction.func);

    return outputs.toArray();
}`

const backpropagationCode = `train(inputArray, targetArray) {
    // --- Feedforward ---
    const inputs = Matrix.fromArray(inputArray);
    const hidden = Matrix.multiply(this.weightsIH, inputs);
    hidden.add(this.biasH);
    hidden.map(this.activationFunction.func);

    const outputs = Matrix.multiply(this.weightsHO, hidden);
    outputs.add(this.biasO);
    outputs.map(this.activationFunction.func);

    const targets = Matrix.fromArray(targetArray);

    // --- Output layer error & gradient ---
    const outputErrors = Matrix.subtract(targets, outputs);
    const gradients = Matrix.map(outputs, this.activationFunction.dfunc);
    gradients.multiply(outputErrors);
    gradients.multiply(this.learningRate);

    const hiddenT = Matrix.transpose(hidden);
    const weightHODeltas = Matrix.multiply(gradients, hiddenT);
    this.weightsHO.add(weightHODeltas);
    this.biasO.add(gradients);

    // --- Hidden layer error & gradient ---
    const weightHOT = Matrix.transpose(this.weightsHO);
    const hiddenErrors = Matrix.multiply(weightHOT, outputErrors);
    const hiddenGradient = Matrix.map(hidden, this.activationFunction.dfunc);
    hiddenGradient.multiply(hiddenErrors);
    hiddenGradient.multiply(this.learningRate);

    const inputsT = Matrix.transpose(inputs);
    const weightIHDeltas = Matrix.multiply(hiddenGradient, inputsT);
    this.weightsIH.add(weightIHDeltas);
    this.biasH.add(hiddenGradient);
}`

const nnConstructorCode = `class NeuralNetwork {
    constructor(inputNodes, hiddenNodes, outputNodes) {
        this.inputNodes  = inputNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = outputNodes;

        // Weight matrices (randomly initialized)
        this.weightsIH = new Matrix(hiddenNodes, inputNodes);
        this.weightsHO = new Matrix(outputNodes, hiddenNodes);
        this.weightsIH.randomize();
        this.weightsHO.randomize();

        // Bias vectors (randomly initialized)
        this.biasH = new Matrix(hiddenNodes, 1);
        this.biasO = new Matrix(outputNodes, 1);
        this.biasH.randomize();
        this.biasO.randomize();

        this.setLearningRate();          // default 0.1
        this.setActivationFunction();    // default sigmoid
    }
}`

export default function GuideToyNeuralNetwork() {
    useTitle('Toy Neural Network')
    return (
        <div className="max-w-full mx-auto px-3 lg:px-4 py-6">
            {/* Back link */}
            <Link
                to="/"
                className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 mb-6"
            >
                &larr; Home
            </Link>

            {/* Title */}
            <div className="mb-10">
                <div className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 rounded-full px-3 py-1 mb-4">
                    Toy Neural Network
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Toy Neural Network
                    <span className="text-blue-600 dark:text-blue-400 ml-3 text-2xl font-normal">
                        신경망 직접 구현하기
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl leading-relaxed">
                    JavaScript로 신경망을 밑바닥부터 직접 구현하는 프로젝트입니다.
                    행렬 연산, 피드포워드 알고리즘, 역전파 알고리즘을 단계별로 구현하여
                    신경망의 내부 동작 원리를 깊이 이해합니다.
                </p>
            </div>

            {/* Overview */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    프로젝트 개요
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        이 프로젝트는 TensorFlow나 PyTorch 같은 라이브러리를 사용하지 않고,
                        순수 JavaScript만으로 신경망을 구현합니다. 구현 과정은 다음 단계를 따릅니다:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                        <li>신경망의 기본 개념 이해 (Nature of Code Chapter 10 참고)</li>
                        <li>행렬(Matrix) 연산 라이브러리 구현</li>
                        <li>피드포워드(Feedforward) 알고리즘 구현</li>
                        <li>역전파(Backpropagation) 알고리즘 구현</li>
                        <li>실제 문제에 적용 (XOR, 색상 예측, Flappy Bird)</li>
                    </ol>
                    <p>
                        라이브러리에 의존하지 않고 직접 구현함으로써, 가중치가 어떻게 초기화되고,
                        데이터가 어떻게 네트워크를 통과하며, 오차가 어떻게 역방향으로 전파되어
                        가중치를 업데이트하는지를 명확하게 이해할 수 있습니다.
                    </p>
                </div>
            </section>

            {/* Matrix Math */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Step 1: 행렬 연산 (Matrix Math)
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        딥러닝에서 선형대수학은 숫자 그룹을 동시에 조작하는 수학적 도구입니다.
                        신경망은 가중치를 행렬에 저장하며, 행렬 연산을 통해 빠르고 효율적으로 계산합니다.
                        GPU가 게임의 픽셀을 병렬로 처리하는 것처럼, 신경망도 행렬 연산을 통해
                        대량의 데이터를 병렬로 처리합니다.
                    </p>

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">Matrix 클래스 생성자</h3>
                    <p>
                        행과 열의 수를 받아 0으로 초기화된 2차원 배열을 생성합니다.
                    </p>
                    <CodeBlock code={matrixConstructorCode} language="javascript" filename="Matrix - constructor" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">행렬 곱셈 (Matrix Multiplication)</h3>
                    <p>
                        행렬 곱셈은 신경망에서 가장 핵심적인 연산입니다. A 행렬의 열 수와 B 행렬의 행 수가
                        일치해야 하며, 결과는 A의 행 수 x B의 열 수 크기의 새 행렬입니다.
                        각 원소는 A의 행과 B의 열의 내적(dot product)으로 계산됩니다.
                    </p>
                    <CodeBlock code={matrixMultiplyCode} language="javascript" filename="Matrix.multiply (static)" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">전치 행렬 (Transpose)</h3>
                    <p>
                        행렬의 행과 열을 바꾸는 연산입니다. 신경망에서 역전파 시 가중치 행렬의
                        전치가 필요하며, 행렬 곱셈의 차원을 맞추는 데에도 활용됩니다.
                    </p>
                    <CodeBlock code={matrixTransposeCode} language="javascript" filename="Matrix.transpose (static)" />
                </div>
            </section>

            {/* Neural Network Structure */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Step 2: 신경망 구조
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        이 Toy Neural Network는 3층 구조(입력-은닉-출력)를 사용합니다.
                        생성 시 각 층의 노드 수를 지정하면, 가중치 행렬과 편향(bias) 벡터가
                        무작위로 초기화됩니다.
                    </p>
                    <CodeBlock code={nnConstructorCode} language="javascript" filename="NeuralNetwork - constructor" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">활성화 함수 (Activation Function)</h3>
                    <p>
                        활성화 함수는 뉴런의 출력을 결정하는 비선형 함수입니다.
                        비선형성이 없으면 아무리 많은 층을 쌓아도 단일 선형 변환과 동일해지므로,
                        활성화 함수는 신경망이 복잡한 패턴을 학습하는 데 필수적입니다.
                    </p>
                    <p>
                        <strong>Sigmoid</strong>는 출력을 0~1 범위로 압축하고,
                        <strong> tanh</strong>는 -1~1 범위로 압축합니다.
                        두 함수 모두 역전파를 위해 도함수(derivative)가 함께 정의됩니다.
                    </p>
                    <CodeBlock code={activationFunctionCode} language="javascript" filename="ActivationFunction" />
                </div>
            </section>

            {/* Feedforward */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Step 3: 피드포워드 (Feedforward)
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        피드포워드는 입력 데이터가 네트워크를 통과하여 출력을 생성하는 과정입니다.
                        데이터는 입력층에서 은닉층으로, 은닉층에서 출력층으로 순방향으로 전달됩니다.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">피드포워드 과정</h3>
                        <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>입력 배열을 행렬로 변환</li>
                            <li>입력-은닉 가중치 행렬과 입력 행렬을 곱함</li>
                            <li>은닉층 편향을 더함</li>
                            <li>활성화 함수를 적용</li>
                            <li>은닉-출력 가중치 행렬과 은닉층 출력을 곱함</li>
                            <li>출력층 편향을 더함</li>
                            <li>활성화 함수를 적용하여 최종 출력 생성</li>
                        </ol>
                    </div>
                    <CodeBlock code={feedforwardCode} language="javascript" filename="NeuralNetwork.predict" />
                </div>
            </section>

            {/* Backpropagation */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Step 4: 역전파 (Backpropagation)
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        역전파는 신경망 학습의 핵심 알고리즘입니다. 출력의 오차를 네트워크의
                        역방향으로 전파하여 각 가중치가 오차에 얼마나 기여했는지를 계산하고,
                        그에 비례하여 가중치를 조정합니다.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                        <h3 className="font-medium text-orange-800 dark:text-orange-300 mb-2">역전파 핵심 단계</h3>
                        <ol className="list-decimal list-inside space-y-2 text-orange-700 dark:text-orange-400">
                            <li>
                                <strong>오차 계산</strong>: 목표값(target)과 실제 출력(output)의 차이
                            </li>
                            <li>
                                <strong>그래디언트 계산</strong>: 활성화 함수의 도함수를 사용하여 출력층의
                                그래디언트를 계산하고, 오차와 학습률을 곱함
                            </li>
                            <li>
                                <strong>가중치 델타</strong>: 그래디언트와 이전 층 출력의 전치 행렬을 곱하여
                                가중치 변화량을 계산
                            </li>
                            <li>
                                <strong>가중치 업데이트</strong>: 계산된 델타를 현재 가중치에 더함
                            </li>
                            <li>
                                <strong>은닉층 반복</strong>: 출력층의 오차를 은닉층으로 전파하여 같은 과정을 반복
                            </li>
                        </ol>
                    </div>
                    <CodeBlock code={backpropagationCode} language="javascript" filename="NeuralNetwork.train" />
                </div>
            </section>

            {/* Related Challenges */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    관련 코딩 챌린지
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    <p>
                        이 Toy Neural Network 라이브러리를 활용한 코딩 챌린지들입니다.
                        XOR 문제부터 시작하여 색상 예측, 그리고 진화 알고리즘과 결합한
                        Flappy Bird까지 난이도를 높여가며 학습할 수 있습니다.
                    </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                    <Link
                        to="/challenge/092_xor_problem"
                        className="group rounded-lg border border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-700 p-4 transition-colors"
                    >
                        <div className="text-xs text-gray-400 font-mono mb-1">#092</div>
                        <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 text-sm">
                            XOR Problem
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            단일 퍼셉트론으로 풀 수 없는 XOR 문제를 다층 신경망으로 해결
                        </p>
                    </Link>
                    <Link
                        to="/challenge/099_neural_network_color_predictor"
                        className="group rounded-lg border border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-700 p-4 transition-colors"
                    >
                        <div className="text-xs text-gray-400 font-mono mb-1">#099</div>
                        <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 text-sm">
                            Neural Network Color Predictor
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            배경색에 어울리는 글자색(흰/검)을 신경망이 예측
                        </p>
                    </Link>
                    <Link
                        to="/challenge/100_neuroevolution_flappy_bird"
                        className="group rounded-lg border border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-700 p-4 transition-colors"
                    >
                        <div className="text-xs text-gray-400 font-mono mb-1">#100</div>
                        <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 text-sm">
                            Neuroevolution Flappy Bird
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            유전 알고리즘 + 신경망으로 Flappy Bird를 자동 플레이
                        </p>
                    </Link>
                </div>
            </section>

            {/* References */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-green-500">&#128206;</span> 참고 자료
                </h2>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Coding Train - Neural Networks Playlist &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/CodingTrain/Toy-Neural-Network-JS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            GitHub - Toy-Neural-Network-JS &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://towardsdatascience.com/linear-algebra-cheat-sheet-for-deep-learning-cd67aba4526c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Linear Algebra Cheat Sheet for Deep Learning &uarr;
                        </a>
                    </li>
                </ul>
            </section>

            <p className="text-center text-xs text-gray-400 dark:text-gray-700 mt-10">
                &copy; 2026 yooseongc &middot; coding-train
            </p>
        </div>
    )
}

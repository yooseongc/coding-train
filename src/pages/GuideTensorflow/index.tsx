import { Link } from 'react-router-dom'
import { CodeBlock } from '@study-ui/components'
import { useTitle } from '../../hooks/useTitle'

const scriptTagExample = `<html>
  <head>
    <!-- Load TensorFlow.js -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
    <script>
      const model = tf.sequential();
      model.add(tf.layers.dense({units: 1, inputShape: [1]}));
      model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

      const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
      const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

      model.fit(xs, ys).then(() => {
        model.predict(tf.tensor2d([5], [1, 1])).print();
      });
    </script>
  </head>
  <body></body>
</html>`

const npmExample = `import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

model.fit(xs, ys).then(() => {
  model.predict(tf.tensor2d([5], [1, 1])).print();
});`

const tensorCreationCode = `// 1D tensor (vector)
tf.tensor([1, 2, 3, 4]);

// 2D tensor (matrix)
tf.tensor([[1, 2], [3, 4]]);

// Flat array with explicit shape
tf.tensor([1, 2, 3, 4], [2, 2]);

// Scalar (0-dimensional)
tf.scalar(3.14);`

const memoryManagementCode = `// Tensor data is stored asynchronously
const ts = tf.tensor3d(values, [2, 5, 3], 'int32');
ts.data().then(data => console.log(data)); // Int32Array(30)

// Synchronous alternative
const syncData = ts.dataSync();

// Manual memory disposal
ts.dispose();

// Automatic cleanup with tf.tidy()
const result = tf.tidy(() => {
    const a = tf.tensor([1, 2, 3]);
    const b = tf.tensor([4, 5, 6]);
    return a.add(b); // intermediate tensors are cleaned up
});`

const sequentialModelCode = `// Method 1: Pass layers to constructor
const model = tf.sequential({
    layers: [
        tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
        tf.layers.dense({units: 10, activation: 'softmax'}),
    ]
});

// Method 2: Use .add() method
const model2 = tf.sequential();
model2.add(tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}));
model2.add(tf.layers.dense({units: 10, activation: 'softmax'}));`

const functionalModelCode = `// Create layers and connect them with .apply()
const input = tf.input({shape: [784]});
const dense1 = tf.layers.dense({units: 32, activation: 'relu'}).apply(input);
const dense2 = tf.layers.dense({units: 10, activation: 'softmax'}).apply(dense1);
const model = tf.model({inputs: input, outputs: dense2});`

const coreApiCode = `// Manually define weights and biases as Variables
const w1 = tf.variable(tf.randomNormal([784, 32]));
const b1 = tf.variable(tf.randomNormal([32]));
const w2 = tf.variable(tf.randomNormal([32, 10]));
const b2 = tf.variable(tf.randomNormal([10]));

function model(x) {
    return x.matMul(w1).add(b1).relu().matMul(w2).add(b2).softmax();
}`

const customLayerCode = `class SquaredSumLayer extends tf.layers.Layer {
    constructor() { super({}); }
    computeOutputShape(inputShape) { return []; }
    call(input, kwargs) { return input.square().sum(); }
    getClassName() { return 'SquaredSum'; }
}

const t = tf.tensor([-2, 1, 0, 5]);
const o = new SquaredSumLayer().apply(t);
o.print(); // 30`

export default function GuideTensorflow() {
    useTitle('TensorFlow.js')
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
                <div className="inline-block text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-900 rounded-full px-3 py-1 mb-4">
                    Machine Learning
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    TensorFlow.js
                    <span className="text-green-600 dark:text-green-400 ml-3 text-2xl font-normal">
                        브라우저에서 머신러닝
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl leading-relaxed">
                    TensorFlow.js는 브라우저와 Node.js에서 머신러닝 모델을 훈련하고 배포할 수 있는
                    오픈소스 JavaScript 라이브러리입니다. 텐서 개념부터 Layers API, Core API까지
                    체계적으로 학습합니다.
                </p>
            </div>

            {/* Introduction */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    소개
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        TensorFlow.js는 하드웨어 가속을 지원하는 JavaScript 머신러닝 라이브러리로,
                        다음과 같은 활용이 가능합니다:
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">브라우저에서 ML 개발</div>
                            <p className="text-xs text-gray-500">WebGL/WebGPU 백엔드를 통한 GPU 가속 연산</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">Node.js에서 ML 개발</div>
                            <p className="text-xs text-gray-500">TensorFlow C++ 어댑터를 통한 서버 사이드 ML</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">기존 모델 실행</div>
                            <p className="text-xs text-gray-500">Python에서 학습된 모델을 JS에서 추론</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">전이 학습</div>
                            <p className="text-xs text-gray-500">기존 모델을 새로운 데이터로 재학습</p>
                        </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mt-4">
                        <h3 className="font-medium text-green-800 dark:text-green-300 mb-2">주요 API</h3>
                        <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-400 text-xs">
                            <li><strong>Core API</strong>: 신경망과 수치 계산을 위한 유연한 저수준 API</li>
                            <li><strong>Layers API</strong>: Keras와 유사한 고수준 API</li>
                            <li><strong>Data API</strong>: 데이터 로딩/전처리 (tf.data 유사)</li>
                            <li><strong>Converter</strong>: TensorFlow SavedModel을 JS로 변환</li>
                            <li><strong>Vis</strong>: 브라우저 내 모델 시각화</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    시작하기 (Getting Started)
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        TensorFlow.js는 두 가지 방법으로 프로젝트에 포함할 수 있습니다.
                    </p>

                    <h3 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">
                        방법 1: Script 태그
                    </h3>
                    <p>
                        CDN에서 직접 로드하는 가장 간단한 방법입니다. 별도의 빌드 도구 없이
                        HTML 파일에서 바로 사용할 수 있습니다.
                    </p>
                    <CodeBlock code={scriptTagExample} language="html" filename="index.html" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">
                        방법 2: NPM
                    </h3>
                    <p>
                        모듈 번들러(Webpack, Vite 등)를 사용하는 프로젝트에서는 npm으로 설치합니다.
                        ES2017 문법을 사용하므로 번들러/트랜스파일러가 필요합니다.
                    </p>
                    <CodeBlock code={npmExample} language="javascript" filename="app.js (NPM)" />
                </div>
            </section>

            {/* Tensors */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    텐서 (Tensors)
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        텐서는 TensorFlow.js의 핵심 데이터 구조로, 벡터와 행렬을 더 높은 차원으로
                        일반화한 것입니다. 스칼라(0D), 벡터(1D), 행렬(2D), 3D 텐서 등
                        다양한 차원의 데이터를 표현할 수 있습니다.
                    </p>

                    <h3 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">텐서 생성</h3>
                    <CodeBlock code={tensorCreationCode} language="javascript" filename="Tensor Creation" />

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">주요 생성 함수</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <div><code className="text-pink-600 dark:text-pink-400">tf.tensor()</code> - 범용 텐서 생성</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.scalar()</code> - 0D (스칼라)</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.tensor1d()</code> - 1D 벡터</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.tensor2d()</code> - 2D 행렬</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.zeros()</code> - 0으로 채운 텐서</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.ones()</code> - 1로 채운 텐서</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.linspace()</code> - 등간격 값</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.oneHot()</code> - 원-핫 인코딩</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.fill()</code> - 특정 값으로 채움</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.range()</code> - 범위 값 생성</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.eye()</code> - 단위 행렬</div>
                            <div><code className="text-pink-600 dark:text-pink-400">tf.variable()</code> - 변경 가능한 텐서</div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">tf.Tensor 주요 메서드</h3>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 dark:text-gray-400">
                            <li><code>data()</code> / <code>dataSync()</code> - 실제 데이터 접근 (비동기/동기)</li>
                            <li><code>array()</code> / <code>arraySync()</code> - 배열로 변환</li>
                            <li><code>buffer()</code> - 변경 가능한 TensorBuffer로 변환</li>
                            <li><code>dispose()</code> - 메모리 해제</li>
                            <li><code>print()</code> - 콘솔에 출력</li>
                            <li><code>clone()</code> - 복사본 생성</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Operations */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    연산 (Operations)
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">메모리 관리</h3>
                    <p>
                        텐서는 별도의 메모리 공간에 저장되므로, 사용하지 않는 텐서는 반드시
                        해제해야 합니다. <code className="text-pink-600 dark:text-pink-400">tf.tidy()</code>를 사용하면
                        함수 내에서 생성된 중간 텐서를 자동으로 정리할 수 있습니다.
                    </p>
                    <CodeBlock code={memoryManagementCode} language="javascript" filename="Memory Management" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">주요 연산 카테고리</h3>
                    <p>
                        모든 연산은 새로운 텐서를 반환하며, 브로드캐스팅(broadcasting)을 지원합니다.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 mt-3">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">산술 연산 (Arithmetic)</div>
                            <p className="text-xs text-gray-500">add, sub, mul, div, pow, mod, maximum, minimum</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">기본 수학 (Basic Math)</div>
                            <p className="text-xs text-gray-500">abs, exp, log, sqrt, sin, cos, sigmoid, relu, tanh</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">행렬 연산 (Matrices)</div>
                            <p className="text-xs text-gray-500">dot, matMul, transpose, norm, outerProduct</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">합성곱 (Convolution)</div>
                            <p className="text-xs text-gray-500">conv1d, conv2d, conv3d, avgPool3d, maxPool3d</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">리덕션 / 정규화</div>
                            <p className="text-xs text-gray-500">sum, mean, max, min, batchNorm, dropout</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-xs">선형대수 (Linear Algebra)</div>
                            <p className="text-xs text-gray-500">gramSchmidt, qr, bandPart</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Layers API */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Layers API
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Layers API는 Keras를 모델로 한 고수준 API로, 레이어를 쌓아서 신경망을 구축합니다.
                        순차형(Sequential)과 기능적(Functional) 두 가지 방식을 제공합니다.
                    </p>

                    <h3 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">순차형 모델 (Sequential)</h3>
                    <p>
                        레이어를 순서대로 쌓는 가장 간단한 방법입니다.
                        첫 번째 레이어에만 <code className="text-pink-600 dark:text-pink-400">inputShape</code>을 지정하면,
                        이후 레이어의 입력 형상은 자동으로 추론됩니다.
                    </p>
                    <CodeBlock code={sequentialModelCode} language="javascript" filename="Sequential Model" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">기능적 모델 (Functional)</h3>
                    <p>
                        <code className="text-pink-600 dark:text-pink-400">apply()</code> 메서드로 레이어를 연결하여
                        더 복잡한 그래프 구조를 만들 수 있습니다. 레이어를 분리하여 테스트하거나
                        다중 입출력 모델을 만들 때 유용합니다.
                    </p>
                    <CodeBlock code={functionalModelCode} language="javascript" filename="Functional Model" />

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-4">
                        <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">LayersModel 기능</h3>
                        <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-400 text-xs">
                            <li><code>model.summary()</code>로 모델 구조, 레이어별 출력 형상, 파라미터 수 확인</li>
                            <li>자동 형상 추론 - 연속된 레이어의 호환성을 자동으로 검증</li>
                            <li><code>model.save()</code> / <code>tf.loadLayersModel()</code>로 모델 저장/로드</li>
                            <li>localStorage, IndexedDB, 파일 시스템 등 다양한 저장소 지원</li>
                        </ul>
                    </div>

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">커스텀 레이어</h3>
                    <p>
                        <code className="text-pink-600 dark:text-pink-400">tf.layers.Layer</code>를 상속하여
                        사용자 정의 레이어를 만들 수 있습니다.
                        단, 커스텀 레이어를 사용하면 모델 직렬화가 불가능합니다.
                    </p>
                    <CodeBlock code={customLayerCode} language="javascript" filename="Custom Layer" />
                </div>
            </section>

            {/* Core API */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Core API
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Core API는 최대한의 유연성과 제어가 필요할 때 사용합니다.
                        Layers API와 달리 가중치와 편향을 직접 생성하고 초기화해야 하며,
                        모델은 단순히 텐서를 입력받아 텐서를 반환하는 함수로 정의됩니다.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 mb-4">
                        <h3 className="font-medium text-orange-800 dark:text-orange-300 mb-2">Core API를 사용하는 경우</h3>
                        <ul className="list-disc list-inside space-y-1 text-orange-700 dark:text-orange-400 text-xs">
                            <li>최대한의 유연성 또는 제어가 필요할 때</li>
                            <li>직렬화가 필요하지 않거나 자체 직렬화 로직을 구현할 때</li>
                            <li>표준 레이어로 표현하기 어려운 아키텍처를 구현할 때</li>
                        </ul>
                    </div>
                    <CodeBlock code={coreApiCode} language="javascript" filename="Core API Model" />
                    <p>
                        위 예제에서 <code className="text-pink-600 dark:text-pink-400">tf.variable()</code>은
                        학습 과정에서 값이 변경될 수 있는 변경 가능한(mutable) 텐서를 생성합니다.
                        일반 텐서는 불변(immutable)이므로, 학습을 위해서는 반드시 Variable을 사용해야 합니다.
                    </p>
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
                            href="https://www.tensorflow.org/js/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            TensorFlow.js Official Site &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.tensorflow.org/js/tutorials"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            TensorFlow.js Tutorials &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.tensorflow.org/js/guide/models_and_layers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Models and Layers Guide &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/tensorflow/tfjs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            GitHub - TensorFlow.js &uarr;
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

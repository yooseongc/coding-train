import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '104_linear_regression_with_tensorflow_js',
    number: 104,
    title: 'Linear Regression with TensorFlow.js',
    categoryId: 'neural-networks-ml',
    description: 'TensorFlow.js의 SGD 옵티마이저로 선형 회귀를 구현합니다. 클릭으로 데이터를 추가하면 실시간으로 최적선을 학습합니다.',
    files: ['sketch.js'],
    libraries: ['tf.min.js'],
    references: [
        { title: 'Coding Challenge #104: Linear Regression with TensorFlow.js', url: 'https://thecodingtrain.com/challenges/104-linear-regression-with-tensorflow-js' },
        { title: 'TensorFlow.js 공식 문서', url: 'https://js.tensorflow.org/' },
        { title: 'Linear Regression - Wikipedia', url: 'https://en.wikipedia.org/wiki/Linear_regression' },
        { title: 'Stochastic Gradient Descent - Wikipedia', url: 'https://en.wikipedia.org/wiki/Stochastic_gradient_descent' },
    ],
    tags: ['linear-regression', 'tensorflow', 'gradient', 'loss'],
    difficulty: 'intermediate',
    explanation: [
        '선형 회귀(Linear Regression)는 통계학과 기계학습에서 가장 기본적인 예측 모델입니다. 19세기 초 프랜시스 골턴(Francis Galton)과 칼 피어슨(Karl Pearson)이 체계화했으며, y = mx + b 형태의 1차 함수로 데이터의 경향을 모델링합니다. TensorFlow.js를 사용하면 브라우저에서 직접 머신러닝 모델을 학습시킬 수 있습니다.',
        'y = m*x + b 모델에서 m(기울기, slope)과 b(y절편, intercept)을 tf.variable()로 학습 가능한 변수로 선언합니다. tf.train.sgd(0.5)로 확률적 경사 하강법(SGD, Stochastic Gradient Descent) 옵티마이저를 생성하며, SGD는 전체 데이터 대신 무작위 샘플로 기울기를 계산하여 W(t+1) = W(t) - learningRate * gradient 공식으로 가중치를 업데이트합니다.',
        'loss 함수는 MSE(Mean Square Error, 평균 제곱 오차)로, 예측값과 실제값의 차이를 제곱한 평균입니다. optimizer.minimize()가 자동 미분(automatic differentiation)을 통해 손실의 기울기를 계산하고 m과 b를 업데이트합니다. 이것이 TensorFlow의 핵심 기능인 자동 미분 엔진으로, 사용자가 직접 미분을 구현할 필요가 없습니다.',
        '마우스 클릭으로 (x, y) 데이터를 추가합니다. 좌표를 0~1 범위로 정규화(normalization)하여 학습 안정성을 높입니다. 정규화하지 않으면 큰 값의 기울기가 발산하여 학습이 불안정해질 수 있습니다. 매 프레임 데이터가 있으면 학습하고, x=0과 x=1에서의 예측값으로 직선을 그립니다.',
        'tf.tidy()로 중간 텐서를 자동 정리하여 메모리 누수를 방지합니다. 브라우저 환경에서는 GPU 메모리가 제한적이므로 텐서 관리가 매우 중요합니다. dataSync()로 텐서 값을 JavaScript 배열로 동기적으로 변환하고 dispose()로 명시적 해제합니다.',
        '선형 회귀는 주가 예측, 수요 예측, 의학 데이터 분석 등 수많은 실무 분야에서 활용됩니다. 단순하지만 해석 가능성(interpretability)이 높아 복잡한 딥러닝 모델의 기준선(baseline)으로도 자주 사용됩니다. 이 챌린지는 TensorFlow.js의 핵심 개념인 텐서, 변수, 옵티마이저, 손실 함수를 모두 다루는 좋은 입문 예제입니다.',
    ],
})

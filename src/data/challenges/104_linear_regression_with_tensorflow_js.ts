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
    ],
    tags: ['linear-regression', 'tensorflow', 'gradient', 'loss'],
    difficulty: 'intermediate',
    explanation: [
        'y = m*x + b 모델에서 m(기울기)과 b(y절편)을 tf.variable()로 학습 가능한 변수로 선언합니다. tf.train.sgd(0.5)로 확률적 경사 하강법 옵티마이저를 생성합니다.',
        'loss 함수는 MSE(Mean Square Error)로, predict(x).sub(labels).square().mean()으로 계산합니다. optimizer.minimize()가 이 손실을 최소화하는 방향으로 m과 b를 자동 업데이트합니다.',
        '마우스 클릭으로 (x, y) 데이터를 추가합니다. 좌표를 0~1 범위로 정규화하여 학습 안정성을 높입니다. 매 프레임 데이터가 있으면 학습하고, 0과 1에서의 예측값으로 직선을 그립니다.',
        'tf.tidy()로 중간 텐서를 자동 정리하여 메모리 누수를 방지합니다. dataSync()로 텐서 값을 JavaScript 배열로 변환하고 dispose()로 명시적 해제합니다.',
    ],
})

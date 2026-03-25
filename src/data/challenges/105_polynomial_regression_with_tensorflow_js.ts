import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '105_polynomial_regression_with_tensorflow_js',
    number: 105,
    title: 'Polynomial Regression with TensorFlow.js',
    categoryId: 'neural-networks-ml',
    description: 'TensorFlow.js로 3차 다항식 회귀(y=ax^3+bx^2+cx+d)를 구현합니다. 드래그로 점을 찍으면 곡선이 실시간으로 피팅됩니다.',
    files: ['sketch.js'],
    libraries: ['tf.min.js'],
    references: [
        { title: 'Coding Challenge #105: Polynomial Regression with TensorFlow.js', url: 'https://thecodingtrain.com/challenges/105-polynomial-regression-with-tensorflow-js' },
    ],
    tags: ['polynomial', 'regression', 'tensorflow', 'curve'],
    difficulty: 'intermediate',
    explanation: [
        'y = a*x^3 + b*x^2 + c*x + d에서 a, b, c, d를 tf.variable(tf.scalar(random(-1,1)))로 초기화합니다. predict()에서 xs.pow(3).mul(a).add(xs.square().mul(b)).add(xs.mul(c)).add(d)로 텐서 연산을 수행합니다.',
        '마우스 드래그로 데이터를 연속 추가할 수 있어 선형 회귀보다 더 많은 점을 빠르게 입력합니다. 좌표를 -1~1 범위로 정규화하여 큰 값의 세제곱이 발산하는 것을 방지합니다.',
        'draw()에서 매 프레임 SGD로 MSE 손실을 최소화합니다. -1에서 1까지 0.05 간격으로 예측값을 계산하고 beginShape()/vertex()로 부드러운 곡선을 그립니다.',
        'tf.tidy()로 매 프레임 생성되는 중간 텐서를 자동 해제합니다. 300프레임마다 tf.memory()로 텐서 수를 로그하여 메모리 누수를 모니터링합니다.',
    ],
})

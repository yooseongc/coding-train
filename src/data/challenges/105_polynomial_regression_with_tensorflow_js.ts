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
        { title: 'TensorFlow.js 공식 문서', url: 'https://js.tensorflow.org/' },
        { title: 'Polynomial Regression - Wikipedia', url: 'https://en.wikipedia.org/wiki/Polynomial_regression' },
        { title: 'Curve Fitting - Wikipedia', url: 'https://en.wikipedia.org/wiki/Curve_fitting' },
    ],
    tags: ['polynomial', 'regression', 'tensorflow', 'curve'],
    difficulty: 'intermediate',
    explanation: [
        '다항식 회귀(Polynomial Regression)는 선형 회귀를 일반화한 것으로, 데이터의 비선형 관계를 모델링합니다. y = ax^3 + bx^2 + cx + d 형태의 3차 다항식(cubic polynomial)을 사용하며, 곡선 피팅(curve fitting)이라고도 불립니다. 수학적으로 다항식 회귀는 여전히 계수(a, b, c, d)에 대해서는 선형이므로 최소제곱법(least squares)으로 해석적 풀이가 가능하지만, 여기서는 TensorFlow.js의 SGD로 반복적으로 최적화합니다.',
        'y = a*x^3 + b*x^2 + c*x + d에서 a, b, c, d를 tf.variable(tf.scalar(random(-1,1)))로 초기화합니다. predict()에서 xs.pow(3).mul(a) 같은 텐서 연산을 체이닝하여 다항식을 표현합니다. TensorFlow.js의 자동 미분이 4개 계수 각각에 대한 기울기를 자동으로 계산합니다.',
        '마우스 드래그로 데이터를 연속 추가할 수 있어 다양한 곡선 형태를 실험할 수 있습니다. 좌표를 -1~1 범위로 정규화하는 것이 매우 중요한데, x=400일 때 x^3 = 6.4억이 되어 기울기가 폭발(exploding gradient)하기 때문입니다. 정규화 후에는 x^3의 최댓값이 1로 제한됩니다.',
        'draw()에서 매 프레임 SGD(학습률 0.2)로 MSE 손실을 최소화합니다. -1에서 1까지 0.05 간격(약 40개 점)으로 예측값을 계산하고 beginShape()/vertex()로 부드러운 곡선을 그립니다. 데이터가 추가될 때마다 곡선이 실시간으로 변화하는 것을 관찰할 수 있습니다.',
        'tf.tidy()로 매 프레임 생성되는 중간 텐서를 자동 해제합니다. 300프레임마다 tf.memory()로 활성 텐서 수를 로그하여 메모리 누수를 모니터링합니다. WebGL 백엔드를 사용하는 TensorFlow.js에서는 GPU 메모리 관리가 특히 중요합니다.',
        '다항식의 차수(degree)를 높이면 더 복잡한 곡선을 표현할 수 있지만, 과적합(overfitting)의 위험이 증가합니다. 예를 들어 n개의 데이터에 n-1차 다항식을 피팅하면 모든 점을 완벽히 통과하지만 일반화 성능이 떨어집니다. 이 트레이드오프는 기계학습에서 편향-분산 상충(bias-variance tradeoff)이라는 핵심 개념과 직결됩니다.',
    ],
})

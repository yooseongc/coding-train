import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '106_xor_problem_with_tensorflow.js',
    number: 106,
    title: 'XOR Problem with TensorFlow.js',
    categoryId: 'neural-networks-ml',
    description: 'TensorFlow.js의 tf.sequential 모델로 XOR 문제를 해결합니다. Adam 옵티마이저와 sigmoid 활성화 함수를 사용합니다.',
    files: ['sketch.js'],
    libraries: ['tf.min.js'],
    references: [
        { title: 'Coding Challenge #106: XOR Problem with TensorFlow.js', url: 'https://thecodingtrain.com/challenges/106-xor-problem-with-tensorflow-js' },
        { title: 'TensorFlow.js Layers API - tf.sequential', url: 'https://js.tensorflow.org/api/latest/#sequential' },
        { title: 'Adam Optimizer - Wikipedia', url: 'https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Adam' },
        { title: 'XOR gate - Wikipedia', url: 'https://en.wikipedia.org/wiki/XOR_gate' },
    ],
    tags: ['XOR', 'tensorflow', 'neural-network', 'training'],
    difficulty: 'intermediate',
    explanation: [
        '이 챌린지는 #92에서 직접 구현한 XOR 문제를 TensorFlow.js의 고수준 API로 다시 풀어봅니다. tf.sequential()은 Keras 스타일의 모델 구성 방식으로, 층(layer)을 순서대로 쌓는 직관적인 인터페이스를 제공합니다. 32개의 sigmoid 은닉 노드와 1개의 sigmoid 출력 노드를 tf.layers.dense()로 추가하며, 직접 구현할 때보다 훨씬 간결합니다.',
        'Adam(Adaptive Moment Estimation) 옵티마이저를 사용합니다. Adam은 2014년 Diederik Kingma와 Jimmy Ba가 발표한 알고리즘으로, SGD의 학습률을 각 파라미터별로 적응적으로 조절합니다. Momentum(이전 기울기의 지수 이동 평균)과 RMSprop(기울기 제곱의 지수 이동 평균)을 결합하여 대부분의 상황에서 안정적인 수렴을 보장합니다.',
        'XOR 학습 데이터를 tf.tensor2d로 정의합니다: [[0,0],[1,0],[0,1],[1,1]] -> [[0],[1],[1],[0]]. model.fit()은 비동기(async) 학습을 지원하며, setTimeout과 async/await 패턴으로 학습과 렌더링을 교대시켜 브라우저가 멈추지 않도록 합니다.',
        'draw()에서 resolution(20px) 그리드 전체의 입력을 하나의 tf.tensor2d로 배치(batch) 처리합니다. 개별 예측 대신 배치 예측을 사용하면 GPU 병렬 처리의 이점을 누릴 수 있어 성능이 크게 향상됩니다. 사전에 모든 (i/cols, j/rows) 입력을 준비하여 매 프레임 텐서 생성을 최소화합니다.',
        '각 셀에 예측값*255의 밝기와 소수점 2자리 텍스트를 표시합니다. 학습이 진행되면 XOR 패턴(좌하-우상 대각선은 밝고, 좌상-우하 대각선은 어두움)이 점차 뚜렷해집니다. 직접 구현(#92)과 비교하면, TensorFlow.js는 GPU 가속, 자동 미분, 배치 처리 등의 최적화를 제공합니다.',
        '이 챌린지는 같은 문제를 저수준(from scratch)과 고수준(프레임워크) 두 가지 방식으로 풀어보는 좋은 비교 학습 자료입니다. 실무에서는 TensorFlow.js, PyTorch 같은 프레임워크를 사용하지만, 내부 동작 원리를 이해하는 것이 디버깅과 모델 설계에 큰 도움이 됩니다.',
    ],
})

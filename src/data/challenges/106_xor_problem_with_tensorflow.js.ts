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
    ],
    tags: ['XOR', 'tensorflow', 'neural-network', 'training'],
    difficulty: 'intermediate',
    explanation: [
        'tf.sequential()로 모델을 구성합니다. 입력 2개를 받는 32개 sigmoid 은닉 노드와 1개 sigmoid 출력 노드를 tf.layers.dense()로 추가합니다. model.compile()에서 Adam 옵티마이저(lr=0.05)와 MSE 손실함수를 설정합니다.',
        'XOR 학습 데이터를 tf.tensor2d로 정의합니다: [[0,0],[1,0],[0,1],[1,1]] -> [[0],[1],[1],[0]]. model.fit()으로 비동기 학습하며, setTimeout과 async/await로 학습과 렌더링을 교대합니다.',
        'draw()에서 resolution(20px) 그리드 전체를 model.predict()로 한 번에 예측합니다. 사전에 모든 (i/cols, j/rows) 입력을 tf.tensor2d로 준비하여 매 프레임 텐서 생성을 최소화합니다.',
        '각 셀에 예측값*255의 밝기와 소수점 2자리 텍스트를 표시합니다. 학습이 진행되면 XOR 패턴(대각선으로 밝음/어두움 교차)이 점차 뚜렷해집니다.',
    ],
})

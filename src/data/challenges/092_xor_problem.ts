import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '092_xor_problem',
    number: 92,
    title: 'XOR Problem',
    categoryId: 'neural-networks-ml',
    description: '직접 구현한 Toy Neural Network 라이브러리로 XOR 문제를 해결합니다. 은닉층이 비선형 분류 경계를 학습합니다.',
    files: ['matrix.js', 'nn.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #92: XOR Problem', url: 'https://thecodingtrain.com/challenges/92-xor-problem' },
    ],
    tags: ['XOR', 'neural-network', 'backpropagation', 'perceptron'],
    difficulty: 'advanced',
    explanation: [
        'XOR(배타적 논리합)는 단일 퍼셉트론으로 풀 수 없는 비선형 문제입니다. NeuralNetwork(2, 4, 1)로 입력 2개, 은닉 노드 4개, 출력 1개의 3층 네트워크를 구성하여 해결합니다.',
        '매 프레임 100회 학습합니다. 4가지 학습 데이터([0,0]->0, [0,1]->1, [1,0]->1, [1,1]->0) 중 랜덤으로 선택하여 train()으로 역전파합니다. 슬라이더로 학습률(0.01~0.5)을 실시간 조절할 수 있습니다.',
        'resolution(10px) 그리드의 각 셀에 대해 (i/cols, j/rows)를 입력으로 예측값을 구하고, 그 값*255를 밝기로 표시합니다. 학습이 진행되면 (0,0)-(1,1) 대각선이 어둡고 (0,1)-(1,0) 대각선이 밝은 XOR 패턴이 나타납니다.',
        'Matrix 클래스는 행렬 연산을, NeuralNetwork 클래스는 순전파(feedforward), 역전파(backpropagation), 시그모이드 활성화 함수를 직접 구현합니다.',
    ],
})

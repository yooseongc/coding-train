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
        { title: 'XOR gate - Wikipedia', url: 'https://en.wikipedia.org/wiki/XOR_gate' },
        { title: 'Toy Neural Network JS (GitHub)', url: 'https://github.com/CodingTrain/Toy-Neural-Network-JS' },
        { title: 'Backpropagation - Wikipedia', url: 'https://en.wikipedia.org/wiki/Backpropagation' },
    ],
    tags: ['XOR', 'neural-network', 'backpropagation', 'perceptron'],
    difficulty: 'advanced',
    explanation: [
        'XOR(eXclusive OR, 배타적 논리합) 문제는 인공지능 역사에서 가장 유명한 난제 중 하나입니다. 1969년 Marvin Minsky와 Seymour Papert가 저서 "Perceptrons"에서 단일 퍼셉트론(single-layer perceptron)으로는 XOR을 학습할 수 없음을 수학적으로 증명했고, 이것이 첫 번째 AI 겨울(AI Winter)의 원인이 되었습니다. XOR은 입력이 같으면 0, 다르면 1을 출력하는 논리 연산으로, 2차원 평면에서 하나의 직선으로 분류할 수 없는 비선형(non-linearly separable) 문제입니다.',
        'NeuralNetwork(2, 4, 1)로 입력 2개, 은닉 노드 4개, 출력 1개의 3층 네트워크를 구성하여 해결합니다. 은닉층(hidden layer)이 핵심으로, 은닉 노드들이 입력 공간을 비선형적으로 변환하여 XOR 패턴을 선형 분리 가능한 공간으로 매핑합니다. 이 과정에서 시그모이드(sigmoid) 활성화 함수가 비선형성을 제공합니다.',
        '매 프레임 100회 학습합니다. 4가지 학습 데이터([0,0]->0, [0,1]->1, [1,0]->1, [1,1]->0) 중 랜덤으로 선택하여 train()으로 역전파(backpropagation)합니다. 역전파 알고리즘은 1986년 Rumelhart, Hinton, Williams가 발표한 논문에서 대중화되었으며, 출력 오차를 각 가중치(weight)에 대한 기울기(gradient)로 변환하여 경사 하강법(gradient descent)으로 업데이트합니다. 슬라이더로 학습률(learning rate, 0.01~0.5)을 실시간 조절할 수 있습니다.',
        'resolution(10px) 그리드의 각 셀에 대해 (i/cols, j/rows)를 입력으로 예측값을 구하고, 그 값*255를 밝기로 표시합니다. 학습이 진행되면 (0,0)-(1,1) 대각선이 어둡고 (0,1)-(1,0) 대각선이 밝은 XOR 패턴이 나타납니다. 이 시각화는 신경망의 결정 경계(decision boundary)가 어떻게 형성되는지를 직관적으로 보여줍니다.',
        'Matrix 클래스는 행렬 곱셈, 전치, 원소별 연산 등을 직접 구현하며, NeuralNetwork 클래스는 순전파(feedforward)와 역전파를 처음부터(from scratch) 구현합니다. 이런 방식으로 신경망의 내부 동작을 이해하는 것은 TensorFlow나 PyTorch 같은 고수준 프레임워크를 사용하기 전에 매우 유익한 학습 과정입니다.',
        'XOR 문제의 해결은 다층 퍼셉트론(MLP, Multi-Layer Perceptron)이 범용 근사기(universal approximator)임을 보여주는 대표적 사례입니다. 실제 딥러닝에서는 이미지 분류, 자연어 처리 등 훨씬 복잡한 비선형 문제를 수백 개의 은닉층으로 해결하며, XOR은 그 기초 원리를 이해하는 출발점입니다.',
    ],
})

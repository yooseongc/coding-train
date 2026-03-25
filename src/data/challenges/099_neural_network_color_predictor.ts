import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '099_neural_network_color_predictor',
    number: 99,
    title: 'Neural Network Color Predictor',
    categoryId: 'neural-networks-ml',
    description: '신경망으로 배경색에 어울리는 텍스트 색상(흑/백)을 예측합니다. RGB 값을 입력받아 가독성 높은 색을 선택합니다.',
    files: ['matrix.js', 'nn.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #99: Neural Network Color Predictor', url: 'https://thecodingtrain.com/challenges/99-neural-network-color-predictor' },
    ],
    tags: ['neural-network', 'color', 'prediction', 'training'],
    difficulty: 'advanced',
    explanation: [
        'NeuralNetwork(3, 3, 2)로 RGB 3입력, 은닉 3노드, 출력 2노드(흰색/검정 확률)의 네트워크를 구성합니다. setup()에서 10,000개의 랜덤 색상으로 사전 학습합니다.',
        'trainColor()는 R+G+B > 382.5(255*3/2)이면 [1,0](흰색 텍스트), 아니면 [0,1](검정 텍스트)을 레이블로 반환합니다. 밝은 배경에는 검정, 어두운 배경에는 흰색 텍스트가 적합한 규칙을 학습합니다.',
        'colorPredictor()는 RGB를 0~1로 정규화하여 predict()에 전달하고, outputs[0] > outputs[1]이면 "white", 아니면 "black"을 반환합니다. 클릭할 때마다 새 랜덤 색상으로 예측 결과를 표시합니다.',
        '화면을 좌우로 나누어 왼쪽에 "black", 오른쪽에 "white" 텍스트를 표시하고, 예측된 쪽에 원을 그려 네트워크의 판단을 시각화합니다.',
    ],
})

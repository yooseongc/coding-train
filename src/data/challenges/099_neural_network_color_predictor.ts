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
        { title: 'Toy Neural Network JS (GitHub)', url: 'https://github.com/CodingTrain/Toy-Neural-Network-JS' },
        { title: 'Web Content Accessibility Guidelines (WCAG) - Contrast', url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html' },
        { title: 'Relative Luminance - Wikipedia', url: 'https://en.wikipedia.org/wiki/Relative_luminance' },
    ],
    tags: ['neural-network', 'color', 'prediction', 'training'],
    difficulty: 'advanced',
    explanation: [
        '배경색에 따라 텍스트를 흰색 또는 검정색으로 표시하는 것은 웹 접근성(Web Accessibility)의 핵심 주제입니다. W3C의 WCAG(Web Content Accessibility Guidelines)에서는 텍스트와 배경 간 명도 대비(contrast ratio)를 최소 4.5:1 이상 유지하도록 권장합니다. 이 챌린지에서는 신경망이 이러한 가독성 규칙을 데이터로부터 스스로 학습합니다.',
        'NeuralNetwork(3, 3, 2)로 RGB 3입력, 은닉 3노드, 출력 2노드(흰색/검정 확률)의 네트워크를 구성합니다. setup()에서 10,000개의 랜덤 색상으로 사전 학습하여 즉시 예측 가능한 상태로 시작합니다. 입력값은 0~1로 정규화(normalization)하여 학습 안정성을 높입니다.',
        'trainColor()의 레이블링 규칙은 R+G+B > 382.5(255*3/2)이면 어두운 텍스트, 아니면 밝은 텍스트입니다. 이는 상대 휘도(relative luminance)의 단순화된 버전으로, 실제로는 인간의 시각 체계가 녹색에 가장 민감하기 때문에 가중 평균(0.2126R + 0.7152G + 0.0722B)을 사용하는 것이 더 정확합니다. 신경망은 이런 비선형적 관계도 충분한 데이터가 있다면 학습할 수 있습니다.',
        'colorPredictor()는 RGB를 0~1로 정규화하여 predict()에 전달하고, outputs[0] > outputs[1]이면 "white", 아니면 "black"을 반환합니다. 출력 노드 2개는 소프트맥스(softmax)처럼 상호 배타적 확률을 표현하며, 클릭할 때마다 새 랜덤 색상으로 예측 결과를 표시합니다.',
        '화면을 좌우로 나누어 왼쪽에 "black", 오른쪽에 "white" 텍스트를 표시하고, 예측된 쪽에 원을 그려 네트워크의 판단을 시각화합니다. 이 프로젝트는 분류(classification) 문제의 가장 기본적인 형태를 보여주며, 이진 분류기(binary classifier)가 실제 UI/UX 문제에 어떻게 적용될 수 있는지를 잘 보여줍니다.',
        '이 챌린지는 신경망이 단순한 규칙 기반 시스템을 대체할 수 있음을 보여줍니다. if-else 조건문으로도 구현 가능한 문제이지만, 신경망 접근법은 사용자 피드백을 통한 온라인 학습(online learning)으로 점진적으로 개인화된 모델로 발전시킬 수 있다는 장점이 있습니다.',
    ],
})

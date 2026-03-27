import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '158_shape_classifier',
    number: 158,
    title: 'Shape Classifier',
    categoryId: 'neural-networks-ml',
    description: 'ml5.js 신경망으로 손그림 도형(원, 사각형, 삼각형)을 실시간 분류하는 모델을 훈련합니다.',
    files: ['sketch.js'],
    libraries: ['ml5.min.js'],
    bodyHtml: '<div id="controlDiv"></div><div id="canvasDiv"></div>',
    references: [
        { title: 'Coding Challenge #158: Shape Classifier', url: 'https://thecodingtrain.com/challenges/158-shape-classifier' },
        { title: 'ml5.js - Neural Network', url: 'https://learn.ml5js.org/#/reference/neural-network' },
        { title: 'Wikipedia - Image classification', url: 'https://en.wikipedia.org/wiki/Computer_vision#Recognition' },
        { title: 'Wikipedia - Artificial neural network', url: 'https://en.wikipedia.org/wiki/Artificial_neural_network' },
    ],
    tags: ['shape', 'classifier', 'neural-network', 'training'],
    difficulty: 'intermediate',
    explanation: [
        '이미지 분류(image classification)는 컴퓨터 비전의 핵심 과제로, 입력 이미지가 어떤 카테고리에 속하는지 판별하는 작업입니다. 이 챌린지에서는 ml5.neuralNetwork를 사용하여 원, 사각형, 삼각형을 분류하는 신경망을 직접 훈련합니다. 각 도형 500장(총 1500장)의 64x64 훈련 이미지를 data/ 폴더에서 로드합니다.',
        'Train Model 버튼으로 훈련을 시작합니다. addData()로 이미지-레이블 쌍을 추가하고, normalizeData()로 입력값을 정규화한 후 50 에포크(epoch) 동안 훈련합니다. 정규화는 각 픽셀값을 0~1 범위로 변환하여 학습 수렴을 돕습니다. 훈련 완료 시 모델을 JSON으로 저장합니다.',
        'Test Model 버튼으로 저장된 모델을 로드하고, 400x400 캔버스에서 마우스로 도형을 그립니다. createGraphics(64,64)로 그림을 축소 복사하여 classifyImage()에 전달합니다. 이 다운샘플링(downsampling) 과정은 훈련 데이터와 동일한 입력 크기를 맞추기 위한 전처리입니다.',
        '분류 결과(label)와 신뢰도(confidence)를 퍼센트로 표시합니다. 연속적으로 classifyImage()를 호출하여 그리는 중에도 실시간으로 분류가 업데이트됩니다. 신경망의 출력층은 소프트맥스(softmax) 활성화 함수를 사용하여 각 클래스의 확률 분포를 제공합니다.',
        '이 프로젝트는 머신러닝의 전체 워크플로우인 데이터 수집, 전처리, 모델 훈련, 평가, 배포를 한 번에 체험할 수 있는 교육용 예제입니다. 더 복잡한 이미지 인식에는 합성곱 신경망(CNN)이 사용되지만, 단순한 도형 분류에는 완전 연결 신경망(fully connected network)으로도 충분한 성능을 얻을 수 있습니다.',
    ],
})

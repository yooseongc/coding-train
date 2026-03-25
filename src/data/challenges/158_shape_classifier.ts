import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '158_shape_classifier',
    number: 158,
    title: 'Shape Classifier',
    categoryId: 'neural-networks-ml',
    description: 'ml5.js 신경망으로 손그림 도형(원, 사각형, 삼각형)을 실시간 분류하는 모델을 훈련합니다.',
    files: ['sketch.js'],
    libraries: ['ml5.min.js'],
    bodyHtml: '<div id="controlDiv"></div>',
    references: [
        { title: 'Coding Challenge #158: Shape Classifier', url: 'https://thecodingtrain.com/challenges/158-shape-classifier' },
    ],
    tags: ['shape', 'classifier', 'neural-network', 'training'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 ml5.js 신경망과 학습 데이터 이미지가 필요합니다. 모델 학습에 시간이 걸릴 수 있습니다.',
    explanation: [
        'ml5.neuralNetwork로 이미지 분류 모델을 생성하여 원, 사각형, 삼각형을 분류합니다. 각 도형 500장(총 1500장)의 64x64 훈련 이미지를 data/ 폴더에서 로드합니다.',
        'Train Model 버튼으로 훈련을 시작합니다. addData()로 이미지-레이블 쌍을 추가하고 normalizeData() 후 50 에포크 동안 훈련합니다. 훈련 완료 시 모델을 JSON으로 저장합니다.',
        'Test Model 버튼으로 저장된 모델을 로드하고, 400x400 캔버스에서 마우스로 도형을 그립니다. createGraphics(64,64)로 그림을 축소 복사하여 classifyImage()에 전달합니다.',
        '분류 결과(label)와 신뢰도(confidence)를 퍼센트로 표시합니다. 연속적으로 classifyImage()를 호출하여 그리는 중에도 실시간으로 분류가 업데이트됩니다.',
    ],
})

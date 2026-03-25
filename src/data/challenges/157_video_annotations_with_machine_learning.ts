import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '157_video_annotations_with_machine_learning',
    number: 157,
    title: 'Video Annotations with Machine Learning',
    categoryId: 'neural-networks-ml',
    description: 'Teachable Machine으로 훈련한 이미지 분류 모델로 웹캠 영상을 실시간 분류합니다.',
    files: ['sketch.js'],
    libraries: ['ml5.min.js'],
    codeOnly: true,
    references: [
        { title: 'Coding Challenge #157: Video Annotations with Machine Learning', url: 'https://thecodingtrain.com/challenges/157-ml-video-annotations' },
    ],
    tags: ['video', 'annotation', 'cocossd', 'object-detection'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 ml5.js의 COCO-SSD 모델과 카메라 접근이 필요합니다. iframe sandbox 제한으로 카메라가 동작하지 않을 수 있습니다.',
    explanation: [
        'Google Teachable Machine으로 훈련한 커스텀 이미지 분류 모델을 ml5.imageClassifier로 로드합니다. 웹캠 영상을 실시간으로 분류하여 화면에 레이블을 표시합니다.',
        'preload()에서 model/model.json을 로드하고, setup()에서 createCapture(VIDEO)로 웹캠을 활성화합니다. ml5.flipImage()로 좌우 반전된 영상을 사용하여 거울 모드로 보여줍니다.',
        'classifyVideo()에서 반전된 비디오 프레임을 classifier.classify()에 전달합니다. gotResult() 콜백에서 results[0].label로 가장 높은 신뢰도의 분류 결과를 받고, 즉시 다음 분류를 호출합니다.',
        'draw()에서 반전된 비디오를 배경으로 그리고, textAlign(CENTER)로 하단 중앙에 분류 레이블을 오버레이합니다. 연속 분류로 실시간 영상 주석(annotation)이 가능합니다.',
    ],
})

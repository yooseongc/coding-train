import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '157_video_annotations_with_machine_learning',
    number: 157,
    title: 'Video Annotations with Machine Learning',
    categoryId: 'neural-networks-ml',
    description: 'Teachable Machine으로 훈련한 이미지 분류 모델로 웹캠 영상을 실시간 분류합니다.',
    files: ['sketch.js'],
    libraries: ['tf.min.js', 'ml5.min.js'],
    references: [
        { title: 'Coding Challenge #157: Video Annotations with Machine Learning', url: 'https://thecodingtrain.com/challenges/157-ml-video-annotations' },
        { title: 'Google Teachable Machine', url: 'https://teachablemachine.withgoogle.com/' },
        { title: 'ml5.js - Image Classifier', url: 'https://learn.ml5js.org/#/reference/image-classifier' },
        { title: 'Wikipedia - Transfer learning', url: 'https://en.wikipedia.org/wiki/Transfer_learning' },
    ],
    tags: ['video', 'annotation', 'cocossd', 'object-detection'],
    difficulty: 'intermediate',
    codeOnly: true,
    notice: 'TensorFlow.js WebGL 백엔드와 카메라 접근이 iframe sandbox 환경에서 제한되어 실행할 수 없습니다.',
    explanation: [
        'Google Teachable Machine은 코딩 없이 브라우저에서 머신러닝 모델을 훈련할 수 있는 웹 기반 도구입니다. 전이 학습(transfer learning) 기법을 사용하여, MobileNet 등 대규모 데이터셋으로 사전 훈련된 모델의 특징 추출 능력을 활용하면서 소량의 커스텀 데이터만으로 새로운 분류 작업을 학습할 수 있습니다.',
        'preload()에서 model/model.json을 로드하고, setup()에서 createCapture(VIDEO)로 웹캠을 활성화합니다. ml5.flipImage()로 좌우 반전된 영상을 사용하여 거울 모드로 보여줍니다. 이 좌우 반전은 사용자가 화면을 보며 직관적으로 상호작용할 수 있게 합니다.',
        'classifyVideo()에서 반전된 비디오 프레임을 classifier.classify()에 전달합니다. gotResult() 콜백에서 results[0].label로 가장 높은 신뢰도의 분류 결과를 받고, 즉시 다음 분류를 호출하는 연쇄 패턴으로 실시간 분류를 구현합니다.',
        'draw()에서 반전된 비디오를 배경으로 그리고, textAlign(CENTER)로 하단 중앙에 분류 레이블을 오버레이합니다. 이러한 실시간 영상 주석(video annotation)은 자율 주행, 보안 감시, 의료 영상 분석 등 다양한 컴퓨터 비전 응용의 기초가 됩니다.',
        'TensorFlow.js를 백엔드로 사용하는 ml5.js는 웹 브라우저에서 GPU 가속(WebGL)을 활용하여 실시간 추론(inference)을 수행합니다. 서버 없이 클라이언트 사이드에서 모든 처리가 이루어지므로 개인정보 보호와 응답 속도 면에서 유리합니다.',
    ],
})

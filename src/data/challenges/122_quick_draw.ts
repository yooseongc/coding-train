import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '122_quick_draw',
    number: 122,
    title: 'Quick, Draw!',
    categoryId: 'neural-networks-ml',
    description: 'Google Quick Draw API에서 드로잉 데이터를 불러와 애니메이션으로 재생합니다.',
    files: ['sketch.js'],
    libraries: [],
    codeOnly: true,
    bodyHtml: '<div id="canvasDiv"></div>',
    references: [
        { title: 'Coding Challenge #122: Quick, Draw!', url: 'https://thecodingtrain.com/challenges/122-quick-draw' },
        { title: 'Quick, Draw! - Google', url: 'https://quickdraw.withgoogle.com/' },
        { title: 'Quick, Draw! Dataset (GitHub)', url: 'https://github.com/googlecreativelab/quickdraw-dataset' },
        { title: 'Google Open Source Blog - Quick Draw Web Component', url: 'https://opensource.googleblog.com/2018/11/introducing-web-component-and-data-api-for-quick-draw.html' },
    ],
    tags: ['quick-draw', 'CNN', 'recognition', 'drawing'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 외부 Quick Draw 데이터셋 API를 호출합니다. 데이터 로드에 시간이 걸릴 수 있습니다.',
    explanation: [
        'Google Quick, Draw!는 2016년 Google Creative Lab에서 출시한 인터랙티브 실험으로, 20초 안에 사용자가 그린 낙서를 합성곱 신경망(CNN, Convolutional Neural Network)이 실시간으로 인식하는 게임입니다. 전 세계 수백만 명이 참여하여 345개 카테고리에 걸쳐 5천만 개 이상의 드로잉을 수집했으며, 이 데이터셋은 오픈소스로 공개되어 다양한 머신러닝 연구에 활용됩니다.',
        'loadJSON()으로 Quick Draw API에서 JSON 형식의 드로잉 데이터를 받아옵니다. drawing 배열은 여러 경로(stroke)로 구성되며, 각 경로는 x좌표 배열과 y좌표 배열을 포함합니다. 이 형식은 래스터 이미지가 아닌 벡터(vector) 데이터로, 해상도에 무관하게 재현할 수 있고 그리는 순서 정보도 보존합니다.',
        'draw()에서 pathIndex와 index를 증가시키며 한 프레임에 하나의 점을 그립니다. prevx/prevy로 이전 점과 현재 점을 line()으로 연결하고, 경로가 바뀌면 펜을 들어 올립니다(pen-up). 이 방식은 사람이 실제로 그림을 그리는 과정을 애니메이션으로 재현하는 효과를 줍니다.',
        '하나의 드로잉이 완료되면 newData()로 새로운 데이터를 불러와 무한히 다른 고양이 그림을 감상할 수 있습니다. frameRate(22)로 적절한 애니메이션 속도를 설정하여 그리는 과정을 자연스럽게 보여줍니다.',
        'Quick, Draw! 데이터셋은 크라우드소싱(crowdsourcing)으로 수집된 대규모 데이터의 좋은 예입니다. 다양한 문화권, 연령대의 사람들이 같은 대상을 다르게 그리는 패턴을 분석하면 인간의 시각 인지와 문화적 차이를 연구할 수 있습니다. 이 데이터는 SketchRNN(#128, #153) 같은 생성 모델 학습에도 활용됩니다.',
    ],
})

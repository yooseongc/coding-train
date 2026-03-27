import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '049_photo_mosaic_with_white_house_social_media_images',
    number: 49,
    title: 'Photo Mosaic with White House Social Media Images',
    categoryId: 'data-visualization',
    description: '원본 이미지의 각 타일을 밝기가 유사한 소스 이미지로 대체하여 포토 모자이크를 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #49: Photo Mosaic', url: 'https://thecodingtrain.com/challenges/49-photo-mosaic' },
        { title: 'Wikipedia - Photographic mosaic', url: 'https://en.wikipedia.org/wiki/Photographic_mosaic' },
        { title: 'p5.js Reference - loadPixels()', url: 'https://p5js.org/reference/p5/loadPixels/' },
        { title: 'Lorem Picsum - Random Photos API', url: 'https://picsum.photos/' },
    ],
    tags: ['mosaic', 'photo', 'pixel', 'average-color'],
    difficulty: 'advanced',
    explanation: [
        '포토 모자이크(Photographic Mosaic)는 1996년 로버트 실버스(Robert Silvers)가 MIT 미디어랩 재학 중 발명한 기법으로, 원본 이미지의 각 영역을 시각적으로 유사한 작은 이미지로 대체하여 멀리서 보면 원본처럼 보이는 합성 이미지를 만드는 기술입니다. 이 챌린지에서는 밝기(brightness)를 기준으로 매칭을 수행합니다.',
        'picsum.photos API에서 1084개의 소스 이미지를 20x20 픽셀 크기로 비동기 로드합니다. async/await와 Promise.all() 패턴을 사용하여 모든 이미지 로딩 완료를 기다린 후 처리를 시작합니다. 이는 대량의 비동기 작업을 병렬로 처리하는 JavaScript의 핵심 패턴입니다.',
        'findBrightOnes()에서 각 소스 이미지의 모든 픽셀을 순회하여 평균 밝기(brightness)를 계산합니다. 그 다음 0~255의 각 밝기 레벨에 대해 가장 가까운 평균 밝기를 가진 소스 이미지를 매핑하여 brightImages[256] 룩업 테이블(Lookup Table)을 구축합니다. 이를 통해 O(1) 시간에 밝기에 맞는 이미지를 선택할 수 있습니다.',
        'drawMosaic()에서 원본 이미지를 scale(20px) 단위의 격자로 순회합니다. 각 타일 위치의 픽셀 색상에서 brightness() 함수로 밝기를 계산하고, floor()로 정수 인덱스로 변환하여 brightImages 테이블에서 해당 밝기의 소스 이미지를 선택하여 배치합니다.',
        '원본 이미지(왼쪽 400px)와 모자이크 결과(오른쪽 400px)를 나란히 800x500 캔버스에 표시하여 비교할 수 있습니다. pixelDensity(1)로 레티나 디스플레이의 2x 스케일링을 비활성화하여 픽셀 배열 접근 시 일관된 결과를 보장합니다.',
        '실제 포토 모자이크 소프트웨어에서는 밝기뿐 아니라 색상 히스토그램, 에지 분포, 텍스처 유사도 등 더 정교한 매칭 알고리즘을 사용합니다. 또한 같은 소스 이미지가 연속으로 배치되지 않도록 하는 반복 방지(duplicate avoidance) 기법도 적용됩니다.',
    ],
})

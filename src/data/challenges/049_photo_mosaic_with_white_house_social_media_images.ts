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
    ],
    tags: ['mosaic', 'photo', 'pixel', 'average-color'],
    difficulty: 'advanced',
    explanation: [
        'picsum.photos에서 1084개의 소스 이미지를 scale(20px) 크기로 비동기 로드합니다. Promise.all()로 모든 이미지 로딩 완료를 기다린 후 처리를 시작합니다.',
        'findBrightOnes()에서 각 소스 이미지의 평균 밝기(brightness)를 계산합니다. 0~255의 각 밝기 레벨에 대해 가장 가까운 밝기의 소스 이미지를 매핑하여 brightImages[256] 룩업 테이블을 만듭니다.',
        'drawMosaic()에서 원본 이미지를 scale 단위 격자로 순회합니다. 각 타일의 RGB에서 brightness()를 계산하고, brightImages[floor(br)]로 해당 밝기의 소스 이미지를 선택하여 배치합니다.',
        '원본 이미지(왼쪽)와 모자이크 결과(오른쪽)를 나란히 800x500 캔버스에 표시합니다. pixelDensity(1)로 레티나 디스플레이의 2x 스케일링을 방지합니다.',
    ],
})

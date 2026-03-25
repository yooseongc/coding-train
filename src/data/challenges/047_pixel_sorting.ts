import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '047_pixel_sorting',
    number: 47,
    title: 'Pixel Sorting',
    categoryId: 'creative-coding',
    description: '선택 정렬 알고리즘으로 이미지의 픽셀을 색상(hue) 기준으로 정렬하는 글리치 아트를 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #47: Pixel Sorting', url: 'https://thecodingtrain.com/challenges/47-pixel-sorting' },
    ],
    tags: ['pixel', 'sorting', 'glitch', 'image'],
    difficulty: 'intermediate',
    explanation: [
        '선택 정렬(Selection Sort)은 O(n^2) 시간 복잡도의 제자리 정렬 알고리즘입니다. 매 단계마다 정렬되지 않은 영역에서 최댓값을 찾아 현재 위치와 교환합니다.',
        'loadPixels()로 이미지의 RGBA 픽셀 배열에 접근합니다. 각 픽셀의 hue() 값을 기준으로 가장 큰 hue를 가진 픽셀을 찾아 현재 index 위치의 픽셀과 4바이트(RGBA) 단위로 swap합니다.',
        '한 프레임당 10번의 정렬 스텝을 수행하여 점진적으로 정렬되는 과정을 애니메이션으로 보여줍니다. 원본 이미지(왼쪽)와 정렬 중인 이미지(오른쪽)를 나란히 배치하여 비교합니다.',
        'updatePixels()로 변경된 픽셀 데이터를 화면에 반영합니다. frameRate를 표시하여 픽셀 수 대비 정렬 성능을 모니터링할 수 있습니다.',
    ],
})

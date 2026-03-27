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
        { title: 'Wikipedia: Selection Sort', url: 'https://en.wikipedia.org/wiki/Selection_sort' },
        { title: 'Visualizing Algorithms (Mike Bostock)', url: 'https://bost.ocks.org/mike/algorithms/' },
        { title: 'Wikipedia: HSL and HSV', url: 'https://en.wikipedia.org/wiki/HSL_and_HSV' },
    ],
    tags: ['pixel', 'sorting', 'glitch', 'image'],
    difficulty: 'intermediate',
    explanation: [
        '픽셀 정렬(Pixel Sorting)은 이미지의 픽셀을 특정 기준으로 재배열하여 글리치 아트(glitch art)를 만드는 기법입니다. Kim Asendorf가 2010년대 초에 대중화한 이 기법은 디지털 아트와 사진 분야에서 의도적으로 디지털 오류의 미학을 탐구하는 글리치 아트 운동의 일부입니다.',
        '선택 정렬(Selection Sort)은 O(n^2) 시간 복잡도의 제자리(in-place) 정렬 알고리즘입니다. 매 단계마다 정렬되지 않은 영역에서 최댓값을 찾아 현재 위치와 교환합니다. 교환 횟수가 최대 n-1회로 최소이지만, 비교 횟수가 많아 대규모 데이터에는 비효율적입니다.',
        'loadPixels()로 이미지의 RGBA 픽셀 배열에 접근합니다. HSV(Hue-Saturation-Value) 색공간에서 색조(hue)는 가시광선 스펙트럼을 원형으로 배치한 색상환의 각도(0~360도)를 나타냅니다. hue() 값을 기준으로 가장 큰 hue를 가진 픽셀을 찾아 현재 index 위치의 픽셀과 4바이트(RGBA) 단위로 swap합니다.',
        '한 프레임당 10번의 정렬 스텝을 수행하여 점진적으로 정렬되는 과정을 애니메이션으로 보여줍니다. 원본 이미지(왼쪽)와 정렬 중인 이미지(오른쪽)를 나란히 배치하여 비교합니다. 정렬이 진행됨에 따라 이미지가 색조별로 그라데이션 형태로 재배열됩니다.',
        'p5.js에서 이미지 픽셀은 1차원 배열로 저장되며, 각 픽셀은 4개의 연속된 요소(R, G, B, A)로 구성됩니다. updatePixels()로 변경된 픽셀 데이터를 화면에 반영합니다. 이 직접적인 픽셀 조작 방식은 이미지 처리(image processing)의 기본이며, 포토샵 필터나 Instagram 필터도 동일한 원리로 동작합니다.',
    ],
})

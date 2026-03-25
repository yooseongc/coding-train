import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '090_floyd_steinberg_dithering',
    number: 90,
    title: 'Floyd-Steinberg Dithering',
    categoryId: 'creative-coding',
    description: 'Floyd-Steinberg 디더링 알고리즘을 구현하여 이미지를 제한된 색상으로 표현합니다. 양자화 오차를 주변 픽셀에 확산시킵니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #90: Floyd-Steinberg Dithering', url: 'https://thecodingtrain.com/challenges/90-floyd-steinberg-dithering' },
    ],
    tags: ['dithering', 'image', 'error-diffusion', 'pixel'],
    difficulty: 'intermediate',
    explanation: [
        'Floyd-Steinberg 디더링은 1976년 제안된 오차 확산(error diffusion) 알고리즘입니다. 각 픽셀을 가장 가까운 팔레트 색으로 양자화한 뒤, 양자화 오차를 인접 픽셀에 특정 비율로 분배합니다.',
        '오차 분배 패턴은: 오른쪽(7/16), 왼쪽 아래(3/16), 바로 아래(5/16), 오른쪽 아래(1/16)입니다. closestStep()은 현재 밝기를 주어진 단계 수로 양자화하고, distributeError()가 RGB 각 채널의 오차를 분배합니다.',
        '원본 이미지를 왼쪽에, 디더링된 이미지를 오른쪽에 나란히 표시합니다. steps=1이면 각 채널이 0 또는 255의 2단계로만 양자화되어 극적인 디더링 효과를 보여줍니다. filter(GRAY)로 최종 결과를 흑백으로 변환합니다.',
        'loadPixels()/updatePixels()로 픽셀 배열에 직접 접근합니다. 각 픽셀은 4개의 연속된 배열 요소(R, G, B, A)로 구성되며, imageIndex()로 (x, y) 좌표를 1차원 배열 인덱스로 변환합니다.',
    ],
})

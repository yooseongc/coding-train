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
        { title: 'Wikipedia - Floyd-Steinberg dithering', url: 'https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering' },
        { title: 'Wikipedia - Dither', url: 'https://en.wikipedia.org/wiki/Dither' },
        { title: 'Wikipedia - Stippling', url: 'https://en.wikipedia.org/wiki/Stippling' },
    ],
    tags: ['dithering', 'image', 'error-diffusion', 'pixel'],
    difficulty: 'intermediate',
    explanation: [
        'Floyd-Steinberg 디더링은 1976년 로버트 플로이드(Robert W. Floyd)와 루이스 스타인버그(Louis Steinberg)가 발표한 오차 확산(Error Diffusion) 알고리즘입니다. 제한된 색상 팔레트로 이미지를 표현할 때, 양자화 오차를 인접 픽셀에 분배하여 원본에 가까운 시각적 결과를 만들어냅니다.',
        '디더링(Dithering)은 제한된 색상으로 중간 톤을 표현하는 기법의 총칭입니다. 신문의 망점 인쇄, 초기 흑백 모니터의 그레이스케일 표현, GIF 이미지의 256색 제한 등에서 널리 사용되어 왔습니다. 오늘날에도 LED 디스플레이, 3D 프린팅, 그래픽 디자인에서 활용됩니다.',
        '오차 분배 패턴은 비대칭 커널로 구성됩니다: 오른쪽(7/16), 왼쪽 아래(3/16), 바로 아래(5/16), 오른쪽 아래(1/16). 이 비율의 합은 정확히 1이므로 전체 밝기가 보존됩니다. 홀수/짝수 줄을 반대 방향으로 처리하는 서펜타인 스캐닝(Serpentine Scanning)으로 품질을 더 높일 수 있습니다.',
        '원본 이미지를 왼쪽에, 디더링된 이미지를 오른쪽에 나란히 표시합니다. steps=1이면 각 채널이 0 또는 255의 2단계로만 양자화되어 극적인 디더링 효과를 보여줍니다. 단계 수를 늘리면 더 부드러운 결과를 얻을 수 있습니다.',
        'loadPixels()/updatePixels()로 픽셀 배열에 직접 접근합니다. 각 픽셀은 4개의 연속된 배열 요소(R, G, B, A)로 구성되며, imageIndex()로 (x, y) 좌표를 1차원 배열 인덱스로 변환합니다.',
        'Floyd-Steinberg 외에도 Jarvis-Judice-Ninke, Stucki, Atkinson, Sierra 등 다양한 오차 확산 알고리즘이 존재합니다. 각 알고리즘은 서로 다른 커널 크기와 가중치를 사용하며, Atkinson 디더링은 초기 매킨토시에서 사용되어 유명합니다. 스티플링(Stippling)은 디더링의 예술적 응용으로, 점의 밀도로 명암을 표현합니다.',
    ],
})

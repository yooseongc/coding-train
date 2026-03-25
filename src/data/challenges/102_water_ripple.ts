import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '102_water_ripple',
    number: 102,
    title: 'Water Ripple',
    categoryId: 'physics-simulation',
    description: '수면 파문(물결) 효과를 2D 파동 시뮬레이션으로 구현합니다. 이중 버퍼와 감쇠로 반사까지 표현합니다.',
    files: ['sketch.js'],
    libraries: ['gif.js'],
    references: [
        { title: 'Coding Challenge #102: Water Ripple', url: 'https://thecodingtrain.com/challenges/102-water-ripple' },
    ],
    tags: ['water', 'ripple', 'wave', 'pixel'],
    difficulty: 'intermediate',
    explanation: [
        '이중 버퍼(current, previous) 기법으로 파동을 시뮬레이션합니다. 새 높이는 주변 4방향의 평균값*2에서 현재값을 빼고 감쇠(dampening=0.995)를 곱하여 계산합니다. 매 프레임 버퍼를 스왑합니다.',
        'mouseDragged()로 마우스 위치에 높이값 500을 설정하면 그 지점에서 파문이 퍼져나갑니다. 파동은 벽에서 반사되고, 감쇠에 의해 서서히 사라집니다.',
        'loadPixels()/updatePixels()로 픽셀 배열에 직접 접근하여 높이값을 밝기로 변환합니다. pixelDensity(1)로 레티나 디스플레이 보정 없이 1:1 매핑합니다.',
        'GIF 녹화 기능도 포함되어 있습니다. gif.js 라이브러리로 버튼 클릭 시 녹화를 시작/중지하고, Web Worker로 GIF를 인코딩하여 새 창에서 열어줍니다.',
    ],
})

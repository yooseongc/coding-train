import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '001_starfield',
    number: 1,
    title: 'Starfield',
    categoryId: 'creative-coding',
    description: '우주 공간을 이동하는 듯한 별 시뮬레이션. Star 클래스를 사용한 파티클 시스템과 슬라이더로 속도를 조절합니다.',
    files: ['star.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #1: Starfield', url: 'https://thecodingtrain.com/challenges/1-starfield' },
        { title: 'p5.js Reference: map()', url: 'https://p5js.org/reference/p5/map/' },
    ],
    tags: ['particles', 'stars', 'animation', 'map'],
    difficulty: 'beginner',
    explanation: [
        'Star 클래스는 각 별의 3D 좌표(x, y, z)를 관리합니다. z값이 줄어들면 별이 카메라 쪽으로 다가오는 효과를 만들고, z가 1 이하가 되면 다시 먼 곳으로 재배치됩니다.',
        'map() 함수는 p5.js의 핵심 유틸리티로, 한 범위의 값을 다른 범위로 선형 변환합니다. 여기서는 3D 좌표(x/z, y/z)를 2D 화면 좌표로 투영하는 데 사용됩니다. 이것이 원근법(perspective projection)의 기본 원리입니다.',
        '이전 프레임의 위치(px, py)와 현재 위치(sx, sy)를 line()으로 연결하여 별이 이동하는 궤적을 표현합니다. 원래 ellipse()로 점을 찍는 방식에서 line()으로 변경하면 속도감이 훨씬 살아납니다.',
        'createSlider()로 속도를 실시간 조절할 수 있습니다. speed 변수가 매 프레임마다 z에서 빠지므로, 값이 클수록 별이 빠르게 다가옵니다.',
    ],
})

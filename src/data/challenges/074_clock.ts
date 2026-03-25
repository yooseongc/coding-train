import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '074_clock',
    number: 74,
    title: 'Clock',
    categoryId: 'drawing-animation',
    description: 'p5.js로 아날로그+디지털 시계를 만듭니다. arc()로 원형 게이지를, line()으로 시/분/초 바늘을 표현합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #74: Clock', url: 'https://thecodingtrain.com/challenges/74-clock' },
    ],
    tags: ['clock', 'time', 'animation', 'arc'],
    difficulty: 'beginner',
    explanation: [
        'hour(), minute(), second()로 현재 시간을 가져오고, map()으로 각 값을 0~360도 범위의 각도로 변환합니다. angleMode(DEGREES)를 사용하여 직관적으로 각도를 다룹니다.',
        '상단에 nf(hr, 2) 형식으로 디지털 시계 텍스트를 표시합니다. translate(200, 200)으로 원점을 중앙으로 이동하고 rotate(-90)으로 12시 방향을 기준점으로 설정합니다.',
        'arc()로 초(분홍), 분(보라), 시(녹색)의 원형 게이지를 동심원으로 그립니다. 각각 다른 지름(300, 280, 260)으로 겹치지 않게 배치합니다.',
        'push()/pop() 블록 안에서 rotate()와 line()으로 시/분/초 바늘을 그립니다. 6도 간격으로 point()를 찍어 시계 눈금을 표현합니다.',
    ],
})

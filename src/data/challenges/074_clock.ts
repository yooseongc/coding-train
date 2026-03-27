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
        { title: 'p5.js Reference - arc()', url: 'https://p5js.org/reference/p5/arc/' },
        { title: 'p5.js Reference - hour() / minute() / second()', url: 'https://p5js.org/reference/p5/hour/' },
        { title: 'Wikipedia - 아날로그 시계', url: 'https://en.wikipedia.org/wiki/Clock#Analog' },
    ],
    tags: ['clock', 'time', 'animation', 'arc'],
    difficulty: 'beginner',
    explanation: [
        '시계는 프로그래밍 학습에서 가장 고전적인 프로젝트 중 하나입니다. 시간 데이터를 시각적으로 표현하기 위해 각도 변환(angle mapping), 좌표 변환(coordinate transformation), 삼각함수 등 핵심 수학 개념을 자연스럽게 활용하게 됩니다. 이 챌린지에서는 아날로그 바늘과 원형 게이지, 디지털 텍스트를 결합한 하이브리드 시계를 만듭니다.',
        'hour(), minute(), second()로 현재 시간을 가져오고, map()으로 각 값을 0~360도 범위의 각도로 변환합니다. angleMode(DEGREES)를 사용하여 직관적으로 각도를 다룹니다. 12시간제 표시를 위해 hr % 12로 시간을 변환합니다.',
        '상단에 nf(hr, 2) 형식으로 디지털 시계 텍스트를 표시합니다. translate(200, 200)으로 원점을 캔버스 중앙으로 이동하고 rotate(-90)으로 3시 방향(기본 0도)을 12시 방향으로 보정합니다. 이 좌표 변환은 p5.js에서 원형 시각화를 만들 때 매우 흔한 패턴입니다.',
        'arc()로 초(분홍), 분(보라), 시(녹색)의 원형 게이지를 동심원으로 그립니다. 각각 다른 지름(300, 280, 260)으로 겹치지 않게 배치합니다. 이러한 원형 진행률 표시(circular progress)는 스마트워치, 피트니스 앱 등 현대 UI에서도 널리 사용됩니다.',
        'push()/pop() 블록 안에서 rotate()와 line()으로 시/분/초 바늘을 그립니다. push()는 현재 변환 행렬(transformation matrix)을 저장하고 pop()으로 복원하여 각 바늘의 회전이 서로 영향을 주지 않도록 합니다. 6도 간격(360/60)으로 point()를 찍어 60개의 시계 눈금을 표현합니다.',
        '이 시계를 확장하면 알람 기능, 세계 시계, 스톱워치 등을 추가할 수 있습니다. Processing/p5.js 커뮤니티에서는 Polar Clock, Word Clock, Binary Clock 등 다양한 창의적 시계 디자인이 인기 있는 프로젝트입니다.',
    ],
})

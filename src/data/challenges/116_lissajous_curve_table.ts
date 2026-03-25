import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '116_lissajous_curve_table',
    number: 116,
    title: 'Lissajous Curve Table',
    categoryId: 'creative-coding',
    description: '리사주 곡선 테이블을 구현합니다. 행과 열의 원 위 점이 만나는 위치를 추적하여 조화 운동 패턴을 그립니다.',
    files: ['curve.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #116: Lissajous Curve Table', url: 'https://thecodingtrain.com/challenges/116-lissajous-curve-table' },
    ],
    tags: ['lissajous', 'curve', 'harmonic', 'table'],
    difficulty: 'intermediate',
    explanation: [
        '리사주 곡선은 x = A*sin(a*t + delta), y = B*sin(b*t)의 매개변수 방정식입니다. 상단 열의 원은 각각 (i+1)배속으로 회전하고, 좌측 행의 원은 (j+1)배속으로 회전합니다.',
        '각 원 위의 점에서 수직/수평 안내선을 그립니다. (i, j) 위치의 Curve 객체는 i열의 x좌표와 j행의 y좌표가 만나는 점을 기록합니다. setX(), setY()로 좌표를 받고 addPoint()로 경로에 추가합니다.',
        'w(100px) 크기의 격자에 원(지름 80%)을 배치합니다. angle이 -TWO_PI를 넘으면 모든 곡선을 리셋하고 다시 시작합니다. 100x100 캔버스에 9x9 테이블로 81개의 리사주 곡선을 동시에 그립니다.',
        'a/b 비율이 유리수이면 닫힌 곡선이, 무리수에 가까우면 복잡한 열린 곡선이 됩니다. 비율 1:1은 타원, 2:1은 포물선 모양 등 다양한 패턴이 나타납니다.',
    ],
})

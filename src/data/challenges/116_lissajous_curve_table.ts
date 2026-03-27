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
        { title: 'Wikipedia - Lissajous curve', url: 'https://en.wikipedia.org/wiki/Lissajous_curve' },
        { title: 'Wikipedia - Harmonic oscillator', url: 'https://en.wikipedia.org/wiki/Harmonic_oscillator' },
        { title: 'Wikipedia - Parametric equation', url: 'https://en.wikipedia.org/wiki/Parametric_equation' },
    ],
    tags: ['lissajous', 'curve', 'harmonic', 'table'],
    difficulty: 'intermediate',
    explanation: [
        '리사주 곡선(Lissajous Curve)은 x = A*sin(a*t + delta), y = B*sin(b*t)의 매개변수 방정식(Parametric Equation)으로 정의됩니다. 1815년 너새니얼 보디치(Nathaniel Bowditch)가 처음 연구하고, 1857년 쥘 앙투안 리사주(Jules Antoine Lissajous)가 음향학 실험에서 더 상세히 분석하여 이 이름이 붙었습니다.',
        '리사주 곡선은 두 직교 방향의 단순 조화 운동(Simple Harmonic Motion)이 합쳐진 결과입니다. 오실로스코프에서 두 정현파 신호의 주파수 비율과 위상차를 측정하는 데 사용되며, 전자공학과 음향학에서 실용적인 도구로 활용됩니다. a/b 비율이 유리수이면 닫힌 곡선이, 무리수에 가까우면 복잡한 열린 곡선이 됩니다.',
        '테이블 형태의 시각화에서 상단 열의 원은 각각 (i+1)배속으로 회전하고, 좌측 행의 원은 (j+1)배속으로 회전합니다. 각 원 위의 점에서 수직/수평 안내선을 그리고, (i, j) 위치의 Curve 객체는 두 안내선이 만나는 점의 궤적을 기록합니다.',
        'a/b 비율에 따라 다양한 패턴이 나타납니다. 비율 1:1은 타원(위상차에 따라 원이나 직선), 1:2는 8자 모양, 3:2는 세 잎과 두 잎이 결합된 형태 등입니다. 비율이 "로브(lobe)"의 수를 결정하며, a:b 비율에서 수평 로브는 a개, 수직 로브는 b개 나타납니다.',
        'w(100px) 크기의 격자에 원(지름 80%)을 배치합니다. angle이 -TWO_PI를 넘으면 한 주기가 완성되어 모든 곡선을 리셋합니다. 9x9 테이블로 81개의 리사주 곡선을 동시에 그려 주파수 비율에 따른 패턴 변화를 한눈에 비교할 수 있습니다.',
        '리사주 곡선은 수학, 물리학, 음악, 예술을 연결하는 아름다운 개념입니다. 3차원으로 확장하면 리사주 매듭(Lissajous Knot)이 되며, 매듭 이론(Knot Theory)과 연결됩니다. 현대에는 레이저 쇼, 모션 그래픽, 제너레이티브 아트 등에서 널리 활용됩니다.',
    ],
})

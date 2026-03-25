import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '019_superellipse',
    number: 19,
    title: 'Superellipse',
    categoryId: '3d-geometry',
    description: '슈퍼엘립스(Lamé curve)를 그립니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #19: Superellipse', url: 'https://thecodingtrain.com/challenges/19-superellipse' },
    ],
    tags: ['superellipse', 'curve', 'math', 'geometry'],
    difficulty: 'beginner',
    explanation: [
        'Superellipse(Lame curve)는 |x/a|^n + |y/b|^n = 1로 정의되는 곡선입니다. n=2이면 원, n>2이면 사각형에 가까워지고, n<2이면 별 모양에 가까워집니다.',
        '매개변수 방정식 x=|cos(t)|^(2/n)*a*sgn(cos(t)), y=|sin(t)|^(2/n)*b*sgn(sin(t))로 각도 t를 0~2PI까지 순회하며 점을 계산합니다. sgn()은 부호 함수로 사분면별 방향을 결정합니다.',
        'beginShape()/vertex()/endShape(CLOSE)로 계산된 점들을 연결하여 닫힌 도형을 그립니다. CLOSE 인자가 마지막 점과 첫 점을 자동 연결합니다.',
        'createSlider()로 n 값을 0~10 범위에서 실시간 조절하여 도형의 변화를 관찰합니다.',
    ],
})

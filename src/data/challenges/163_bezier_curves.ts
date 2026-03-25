import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '163_bezier_curves',
    number: 163,
    title: 'Bezier Curves',
    categoryId: 'math-algorithms',
    description: '베지에 곡선의 원리를 선형 보간(lerp)으로 시각화하고, 2차/3차 곡선을 구현합니다.',
    files: ['sketch.js'],
    libraries: ['p5.sound.min.js'],
    references: [
        { title: 'Coding Challenge #163: Bezier Curves', url: 'https://thecodingtrain.com/challenges/163-bezier-curves' },
    ],
    tags: ['bezier', 'curve', 'interpolation', 'lerp'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 p5 인스턴스 모드와 특수 DOM 컨테이너가 필요합니다. 일부 기능이 정상 동작하지 않을 수 있습니다.',
    explanation: [
        '베지에 곡선은 제어점 사이의 선형 보간(lerp)을 재귀적으로 적용하여 만드는 매끄러운 곡선입니다. t가 0에서 1로 변할 때 보간 중간점들의 궤적이 곡선을 형성합니다.',
        'Basic 스케치는 p5.js의 bezier() 함수를 사용합니다. 4개의 제어점(시작, 두 핸들, 끝)을 마우스로 조작하고, 핸들과의 연결선을 그려 곡선과의 관계를 보여줍니다.',
        'Quadratic 스케치에서 2차 베지에의 원리를 시각화합니다. t=0~1 범위에서 p0-p1, p1-p2 각 선분의 lerp 점을 구하고, 그 두 점의 lerp가 곡선 위의 점입니다. HSB 색상으로 t에 따른 변화를 보여줍니다.',
        'Cubic 스케치는 3차 베지에를 구현합니다. quadratic()을 두 번 호출하여 중간 점 v1, v2를 구하고, 다시 lerp하여 최종 곡선점을 얻습니다. 제어점이 벽에 반사되며 자동으로 움직여 다양한 곡선 형태를 보여줍니다.',
    ],
})

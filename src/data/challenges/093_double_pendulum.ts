import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '093_double_pendulum',
    number: 93,
    title: 'Double Pendulum',
    categoryId: 'physics-simulation',
    description: '이중 진자의 혼돈적 운동을 시뮬레이션합니다. 라그랑주 역학의 운동 방정식을 수치적으로 풀어 궤적을 그립니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #93: Double Pendulum', url: 'https://thecodingtrain.com/challenges/93-double-pendulum' },
    ],
    tags: ['pendulum', 'chaos', 'physics', 'Lagrangian'],
    difficulty: 'advanced',
    explanation: [
        '이중 진자는 혼돈 역학의 대표적 예시입니다. 두 막대(r1=r2=125)와 두 질량(m1=m2=10)으로 구성되며, 초기 각도 PI/2에서 시작합니다. 초기 조건의 미세한 차이가 완전히 다른 궤적을 만듭니다.',
        '라그랑주 역학으로 유도된 theta1\'\', theta2\'\' 공식을 직접 구현합니다. 각 프레임에서 각가속도를 계산하고, 오일러 방법(a1_v += a1_a, a1 += a1_v)으로 각속도와 각도를 업데이트합니다.',
        'createGraphics()로 별도의 그래픽 버퍼를 만들어 두 번째 추의 궤적을 누적합니다. 이전 프레임 위치(px2, py2)와 현재 위치(x2, y2)를 line()으로 연결하여 혼돈적 경로를 시각적으로 보여줍니다.',
        '운동학적 위치는 x1 = r1*sin(a1), y1 = r1*cos(a1), x2 = x1 + r2*sin(a2), y2 = y1 + r2*cos(a2)입니다. line()으로 막대를, ellipse()로 질량을 그리며, 배경에 궤적 이미지를 겹쳐 표시합니다.',
    ],
})

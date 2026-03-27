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
        { title: 'myPhysicsLab - Double Pendulum', url: 'https://www.myphysicslab.com/pendulum/double-pendulum-en.html' },
        { title: 'Wikipedia - Double Pendulum', url: 'https://en.wikipedia.org/wiki/Double_pendulum' },
        { title: 'Wikipedia - Chaos Theory', url: 'https://en.wikipedia.org/wiki/Chaos_theory' },
    ],
    tags: ['pendulum', 'chaos', 'physics', 'Lagrangian'],
    difficulty: 'advanced',
    explanation: [
        '이중 진자(Double Pendulum)는 혼돈 이론(Chaos Theory)의 가장 유명한 시연 도구 중 하나입니다. 1963년 에드워드 로렌츠(Edward Lorenz)가 기상 모델에서 발견한 초기 조건에 대한 민감한 의존성(Sensitive Dependence on Initial Conditions), 즉 "나비 효과(Butterfly Effect)"를 직관적으로 보여줍니다. 초기 각도의 0.001도 차이가 완전히 다른 궤적을 만들어냅니다.',
        '이 시뮬레이션의 운동 방정식은 라그랑주 역학(Lagrangian Mechanics)으로 유도됩니다. 조제프루이 라그랑주(Joseph-Louis Lagrange)가 1788년에 제안한 이 체계는 운동 에너지(T)와 위치 에너지(V)의 차이인 라그랑지안(L = T - V)으로부터 오일러-라그랑주 방정식을 통해 운동 방정식을 도출합니다.',
        '라그랑주 역학으로 유도된 theta1 가속도와 theta2 가속도 공식을 직접 구현합니다. 각 프레임에서 각가속도를 계산하고, 오일러 방법(Euler Method: a1_v += a1_a, a1 += a1_v)으로 각속도와 각도를 업데이트합니다. 더 정확한 시뮬레이션을 위해서는 룽게-쿠타(Runge-Kutta) 4차 방법을 사용할 수 있습니다.',
        'createGraphics()로 별도의 그래픽 버퍼를 만들어 두 번째 추의 궤적을 누적합니다. 이전 프레임 위치(px2, py2)와 현재 위치(x2, y2)를 line()으로 연결하여 혼돈적 경로를 시각적으로 보여줍니다. 이 궤적은 결정론적(Deterministic)이지만 비주기적(Aperiodic)인 카오스의 특성을 나타냅니다.',
        '운동학적 위치는 x1 = r1*sin(a1), y1 = r1*cos(a1), x2 = x1 + r2*sin(a2), y2 = y1 + r2*cos(a2)입니다. line()으로 막대를, ellipse()로 질량을 그리며, 배경에 궤적 이미지를 겹쳐 표시합니다.',
        '혼돈 시스템은 기상 예측, 주식 시장 분석, 심장 박동 패턴 연구, 인구 생태학, 암호학 등 다양한 분야에서 연구됩니다. 이중 진자 자체는 물리학 교육, 과학관 전시, 그리고 제너러티브 아트의 소재로 자주 활용됩니다.',
    ],
})

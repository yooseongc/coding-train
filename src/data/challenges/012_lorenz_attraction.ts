import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '012_lorenz_attraction',
    number: 12,
    title: 'Lorenz Attraction',
    categoryId: 'data-visualization',
    description: '로렌츠 끌개(Lorenz attractor)를 3D로 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #12: Lorenz Attraction', url: 'https://thecodingtrain.com/challenges/12-lorenz-attraction' },
        { title: 'Wikipedia - Lorenz system', url: 'https://en.wikipedia.org/wiki/Lorenz_system' },
        { title: 'Wikipedia - Chaos theory', url: 'https://en.wikipedia.org/wiki/Chaos_theory' },
        { title: 'p5.js Reference - WEBGL', url: 'https://p5js.org/reference/p5/WEBGL/' },
    ],
    tags: ['lorenz', 'attractor', 'chaos', '3D'],
    difficulty: 'intermediate',
    explanation: [
        'Lorenz 시스템은 1963년 기상학자 에드워드 로렌츠(Edward Lorenz)가 대기 대류 모델을 단순화하면서 발견한 비선형 동역학 시스템입니다. 세 개의 연립 미분방정식 dx/dt = a(y-x), dy/dt = x(b-z)-y, dz/dt = xy-cz로 정의되며, 결정론적 시스템임에도 초기 조건에 극도로 민감한 카오스적 행동을 보입니다. 이 발견은 나비 효과(Butterfly Effect)라는 용어의 기원이 되었으며, 카오스 이론(Chaos Theory)의 탄생에 핵심적 역할을 했습니다.',
        '매개변수 a=10(프란틀 수), b=28(레일리 수), c=8/3(기하학적 비율)은 로렌츠가 원래 논문에서 사용한 고전적인 값으로, 이 조합에서 시스템은 두 개의 불안정한 고정점 주위를 예측 불가능하게 회전하는 나비 모양의 끌개(Strange Attractor)를 형성합니다. 끌개는 프랙탈 구조를 가지며 약 2.06의 프랙탈 차원을 갖습니다.',
        'dt=0.01로 오일러 방법(Euler method)을 사용하여 미분방정식을 수치적으로 적분합니다. 오일러 방법은 가장 단순한 수치 적분법으로, 각 시간 단계에서 미분값에 dt를 곱하여 다음 위치를 근사합니다. 더 정밀한 Runge-Kutta 방법도 있지만, 시각화 목적에는 오일러 방법으로 충분합니다.',
        'points 배열에 매 프레임 새 좌표를 p5.Vector로 추가하고, beginShape()/endShape()로 모든 점을 연결하는 연속 선을 그립니다. HSB 색상 모드에서 색조(hue)를 점마다 1씩 증가시켜 경로에 무지개 색상을 입혀, 시간 순서에 따른 궤적의 진행을 시각적으로 구분할 수 있습니다.',
        'WEBGL 모드에서 camera() 함수에 mouseX, mouseY를 map()으로 -200~200 범위로 변환한 값을 전달하여, 마우스 움직임으로 3D 시점을 실시간 조작할 수 있습니다. scale(5)로 작은 좌표값을 화면에 적절한 크기로 확대합니다.',
        '로렌츠 끌개는 기상학뿐 아니라 레이저 물리학, 전기 회로, 화학 반응 등 다양한 분야에서 카오스 현상을 설명하는 대표적 모델로 활용됩니다. 또한 암호학에서 의사 난수 생성기의 기초로 연구되기도 하며, 예술과 디자인 분야에서도 그 아름다운 형태로 인해 널리 사용됩니다.',
    ],
})

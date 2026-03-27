import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '160_spring_forces',
    number: 160,
    title: 'Spring Forces',
    categoryId: 'physics-simulation',
    description: '후크의 법칙(F = -kx)으로 스프링에 매달린 공의 왕복 운동을 시뮬레이션합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #160: Spring Forces', url: 'https://thecodingtrain.com/challenges/160-spring-forces' },
        { title: 'Wikipedia - Hooke\'s law', url: 'https://en.wikipedia.org/wiki/Hooke%27s_law' },
        { title: 'Wikipedia - Harmonic oscillator', url: 'https://en.wikipedia.org/wiki/Harmonic_oscillator' },
        { title: 'Wikipedia - Damping', url: 'https://en.wikipedia.org/wiki/Damping' },
    ],
    tags: ['spring', 'force', 'Hooke', 'oscillation'],
    difficulty: 'intermediate',
    explanation: [
        '후크의 법칙(Hooke\'s law)은 1660년 영국의 로버트 후크(Robert Hooke)가 발견한 탄성 법칙으로, 스프링의 복원력이 변위에 비례한다는 것을 기술합니다. F = -k*x에서 k는 스프링 상수(spring constant), x는 변위이며, 음수 부호는 복원력이 변위와 반대 방향임을 나타냅니다. 이 법칙은 고전 역학의 기본 원리 중 하나입니다.',
        'y=250에서 시작하는 공이 상단(y=0) 앵커에 연결된 스프링에 매달려 진동합니다. 매 프레임 force = -k*(y-restLength)를 계산하여 velocity에 누적하고 y 위치를 업데이트합니다. 이는 뉴턴의 제2법칙 F = ma에서 질량을 1로 가정한 단순화된 모델입니다.',
        'velocity *= 0.99로 감쇠(damping)를 적용하여 진동이 점차 줄어드는 감쇠 진동(damped oscillation)을 구현합니다. 감쇠가 없다면 에너지가 보존되어 영원히 동일한 진폭으로 진동하지만, 실제 세계에서는 마찰과 공기 저항에 의해 에너지가 소산됩니다.',
        '초기 변위(250-200=50)에서 시작하여 자연 길이(rest length) 위치인 y=200 주변으로 수렴하는 과정을 관찰할 수 있습니다. 스프링 상수 k=0.01은 부드러운 스프링을 나타내며, k가 클수록 진동 주파수가 높아지고 작을수록 느린 진동이 됩니다.',
        '스프링-질량 시스템(spring-mass system)은 물리학과 공학에서 가장 중요한 모델 중 하나입니다. 자동차 서스펜션, 건물의 내진 설계, 악기의 현, 분자 결합의 진동 등 다양한 현상을 이 모델로 설명할 수 있습니다. 게임 물리 엔진에서도 소프트 바디(soft body) 시뮬레이션의 기초로 사용됩니다.',
    ],
})

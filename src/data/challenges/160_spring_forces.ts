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
    ],
    tags: ['spring', 'force', 'Hooke', 'oscillation'],
    difficulty: 'intermediate',
    explanation: [
        '후크의 법칙 F = -k*x에서 k는 스프링 상수(0.01), x는 현재 위치에서 자연 길이(restLength=200)를 뺀 변위입니다. 음수 부호는 복원력이 변위와 반대 방향임을 나타냅니다.',
        'y=250에서 시작하는 공이 상단(y=0) 앵커에 연결된 스프링에 매달려 진동합니다. 매 프레임 force = -k*(y-restLength)를 계산하고 velocity에 누적한 뒤 y 위치를 업데이트합니다.',
        'velocity *= 0.99로 감쇠를 적용하여 진동이 점차 줄어듭니다. 초기 변위(250-200=50)에서 시작하여 자연 길이 위치(y=200) 주변으로 수렴하는 감쇠 진동을 관찰합니다.',
        'background(112, 50, 126)의 보라색 배경에 fill(45, 197, 244)의 하늘색 원(반지름 64)으로 공을 그립니다. 단순하지만 물리 시뮬레이션의 기본인 스프링-질량 시스템을 보여줍니다.',
    ],
})

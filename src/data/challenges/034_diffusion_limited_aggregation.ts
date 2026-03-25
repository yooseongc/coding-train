import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '034_diffusion_limited_aggregation',
    number: 34,
    title: 'Diffusion Limited Aggregation',
    categoryId: 'math-algorithms',
    description: '브라운 운동 기반의 확산 제한 응집(DLA) 알고리즘으로 프랙탈 나무 구조를 생성합니다.',
    files: ['walker.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #34: Diffusion Limited Aggregation', url: 'https://thecodingtrain.com/challenges/34-diffusion-limited-aggregation' },
    ],
    tags: ['DLA', 'aggregation', 'brownian', 'fractal'],
    difficulty: 'intermediate',
    explanation: [
        'Walker 클래스는 랜덤 워크(브라운 운동)를 수행하는 입자입니다. 시드 입자는 화면 중앙에 stuck 상태로 배치되고, 나머지 입자들은 화면 가장자리에서 랜덤하게 생성됩니다.',
        'walk() 메서드에서 p5.Vector.random2D()로 매 스텝 랜덤 방향으로 이동합니다. checkStuck()은 기존 트리의 모든 입자와 거리를 비교하여 접촉하면 트리에 합류시킵니다.',
        'distSq() 함수로 제곱근 연산 없이 거리 비교를 최적화합니다. 매 프레임 iterations(1000)번 반복하여 시뮬레이션 속도를 높이고, radius에 shrink(0.995)를 곱해 점점 작은 입자를 생성합니다.',
        'HSB 색상 모드에서 트리에 합류하는 순서대로 색조(hu)를 2씩 증가시켜 성장 과정을 무지개 색으로 시각화합니다. 프랙탈 특성의 덴드라이트(수지상) 구조가 형성됩니다.',
    ],
})

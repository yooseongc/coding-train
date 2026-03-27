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
        { title: 'Wikipedia - Diffusion-Limited Aggregation', url: 'https://en.wikipedia.org/wiki/Diffusion-limited_aggregation' },
        { title: 'Wikipedia - Brownian Motion', url: 'https://en.wikipedia.org/wiki/Brownian_motion' },
        { title: 'p5.js Reference - p5.Vector', url: 'https://p5js.org/reference/p5.Vector/' },
    ],
    tags: ['DLA', 'aggregation', 'brownian', 'fractal'],
    difficulty: 'intermediate',
    explanation: [
        '확산 제한 응집(Diffusion-Limited Aggregation, DLA)은 1981년 Witten과 Sander가 처음 제안한 모델로, 브라운 운동을 하는 입자들이 클러스터에 달라붙어 성장하는 과정을 시뮬레이션합니다. 이 모델은 자연계의 다양한 프랙탈 구조를 설명하는 핵심 메커니즘으로, 물리학과 재료과학에서 중요한 위치를 차지합니다.',
        'Walker 클래스는 랜덤 워크(브라운 운동)를 수행하는 입자입니다. 시드 입자는 화면 중앙에 stuck 상태로 배치되고, 나머지 입자들은 화면 가장자리에서 랜덤하게 생성됩니다. walk() 메서드에서 p5.Vector.random2D()로 매 스텝 랜덤 방향으로 이동하며, checkStuck()은 기존 트리의 모든 입자와 거리를 비교하여 접촉하면 트리에 합류시킵니다.',
        'distSq() 함수로 제곱근 연산 없이 거리 비교를 최적화합니다. 매 프레임 iterations(1000)번 반복하여 시뮬레이션 속도를 높이고, radius에 shrink(0.995)를 곱해 점점 작은 입자를 생성합니다. 이러한 최적화 기법은 입자 시뮬레이션에서 흔히 사용됩니다.',
        'DLA로 생성되는 브라운 트리(Brownian Tree)는 1990년대 초 가정용 컴퓨터가 충분한 성능을 갖추면서 컴퓨터 아트의 한 형태로 인기를 끌었습니다. 생성되는 덴드라이트(수지상) 구조는 전기방전 패턴(리히텐베르크 도형), 번개의 형상, 산호의 성장, 강의 분기 구조 등 자연에서 광범위하게 관찰됩니다.',
        'HSB 색상 모드에서 트리에 합류하는 순서대로 색조(hu)를 2씩 증가시켜 성장 과정을 무지개 색으로 시각화합니다. DLA 클러스터의 프랙탈 차원은 약 1.71로, 유클리드 차원인 2보다 작아 빈 공간이 많은 성긴 구조를 형성합니다.',
    ],
})

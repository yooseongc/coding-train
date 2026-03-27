import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '053_levy_flight',
    number: 53,
    title: 'Levy Flight',
    categoryId: 'math-algorithms',
    description: '레비 비행(Levy Flight)으로 대부분 짧게, 가끔 크게 이동하는 확률적 랜덤 워크를 구현합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #53: Levy Flight', url: 'https://thecodingtrain.com/challenges/53-levy-flight' },
        { title: 'Wikipedia - Levy Flight', url: 'https://en.wikipedia.org/wiki/L%C3%A9vy_flight' },
        { title: 'Wikipedia - Pareto Distribution', url: 'https://en.wikipedia.org/wiki/Pareto_distribution' },
        { title: 'Levy Flight Foraging Hypothesis', url: 'https://en.wikipedia.org/wiki/L%C3%A9vy_flight_foraging_hypothesis' },
    ],
    tags: ['levy-flight', 'random', 'power-law', 'movement'],
    difficulty: 'beginner',
    explanation: [
        '레비 비행(Levy Flight)은 프랑스 수학자 Paul Levy의 이름을 딴 확률적 이동 모델로, 이동 거리가 멱법칙(power-law) 분포를 따르는 랜덤 워크입니다. 이 용어는 프랙탈 기하학의 창시자 Benoit Mandelbrot가 처음 사용했습니다. 대부분의 스텝은 짧지만 가끔 매우 큰 점프가 발생하는 것이 특징입니다.',
        'p5.Vector.random2D()로 랜덤 방향을 생성하고, 역누적분포함수 pow((1-random()), -1/D)로 이동 거리를 계산합니다. 이 분포는 파레토 분포(Pareto Distribution)의 특수한 경우로, D 파라미터가 프랙탈 차원과 관련됩니다. D=2일 때 가끔 큰 점프가 발생하는 레비 분포가 됩니다.',
        'prev 벡터로 이전 위치를 저장하고 line()으로 현재 위치와 연결합니다. background를 setup()에서만 호출하여 궤적이 누적되며, 군집(cluster)과 긴 점프가 번갈아 나타나는 패턴을 관찰할 수 있습니다. 이러한 패턴은 일반 랜덤 워크의 가우시안 분포와는 뚜렷하게 구별됩니다.',
        '레비 비행 먹이 탐색 가설(Levy Flight Foraging Hypothesis)에 따르면, 알바트로스, 상어, 꿀벌 등 다양한 생물의 먹이 탐색 패턴이 레비 비행과 유사합니다. 먹이가 희소하고 랜덤하게 분포할 때 레비 비행이 일반 브라운 운동보다 효율적인 탐색 전략이 되기 때문입니다.',
        '레비 비행은 생태학의 동물 행동 모델링 외에도, 최적화 알고리즘(Cuckoo Search), 인터넷 트래픽 모델링, 금융 시장의 주가 변동 분석 등에 응용됩니다. 정규분포와 달리 "꼬리가 두꺼운(heavy-tailed)" 분포이므로 극단적인 이벤트가 발생할 확률이 더 높습니다.',
    ],
})

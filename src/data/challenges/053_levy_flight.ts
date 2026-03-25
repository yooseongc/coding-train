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
    ],
    tags: ['levy-flight', 'random', 'power-law', 'movement'],
    difficulty: 'beginner',
    explanation: [
        '레비 비행은 이동 거리가 멱법칙(power-law) 분포를 따르는 랜덤 워크입니다. 대부분의 스텝은 짧지만, 가끔 매우 큰 점프가 발생하여 생물의 먹이 탐색 패턴과 유사합니다.',
        'p5.Vector.random2D()로 랜덤 방향을 생성하고, 역누적분포함수 pow((1-random()), -1/D)로 이동 거리를 계산합니다. D=2일 때 가끔 큰 점프가 발생하는 레비 분포가 됩니다.',
        'prev 벡터로 이전 위치를 저장하고 line()으로 현재 위치와 연결합니다. background를 setup()에서만 호출하여 궤적이 누적되며, 군집(cluster)과 긴 점프가 번갈아 나타나는 패턴을 관찰할 수 있습니다.',
    ],
})

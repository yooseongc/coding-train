import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '059_steering_behaviors',
    number: 59,
    title: 'Steering Behaviors',
    categoryId: 'physics-simulation',
    description: '폰트의 글자 경로를 추출하여 파티클이 도착(arrive)과 회피(flee) 행동으로 텍스트를 형성합니다.',
    files: ['vehicle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #59: Steering Behaviors', url: 'https://thecodingtrain.com/challenges/59-steering-behaviors' },
    ],
    tags: ['steering', 'vehicle', 'seek', 'arrive'],
    difficulty: 'intermediate',
    explanation: [
        'loadFont()로 OTF 폰트를 로드하고 font.textToPoints()로 글자의 윤곽 점들을 추출합니다. sampleFactor=0.25로 샘플링 밀도를 조절하여 각 점에 Vehicle을 생성합니다.',
        'Vehicle은 arrive()와 flee() 두 가지 조향 행동을 가집니다. arrive()는 목표까지의 거리에 비례하여 속도를 줄이는 도착 행동으로, map(d, 0, 100, 0, maxSpeed, true)로 감속합니다.',
        'flee()는 마우스와의 거리가 50 이하일 때 반대 방향으로 회피합니다. arrive 가중치 1, flee 가중치 2로 설정하여 마우스 회피가 더 강하게 작용합니다.',
        'Vehicle은 랜덤 위치에서 시작하여 목표 위치(글자 경로)로 수렴합니다. 마우스를 가져가면 파티클이 흩어졌다가 마우스를 치우면 다시 글자 형태로 모입니다.',
    ],
})

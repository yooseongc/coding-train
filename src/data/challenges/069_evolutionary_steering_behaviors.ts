import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '069_evolutionary_steering_behaviors',
    number: 69,
    title: 'Evolutionary Steering Behaviors',
    categoryId: 'physics-simulation',
    description: '유전 알고리즘과 조향 행동을 결합하여 먹이를 찾고 독을 피하는 에이전트를 진화시킵니다.',
    files: ['vehicle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #69: Evolutionary Steering Behaviors', url: 'https://thecodingtrain.com/challenges/69-evolutionary-steering-behaviors' },
    ],
    tags: ['evolution', 'steering', 'genetic', 'food'],
    difficulty: 'advanced',
    explanation: [
        'Vehicle의 DNA는 4개의 유전자로 구성됩니다: dna[0]=음식 가중치, dna[1]=독 가중치, dna[2]=음식 인지 반경, dna[3]=독 인지 반경. 초기값은 random(-2,2)과 random(0,100)으로 무작위 생성됩니다.',
        'behaviors()에서 eat() 메서드로 가장 가까운 음식/독을 찾아 seek 조향력을 계산합니다. 음식을 먹으면 health+0.2, 독을 먹으면 health-1을 적용합니다. health가 매 프레임 0.005씩 감소하여 0 이하면 사망합니다.',
        'clone()은 0.2% 확률로 자가 복제하며, 돌연변이(mutationProbability=1%)로 DNA 값을 소량 변경합니다. 사망한 Vehicle은 음식으로 변환되어 생태계가 순환합니다.',
        '5가지 모드(Seeking, Eat Food, Food & Poison, Random DNA, Evolution)를 드롭다운으로 전환할 수 있습니다. debug 체크박스로 각 Vehicle의 DNA 가중치(선 길이)와 인지 반경(원)을 시각화합니다.',
    ],
})

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
        { title: 'Nature of Code - Chapter 6: Autonomous Agents', url: 'https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp06_agents' },
        { title: 'Wikipedia - Neuroevolution', url: 'https://en.wikipedia.org/wiki/Neuroevolution' },
        { title: 'Wikipedia - Artificial Life', url: 'https://en.wikipedia.org/wiki/Artificial_life' },
    ],
    tags: ['evolution', 'steering', 'genetic', 'food'],
    difficulty: 'advanced',
    explanation: [
        '이 챌린지는 유전 알고리즘(Genetic Algorithm)과 조향 행동(Steering Behaviors)을 결합하여 인공 생명(Artificial Life, ALife)의 개념을 시뮬레이션합니다. 1980년대 크리스토퍼 랭턴(Christopher Langton)이 정립한 인공 생명 분야는 단순한 규칙에서 복잡한 생명체 유사 행동이 창발(Emergence)하는 현상을 연구합니다.',
        'Vehicle의 DNA는 4개의 유전자로 구성됩니다: dna[0]=음식 가중치, dna[1]=독 가중치, dna[2]=음식 인지 반경, dna[3]=독 인지 반경. 초기값은 random(-2,2)과 random(0,100)으로 무작위 생성됩니다. 이 4개의 파라미터가 에이전트의 "성격"을 결정하는 유전형(Genotype)입니다.',
        'behaviors()에서 eat() 메서드로 가장 가까운 음식/독을 찾아 seek 조향력을 계산합니다. 음식을 먹으면 health+0.2, 독을 먹으면 health-1을 적용합니다. health가 매 프레임 0.005씩 감소하여 0 이하면 사망합니다. 이 에너지 기반 생존 메커니즘이 자연 선택(Natural Selection)의 선택 압력(Selection Pressure)을 제공합니다.',
        'clone()은 0.2% 확률로 자가 복제(무성 생식)하며, 돌연변이(mutationProbability=1%)로 DNA 값을 소량 변경합니다. 사망한 Vehicle은 음식으로 변환되어 물질 순환(Material Cycling)을 형성합니다. 세대를 거듭하며 음식에 대한 인력은 커지고 독에 대한 인지 반경이 넓어지는 방향으로 진화하는 경향을 관찰할 수 있습니다.',
        '5가지 모드(Seeking, Eat Food, Food & Poison, Random DNA, Evolution)를 드롭다운으로 전환하여 각 단계를 점진적으로 학습할 수 있습니다. debug 체크박스로 각 Vehicle의 DNA 가중치(선 길이)와 인지 반경(원)을 시각화하여 진화 과정을 직관적으로 관찰합니다.',
        '진화적 에이전트 시스템은 게임 AI(적응형 NPC), 스웜 로보틱스(Swarm Robotics), 생태학 시뮬레이션, 그리고 진화 전략(Evolution Strategies)을 활용한 강화 학습(Reinforcement Learning) 등에 응용됩니다. OpenAI의 진화 전략 연구에서도 유사한 접근법이 사용되었습니다.',
    ],
})

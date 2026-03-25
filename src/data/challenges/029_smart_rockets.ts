import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '029_smart_rockets',
    number: 29,
    title: 'Smart Rockets',
    categoryId: 'physics-simulation',
    description: '유전 알고리즘으로 로켓이 목표물에 도달하도록 학습시킵니다.',
    files: ['dna.js', 'population.js', 'rocket.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #29: Smart Rockets', url: 'https://thecodingtrain.com/challenges/29-smart-rockets' },
    ],
    tags: ['genetic', 'algorithm', 'evolution', 'rockets'],
    difficulty: 'intermediate',
    explanation: [
        'DNA 클래스는 유전자(genes) 배열에 각 프레임에 적용할 힘 벡터를 저장합니다. crossover()로 두 부모의 유전자를 랜덤 지점에서 분할 결합하고, mutation()으로 1% 확률로 유전자를 변이시킵니다.',
        'Rocket은 DNA의 유전자 벡터를 순서대로 힘으로 적용받아 움직입니다. calcFitness()에서 목표까지의 거리를 적합도로 변환하며, 도달 시 보너스, 충돌 시 패널티를 부여합니다.',
        'Population의 evaluate()에서 적합도에 비례하여 matingPool에 로켓을 넣습니다. 적합도가 높은 개체가 더 많이 들어가 선택 확률이 높아지는 룰렛 휠 선택(roulette wheel selection)입니다.',
        'lifespan(400프레임)마다 한 세대가 끝나고 selection()으로 다음 세대를 생성합니다. 세대를 거듭하며 로켓이 장애물을 피해 목표에 도달하는 경로를 진화시킵니다.',
    ],
})

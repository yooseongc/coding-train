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
        { title: 'Wikipedia - Genetic Algorithm', url: 'https://en.wikipedia.org/wiki/Genetic_algorithm' },
        { title: 'Wikipedia - Fitness Proportionate Selection (Roulette Wheel)', url: 'https://en.wikipedia.org/wiki/Fitness_proportionate_selection' },
        { title: 'Nature of Code - Chapter 9: Genetic Algorithms', url: 'https://natureofcode.com/genetic-algorithms/' },
    ],
    tags: ['genetic', 'algorithm', 'evolution', 'rockets'],
    difficulty: 'intermediate',
    explanation: [
        '유전 알고리즘(Genetic Algorithm, GA)은 1975년 존 홀랜드(John Holland)가 제안한 진화적 최적화 기법입니다. 자연 선택(Natural Selection)과 유전의 원리를 모방하여 해 공간을 탐색합니다. 이 챌린지에서는 로켓의 추진력 시퀀스를 유전자로 인코딩하여 목표 도달 경로를 진화시킵니다.',
        'DNA 클래스는 유전자(genes) 배열에 각 프레임에 적용할 힘 벡터를 저장합니다. crossover()로 두 부모의 유전자를 랜덤 지점에서 분할 결합하는 단일점 교차(Single-Point Crossover)를 수행하고, mutation()으로 1% 확률로 유전자를 변이시킵니다.',
        'Rocket은 DNA의 유전자 벡터를 순서대로 힘으로 적용받아 움직입니다. calcFitness()에서 목표까지의 거리를 적합도(Fitness)로 변환하며, 도달 시 보너스, 충돌 시 패널티를 부여합니다. 적합도 함수의 설계는 유전 알고리즘 성능에 결정적인 영향을 미칩니다.',
        'Population의 evaluate()에서 적합도에 비례하여 matingPool에 로켓을 넣습니다. 적합도가 높은 개체가 더 많이 들어가 선택 확률이 높아지는 룰렛 휠 선택(Roulette Wheel Selection)입니다. 이 방법은 선택 압력(Selection Pressure)을 적합도에 비례하게 유지합니다.',
        'lifespan(400프레임)마다 한 세대가 끝나고 selection()으로 다음 세대를 생성합니다. 세대를 거듭하며 로켓이 장애물을 피해 목표에 도달하는 경로를 진화시킵니다. 이는 NASA의 진화적 안테나 설계, 로봇 보행 최적화, 게임 AI의 경로 탐색 등에 실제로 활용되는 원리입니다.',
        '유전 알고리즘은 경사 하강법(Gradient Descent)과 달리 미분 불가능한 문제나 다봉(Multi-modal) 최적화 문제에도 적용 가능합니다. 다만 수렴 속도가 느리고, 돌연변이율과 개체 수 등의 하이퍼파라미터 조정이 성능에 큰 영향을 줍니다.',
    ],
})

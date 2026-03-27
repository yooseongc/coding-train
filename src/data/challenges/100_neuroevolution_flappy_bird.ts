import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '100_neuroevolution_flappy_bird',
    number: 100,
    title: 'Neuroevolution Flappy Bird',
    categoryId: 'neural-networks-ml',
    description: '유전 알고리즘과 신경망을 결합한 신경진화(Neuroevolution)로 Flappy Bird를 자동 플레이하는 AI를 훈련합니다.',
    files: ['matrix.js', 'nn.js', 'bird.js', 'ga.js', 'pipe.js', 'sketch.js'],
    libraries: [],
    bodyHtml: '<div id="canvasContainer"></div><p>speed: <input id="speedSlider" type="range" min="1" max="10" value="1"><span id="speed">1</span><br>high score: <span id="highScore">0</span><br>all time high score: <span id="allTimeHighScore">0</span></p><p><button id="best">run best so far</button></p>',
    references: [
        { title: 'Coding Challenge #100: Neuroevolution Flappy Bird', url: 'https://thecodingtrain.com/challenges/100-neuroevolution-flappy-bird' },
        { title: 'Neuroevolution - Wikipedia', url: 'https://en.wikipedia.org/wiki/Neuroevolution' },
        { title: 'Genetic Algorithm - Wikipedia', url: 'https://en.wikipedia.org/wiki/Genetic_algorithm' },
        { title: 'NEAT (NeuroEvolution of Augmenting Topologies) - Wikipedia', url: 'https://en.wikipedia.org/wiki/Neuroevolution_of_augmenting_topologies' },
    ],
    tags: ['neuroevolution', 'flappy', 'genetic', 'NEAT'],
    difficulty: 'advanced',
    explanation: [
        '신경진화(Neuroevolution)는 역전파(backpropagation) 대신 진화적 방법으로 신경망을 최적화하는 기법입니다. 1990년대부터 연구되었으며, 2002년 Kenneth Stanley가 발표한 NEAT(NeuroEvolution of Augmenting Topologies)가 대표적입니다. 이 챌린지에서는 유전 알고리즘(Genetic Algorithm)과 신경망을 결합하여 Flappy Bird를 자동으로 플레이하는 AI를 훈련합니다.',
        '500마리의 새(totalPopulation)가 동시에 플레이합니다. 각 Bird는 자체 신경망(brain)을 가지고, think()에서 파이프까지의 수직/수평 거리, 자신의 y 위치 등을 입력으로 점프 여부를 결정합니다. 파이프에 부딪히거나 화면 밖으로 나가면 탈락하며, 오래 생존할수록 높은 적합도(fitness)를 얻습니다.',
        'ga.js의 유전 알고리즘이 세대를 진화시킵니다. 모든 새가 탈락하면 nextGeneration()에서 적합도 비례 선택(fitness-proportionate selection)으로 부모를 고르고, 신경망 가중치에 돌연변이(mutation)를 적용하여 다음 세대를 생성합니다. 이 과정은 찰스 다윈의 자연 선택(natural selection) 원리를 모사한 것으로, 교차(crossover) 없이 돌연변이만으로도 충분히 수렴합니다.',
        'speedSlider로 시뮬레이션 속도(1~10배)를 조절합니다. 한 프레임에 여러 사이클을 돌려 빠르게 학습할 수 있으며, 보통 5~20세대면 파이프를 안정적으로 통과하는 개체가 등장합니다. bestBird를 추적하여 "run best" 버튼으로 최고 성능의 새만 단독 실행할 수도 있습니다.',
        '신경진화의 장점은 보상 함수(reward function)만 정의하면 역전파 없이도 학습이 가능하다는 점입니다. 2017년 OpenAI는 진화 전략(Evolution Strategies)이 강화학습(Reinforcement Learning)과 비슷한 성능을 내면서도 병렬화가 쉽다는 연구를 발표했습니다. 게임 AI, 로봇 제어, 자율주행 등에서 널리 활용됩니다.',
        '스프라이트 이미지(train.png, pipe, background)로 시각적 완성도를 높였습니다. 배경 이미지는 bgX를 스크롤하여 무한 배경(parallax scrolling) 효과를 만들고, highScore와 allTimeHighScore를 DOM에 실시간 표시하여 진화 과정을 관찰할 수 있습니다.',
    ],
})

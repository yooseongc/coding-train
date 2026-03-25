import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '100_neuroevolution_flappy_bird',
    number: 100,
    title: 'Neuroevolution Flappy Bird',
    categoryId: 'neural-networks-ml',
    description: '유전 알고리즘과 신경망을 결합한 신경진화(Neuroevolution)로 Flappy Bird를 자동 플레이하는 AI를 훈련합니다.',
    files: ['matrix.js', 'nn.js', 'bird.js', 'ga.js', 'pipe.js', 'sketch.js'],
    libraries: [],
    bodyHtml: '<div id="canvasContainer"></div>',
    references: [
        { title: 'Coding Challenge #100: Neuroevolution Flappy Bird', url: 'https://thecodingtrain.com/challenges/100-neuroevolution-flappy-bird' },
    ],
    tags: ['neuroevolution', 'flappy', 'genetic', 'NEAT'],
    difficulty: 'advanced',
    notice: '이 챌린지는 신경망과 유전 알고리즘을 사용합니다. iframe 환경에서 일부 기능이 불안정할 수 있습니다.',
    explanation: [
        '500마리의 새(totalPopulation)가 동시에 플레이합니다. 각 Bird는 신경망(brain)을 가지고, think()에서 파이프와의 거리 등을 입력으로 점프 여부를 결정합니다. 파이프에 부딪히거나 화면 밖으로 나가면 탈락합니다.',
        'ga.js의 유전 알고리즘이 세대를 진화시킵니다. 모든 새가 탈락하면 nextGeneration()으로 높은 score의 새를 선택(selection)하고, 신경망 가중치에 돌연변이(mutation)를 적용하여 다음 세대를 생성합니다.',
        'speedSlider로 시뮬레이션 속도를 조절합니다. 한 프레임에 여러 사이클을 돌려 빠르게 학습할 수 있습니다. bestBird를 추적하여 "run best" 버튼으로 최고 성능의 새만 단독 실행할 수도 있습니다.',
        '스프라이트 이미지(train.png, pipe, background)로 시각적 완성도를 높였습니다. 배경 이미지는 bgX를 스크롤하여 무한 배경 효과를 만들고, highScore와 allTimeHighScore를 DOM에 실시간 표시합니다.',
    ],
})

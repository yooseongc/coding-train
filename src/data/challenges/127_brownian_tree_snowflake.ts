import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '127_brownian_tree_snowflake',
    number: 127,
    title: 'Brownian Tree Snowflake',
    categoryId: 'creative-coding',
    description: '브라운 운동 기반 확산 제한 응집(DLA) 알고리즘으로 눈꽃 결정 모양을 생성합니다.',
    files: ['particle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #127: Brownian Tree Snowflake', url: 'https://thecodingtrain.com/challenges/127-brownian-tree-snowflake' },
        { title: 'Wikipedia - Diffusion-Limited Aggregation', url: 'https://en.wikipedia.org/wiki/Diffusion-limited_aggregation' },
        { title: 'Wikipedia - Brownian Tree', url: 'https://en.wikipedia.org/wiki/Brownian_tree' },
        { title: 'CodeGolf - Draw a Snowflake', url: 'https://codegolf.stackexchange.com/questions/42506/draw-a-snowflake' },
    ],
    tags: ['brownian', 'tree', 'snowflake', 'DLA'],
    difficulty: 'intermediate',
    explanation: [
        '확산 제한 응집(Diffusion-Limited Aggregation, DLA)은 1981년 Witten과 Sander가 제안한 모델로, 무작위 걷기(random walk)하는 입자가 기존 구조에 부딪히면 고정되는 과정을 반복하여 나뭇가지 모양의 프랙탈을 형성합니다. DLA는 브라운 운동(Brownian Motion)에 기반하며, 자연계에서 관찰되는 다양한 수지상(dendritic) 구조의 형성 메커니즘을 설명합니다.',
        '이 챌린지에서는 DLA에 6겹 대칭(hexagonal symmetry)을 적용하여 눈꽃 결정(snowflake)을 생성합니다. 실제 눈꽃 결정도 수증기 분자가 결정 표면에 확산 응집하는 과정으로 형성되므로, DLA 모델은 눈꽃의 물리적 성장 과정을 잘 근사합니다. 눈꽃이 6겹 대칭인 이유는 물 분자의 수소 결합 각도(120도)에서 비롯됩니다.',
        'Particle은 화면 가장자리(height/2)에서 생성되어 랜덤 워크로 중심을 향해 이동합니다. draw()에서 6번 rotate(PI/3) 후 각각 scale(1,-1)로 y축 반전하여 총 12겹 대칭을 만듭니다. rotate(PI/6)으로 초기 회전을 주어 눈꽃의 가지가 대각선 방향으로 뻗어나갑니다.',
        '한 프레임에 10개의 입자를 처리하여 속도를 높이며, 입자가 전혀 이동하지 않으면(count===0) 성장이 완료된 것으로 판단하고 noLoop()합니다. 매 실행마다 다른 형태의 눈꽃이 생성되는데, 이는 브라운 운동의 확률적 특성 때문입니다.',
        'DLA는 전기화학적 증착(electrodeposition), 세균 군체 성장, 번개의 가지 패턴, 강의 지류 형성, 폐의 기관지 구조 등 자연계의 다양한 분기(branching) 현상을 모델링하는 데 사용됩니다. 프랙탈 차원(fractal dimension)은 약 1.71로, 해안선(약 1.25)보다 복잡하지만 평면(2)보다는 단순한 구조입니다.',
    ],
})

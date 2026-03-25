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
    ],
    tags: ['brownian', 'tree', 'snowflake', 'DLA'],
    difficulty: 'intermediate',
    explanation: [
        '확산 제한 응집(DLA)은 무작위 걷기하는 입자가 기존 구조에 부딪히면 고정되는 과정을 반복하여 나뭇가지 모양의 프랙탈을 형성합니다. 이를 6겹 대칭으로 만들면 눈꽃 결정이 됩니다.',
        'Particle은 화면 가장자리(height/2)에서 생성되어 랜덤 워크로 중심을 향해 이동합니다. finished()로 중심 도달을 확인하고, intersects()로 기존 snowflakes와의 충돌을 검사합니다.',
        'draw()에서 6번 rotate(PI/3) 후 각각 scale(1,-1)로 y축 반전하여 총 12겹 대칭을 만듭니다. rotate(PI/6)으로 초기 회전을 주어 눈꽃의 가지가 대각선 방향으로 뻗어나갑니다.',
        '한 프레임에 10개의 입자를 처리하여 속도를 높이며, 입자가 전혀 이동하지 않으면(count===0) 성장이 완료된 것으로 판단하고 noLoop()합니다.',
    ],
})

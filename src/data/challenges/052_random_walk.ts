import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '052_random_walk',
    number: 52,
    title: 'Random Walk',
    categoryId: 'math-algorithms',
    description: '격자 위에서 상하좌우 중 랜덤으로 한 칸씩 이동하는 기본 랜덤 워크를 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #52: Random Walk', url: 'https://thecodingtrain.com/challenges/52-random-walk' },
    ],
    tags: ['random-walk', 'probability', 'movement', 'basic'],
    difficulty: 'beginner',
    explanation: [
        '랜덤 워크는 매 스텝마다 확률적으로 방향을 선택하여 이동하는 수학적 모델입니다. 화면 중앙(width/2, height/2)에서 시작하여 매 프레임 한 칸씩 이동합니다.',
        'floor(random(4))로 0~3의 정수를 생성하고, switch문으로 상(y-1), 하(y+1), 좌(x-1), 우(x+1) 중 하나를 선택합니다. 각 방향의 확률은 25%로 동일합니다.',
        'background를 setup()에서만 한 번 호출하여 이전 궤적이 지워지지 않고 누적됩니다. stroke(255, 100)으로 반투명 흰색 점을 찍어 자주 방문한 영역이 밝게 보입니다.',
    ],
})

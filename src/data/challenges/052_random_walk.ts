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
        { title: 'Wikipedia - Random Walk', url: 'https://en.wikipedia.org/wiki/Random_walk' },
        { title: 'Nature of Code - Random Walks', url: 'https://natureofcode.com/random/' },
        { title: 'Wikipedia - Brownian Motion', url: 'https://en.wikipedia.org/wiki/Brownian_motion' },
    ],
    tags: ['random-walk', 'probability', 'movement', 'basic'],
    difficulty: 'beginner',
    explanation: [
        '랜덤 워크(Random Walk)는 매 스텝마다 확률적으로 방향을 선택하여 이동하는 수학적 모델로, 1905년 Karl Pearson이 처음 이 용어를 사용했습니다. 물리학에서 브라운 운동(Brownian Motion)의 이산적 모델이며, Albert Einstein이 같은 해에 브라운 운동의 수학적 이론을 제시하여 원자의 존재를 간접적으로 증명했습니다.',
        'floor(random(4))로 0~3의 정수를 생성하고, switch문으로 상(y-1), 하(y+1), 좌(x-1), 우(x+1) 중 하나를 선택합니다. 각 방향의 확률은 25%로 동일하며, 이를 격자 위의 단순 대칭 랜덤 워크(Simple Symmetric Random Walk)라 합니다.',
        '랜덤 워크의 중요한 수학적 성질 중 하나는, 2차원에서 출발점으로 반드시 돌아온다는 "반복 정리(Recurrence Theorem)"입니다. 이는 폴야(Polya)가 1921년에 증명했으며, 1차원과 2차원에서는 성립하지만 3차원 이상에서는 성립하지 않습니다.',
        'background를 setup()에서만 한 번 호출하여 이전 궤적이 지워지지 않고 누적됩니다. stroke(255, 100)으로 반투명 흰색 점을 찍어 자주 방문한 영역이 밝게 보입니다. 시간이 지남에 따라 원점으로부터의 평균 거리가 sqrt(n)에 비례하여 증가하는 확산 특성을 관찰할 수 있습니다.',
        '랜덤 워크는 주식 가격 변동 모델링(효율적 시장 가설), 분자의 확산 과정, 생태학에서의 동물 이동 경로 분석, 구글의 PageRank 알고리즘 등 다양한 분야에서 기초 모델로 활용됩니다.',
    ],
})

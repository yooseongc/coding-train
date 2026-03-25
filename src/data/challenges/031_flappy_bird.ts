import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '031_flappy_bird',
    number: 31,
    title: 'Flappy Bird',
    categoryId: 'games',
    description: '스페이스바로 새를 조종하여 파이프 사이를 통과하는 Flappy Bird 게임을 구현합니다.',
    files: ['bird.js', 'pipe.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #31: Flappy Bird', url: 'https://thecodingtrain.com/challenges/31-flappy-bird' },
    ],
    tags: ['game', 'flappy', 'gravity', 'collision'],
    difficulty: 'beginner',
    explanation: [
        'Bird 클래스는 중력(gravity=0.7)과 양력(lift=-12)으로 y축 물리를 시뮬레이션합니다. up() 메서드가 호출되면 velocity에 lift 값을 더해 새가 위로 올라가고, 매 프레임 gravity가 누적되어 자연스러운 낙하가 구현됩니다.',
        'Pipe 클래스는 상단과 하단 파이프 사이에 spacing(175px) 만큼의 빈 공간을 두고, 오른쪽에서 왼쪽으로 이동합니다. top 값은 random()으로 결정되어 매번 다른 높이의 통로가 생성됩니다.',
        'hits() 메서드로 새의 y좌표가 파이프의 통로 범위를 벗어나면서 x좌표가 파이프와 겹치는지 판정합니다. 충돌 시 파이프가 빨간색으로 변합니다.',
        'frameCount % 75 === 0 조건으로 75프레임마다 새 파이프를 추가하고, offscreen()으로 화면 밖으로 나간 파이프를 splice로 제거하여 메모리를 관리합니다.',
    ],
})

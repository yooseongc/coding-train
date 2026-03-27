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
        { title: 'Flappy Bird - Wikipedia', url: 'https://en.wikipedia.org/wiki/Flappy_Bird' },
        { title: 'p5.js Reference - random()', url: 'https://p5js.org/reference/p5/random/' },
        { title: '2D collision detection - MDN', url: 'https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection' },
    ],
    tags: ['game', 'flappy', 'gravity', 'collision'],
    difficulty: 'beginner',
    explanation: [
        'Flappy Bird는 2013년 베트남 개발자 Dong Nguyen이 만든 모바일 게임으로, 극도로 단순한 원탭 조작과 높은 난이도로 전 세계적인 인기를 얻었습니다. 하루 수백만 다운로드를 기록했으나 개발자가 자발적으로 앱 스토어에서 삭제하여 화제가 되었습니다. 이 구현은 p5.js로 핵심 메커니즘을 재현합니다.',
        'Bird 클래스는 중력(gravity=0.7)과 양력(lift=-12)으로 y축 물리를 시뮬레이션합니다. up() 메서드가 호출되면 velocity에 lift 값을 더해 새가 위로 올라가고, 매 프레임 gravity가 누적되어 자연스러운 낙하가 구현됩니다. 이는 뉴턴 역학의 등가속도 운동(uniformly accelerated motion)을 오일러 적분(Euler Integration)으로 근사한 것입니다.',
        'Pipe 클래스는 상단과 하단 파이프 사이에 spacing(175px) 만큼의 빈 공간을 두고, 오른쪽에서 왼쪽으로 이동합니다. top 값은 random()으로 결정되어 매번 다른 높이의 통로가 생성됩니다. 이 방식은 절차적 생성(Procedural Generation)의 기초적인 형태로, 무한한 레벨을 자동으로 만들어냅니다.',
        'hits() 메서드로 새의 y좌표가 파이프의 통로 범위를 벗어나면서 x좌표가 파이프와 겹치는지 판정합니다. 이는 AABB(Axis-Aligned Bounding Box) 충돌 감지의 단순화된 버전으로, 직사각형 영역의 겹침을 x축과 y축 범위 비교로 판단합니다.',
        'frameCount % 75 === 0 조건으로 75프레임마다 새 파이프를 추가하고, offscreen()으로 화면 밖으로 나간 파이프를 splice로 제거하여 메모리를 관리합니다. 이러한 오브젝트 풀링(Object Pooling) 패턴은 게임 개발에서 가비지 컬렉션 부하를 줄이는 핵심 최적화 기법입니다.',
        'Flappy Bird는 강화학습(Reinforcement Learning) 연구에서도 자주 사용되는 벤치마크 환경입니다. 단순한 상태 공간(새의 위치, 속도, 파이프까지의 거리)과 이진 행동 공간(점프 또는 대기)으로 인해 Q-Learning이나 Deep Q-Network(DQN) 알고리즘의 입문 과제로 널리 활용됩니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '115_snake_game_redux',
    number: 115,
    title: 'Snake Game Redux',
    categoryId: 'games',
    description: '그리드 기반 스네이크 게임을 p5.js로 재구현합니다. 방향키로 뱀을 조종하여 먹이를 먹고 몸을 늘립니다.',
    files: ['snake.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #115: Snake Game Redux', url: 'https://thecodingtrain.com/challenges/115-snake-game-redux' },
        { title: 'Wikipedia - Snake (video game genre)', url: 'https://en.wikipedia.org/wiki/Snake_(video_game_genre)' },
        { title: 'Wikipedia - Hamiltonian path', url: 'https://en.wikipedia.org/wiki/Hamiltonian_path' },
        { title: 'p5.js Reference - createVector', url: 'https://p5js.org/reference/p5/createVector/' },
    ],
    tags: ['snake', 'game', 'Hamiltonian', 'AI'],
    difficulty: 'intermediate',
    explanation: [
        '스네이크 게임(Snake Game)은 1976년 아케이드 게임 "Blockade"에서 시작되어, 1998년 노키아 6110 휴대폰에 탑재되면서 전 세계적으로 유명해진 클래식 게임입니다. 단순하지만 중독성 있는 게임플레이로, 게임 프로그래밍 입문자들이 가장 먼저 도전하는 프로젝트 중 하나입니다.',
        'Snake 클래스는 머리 위치와 꼬리 배열로 몸체를 관리합니다. setDir(x, y)로 이동 방향을 설정하고, update()에서 머리를 이동시키며 꼬리의 마지막 요소를 제거합니다. grow()로 꼬리 제거를 건너뛰어 길이가 늘어나는데, 이는 큐(Queue) 자료구조의 원리를 활용한 것입니다.',
        'rez(20px) 크기의 그리드에서 동작합니다. scale(rez)로 전체를 스케일링하여 1x1 크기의 rect()가 20x20 픽셀로 그려집니다. 이 그리드 기반 설계는 이산적인 좌표 시스템에서의 충돌 감지를 단순화하며, 고전 게임의 특성을 잘 살립니다.',
        'eat()에서 머리와 먹이가 같은 위치이면 grow()를 호출하고 true를 반환합니다. endGame()에서 벽 충돌이나 자기 몸 충돌을 검사합니다. frameRate(5)로 이산적 움직임을 구현하여 턴 기반 게임과 유사한 느낌을 줍니다.',
        '스네이크 게임에서 완벽하게 플레이하는 AI를 만드는 것은 해밀턴 경로(Hamiltonian Path) 문제와 관련됩니다. 그리드의 모든 칸을 정확히 한 번씩 방문하는 경로를 따라가면 절대 자기 몸에 충돌하지 않습니다. 그러나 해밀턴 경로를 찾는 것은 NP-complete 문제로, 효율적인 알고리즘이 알려져 있지 않습니다.',
        'p5.js의 createVector()를 활용한 벡터 기반 좌표 관리, 키보드 입력 처리(keyPressed), 그리드 기반 충돌 감지 등 게임 프로그래밍의 기본 패턴을 학습할 수 있는 좋은 예제입니다.',
    ],
})

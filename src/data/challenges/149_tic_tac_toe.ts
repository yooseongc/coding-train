import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '149_tic_tac_toe',
    number: 149,
    title: 'Tic Tac Toe',
    categoryId: 'games',
    description: '3x3 보드에서 X와 O가 랜덤으로 번갈아 두는 틱택토 게임을 구현합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #149: Tic Tac Toe', url: 'https://thecodingtrain.com/challenges/149-tic-tac-toe' },
        { title: 'Wikipedia - Tic-tac-toe', url: 'https://en.wikipedia.org/wiki/Tic-tac-toe' },
        { title: 'Wikipedia - Combinatorial game theory', url: 'https://en.wikipedia.org/wiki/Combinatorial_game_theory' },
    ],
    tags: ['tic-tac-toe', 'game', 'grid', 'two-player'],
    difficulty: 'beginner',
    explanation: [
        '틱택토(Tic-tac-toe)는 기원전 1300년경 고대 이집트까지 거슬러 올라가는 세계에서 가장 오래된 보드 게임 중 하나입니다. 3x3 격자에서 두 플레이어가 번갈아 X와 O를 놓아 가로, 세로, 대각선으로 3개를 먼저 연결하면 승리합니다. 게임 이론(game theory)에서 완전 정보 게임(perfect information game)의 대표적인 예시입니다.',
        '이 구현에서는 frameRate(5)로 느린 속도로 진행하며, 매 프레임 available 배열에서 랜덤 위치를 선택하여 현재 플레이어의 기호를 배치합니다. 양쪽 모두 랜덤으로 플레이하므로 게임의 다양한 결과를 관찰할 수 있습니다.',
        'checkWinner()에서 행, 열, 대각선의 3개 연속 일치를 equals3()로 검사합니다. 빈 칸이 없으면 "tie"를 반환합니다. 틱택토는 총 255,168개의 가능한 게임 진행이 존재하며, 양쪽이 최적으로 플레이하면 항상 무승부로 끝나는 것이 수학적으로 증명되어 있습니다.',
        'nextTurn()에서 available 배열에서 랜덤 인덱스를 splice로 제거하며 위치를 선택합니다. currentPlayer를 0과 1로 번갈아 전환하여 X와 O가 교대로 둡니다. 이 기본 구현은 154번 챌린지에서 Minimax AI를 추가하는 토대가 됩니다.',
        'O는 ellipse()로, X는 두 개의 line()으로 그립니다. 보드의 격자선은 width/3, height/3 간격으로 그리고, 각 칸의 중앙에 기호를 배치합니다. 단순하지만 게임 프로그래밍의 기초인 게임 상태 관리, 턴 시스템, 승리 조건 판정을 학습할 수 있는 좋은 예제입니다.',
    ],
})

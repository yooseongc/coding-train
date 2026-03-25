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
    ],
    tags: ['tic-tac-toe', 'game', 'grid', 'two-player'],
    difficulty: 'beginner',
    explanation: [
        '3x3 배열의 틱택토 보드를 구현합니다. frameRate(5)로 느린 속도로 진행하며, 매 프레임 available 배열에서 랜덤 위치를 선택하여 현재 플레이어의 기호를 배치합니다.',
        'checkWinner()에서 행, 열, 대각선의 3개 연속 일치를 equals3()로 검사합니다. 빈 칸이 없으면 "tie"를 반환합니다. 승자가 결정되면 noLoop()과 함께 결과 메시지를 표시합니다.',
        'nextTurn()에서 available 배열에서 랜덤 인덱스를 splice로 제거하며 위치를 선택합니다. currentPlayer를 0과 1로 번갈아 전환하여 X와 O가 교대로 둡니다.',
        'O는 ellipse()로, X는 두 개의 line()으로 그립니다. 보드의 격자선은 width/3, height/3 간격으로 그리고, 각 칸의 중앙에 기호를 배치합니다.',
    ],
})

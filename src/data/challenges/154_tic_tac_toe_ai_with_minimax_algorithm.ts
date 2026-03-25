import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '154_tic_tac_toe_ai_with_minimax_algorithm',
    number: 154,
    title: 'Tic Tac Toe AI with Minimax Algorithm',
    categoryId: 'games',
    description: 'Minimax 알고리즘으로 절대 지지 않는 틱택토 AI를 구현합니다.',
    files: ['minimax.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #154: Tic Tac Toe AI with Minimax Algorithm', url: 'https://thecodingtrain.com/challenges/154-tic-tac-toe-minimax' },
    ],
    tags: ['tic-tac-toe', 'minimax', 'AI', 'game-tree'],
    difficulty: 'intermediate',
    explanation: [
        'Minimax는 2인 제로섬 게임에서 최적의 수를 찾는 의사결정 알고리즘입니다. AI(X)는 자신의 점수를 최대화하고, 상대방(O, human)은 최소화한다고 가정하여 게임 트리를 탐색합니다.',
        'minimax()가 재귀적으로 모든 가능한 수를 탐색합니다. isMaximizing이 true면 모든 빈 칸에 AI를 놓고 최대 점수를 선택하고, false면 human을 놓고 최소 점수를 선택합니다. scores는 X=10, O=-10, tie=0입니다.',
        'bestMove()에서 모든 빈 칸에 대해 minimax를 호출하고, 가장 높은 점수의 위치를 선택합니다. 틱택토는 상태 공간이 작아 전체 트리를 탐색할 수 있으므로, AI는 완벽하게 플레이합니다.',
        'mousePressed()로 사용자가 빈 칸을 클릭하면 O를 놓고, 즉시 bestMove()로 AI가 응수합니다. 결과는 항상 AI 승리 또는 무승부이며, checkWinner()로 게임 종료를 판정합니다.',
    ],
})

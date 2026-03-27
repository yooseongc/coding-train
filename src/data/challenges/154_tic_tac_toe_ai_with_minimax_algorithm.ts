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
        { title: 'Wikipedia - Minimax', url: 'https://en.wikipedia.org/wiki/Minimax' },
        { title: 'Minimax 알고리즘 영상 해설 (Sebastian Lague)', url: 'https://www.youtube.com/watch?v=l-hh51ncgDI' },
        { title: 'Wikipedia - Game tree', url: 'https://en.wikipedia.org/wiki/Game_tree' },
    ],
    tags: ['tic-tac-toe', 'minimax', 'AI', 'game-tree'],
    difficulty: 'intermediate',
    explanation: [
        'Minimax 알고리즘은 1928년 존 폰 노이만(John von Neumann)이 게임 이론의 미니맥스 정리(Minimax theorem)를 증명하면서 정립된 의사결정 알고리즘입니다. 2인 제로섬 게임(zero-sum game)에서 한 플레이어의 이득이 다른 플레이어의 손실이 되는 상황에서, 최악의 경우를 최소화하는 최적 전략을 찾습니다.',
        'minimax()가 재귀적으로 게임 트리(game tree)의 모든 가능한 상태를 탐색합니다. isMaximizing이 true면 AI(X)의 차례로 최대 점수를 선택하고, false면 인간(O)의 차례로 최소 점수를 선택합니다. 종료 상태의 평가값은 X승리=10, O승리=-10, 무승부=0으로 설정합니다.',
        'bestMove()에서 모든 빈 칸에 대해 minimax를 호출하고, 가장 높은 점수의 위치를 선택합니다. 틱택토는 최대 9!= 362,880개의 게임 상태(실제로는 약 5,478개의 고유 상태)로 상태 공간이 작아 전체 트리를 탐색할 수 있으므로, AI는 완벽하게(optimally) 플레이합니다.',
        'mousePressed()로 사용자가 빈 칸을 클릭하면 O를 놓고, 즉시 bestMove()로 AI가 응수합니다. 결과는 항상 AI 승리 또는 무승부이며, checkWinner()로 게임 종료를 판정합니다. 이렇게 완전 탐색이 가능한 게임을 해결된 게임(solved game)이라 합니다.',
        'Minimax는 체스, 바둑 등 더 복잡한 게임에서도 기본 프레임워크로 사용되지만, 상태 공간이 커지면 알파-베타 가지치기(alpha-beta pruning), 반복 심화(iterative deepening), 몬테카를로 트리 탐색(MCTS) 등의 최적화 기법이 필요합니다. 이 챌린지는 게임 AI의 핵심 원리를 가장 단순한 형태로 학습하는 좋은 출발점입니다.',
    ],
})

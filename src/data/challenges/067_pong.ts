import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '067_pong',
    number: 67,
    title: 'Pong',
    categoryId: 'games',
    description: '클래식 Pong 게임으로, 두 플레이어가 패들로 공을 주고받습니다.',
    files: ['paddle.js', 'puck.js', 'sketch.js'],
    libraries: ['p5.sound.min.js'],
    references: [
        { title: 'Coding Challenge #67: Pong', url: 'https://thecodingtrain.com/challenges/67-pong' },
        { title: 'Pong - Wikipedia', url: 'https://en.wikipedia.org/wiki/Pong' },
        { title: 'p5.sound Library - loadSound()', url: 'https://p5js.org/reference/p5.sound/p5.SoundFile/' },
        { title: 'Game programming patterns - Game Loop', url: 'https://gameprogrammingpatterns.com/game-loop.html' },
    ],
    tags: ['pong', 'game', 'paddle', 'ball'],
    difficulty: 'beginner',
    explanation: [
        'Pong은 1972년 Atari의 공동 창립자 Nolan Bushnell이 만든 최초의 상업적 성공 비디오 게임 중 하나입니다. 탁구를 단순화한 2인용 대전 게임으로, 비디오 게임 산업의 탄생을 알린 역사적 작품입니다. Allan Alcorn이 실제 개발을 맡았으며, 당초 Atari 입사 연습 과제로 주어진 것이었습니다.',
        'Paddle 클래스는 좌측(W/S키)과 우측(위/아래 화살표키) 패들을 구현합니다. boolean 파라미터로 좌우를 구분하고, move()로 이동 속도를 설정합니다. 두 플레이어가 동시에 독립적으로 조작할 수 있도록 keyPressed와 keyReleased 이벤트를 조합하여 동시 키 입력을 처리합니다.',
        'Puck 클래스는 공의 위치와 속도를 관리합니다. checkPaddleLeft()와 checkPaddleRight()로 패들과의 충돌을 판정하고, 충돌 시 x방향 속도를 반전시킵니다. 이 반사 로직은 광학에서의 입사각-반사각 법칙(Law of Reflection)의 단순화된 구현입니다.',
        'edges()에서 공이 상하 벽에 닿으면 y속도를 반전하고, 좌우 벽을 벗어나면 상대방에게 점수를 부여하고 공을 리셋합니다. p5.sound의 loadSound()로 ding.mp3 효과음을 로드하여 충돌 시 재생하며, 소리 피드백은 게임의 몰입감을 크게 높이는 요소입니다.',
        'leftscore와 rightscore를 textSize(32)로 화면 상단에 표시합니다. 매 프레임 show(), update() 순서로 렌더링과 물리를 처리하는 이 패턴은 게임 루프(Game Loop)의 가장 기본적인 형태로, 상태 갱신(update)과 화면 출력(render)을 분리하는 원칙을 따릅니다.',
        'Pong은 게임 AI의 출발점이기도 합니다. 단순한 공 추적 알고리즘부터 강화학습 기반 AI까지, 패들 조작의 자동화는 게임 AI 연구의 고전적인 테스트베드로 활용됩니다. 실제로 DeepMind의 DQN 논문에서도 Pong을 주요 벤치마크로 사용했습니다.',
    ],
})

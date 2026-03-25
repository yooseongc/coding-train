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
    ],
    tags: ['pong', 'game', 'paddle', 'ball'],
    difficulty: 'beginner',
    explanation: [
        'Paddle 클래스는 좌측(W/S키)과 우측(위/아래 화살표키) 패들을 구현합니다. boolean 파라미터로 좌우를 구분하고, move()로 이동 속도를 설정합니다. keyReleased에서 move(0)으로 정지합니다.',
        'Puck 클래스는 공의 위치와 속도를 관리합니다. checkPaddleLeft()와 checkPaddleRight()로 패들과의 충돌을 판정하고, 충돌 시 x방향 속도를 반전시킵니다.',
        'edges()에서 공이 상하 벽에 닿으면 y속도를 반전하고, 좌우 벽을 벗어나면 상대방에게 점수를 부여하고 공을 리셋합니다. ding.mp3로 충돌 효과음을 재생합니다.',
        'leftscore와 rightscore를 textSize(32)로 화면 상단에 표시합니다. 매 프레임 show(), update() 순서로 렌더링과 물리를 처리합니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '005_space_invaders',
    number: 5,
    title: 'Space Invaders',
    categoryId: 'games',
    description: '스페이스 인베이더 게임을 p5.js로 구현합니다.',
    files: ['drop.js', 'flower.js', 'ship.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #5: Space Invaders', url: 'https://thecodingtrain.com/challenges/5-space-invaders' },
    ],
    tags: ['game', 'space', 'shooter', 'collision'],
    difficulty: 'beginner',
    explanation: [
        'Ship, Flower, Drop 세 클래스로 게임 오브젝트를 분리합니다. Ship은 좌우 이동, Flower는 적 역할로 좌우 이동 후 벽에 닿으면 아래로 내려오며, Drop은 발사체입니다.',
        'dist() 함수로 Drop과 Flower 간의 충돌을 감지합니다. 두 원의 중심 거리가 반지름의 합보다 작으면 충돌로 판정하며, 충돌 시 Flower는 커지고 Drop은 증발합니다.',
        'keyPressed()에서 스페이스바로 발사, 방향키로 이동을 처리합니다. keyReleased()에서 방향키를 놓으면 이동을 멈추도록 setDir(0)을 호출합니다.',
        'edge 변수로 적들이 화면 경계에 닿았는지 감지하고, 모든 적이 한꺼번에 shiftDown()으로 방향을 바꾸고 아래로 이동하는 스페이스 인베이더 고전 패턴을 구현합니다.',
    ],
})

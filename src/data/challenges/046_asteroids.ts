import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '046_asteroids',
    number: 46,
    title: 'Asteroids',
    categoryId: 'games',
    description: '클래식 아타리 Asteroids 게임으로, 우주선을 회전/가속하며 레이저로 소행성을 파괴합니다.',
    files: ['asteroid.js', 'laser.js', 'ship.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #46: Asteroids', url: 'https://thecodingtrain.com/challenges/46-asteroids' },
    ],
    tags: ['asteroids', 'game', 'physics', 'rotation'],
    difficulty: 'intermediate',
    explanation: [
        'Ship 클래스는 heading(방향각)과 vel(속도 벡터)로 운동합니다. boost()에서 p5.Vector.fromAngle(heading)으로 추진력을 만들고, vel.mult(0.99)로 마찰을 적용합니다. 좌우 화살표로 회전, 위 화살표로 가속합니다.',
        'Asteroid 클래스는 불규칙한 다각형으로 렌더링됩니다. random(5,15)개의 꼭짓점에 offset을 주어 자연스러운 형태를 만들고, random2D()로 랜덤 방향으로 이동합니다. breakup()은 절반 크기의 소행성 2개를 반환합니다.',
        'edges() 메서드로 화면 경계를 넘으면 반대편에서 나타나는 랩어라운드를 구현합니다. 스페이스바로 Laser를 발사하고, laser.hits(asteroid)로 충돌 시 소행성이 반지름 10 이상이면 분열합니다.',
        '충돌 시 ship.render()에 빨간색을 전달하여 우주선을 빨갛게 표시합니다. 이중 역순 for문으로 레이저와 소행성 모두를 안전하게 splice로 제거합니다.',
    ],
})

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
        { title: 'Asteroids (video game) - Wikipedia', url: 'https://en.wikipedia.org/wiki/Asteroids_(video_game)' },
        { title: 'p5.js Reference - p5.Vector', url: 'https://p5js.org/reference/p5/p5.Vector/' },
        { title: 'Screen wrapping - Wikipedia', url: 'https://en.wikipedia.org/wiki/Wraparound_(video_games)' },
    ],
    tags: ['asteroids', 'game', 'physics', 'rotation'],
    difficulty: 'intermediate',
    explanation: [
        'Asteroids는 1979년 Atari에서 출시한 벡터 그래픽 아케이드 게임으로, Lunar Lander의 추력 기반 조작과 우주 전투를 결합했습니다. 벡터 디스플레이의 선명한 선 그래픽으로 유명하며, 출시 후 미국에서 가장 많이 팔린 아케이드 게임 중 하나가 되었습니다.',
        'Ship 클래스는 heading(방향각)과 vel(속도 벡터)로 운동합니다. boost()에서 p5.Vector.fromAngle(heading)으로 추진력을 만들고, vel.mult(0.99)로 마찰을 적용합니다. 이 감쇠 계수(damping factor)는 우주 공간의 관성을 시뮬레이션하면서도 완전한 무한 활주를 방지하여 조작성을 높입니다.',
        'Asteroid 클래스는 불규칙한 다각형으로 렌더링됩니다. random(5,15)개의 꼭짓점에 offset을 주어 자연스러운 형태를 만드는 것은 절차적 생성(Procedural Generation)의 한 예입니다. breakup()은 절반 크기의 소행성 2개를 반환하여 큰 소행성이 중간, 작은 소행성으로 분열되는 3단계 파괴 시스템을 구현합니다.',
        'edges() 메서드로 화면 경계를 넘으면 반대편에서 나타나는 랩어라운드(Wraparound)를 구현합니다. 수학적으로 이는 평면의 양쪽 끝을 연결한 토러스(Torus) 위상 공간에서의 이동을 모듈러 연산(modular arithmetic)으로 표현한 것입니다.',
        '충돌 시 ship.render()에 빨간색을 전달하여 우주선을 빨갛게 표시합니다. 이중 역순 for문으로 레이저와 소행성 모두를 안전하게 splice로 제거합니다. 역순 순회는 배열 중간 요소 삭제 시 인덱스 밀림 문제를 방지하는 게임 프로그래밍의 표준 관행입니다.',
        '이 프로젝트는 삼각함수(trigonometry)를 활용한 2D 벡터 물리의 좋은 학습 예시입니다. cos/sin을 이용한 방향 벡터 계산, 속도와 가속도의 누적, 마찰력 시뮬레이션 등은 물리 엔진의 기초 개념을 모두 포함하고 있습니다.',
    ],
})

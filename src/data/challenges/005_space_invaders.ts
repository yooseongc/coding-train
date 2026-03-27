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
        { title: 'Space Invaders - Wikipedia', url: 'https://en.wikipedia.org/wiki/Space_Invaders' },
        { title: 'p5.js Reference - dist()', url: 'https://p5js.org/reference/p5/dist/' },
        { title: 'Collision Detection - MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection' },
    ],
    tags: ['game', 'space', 'shooter', 'collision'],
    difficulty: 'beginner',
    explanation: [
        'Space Invaders는 1978년 일본 타이토(Taito)사의 니시카도 토모히로가 개발한 아케이드 게임으로, 슈팅 게임 장르의 시초입니다. 출시 당시 일본에서 100엔짜리 동전 부족 사태를 일으킬 정도로 인기를 끌었으며, 비디오 게임 산업의 황금기를 열었습니다.',
        'Ship, Flower, Drop 세 클래스로 게임 오브젝트를 분리합니다. Ship은 좌우 이동, Flower는 적 역할로 좌우 이동 후 벽에 닿으면 아래로 내려오며, Drop은 발사체입니다. 이러한 객체 지향적 분리는 게임 엔진 설계의 기본 패턴인 엔티티-컴포넌트(Entity-Component) 구조의 기초가 됩니다.',
        'dist() 함수로 Drop과 Flower 간의 충돌을 감지합니다. 두 원의 중심 거리가 반지름의 합보다 작으면 충돌로 판정하며, 이는 원형 충돌 감지(Circle Collision Detection)라 불리는 가장 기본적인 2D 충돌 판정 알고리즘입니다. 유클리드 거리(Euclidean Distance) 공식 sqrt((x2-x1)^2 + (y2-y1)^2)를 사용합니다.',
        'keyPressed()에서 스페이스바로 발사, 방향키로 이동을 처리합니다. keyReleased()에서 방향키를 놓으면 이동을 멈추도록 setDir(0)을 호출합니다. 이 키 누름/해제 이벤트 조합은 부드러운 연속 이동을 구현하는 표준 패턴입니다.',
        'edge 변수로 적들이 화면 경계에 닿았는지 감지하고, 모든 적이 한꺼번에 shiftDown()으로 방향을 바꾸고 아래로 이동하는 스페이스 인베이더 고전 패턴을 구현합니다. 원작에서는 적이 줄어들수록 처리 속도가 빨라져 자연스러운 난이도 상승이 만들어졌는데, 이는 의도된 것이 아니라 하드웨어 한계로 인한 우연한 결과였습니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '072_frogger',
    number: 72,
    title: 'Frogger',
    categoryId: 'games',
    description: '1981년 KONAMI의 아케이드 게임 Frogger를 p5.js로 구현합니다. 도로의 자동차와 강의 통나무를 피해 개구리를 이동시킵니다.',
    files: ['rectangle.js', 'car.js', 'frog.js', 'log.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #72: Frogger', url: 'https://thecodingtrain.com/challenges/72-frogger' },
        { title: 'Frogger - Wikipedia', url: 'https://en.wikipedia.org/wiki/Frogger' },
        { title: 'Frogger Classic (online)', url: 'https://froggerclassic.appspot.com/' },
        { title: 'Object-oriented programming - MDN', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming' },
    ],
    tags: ['frogger', 'game', 'collision', 'lanes'],
    difficulty: 'intermediate',
    explanation: [
        'Frogger는 1981년 KONAMI가 개발하고 SEGA가 배급한 아케이드 게임입니다. 개구리를 도로와 강을 건너 안전 지대로 보내는 단순한 목표이지만, 여러 위험 요소의 타이밍을 동시에 파악해야 하는 높은 난이도로 유명합니다. 출시 당시 Pac-Man에 이어 두 번째로 인기 있는 아케이드 게임이었습니다.',
        '화면은 그리드(50px) 단위로 구성됩니다. 하단은 시작 지점, 중간에 자동차가 달리는 도로(row1-3), 안전지대(row4), 통나무가 떠 있는 강(row5-7), 최상단이 목표입니다. 이 레인(Lane) 기반 레벨 설계는 장애물 패턴을 체계적으로 관리하는 방식으로, 현대의 무한 러너(Endless Runner) 게임에서도 널리 사용됩니다.',
        'Car, Log 객체는 각각 속도와 방향을 가지고 수평으로 이동하며 화면 밖으로 나가면 반대편에서 다시 나타납니다. Frog은 방향키로 그리드 단위 이동하며, intersects()로 AABB(Axis-Aligned Bounding Box) 충돌을 감지합니다. 이산적 이동은 플레이어의 정확한 위치 제어를 가능하게 합니다.',
        '강 영역에서 개구리는 반드시 통나무 위에 있어야 합니다. frog.attach(log)로 통나무에 붙으면 통나무와 함께 이동하고, 통나무 위에 없으면 resetGame()으로 초기화됩니다. 이 부모-자식 좌표계 연결은 게임 엔진의 장면 그래프(Scene Graph) 개념의 단순화된 구현입니다.',
        'Rectangle 클래스는 Car, Log, Frog의 공통 부모로 위치, 크기, 이동, 충돌 감지 등의 기본 로직을 제공합니다. 이러한 상속(Inheritance) 구조는 코드 재사용성을 높이고, 새로운 게임 오브젝트를 쉽게 추가할 수 있게 합니다.',
        'Frogger의 게임 디자인은 다중 위협 회피(Multi-threat Avoidance)라는 인지 심리학적 과제를 포함합니다. 플레이어는 서로 다른 속도와 방향으로 움직이는 여러 객체의 궤적을 동시에 추적해야 하며, 이는 주의력 분배(Divided Attention)와 운동 예측(Motion Prediction) 능력을 요구합니다.',
    ],
})

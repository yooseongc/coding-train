import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '032_agar_io',
    number: 32,
    title: 'Agar.io',
    categoryId: 'drawing-animation',
    description: 'Agar.io 스타일의 세포 흡수 게임으로, 마우스로 이동하며 작은 세포를 먹어 성장합니다.',
    files: ['blob.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #32: Agar.io', url: 'https://thecodingtrain.com/challenges/32-agar-io' },
        { title: 'Wikipedia - Agar.io', url: 'https://en.wikipedia.org/wiki/Agar.io' },
        { title: 'p5.js Reference - p5.Vector.lerp()', url: 'https://p5js.org/reference/p5.Vector/lerp/' },
        { title: 'Wikipedia - .io 게임 장르', url: 'https://en.wikipedia.org/wiki/.io_game' },
    ],
    tags: ['agar', 'multiplayer', 'blob', 'zoom'],
    difficulty: 'intermediate',
    notice: '이 챌린지의 Part 2는 Express 서버가 필요하여 브라우저에서만 실행할 수 없습니다. Part 1만 표시됩니다.',
    explanation: [
        'Agar.io는 2015년 Matheus Valadares가 개발한 대표적인 .io 게임(multiplayer online game)으로, 세포를 조작하여 다른 세포를 흡수하며 성장하는 것이 목표입니다. 이 챌린지에서는 싱글 플레이어 버전을 구현하여 게임의 핵심 메커니즘인 이동, 흡수, 카메라 추적을 학습합니다.',
        'Blob 클래스는 위치(pos), 반지름(r), 속도(vel)를 가집니다. update()에서 마우스 방향으로의 벡터를 계산하고 lerp()로 부드럽게 보간(linear interpolation)하여 자연스러운 이동을 구현합니다. 실제 Agar.io에서도 세포가 커질수록 느려지는 관성 시스템을 사용합니다.',
        'eats() 메서드는 두 원의 거리가 반지름 합보다 작으면 흡수로 판정합니다. 면적(PI*r*r)을 합산한 뒤 sqrt(sum/PI)로 새 반지름을 계산하여 면적 보존 원리(conservation of area)를 적용합니다. 이는 물리학의 질량 보존 법칙과 유사한 개념입니다.',
        'translate()와 scale()을 조합하여 카메라가 플레이어를 항상 화면 중앙에 유지합니다. lerp(zoom, 64/blob.r, 0.1)로 세포가 커질수록 줌아웃되어 게임 시야가 넓어집니다. 이러한 동적 카메라 시스템은 2D 게임 개발에서 매우 흔한 패턴입니다.',
        '200개의 먹이 세포를 -width~width, -height~height 범위에 랜덤 배치하고, 역순 for문(reverse iteration)과 splice로 먹힌 세포를 안전하게 제거합니다. 역순 순회는 배열에서 요소를 제거할 때 인덱스 밀림 문제를 방지하는 JavaScript의 중요한 패턴입니다.',
        '이 구현은 Part 1(싱글플레이어)만 포함하며, Part 2에서는 Socket.io와 Express 서버를 활용한 멀티플레이어 확장이 가능합니다. 실시간 멀티플레이어 게임에서는 네트워크 지연(latency) 보상, 상태 동기화 등 추가적인 기술적 도전이 필요합니다.',
    ],
})

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
    ],
    tags: ['agar', 'multiplayer', 'blob', 'zoom'],
    difficulty: 'intermediate',
    notice: '이 챌린지의 Part 2는 Express 서버가 필요하여 브라우저에서만 실행할 수 없습니다. Part 1만 표시됩니다.',
    explanation: [
        'Blob 클래스는 위치(pos), 반지름(r), 속도(vel)를 가집니다. update()에서 마우스 방향으로의 벡터를 계산하고 lerp()로 부드럽게 보간하여 자연스러운 이동을 구현합니다.',
        'eats() 메서드는 두 원의 거리가 반지름 합보다 작으면 흡수로 판정합니다. 면적(PI*r*r)을 합산한 뒤 sqrt(sum/PI)로 새 반지름을 계산하여 면적 보존 원리를 적용합니다.',
        'translate()와 scale()을 조합하여 카메라가 플레이어를 항상 화면 중앙에 유지합니다. lerp(zoom, 64/blob.r, 0.1)로 세포가 커질수록 줌아웃되어 게임 시야가 넓어집니다.',
        '200개의 먹이 세포를 -width~width, -height~height 범위에 랜덤 배치하고, 역순 for문과 splice로 먹힌 세포를 안전하게 제거합니다.',
    ],
})

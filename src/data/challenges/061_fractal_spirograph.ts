import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '061_fractal_spirograph',
    number: 61,
    title: 'Fractal Spirograph',
    categoryId: 'creative-coding',
    description: '중첩된 원의 회전으로 프랙탈 스피로그래프 패턴을 그립니다.',
    files: ['orbit.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #61: Fractal Spirograph', url: 'https://thecodingtrain.com/challenges/61-fractal-spirograph' },
    ],
    tags: ['spirograph', 'fractal', 'orbit', 'fourier'],
    difficulty: 'intermediate',
    explanation: [
        'Orbit 클래스는 부모 원 위에서 회전하는 자식 원을 표현합니다. n번째 원의 회전 속도는 k^(n-1)에 비례하며, k=-4로 인접 원이 반대 방향으로 회전합니다. n=10개의 원을 연쇄적으로 연결합니다.',
        'addChild()에서 부모 반지름의 1/3 크기로 자식 원을 생성합니다. update()에서 부모 중심으로부터 (부모r+자식r) 거리에서 cos/sin으로 궤도 위치를 계산합니다.',
        '매 프레임 resolution(50)번 원들을 업데이트하고, 가장 끝 원(end)의 좌표를 path 배열에 저장합니다. beginShape()/vertex()로 경로를 자홍색(255,0,255) 곡선으로 그립니다.',
        'path 길이가 20000을 초과하면 앞부분을 splice로 제거하여 메모리를 관리합니다. 각 원의 반지름이 1/3씩 줄어들며 k의 거듭제곱으로 속도가 증가하여 프랙탈 복잡성이 생깁니다.',
    ],
})

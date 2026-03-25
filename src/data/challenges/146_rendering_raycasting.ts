import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '146_rendering_raycasting',
    number: 146,
    title: 'Rendering Raycasting',
    categoryId: 'physics-simulation',
    description: '2D 레이캐스팅 결과를 의사 3D로 렌더링하여 Wolfenstein 스타일의 1인칭 뷰를 만듭니다.',
    files: ['boundary.js', 'particle.js', 'ray.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #146: Rendering Raycasting', url: 'https://thecodingtrain.com/challenges/146-rendering-raycasting' },
    ],
    tags: ['raycasting', '3D', 'rendering', 'wolfenstein'],
    difficulty: 'advanced',
    explanation: [
        '145번의 2D 레이캐스팅을 확장하여 Wolfenstein 3D 스타일의 의사 3D 렌더링을 구현합니다. 800x400 캔버스를 좌측 2D 맵(400x400)과 우측 3D 뷰(400x400)로 분할합니다.',
        'FOV(시야각) 슬라이더로 광선의 범위를 조절합니다. Particle이 heading 방향 기준으로 FOV 범위의 광선을 발사하고, look()이 각 광선의 벽까지 거리 배열(scene)을 반환합니다.',
        '우측 3D 뷰에서 각 광선의 거리를 벽 높이로 변환합니다: h = map(distance, 0, sceneW, sceneH, 0). 거리 제곱에 반비례하는 밝기 b = map(d^2, 0, sceneW^2, 255, 0)로 원근감을 표현합니다.',
        '방향키로 이동(UP/DOWN)과 회전(LEFT/RIGHT)을 조작합니다. particle.rotate()로 시선을 돌리고 particle.move()로 전후 이동하여, 2D 맵과 3D 뷰가 동시에 업데이트됩니다.',
    ],
})

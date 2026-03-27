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
        { title: 'Lode Vandevenne - Raycasting Tutorial', url: 'https://lodev.org/cgtutor/raycasting.html' },
        { title: 'Wikipedia - Wolfenstein 3D', url: 'https://en.wikipedia.org/wiki/Wolfenstein_3D' },
        { title: 'Wikipedia - Ray casting (Graphics)', url: 'https://en.wikipedia.org/wiki/Ray_casting' },
    ],
    tags: ['raycasting', '3D', 'rendering', 'wolfenstein'],
    difficulty: 'advanced',
    explanation: [
        '이 챌린지는 145번의 2D 레이캐스팅을 확장하여 Wolfenstein 3D(1992) 스타일의 의사 3D(pseudo-3D) 렌더링을 구현합니다. Wolfenstein 3D는 id Software의 John Carmack이 개발한 최초의 상업적 FPS 게임으로, 레이캐스팅 기법으로 당시 하드웨어에서 실시간 3D 효과를 구현했습니다.',
        '800x400 캔버스를 좌측 2D 맵(400x400)과 우측 3D 뷰(400x400)로 분할합니다. FOV(Field of View, 시야각) 슬라이더로 광선의 범위를 조절하며, Particle이 heading 방향 기준으로 FOV 범위의 광선을 발사하고, look()이 각 광선의 벽까지 거리 배열(scene)을 반환합니다.',
        '우측 3D 뷰에서 각 광선의 거리를 벽 높이로 변환합니다: h = map(distance, 0, sceneW, sceneH, 0). 거리 제곱에 반비례하는 밝기 b = map(d^2, 0, sceneW^2, 255, 0)로 원근감(depth cue)을 표현합니다. 이 기법은 실제 3D 엔진 없이도 깊이감을 만들어내는 핵심 원리입니다.',
        '방향키로 이동(UP/DOWN)과 회전(LEFT/RIGHT)을 조작합니다. particle.rotate()로 시선을 돌리고 particle.move()로 전후 이동하여, 2D 맵과 3D 뷰가 동시에 업데이트됩니다. 이러한 1인칭 뷰 렌더링은 현대 게임 엔진의 기초가 된 개념입니다.',
        '레이캐스팅은 진정한 3D 렌더링과 달리 수평 방향의 광선만 사용하므로 바닥과 천장의 높이 변화가 불가능하지만, 계산량이 적어 실시간 처리에 유리합니다. 이 한계는 이후 Doom(1993)의 BSP 트리와 같은 발전된 기법으로 극복되었습니다.',
    ],
})

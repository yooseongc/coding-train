import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '063_texturing_cloth_simulation',
    number: 63,
    title: 'Texturing Cloth Simulation',
    categoryId: 'physics-simulation',
    description: 'toxiclibs.js의 Verlet 물리 엔진과 스프링으로 천 시뮬레이션에 텍스처를 입힙니다.',
    files: ['toxi_index.js', 'particle.js', 'spring.js', 'sketch.js'],
    libraries: ['toxiclibs.min.js'],
    references: [
        { title: 'Coding Challenge #63: Texturing Cloth Simulation', url: 'https://thecodingtrain.com/challenges/63-texturing-cloth-simulation' },
    ],
    tags: ['cloth', 'texture', 'toxiclibs', 'physics'],
    difficulty: 'advanced',
    explanation: [
        'VerletPhysics2D에 GravityBehavior(0, 0.5)를 추가하여 중력을 적용합니다. 20x20 격자의 Particle을 생성하고, 인접 파티클 간에 Spring(xSpacing/ySpacing 길이, 강도 0.1)으로 연결합니다.',
        '좌상단과 우상단 파티클을 lock()으로 고정하여 천이 매달린 형태를 만듭니다. 마우스 드래그 시 가장 가까운 파티클을 찾아 lock/위치변경/unlock으로 천을 조작할 수 있습니다.',
        'WEBGL 모드에서 TRIANGLE_STRIP으로 메시를 렌더링합니다. textureMode(NORMAL)과 map()으로 각 파티클의 격자 좌표를 0~1 UV 좌표로 변환하여 unikitty.jpg 텍스처를 매핑합니다.',
        '행 단위로 beginShape(TRIANGLE_STRIP)을 사용하여 particles[i][j]와 particles[i][j+1]을 교대로 vertex에 추가합니다. 물리 업데이트 후 텍스처가 천의 변형을 따라 자연스럽게 왜곡됩니다.',
    ],
})

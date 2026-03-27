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
        { title: 'Wikipedia - UV Mapping', url: 'https://en.wikipedia.org/wiki/UV_mapping' },
        { title: 'Wikipedia - Triangle Strip', url: 'https://en.wikipedia.org/wiki/Triangle_strip' },
        { title: 'p5.js Reference - texture()', url: 'https://p5js.org/reference/p5/texture/' },
    ],
    versions: [
        { label: 'part1', libraries: ['toxiclibs.min.js'], files: [{ name: 'toxi_index.js', content: '' }, { name: 'particle.js', content: '' }, { name: 'spring.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part2', libraries: ['toxiclibs.min.js'], files: [{ name: 'toxi_index.js', content: '' }, { name: 'particle.js', content: '' }, { name: 'spring.js', content: '' }, { name: 'sketch.js', content: '' }] },
    ],
    tags: ['cloth', 'texture', 'toxiclibs', 'physics'],
    difficulty: 'advanced',
    explanation: [
        '이 챌린지는 020번 천 시뮬레이션의 확장으로, Verlet 물리 엔진 위에 텍스처 매핑(Texture Mapping)을 추가합니다. 텍스처 매핑은 1974년 에드윈 캣멀(Edwin Catmull)이 박사 논문에서 제안한 기법으로, 3D 표면에 2D 이미지를 입히는 컴퓨터 그래픽스의 핵심 기술입니다.',
        'VerletPhysics2D에 GravityBehavior(0, 0.5)를 추가하여 중력을 적용합니다. 20x20 격자의 Particle을 생성하고, 인접 파티클 간에 Spring(xSpacing/ySpacing 길이, 강도 0.1)으로 연결합니다. setWorldBounds()로 시뮬레이션 영역을 제한하여 파티클이 화면 밖으로 나가지 않게 합니다.',
        '좌상단과 우상단 파티클을 lock()으로 고정하여 천이 매달린 형태를 만듭니다. 마우스 드래그 시 가장 가까운 파티클을 찾아 lock/위치변경/unlock 순서로 천을 조작할 수 있습니다. 이는 인터랙티브 천 시뮬레이션의 기본적인 사용자 상호작용 패턴입니다.',
        'WEBGL 모드에서 TRIANGLE_STRIP으로 메시(Mesh)를 렌더링합니다. UV 매핑(UV Mapping)을 통해 각 파티클의 격자 좌표를 0~1 범위의 텍스처 좌표로 변환합니다. U와 V는 텍스처 공간의 수평/수직 축을 나타내며, X/Y/Z와 구분하기 위해 이 명칭을 사용합니다.',
        '행 단위로 beginShape(TRIANGLE_STRIP)을 사용하여 particles[i][j]와 particles[i][j+1]을 교대로 vertex에 추가합니다. 삼각형 스트립(Triangle Strip)은 연속된 삼각형을 효율적으로 렌더링하는 방식으로, N개의 정점으로 N-2개의 삼각형을 그릴 수 있어 GPU 성능에 유리합니다.',
        '텍스처 매핑된 천 시뮬레이션은 게임의 캐릭터 의상, 영화의 VFX(깃발, 커튼, 천막), 가상 현실(VR)에서의 패브릭 인터랙션, 그리고 온라인 쇼핑의 가상 피팅 서비스에서 실용적으로 사용됩니다.',
    ],
})

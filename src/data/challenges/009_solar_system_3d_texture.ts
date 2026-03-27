import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '009_solar_system_3d_texture',
    number: 9,
    title: 'Solar System 3D Texture',
    categoryId: '3d-geometry',
    description: '텍스처를 입힌 3D 태양계를 구현합니다.',
    files: ['planet.js', 'sketch.js'],
    libraries: ['p5.easycam.min.js'],
    references: [
        { title: 'Coding Challenge #9: Solar System 3D Texture', url: 'https://thecodingtrain.com/challenges/9-solar-system-3d-texture' },
        { title: 'p5.js Reference - texture()', url: 'https://p5js.org/reference/p5/texture/' },
        { title: 'Wikipedia - Texture mapping', url: 'https://en.wikipedia.org/wiki/Texture_mapping' },
        { title: 'p5.js Reference - preload()', url: 'https://p5js.org/reference/p5/preload/' },
    ],
    tags: ['solar', 'planet', 'texture', '3D', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        '텍스처 매핑(Texture Mapping)은 3D 컴퓨터 그래픽스의 핵심 기법으로, 2D 이미지를 3D 표면에 입히는 기술입니다. 1974년 Edwin Catmull이 처음 제안한 이 기법은 현대 게임과 영화의 3D 렌더링에서 빠질 수 없는 요소가 되었습니다. 이 챌린지에서는 태양, 지구, 화성, 수성의 실제 텍스처 이미지를 사용하여 사실적인 3D 태양계를 구현합니다.',
        'preload()에서 loadImage()로 행성 텍스처 이미지를 미리 로드합니다. preload()는 setup() 전에 모든 에셋 로딩을 보장하는 p5.js의 비동기 처리 함수입니다. 이미지 로딩이 완료되기 전에 렌더링이 시작되면 빈 텍스처가 표시되므로, preload()를 통한 사전 로딩은 필수적입니다.',
        'texture() 함수로 sphere()에 이미지를 매핑합니다. fill() 대신 texture()를 사용하면 3D 오브젝트에 사실적인 외관을 입힐 수 있습니다. 구체에 텍스처를 입히면 UV 좌표계를 통해 2D 이미지가 구면 위에 자동으로 투영됩니다. 이때 극 지방에서 왜곡이 발생하는 것은 메르카토르 도법(Mercator Projection)과 유사한 원리입니다.',
        'ambientLight()과 pointLight()를 조합하여 조명을 설정합니다. ambientLight(255, 255, 255)는 모든 방향에서 균일하게 비추는 환경광이고, 원점(0,0,0)의 pointLight는 태양 위치에서 빛이 발산되는 효과를 만듭니다. 이 두 조명의 조합으로 행성의 밝은 면과 어두운 면이 자연스럽게 구분됩니다.',
        'Planet 생성자에 texture 매개변수가 추가되어, 각 행성에 고유한 텍스처를 할당합니다. 기존 3D 버전의 코드 구조를 그대로 유지하면서 시각적 품질만 향상시킨 확장 패턴으로, 소프트웨어 설계의 개방-폐쇄 원칙(Open-Closed Principle)을 잘 보여주는 예시입니다.',
    ],
})

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
    ],
    tags: ['solar', 'planet', 'texture', '3D', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        'preload()에서 loadImage()로 행성 텍스처 이미지를 미리 로드합니다. preload()는 setup() 전에 모든 에셋 로딩을 보장하는 p5.js의 비동기 처리 함수입니다.',
        'texture() 함수로 sphere()에 이미지를 매핑합니다. fill() 대신 texture()를 사용하면 3D 오브젝트에 사실적인 외관을 입힐 수 있습니다.',
        'ambientLight()과 pointLight()를 조합하여 조명을 설정합니다. 원점(0,0,0)의 pointLight는 태양 위치에서 빛이 나오는 효과를 만듭니다.',
        'Planet 생성자에 texture 매개변수가 추가되어, 각 행성에 랜덤한 텍스처를 할당합니다. 3D 버전의 코드 구조를 그대로 유지하면서 시각적 품질만 향상시킨 확장 패턴입니다.',
    ],
})

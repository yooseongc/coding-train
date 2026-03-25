import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '025_spherical_geometry',
    number: 25,
    title: 'Spherical Geometry',
    categoryId: '3d-geometry',
    description: '구면 좌표계를 이용해 3D 구를 그립니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #25: Spherical Geometry', url: 'https://thecodingtrain.com/challenges/25-spherical-geometry' },
    ],
    tags: ['sphere', 'geometry', '3D', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        '구면 좌표계에서 위도(lat: 0~PI)와 경도(lon: 0~TWO_PI)를 사용하여 구의 꼭짓점을 계산합니다. x = r*sin(lat)*cos(lon), y = r*sin(lat)*sin(lon), z = r*cos(lat) 공식을 사용합니다.',
        'globe[][] 2D 배열에 모든 꼭짓점을 저장합니다. setup()에서 한 번 계산하여 draw()에서 반복 계산을 피하는 최적화 패턴입니다.',
        'TRIANGLE_STRIP으로 인접한 두 위도 행의 꼭짓점을 교대로 연결하여 구 표면을 삼각형 메시로 구성합니다. 각 위도 밴드에 HSB 색상을 적용하여 무지개 효과를 냅니다.',
        'rotateX()/rotateY()에 매 프레임 증가하는 각도를 전달하여 구가 천천히 회전하는 애니메이션을 만듭니다.',
    ],
})

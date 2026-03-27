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
        { title: 'Wikipedia - Spherical coordinate system', url: 'https://en.wikipedia.org/wiki/Spherical_coordinate_system' },
        { title: 'p5.js Reference - TRIANGLE_STRIP', url: 'https://p5js.org/reference/p5/TRIANGLE_STRIP/' },
        { title: 'Wikipedia - UV mapping', url: 'https://en.wikipedia.org/wiki/UV_mapping' },
    ],
    tags: ['sphere', 'geometry', '3D', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        '구면 좌표계(Spherical Coordinate System)는 3D 공간의 점을 반지름 r, 위도각(latitude/polar angle), 경도각(longitude/azimuthal angle)으로 표현하는 좌표계입니다. 지구의 위도/경도 시스템이 대표적인 예이며, 천문학, 물리학, 3D 그래픽스에서 널리 사용됩니다. 이 챌린지에서는 구면 좌표를 직접 계산하여 p5.js의 sphere() 함수 없이 3D 구를 처음부터 구현합니다.',
        '위도(lat: 0~PI)와 경도(lon: 0~TWO_PI)를 순회하며 x = r*sin(lat)*cos(lon), y = r*sin(lat)*sin(lon), z = r*cos(lat) 공식으로 구의 꼭짓점을 계산합니다. globe[][] 2D 배열에 모든 꼭짓점을 저장하며, setup()에서 한 번만 계산하여 draw()에서 반복 계산을 피하는 최적화 패턴을 사용합니다.',
        'TRIANGLE_STRIP으로 인접한 두 위도 행의 꼭짓점을 교대로 연결하여 구 표면을 삼각형 메시(Triangle Mesh)로 구성합니다. 이는 3D 모델링에서 구를 표현하는 가장 기본적인 방법으로, 해상도(total)를 높이면 더 매끄러운 구가 되지만 정점 수가 기하급수적으로 증가합니다. 25개의 분할로 총 약 625개의 면을 생성합니다.',
        'HSB(Hue-Saturation-Brightness) 색상 모드에서 각 위도 밴드에 색조(Hue) 값을 매핑하여 무지개 효과를 냅니다. rotateX()/rotateY()에 매 프레임 증가하는 각도를 전달하여 구가 천천히 회전하는 애니메이션을 만듭니다.',
        '구면 좌표계의 이해는 3D 그래픽스의 기초입니다. 텍스처 매핑(UV Mapping), 환경 매핑(Environment Mapping), 파노라마 이미지 렌더링, GPS 좌표 처리 등에서 구면 좌표와 직교 좌표 간의 변환이 필수적으로 사용됩니다. 이 구 생성 알고리즘은 이후 3D Supershapes 챌린지의 기반이 됩니다.',
    ],
})

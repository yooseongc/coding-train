import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '026_3d_supershapes',
    number: 26,
    title: '3D Supershapes',
    categoryId: '3d-geometry',
    description: '3D 슈퍼쉐이프를 WEBGL로 렌더링합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #26: 3D Supershapes', url: 'https://thecodingtrain.com/challenges/26-3d-supershapes' },
    ],
    tags: ['supershape', '3D', 'WEBGL', 'geometry'],
    difficulty: 'intermediate',
    explanation: [
        '2D Supershape 공식을 구면 좌표계에 적용하여 3D 형태를 생성합니다. 위도(lat)와 경도(lon)에 각각 supershape()를 적용한 r1, r2로 구의 반지름을 변형합니다.',
        'supershape() 함수의 매개변수(m=7, n1=0.2, n2=1.7, n3=1.7)가 형태를 결정합니다. m은 대칭 수, n1/n2/n3는 곡률을 제어하여 별, 꽃, 유기체 등 다양한 3D 형상을 만듭니다.',
        'TRIANGLE_STRIP으로 인접 위도 행을 연결하여 메시를 구성합니다. HSB 색상과 offset 애니메이션으로 표면에 흐르는 색상 효과를 줍니다.',
        'draw()에서 매 프레임 globe 배열을 재계산합니다. mchange를 통해 m값을 동적으로 변화시키면 형태가 실시간으로 변형되는 모핑 애니메이션이 가능합니다.',
    ],
})

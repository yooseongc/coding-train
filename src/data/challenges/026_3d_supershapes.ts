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
        { title: 'Wikipedia - Superformula', url: 'https://en.wikipedia.org/wiki/Superformula' },
        { title: 'Paul Bourke - Supershapes', url: 'http://paulbourke.net/geometry/supershape/' },
        { title: 'Wikipedia - Spherical coordinate system', url: 'https://en.wikipedia.org/wiki/Spherical_coordinate_system' },
    ],
    tags: ['supershape', '3D', 'WEBGL', 'geometry'],
    difficulty: 'intermediate',
    explanation: [
        '3D 슈퍼쉐이프는 요한 기엘리스(Johan Gielis)의 슈퍼포뮬러를 구면 좌표계와 결합하여 생성합니다. Spherical Geometry 챌린지에서 배운 구면 좌표 변환에 2D Supershapes에서 배운 슈퍼포뮬러를 적용하여, 단순한 구를 복잡한 3D 유기체 형태로 변형합니다. 위도(lat)와 경도(lon)에 각각 supershape()를 적용한 r1, r2로 구의 반지름을 방향에 따라 다르게 변형합니다.',
        'supershape() 함수의 매개변수(m=7, n1=0.2, n2=1.7, n3=1.7)가 3D 형태를 결정합니다. m은 대칭 수, n1/n2/n3는 곡률을 제어합니다. x = r*r1*sin(lat)*cos(lon), y = r*r1*sin(lat)*sin(lon), z = r*r2*cos(lat)에서 r1은 경도 방향, r2는 위도 방향의 변형을 담당하여 비대칭적이고 복잡한 3D 형상을 만들어냅니다.',
        'TRIANGLE_STRIP으로 인접 위도 행을 연결하여 삼각형 메시를 구성합니다. HSB 색상 모드에서 위도에 따라 색조(Hue)를 변화시키고, offset 값을 매 프레임 증가시켜 표면에 흐르는 듯한 색상 애니메이션 효과를 줍니다. rotateX()/rotateY()로 전체 형태가 천천히 회전하여 모든 각도에서 관찰할 수 있습니다.',
        'draw()에서 매 프레임 globe 배열을 재계산하므로, 매개변수를 동적으로 변경하면 형태가 실시간으로 변형되는 모핑(Morphing) 애니메이션이 가능합니다. mchange를 통해 m값을 sin() 함수로 연속 변화시키면 구에서 별, 꽃잎 등으로 매끄럽게 전환되는 효과를 볼 수 있습니다.',
        '이 기법은 절차적 모델링(Procedural Modeling)의 대표적 예시로, 적은 수의 매개변수로 무한히 다양한 3D 형태를 생성할 수 있습니다. 영화 VFX, 게임의 외계 생물 디자인, 건축 파라메트릭 디자인, 3D 프린팅용 유기적 형태 생성 등에 활용될 수 있습니다.',
    ],
})

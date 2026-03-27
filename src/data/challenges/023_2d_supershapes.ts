import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '023_2d_supershapes',
    number: 23,
    title: '2D Supershapes',
    categoryId: '3d-geometry',
    description: '극좌표 기반 2D 슈퍼쉐이프를 그립니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #23: 2D Supershapes', url: 'https://thecodingtrain.com/challenges/23-2d-supershapes' },
        { title: 'Paul Bourke - Supershapes (Superformula)', url: 'http://paulbourke.net/geometry/supershape/' },
        { title: 'Wikipedia - Superformula', url: 'https://en.wikipedia.org/wiki/Superformula' },
        { title: 'Wikipedia - Polar coordinate system', url: 'https://en.wikipedia.org/wiki/Polar_coordinate_system' },
    ],
    tags: ['supershape', 'polar', 'math', 'geometry'],
    difficulty: 'beginner',
    explanation: [
        '슈퍼포뮬러(Superformula)는 벨기에 식물학자 요한 기엘리스(Johan Gielis)가 2003년에 제안한 수학 공식으로, 슈퍼엘립스를 극좌표계로 일반화한 것입니다. 1/r = (|cos(m*theta/4)/a|^n2 + |sin(m*theta/4)/b|^n3)^(1/n1)로 정의되며, 단 하나의 공식으로 원, 별, 꽃, 다각형, 유기체 형태까지 놀라울 정도로 다양한 자연의 형태를 기술할 수 있습니다.',
        '매개변수 m은 도형의 대칭 수(Symmetry Order)를 결정합니다. m=3이면 삼각형 대칭, m=5이면 오각형 대칭, m=0이면 원이 됩니다. supershape() 함수가 각도 theta에 대한 반지름 r을 반환하고, 이 r에 cos(angle)과 sin(angle)을 곱하면 극좌표(Polar Coordinates)에서 직교좌표(Cartesian Coordinates)로 변환됩니다.',
        'n1, n2, n3 매개변수는 곡선의 오목/볼록 정도를 결정합니다. n1=1, n2=1, n3=1이면 기본 슈퍼포뮬러 형태이고, 이 값들을 변경하면 별, 꽃잎, 불가사리, 나뭇잎 등 자연에서 볼 수 있는 다양한 형태가 생성됩니다. 기엘리스는 이 공식으로 식물의 잎, 조개껍데기, 눈 결정의 형태를 수학적으로 설명했습니다.',
        'beginShape()로 각도를 0~TWO_PI까지 500단계로 순회하며 vertex()를 찍고, endShape(CLOSE)로 닫힌 도형을 완성합니다. 점의 수가 많을수록 곡선이 부드러워지지만 연산량도 증가합니다. createSlider()로 m값을 실시간으로 조절하여 대칭 변화를 관찰할 수 있습니다.',
        '슈퍼포뮬러는 생물학적 형태 모델링뿐 아니라 안테나 설계, 건축 외관 디자인, 3D 모델링 등에도 활용됩니다. 이 2D 버전은 이후 3D Supershapes 챌린지에서 구면 좌표계와 결합하여 3차원 형태로 확장됩니다.',
    ],
})

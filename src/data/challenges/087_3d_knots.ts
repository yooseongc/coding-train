import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '087_3d_knots',
    number: 87,
    title: '3D Knots',
    categoryId: '3d-geometry',
    description: '매듭 이론의 수학적 매듭을 WEBGL로 시각화합니다. 극좌표 변환 함수로 3D 매듭 곡선을 그립니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #87: 3D Knots', url: 'https://thecodingtrain.com/challenges/87-3d-knots' },
    ],
    tags: ['knot', '3D', 'parametric', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        '매듭 곡선은 매개변수 beta(0~PI)에 따라 r, theta, phi가 변하는 극좌표 함수입니다. r(beta) = 0.8 + 1.6*sin(6*beta), theta(beta) = 2*beta, phi(beta) = 0.6*PI*sin(12*beta)로 정의됩니다.',
        '극좌표(r, theta, phi)를 직교좌표(x, y, z)로 변환합니다: x = r*cos(phi)*cos(theta), y = r*cos(phi)*sin(theta), z = r*sin(phi). 100배로 스케일링하여 화면에 적절한 크기로 표시합니다.',
        'draw()에서 beta를 0.01씩 증가시키며 매 프레임 새 점을 추가합니다. vectors 배열에 누적된 점들을 beginShape()/endShape()로 연결하여 점진적으로 매듭이 완성됩니다. orbitControl()로 마우스 드래그 회전이 가능합니다.',
    ],
})

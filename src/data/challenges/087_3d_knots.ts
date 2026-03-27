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
        { title: 'Wikipedia - Knot theory', url: 'https://en.wikipedia.org/wiki/Knot_theory' },
        { title: 'Paul Bourke - Knots', url: 'http://paulbourke.net/geometry/knots/' },
        { title: 'p5.js Reference - orbitControl()', url: 'https://p5js.org/reference/p5/orbitControl/' },
    ],
    tags: ['knot', '3D', 'parametric', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        '매듭 이론(Knot Theory)은 위상수학(Topology)의 한 분야로, 3차원 공간에서 닫힌 곡선이 얼마나 복잡하게 얽혀 있는지를 연구합니다. 19세기 물리학자 Lord Kelvin이 원자가 이더(Aether) 속의 매듭이라는 가설을 세우면서 수학적 연구가 시작되었습니다. 이 챌린지에서는 Paul Bourke가 정리한 매듭 곡선 공식을 사용하여 아름다운 3D 매듭을 시각화합니다.',
        '매듭 곡선은 매개변수 beta(0~PI)에 따라 r, theta, phi가 변하는 극좌표 함수입니다. r(beta) = 0.8 + 1.6*sin(6*beta)는 반지름의 변화를, theta(beta) = 2*beta는 수평 회전을, phi(beta) = 0.6*PI*sin(12*beta)는 수직 진동을 결정합니다. sin() 함수의 주파수(6, 12)가 매듭의 복잡도를 결정합니다.',
        '극좌표(r, theta, phi)를 직교좌표(x, y, z)로 변환합니다: x = r*cos(phi)*cos(theta), y = r*cos(phi)*sin(theta), z = r*sin(phi). 이는 구면 좌표 변환과 동일한 공식이지만, r, theta, phi가 모두 beta의 함수이므로 구가 아닌 복잡한 3D 곡선이 생성됩니다. 100배 스케일링으로 화면에 적절한 크기로 표시합니다.',
        'draw()에서 beta를 0.01씩 증가시키며 매 프레임 새 점을 vectors 배열에 추가합니다. beginShape()/endShape()로 누적된 점들을 연결하여 매듭이 점진적으로 그려지는 애니메이션 효과를 만듭니다. orbitControl()로 마우스 드래그 회전이 가능하여 3D 매듭의 구조를 다양한 각도에서 관찰할 수 있습니다.',
        'Paul Bourke의 매듭 곡선 컬렉션에는 수십 가지의 매듭 공식이 있으며, r, theta, phi 함수의 계수를 변경하면 완전히 다른 형태의 매듭을 생성할 수 있습니다. 매듭 이론은 순수 수학뿐 아니라 DNA 구조 분석, 분자 화학, 양자 물리학, 케이블 관리 시스템 등에도 실용적으로 응용됩니다.',
    ],
})

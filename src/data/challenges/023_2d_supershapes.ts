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
    ],
    tags: ['supershape', 'polar', 'math', 'geometry'],
    difficulty: 'beginner',
    explanation: [
        'Supershape 공식 1/r = (|cos(m*theta/4)/a|^n2 + |sin(m*theta/4)/b|^n3)^(1/n1)을 극좌표로 계산합니다. 매개변수 m이 대칭 수를 결정하여, m=5이면 5겹 대칭 도형이 됩니다.',
        'supershape() 함수가 각도 theta에 대한 반지름 r을 반환합니다. 이 r에 cos(angle), sin(angle)을 곱하면 극좌표에서 직교좌표(x, y)로 변환됩니다.',
        'beginShape()로 각도를 0~TWO_PI까지 순회하며 vertex()를 찍고, endShape(CLOSE)로 닫힌 도형을 완성합니다. 500개의 점으로 부드러운 곡선을 만듭니다.',
        'n1, n2, n3 매개변수를 변경하면 별, 꽃, 다각형 등 다양한 형태를 생성할 수 있습니다. createSlider()로 m값을 실시간 조절합니다.',
    ],
})

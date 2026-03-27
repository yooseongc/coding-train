import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '019_superellipse',
    number: 19,
    title: 'Superellipse',
    categoryId: '3d-geometry',
    description: '슈퍼엘립스(Lamé curve)를 그립니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #19: Superellipse', url: 'https://thecodingtrain.com/challenges/19-superellipse' },
        { title: 'Wikipedia - Superellipse', url: 'https://en.wikipedia.org/wiki/Superellipse' },
        { title: 'p5.js Reference - beginShape()', url: 'https://p5js.org/reference/p5/beginShape/' },
        { title: 'Wikipedia - Gabriel Lame', url: 'https://en.wikipedia.org/wiki/Gabriel_Lam%C3%A9' },
    ],
    tags: ['superellipse', 'curve', 'math', 'geometry'],
    difficulty: 'beginner',
    explanation: [
        '슈퍼엘립스(Superellipse)는 프랑스 수학자 가브리엘 라메(Gabriel Lame)가 19세기에 연구한 곡선으로, 라메 곡선(Lame Curve)이라고도 불립니다. |x/a|^n + |y/b|^n = 1로 정의되며, 지수 n의 값에 따라 원(n=2), 다이아몬드(n=1), 사각형(n이 큰 경우), 별 모양(n이 1보다 작은 경우) 등 다양한 형태를 생성합니다.',
        '덴마크의 시인이자 수학자인 피에트 하인(Piet Hein)은 1959년 스톡홀름 세르겔 광장의 교통 로터리 설계에 슈퍼엘립스(n=2.5)를 적용하여, 직사각형과 타원의 장점을 결합한 우아한 형태를 만들었습니다. 이후 슈퍼엘립스는 건축, 가구 디자인, 스마트폰의 둥근 모서리 아이콘 등에 널리 활용되고 있습니다.',
        '매개변수 방정식 x=|cos(t)|^(2/n)*a*sgn(cos(t)), y=|sin(t)|^(2/n)*b*sgn(sin(t))로 각도 t를 0부터 2PI까지 순회하며 점을 계산합니다. sgn()은 부호 함수(Signum Function)로, 각 사분면에서 x와 y의 방향(부호)을 올바르게 결정합니다. 절대값과 부호 함수의 조합으로 모든 사분면에서 대칭적인 곡선이 생성됩니다.',
        'beginShape()/vertex()/endShape(CLOSE)로 계산된 점들을 연결하여 닫힌 도형을 그립니다. CLOSE 인자가 마지막 점과 첫 점을 자동으로 연결합니다. createSlider()로 n 값을 0~10 범위에서 실시간 조절하여, 하나의 수학 공식이 지수 변화만으로 얼마나 다양한 형태를 만들어낼 수 있는지 직관적으로 관찰할 수 있습니다.',
        'iOS의 앱 아이콘 모서리, CSS의 border-radius 속성 등 현대 UI 디자인에서 "사각형도 아니고 원도 아닌" 부드러운 형태가 필요할 때 슈퍼엘립스 또는 그 변형인 스쿼클(Squircle)이 자주 사용됩니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '163_bezier_curves',
    number: 163,
    title: 'Bezier Curves',
    categoryId: 'math-algorithms',
    description: '베지에 곡선의 원리를 선형 보간(lerp)으로 시각화하고, 2차/3차 곡선을 구현합니다.',
    files: ['sketch.js'],
    libraries: ['p5.sound.min.js'],
    references: [
        { title: 'Coding Challenge #163: Bezier Curves', url: 'https://thecodingtrain.com/challenges/163-bezier-curves' },
        { title: 'Wikipedia - Bezier curve', url: 'https://en.wikipedia.org/wiki/B%C3%A9zier_curve' },
        { title: 'A Primer on Bezier Curves (Pomax)', url: 'https://pomax.github.io/bezierinfo/' },
        { title: 'p5.js Reference - bezier()', url: 'https://p5js.org/reference/#/p5/bezier' },
    ],
    tags: ['bezier', 'curve', 'interpolation', 'lerp'],
    difficulty: 'intermediate',
    versions: [
        { label: 'basic', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'bezier-vertex', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'quadratic', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'cubic', files: [{ name: 'sketch.js', content: '' }] },
    ],
    explanation: [
        '베지에 곡선(Bezier curve)은 1960년대 프랑스 르노 자동차의 엔지니어 피에르 베지에(Pierre Bezier)가 자동차 차체 곡면 설계를 위해 개발한 매개변수 곡선입니다. 같은 시기 시트로엥의 폴 드 카스텔조(Paul de Casteljau)도 독립적으로 같은 곡선을 발견하여 드 카스텔조 알고리즘(De Casteljau algorithm)으로 알려져 있습니다.',
        '베지에 곡선의 핵심 원리는 선형 보간(linear interpolation, lerp)의 재귀적 적용입니다. 제어점 사이의 보간 점들을 다시 보간하는 과정을 반복하면, 매개변수 t가 0에서 1로 변할 때 매끄러운 곡선 위의 점을 얻습니다. n개의 제어점으로 정의되는 n-1차 베지에 곡선은 번슈타인 다항식(Bernstein polynomial)으로도 표현됩니다.',
        'Basic 스케치는 p5.js의 bezier() 함수로 3차 베지에 곡선을 그립니다. 4개의 제어점(시작점, 두 핸들, 끝점)을 마우스로 조작할 수 있습니다. Quadratic 스케치에서는 2차 베지에의 원리를 시각화하여, t=0~1 범위에서 p0-p1, p1-p2 선분의 보간 점을 구하고 다시 보간하는 과정을 HSB 색상으로 보여줍니다.',
        'Cubic 스케치는 3차 베지에를 드 카스텔조 알고리즘으로 직접 구현합니다. quadratic()을 두 번 호출하여 중간 점 v1, v2를 구하고, 다시 lerp하여 최종 곡선점을 얻습니다. 제어점이 벽에 반사되며 자동으로 움직여 다양한 곡선 형태의 변화를 관찰할 수 있습니다.',
        '베지에 곡선은 현대 컴퓨터 그래픽스의 핵심 요소로, 폰트 디자인(TrueType, OpenType), 벡터 그래픽(SVG, Adobe Illustrator), CSS 애니메이션 타이밍 함수, CAD/CAM 시스템, 게임의 경로 보간 등에 광범위하게 사용됩니다. 베지에 곡면(Bezier surface)으로 확장하면 3D 모델링에도 활용할 수 있습니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '134_heart_curve',
    number: 134,
    title: 'Heart Curve',
    categoryId: 'creative-coding',
    description: '매개변수 방정식으로 하트 곡선을 그리고, 뛰는 하트 GIF 애니메이션을 만듭니다.',
    files: ['sketch.js'],
    libraries: ['gif.js'],
    references: [
        { title: 'Coding Challenge #134: Heart Curve', url: 'https://thecodingtrain.com/challenges/134-heart-curve' },
        { title: 'Wolfram MathWorld - Heart Curve', url: 'https://mathworld.wolfram.com/HeartCurve.html' },
        { title: 'Wikipedia - Heart Symbol (Mathematics)', url: 'https://en.wikipedia.org/wiki/Heart_symbol#Mathematics' },
        { title: 'p5.js Reference - beginShape()', url: 'https://p5js.org/reference/p5/beginShape/' },
    ],
    tags: ['heart', 'curve', 'parametric', 'math'],
    difficulty: 'beginner',
    versions: [
        { label: 'part1', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'sketch.js', content: '' }], libraries: ['gif.js'] },
    ],
    explanation: [
        '하트 곡선(Heart Curve)은 수학에서 다양한 형태로 정의되는 심장 모양의 매개변수 곡선입니다. 이 챌린지에서 사용하는 방정식 x = 16*sin^3(t), y = 13*cos(t) - 5*cos(2t) - 2*cos(3t) - cos(4t)는 가장 유명한 하트 곡선 중 하나로, 삼각함수의 조합으로 아름다운 대칭 하트를 만들어냅니다. 비슷한 곡선으로 카디오이드(Cardioid, 심장형)가 있으며, 이는 원 위를 구르는 원의 궤적으로 정의됩니다.',
        'Part1은 기본 하트 그리기입니다. heartCurve() 함수로 각 t(0~TWO_PI)에서의 좌표를 계산하고, r=10 배율로 확대하여 beginShape()/vertex()로 연결합니다. scale(1,-1)로 y축을 반전하여 수학 좌표계를 사용합니다. 삼각함수의 고조파(harmonics) 결합이 곡선의 세밀한 형태를 결정합니다.',
        'Part2는 뛰는 하트 애니메이션입니다. beat(0~1)에 따라 전반부(0~0.5)에서 점을 추가하고 후반부에서 제거합니다. sin()으로 크기를 주기적으로 변화시켜 심장 박동(heartbeat) 효과를 만들며, 이는 실제 심장의 수축-이완 리듬을 시각적으로 표현합니다.',
        'gif.js 라이브러리로 240프레임의 GIF를 녹화합니다. Web Worker를 사용하여 메인 스레드를 차단하지 않고 GIF 인코딩을 처리하며, "Save to GIF" 버튼으로 한 주기를 캡처하여 애니메이션 GIF를 생성합니다.',
        '매개변수 곡선(parametric curve)은 컴퓨터 그래픽스의 핵심 도구로, 폰트 디자인(Bezier 곡선), CAD/CAM 설계(NURBS), 로봇 경로 계획, 애니메이션의 이징(easing) 함수 등에 활용됩니다. 하트 곡선은 수학의 미적 아름다움을 보여주는 대표적인 예시이며, 발렌타인데이 프로그래밍 과제로도 인기가 많습니다.',
    ],
})

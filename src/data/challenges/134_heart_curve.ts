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
    ],
    tags: ['heart', 'curve', 'parametric', 'math'],
    difficulty: 'beginner',
    notice: '이 챌린지는 특수한 HTML 구조(div 컨테이너)가 필요하여 p5 인스턴스 모드로 실행됩니다. 일부 기능이 정상 동작하지 않을 수 있습니다.',
    explanation: [
        '하트 곡선의 매개변수 방정식은 x = 16*sin^3(t), y = 13*cos(t) - 5*cos(2t) - 2*cos(3t) - cos(4t)입니다. t를 0에서 TWO_PI까지 변화시키면 하트 모양이 완성됩니다.',
        'Part1은 기본 하트 그리기입니다. heartCurve() 함수로 각 t에서의 좌표를 계산하고, r=10 배율로 확대하여 beginShape()/vertex()로 연결합니다. scale(1,-1)로 y축을 반전하여 수학 좌표계를 사용합니다.',
        'Part2는 뛰는 하트 애니메이션입니다. beat(0~1)에 따라 전반부(0~0.5)에서 점을 추가하고 후반부에서 제거합니다. sin()으로 크기를 주기적으로 변화시켜 심장 박동 효과를 만듭니다.',
        'gif.js 라이브러리로 240프레임의 GIF를 녹화합니다. "Save to GIF" 버튼을 누르면 한 주기를 캡처하고, gif.render()로 애니메이션 GIF를 생성하여 새 창에서 열어줍니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '135_gif_loop',
    number: 135,
    title: 'GIF Loop',
    categoryId: 'creative-coding',
    description: '다양한 수학 함수와 이징으로 완벽히 반복되는 GIF 루프 애니메이션을 만듭니다.',
    files: ['sketch.js'],
    libraries: ['gif.js'],
    references: [
        { title: 'Coding Challenge #135: GIF Loop', url: 'https://thecodingtrain.com/challenges/135-making-a-gif-loop-in-p5js' },
    ],
    tags: ['GIF', 'loop', 'animation', 'trigonometry'],
    difficulty: 'intermediate',
    explanation: [
        '완벽한 루프 GIF를 만들려면 fraction(0~1)을 기반으로 모든 움직임이 한 주기 내에 시작점으로 돌아와야 합니다. counter를 nFrames(120)로 나눈 나머지를 fraction으로 사용합니다.',
        'render() 함수에서 5가지 애니메이션 요소를 그립니다: 회전하는 사각형과 팔, 선형 이동 사각형, 시그모이드 이징 사각형, 맥동하는 타원, 이동하는 사인파입니다. fraction*TWO_PI로 각도를 계산하여 매끄러운 루프를 보장합니다.',
        'doubleExponentialSigmoid()는 이징 함수로 0~0.5 구간에서 가속, 0.5~1 구간에서 감속하는 S자 곡선을 만듭니다. 선형 이동과 비교하여 더 자연스러운 움직임을 보여줍니다.',
        'RECORD 버튼으로 gif.js를 통해 각 프레임을 캡처합니다. addFrame()에서 1/60초 딜레이를 설정하고, STOP 시 gif.render()로 완성된 루프 GIF를 새 창에서 확인합니다.',
    ],
})

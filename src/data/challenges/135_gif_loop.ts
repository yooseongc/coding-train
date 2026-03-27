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
        { title: 'GitHub - gif.js Library', url: 'https://github.com/jnordberg/gif.js/' },
        { title: 'Golan Levin - Loop Templates', url: 'https://github.com/golanlevin/LoopTemplates' },
        { title: 'Easings.net - Easing Functions Cheat Sheet', url: 'https://easings.net/' },
    ],
    tags: ['GIF', 'loop', 'animation', 'trigonometry'],
    difficulty: 'intermediate',
    explanation: [
        '완벽한 루프(seamless loop) GIF를 만들려면 fraction(0~1)을 기반으로 모든 움직임이 한 주기 내에 정확히 시작점으로 돌아와야 합니다. 이 기법은 Golan Levin 교수의 Loop Templates에서 영감을 받았으며, 트위터와 텀블러의 #GIFart 커뮤니티에서 인기 있는 창작 형식입니다.',
        'render() 함수에서 5가지 애니메이션 요소를 그립니다: 회전하는 사각형과 팔, 선형 이동 사각형, 시그모이드 이징 사각형, 맥동하는 타원, 이동하는 사인파입니다. fraction*TWO_PI로 각도를 계산하여 삼각함수의 주기성을 활용해 매끄러운 루프를 보장합니다.',
        '이징 함수(easing function)는 움직임에 자연스러운 가감속을 부여합니다. doubleExponentialSigmoid()는 0~0.5 구간에서 지수적으로 가속하고, 0.5~1 구간에서 감속하는 S자 곡선(sigmoid)을 만듭니다. 이는 Robert Penner의 이징 방정식에서 발전한 것으로, CSS 애니메이션의 ease-in-out과 유사한 원리입니다.',
        'RECORD 버튼으로 gif.js 라이브러리를 통해 각 프레임을 캡처합니다. gif.js는 Web Worker를 사용하여 백그라운드에서 GIF를 인코딩하므로, 메인 스레드의 애니메이션이 끊기지 않습니다. addFrame()에서 1/60초 딜레이를 설정하고, STOP 시 gif.render()로 완성합니다.',
        '루프 GIF 제작은 수학적으로 주기 함수(periodic function)의 설계 문제입니다. 삼각함수, 리사주 곡선(Lissajous curve), 모듈러 연산 등을 활용하여 다양한 루핑 패턴을 만들 수 있으며, 이는 모션 그래픽스, UI 애니메이션, 프로시저럴 아트(procedural art) 등 창작 코딩(creative coding)의 핵심 기법입니다.',
    ],
})

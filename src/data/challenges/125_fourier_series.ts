import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '125_fourier_series',
    number: 125,
    title: 'Fourier Series',
    categoryId: 'math-algorithms',
    description: '푸리에 급수를 이용하여 원들의 회전으로 사각파를 합성하는 과정을 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #125: Fourier Series', url: 'https://thecodingtrain.com/challenges/125-fourier-series' },
        { title: 'Wikipedia - Fourier Series', url: 'https://en.wikipedia.org/wiki/Fourier_series' },
        { title: 'BetterExplained - Interactive Guide to the Fourier Transform', url: 'https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/' },
        { title: 'Wikipedia - Square Wave', url: 'https://en.wikipedia.org/wiki/Square_wave' },
    ],
    tags: ['fourier', 'series', 'square-wave', 'harmonics'],
    difficulty: 'intermediate',
    explanation: [
        '푸리에 급수(Fourier Series)는 1807년 Joseph Fourier가 열전도 문제를 연구하면서 발견한 수학적 방법으로, 임의의 주기 함수를 사인과 코사인 함수의 가중합으로 표현합니다. 일반형은 S_N(x) = a0/2 + sum(a_n*cos(2*PI*n*x/P) + b_n*sin(2*PI*n*x/P))이며, 계수 a_n, b_n은 적분으로 구합니다.',
        '이 챌린지에서는 사각파(Square Wave)의 푸리에 급수를 시각화합니다. 사각파는 홀수 고조파(harmonics)만 포함하며, y = 4*sin(theta)/PI + 4*sin(3*theta)/(3*PI) + 4*sin(5*theta)/(5*PI) + ... 으로 전개됩니다. 각 항은 회전하는 원(에피사이클)으로 표현되어, 원의 끝에 또 다른 원이 이어지는 방식으로 합성 과정을 시각적으로 보여줍니다.',
        '각 고조파는 반지름 75*(4/(n*PI))인 원으로 시각화됩니다. 첫 번째 원 위에 세 번째, 다섯 번째 원이 차례로 이어지며, 마지막 원의 끝점이 합산된 y값을 나타냅니다. wave 배열에 매 프레임 y값을 추가하고 vertex()로 파형을 그려 원 운동과 파형의 관계를 직관적으로 보여줍니다.',
        '슬라이더로 고조파 개수(n)를 1~200까지 조절합니다. n이 커질수록 사각파에 더 가까워지지만 완벽한 불연속점에서는 항상 약간의 오버슈트가 발생하는데, 이를 깁스 현상(Gibbs Phenomenon)이라 합니다. 무한 개의 고조파를 더해도 불연속점 근처에서 약 9%의 오버슈트가 남습니다.',
        '푸리에 급수는 현대 과학과 공학의 근간을 이루는 도구입니다. 오디오 신호 처리(이퀄라이저, 노이즈 캔슬링), 이미지 압축(JPEG), 통신 시스템(FM/AM 변조), 양자역학의 파동함수 분석, 의료 영상(MRI, CT) 등 거의 모든 분야에서 활용됩니다.',
    ],
})

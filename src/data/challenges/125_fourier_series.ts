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
    ],
    tags: ['fourier', 'series', 'square-wave', 'harmonics'],
    difficulty: 'intermediate',
    explanation: [
        '푸리에 급수는 주기 함수를 사인/코사인 함수의 가중합으로 표현하는 수학적 방법입니다. 사각파는 y = 4*sin(n*theta)/(n*PI)의 홀수 고조파(n=1,3,5,...)를 합산하여 근사할 수 있습니다.',
        '각 고조파는 반지름 75*(4/(n*PI))인 원으로 시각화됩니다. 첫 번째 원 위에 세 번째, 다섯 번째 원이 차례로 이어지며, 마지막 원의 끝점이 합산된 y값을 나타냅니다.',
        'wave 배열에 매 프레임 y값을 unshift()로 추가하고, translate(200,0) 후 vertex()로 파형을 그립니다. 현재 점에서 파형 시작점까지 수평선을 연결하여 원 운동과 파형의 관계를 보여줍니다.',
        '슬라이더로 고조파 개수(n)를 1~200까지 조절합니다. n이 커질수록 원이 많아지고 사각파에 더 가까워지며, 파형이 250개를 넘으면 오래된 값을 pop()하여 스크롤 효과를 만듭니다.',
    ],
})

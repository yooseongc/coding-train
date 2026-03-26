import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '130_drawing_with_fourier_transform_and_epicycles',
    number: 130,
    title: 'Drawing with Fourier Transform and Epicycles',
    categoryId: 'math-algorithms',
    description: '이산 푸리에 변환(DFT)과 에피사이클을 이용하여 임의의 경로를 원들의 회전으로 재현합니다.',
    files: ['codingtrain.js', 'fourier.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #130: Drawing with Fourier Transform and Epicycles', url: 'https://thecodingtrain.com/challenges/130-drawing-with-fourier-transform-and-epicycles' },
    ],
    versions: [
        { label: 'part1', files: [{ name: 'codingtrain.js', content: '' }, { name: 'fourier.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'fourier.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part3', files: [{ name: 'codingtrain.js', content: '' }, { name: 'complex.js', content: '' }, { name: 'fourier.js', content: '' }, { name: 'sketch.js', content: '' }] },
    ],
    tags: ['fourier', 'transform', 'epicycles', 'DFT'],
    difficulty: 'advanced',
    explanation: [
        '이산 푸리에 변환(DFT)은 시간 도메인의 이산 신호를 주파수 도메인으로 변환합니다. 임의의 경로의 x, y 좌표를 각각 DFT하면 주파수(freq), 진폭(amp), 위상(phase) 성분을 얻을 수 있습니다.',
        'fourier.js의 dft() 함수가 O(N^2) DFT를 구현합니다. 각 주파수 k에 대해 re += x[n]*cos(phi), im -= x[n]*sin(phi)를 합산하고, 진폭 sqrt(re^2+im^2)과 위상 atan2(im,re)를 계산합니다.',
        'epiCycles()에서 각 주파수 성분을 원(에피사이클)으로 시각화합니다. 진폭이 큰 순서로 정렬하여 큰 원부터 그리고, freq*time+phase로 각 원의 회전 각도를 결정합니다. X축과 Y축 에피사이클의 끝점이 만나는 교차점이 드로잉 경로가 됩니다.',
        'time이 TWO_PI를 넘으면 한 주기가 완료되어 path를 초기화합니다. drawing 배열에서 8개 간격으로 샘플링하여 계산량을 줄이고, 수직/수평 에피사이클에서 교차선을 그려 합성 과정을 직관적으로 보여줍니다.',
    ],
})

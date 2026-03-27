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
        { title: 'Wikipedia - Discrete Fourier Transform', url: 'https://en.wikipedia.org/wiki/Discrete_Fourier_transform' },
        { title: 'Wikipedia - Epicycloid', url: 'https://en.wikipedia.org/wiki/Epicycloid' },
        { title: 'Algorithm Archive - Cooley-Tukey FFT', url: 'https://www.algorithm-archive.org/contents/cooley_tukey/cooley_tukey.html' },
        { title: 'Wikipedia - Deferent and Epicycle (Korean)', url: 'https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%82%B0_%ED%91%B8%EB%A6%AC%EC%97%90_%EB%B3%80%ED%99%98' },
    ],
    versions: [
        { label: 'part1', files: [{ name: 'codingtrain.js', content: '' }, { name: 'fourier.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'fourier.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part3', files: [{ name: 'codingtrain.js', content: '' }, { name: 'complex.js', content: '' }, { name: 'fourier.js', content: '' }, { name: 'sketch.js', content: '' }] },
    ],
    tags: ['fourier', 'transform', 'epicycles', 'DFT'],
    difficulty: 'advanced',
    explanation: [
        '이산 푸리에 변환(Discrete Fourier Transform, DFT)은 유한 개의 이산 샘플을 주파수 성분으로 분해하는 수학적 도구입니다. 원래 1805년 Gauss가 소행성 궤도 계산을 위해 고안했으나, Fourier가 열전도 이론에서 체계화했습니다. 임의의 경로의 x, y 좌표를 각각 DFT하면 주파수(freq), 진폭(amp), 위상(phase) 성분을 얻을 수 있습니다.',
        '에피사이클(Epicycle)은 원래 고대 그리스 천문학에서 행성의 겉보기 역행 운동을 설명하기 위해 사용된 기하학적 모델입니다. 큰 원 위에 작은 원이 굴러가는 구조로, 푸리에 급수의 각 항이 바로 하나의 에피사이클에 대응합니다. 이론적으로 무한히 많은 에피사이클을 조합하면 임의의 닫힌 경로를 완벽히 재현할 수 있습니다.',
        'fourier.js의 dft() 함수가 O(N^2) DFT를 구현합니다. 각 주파수 k에 대해 re += x[n]*cos(phi), im -= x[n]*sin(phi)를 합산하고, 진폭 sqrt(re^2+im^2)과 위상 atan2(im,re)를 계산합니다. 실제 응용에서는 Cooley-Tukey FFT(Fast Fourier Transform) 알고리즘으로 O(N*logN)에 계산합니다.',
        'epiCycles()에서 각 주파수 성분을 원(에피사이클)으로 시각화합니다. 진폭이 큰 순서로 정렬하여 큰 원부터 그리고, freq*time+phase로 각 원의 회전 각도를 결정합니다. X축과 Y축 에피사이클의 끝점이 만나는 교차점이 드로잉 경로가 됩니다.',
        'Part3에서는 x, y를 별도로 DFT하는 대신 복소수(complex number)로 결합하여 단일 DFT를 수행합니다. 이 방식은 에피사이클 하나의 체인으로 경로를 그릴 수 있어 더 우아하며, 사용자가 직접 그린 경로를 에피사이클로 재현하는 인터랙티브 버전으로 확장됩니다.',
        'DFT와 에피사이클의 관계는 신호 처리, 음성 인식, 이미지 압축(JPEG, MP3), 의료 영상(MRI), 주식 시장 분석 등 현대 기술의 근간을 이룹니다. 3Blue1Brown의 유명한 시각화 영상으로도 잘 알려진 이 개념은 수학과 예술의 아름다운 교차점을 보여줍니다.',
    ],
})

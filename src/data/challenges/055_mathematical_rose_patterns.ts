import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '055_mathematical_rose_patterns',
    number: 55,
    title: 'Mathematical Rose Patterns',
    categoryId: 'creative-coding',
    description: '극좌표에서 r=cos(k*theta)로 장미(rhodonea) 곡선을 그리며, n/d 비율로 패턴을 조절합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #55: Mathematical Rose Patterns', url: 'https://thecodingtrain.com/challenges/55-mathematical-rose-patterns' },
    ],
    tags: ['rose', 'polar', 'math', 'pattern'],
    difficulty: 'beginner',
    explanation: [
        '장미 곡선(rhodonea)은 극좌표에서 r=a*cos(k*theta)로 정의됩니다. k=n/d로 두 슬라이더(1~20)로 분자와 분모를 조절하여 다양한 꽃잎 패턴을 생성합니다.',
        'cos(k*a)로 반지름을 계산하고, r*cos(a), r*sin(a)로 직교좌표로 변환합니다. beginShape()/vertex()로 곡선을 그리며, a를 0부터 TWO_PI * reduceDenominator(n,d)까지 0.02 간격으로 순회합니다.',
        'reduceDenominator() 함수는 재귀적 GCD(최대공약수)를 구해 곡선이 닫히는데 필요한 최소 회전 수를 계산합니다. n/d가 기약분수가 아니면 더 많은 회전이 필요합니다.',
        'sliderD.input(draw)과 sliderN.input(draw)으로 슬라이더 변경 시 draw()를 호출하고, noLoop()으로 불필요한 연속 렌더링을 방지합니다.',
    ],
})

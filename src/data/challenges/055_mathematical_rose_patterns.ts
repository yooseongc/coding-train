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
        { title: 'Wikipedia: Rose (mathematics)', url: 'https://en.wikipedia.org/wiki/Rose_(mathematics)' },
        { title: 'p5.js Reference: cos()', url: 'https://p5js.org/reference/p5/cos/' },
        { title: 'Wikipedia: Polar Coordinate System', url: 'https://en.wikipedia.org/wiki/Polar_coordinate_system' },
    ],
    tags: ['rose', 'polar', 'math', 'pattern'],
    difficulty: 'beginner',
    explanation: [
        '장미 곡선(rhodonea curve)은 이탈리아 수학자 Guido Grandi가 1723~1728년에 연구한 극좌표 곡선입니다. 극좌표에서 r = a*cos(k*theta) 또는 r = a*sin(k*theta)로 정의되며, a는 진폭(amplitude), k는 각진동수(angular frequency)입니다. k값에 따라 다양한 꽃잎 모양이 생성됩니다.',
        'k가 정수일 때 꽃잎 수가 결정됩니다. k가 홀수이면 k개, 짝수이면 2k개의 꽃잎이 생깁니다. k가 유리수(n/d)이면 더 복잡한 패턴이 나타나며, k가 무리수이면 곡선이 닫히지 않고 원 전체를 채웁니다. 이 챌린지에서는 두 슬라이더(1~20)로 n과 d를 조절하여 다양한 패턴을 탐구합니다.',
        'cos(k*a)로 반지름을 계산하고, r*cos(a), r*sin(a)로 직교좌표(Cartesian coordinates)로 변환합니다. beginShape()/vertex()로 곡선을 그리며, a를 0부터 TWO_PI * reduceDenominator(n,d)까지 0.02 간격으로 순회합니다.',
        'reduceDenominator() 함수는 유클리드 호제법(Euclidean algorithm)으로 GCD(최대공약수)를 구해 곡선이 닫히는 데 필요한 최소 회전 수를 계산합니다. 예를 들어 n/d = 6/4이면 기약분수 3/2이므로 분모 2만큼 회전해야 닫힙니다.',
        '장미 곡선은 순수 수학의 아름다움을 보여주는 대표적인 예로, 안테나 방사 패턴(radiation pattern) 설계에서도 유사한 극좌표 곡선이 사용됩니다. 또한 스피로그래프(Spirograph) 완구로 만들 수 있는 패턴과도 밀접한 관련이 있으며, 하모노그래프(harmonograph) 예술에서도 이러한 수학적 곡선이 활용됩니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '096_visualizing_the_digits_of_pi',
    number: 96,
    title: 'Visualizing the Digits of Pi',
    categoryId: 'data-visualization',
    description: 'PI의 100만 자리 숫자를 원 위의 점으로 시각화합니다. 연속된 두 숫자를 원 위의 각도로 매핑하여 선으로 연결합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #96: Visualizing the Digits of Pi', url: 'https://thecodingtrain.com/challenges/96-visualizing-the-digits-of-pi' },
    ],
    tags: ['pi', 'digits', 'visualization', 'path'],
    difficulty: 'beginner',
    explanation: [
        'loadStrings()로 PI의 100만 자리를 텍스트 파일에서 로드하고, split()으로 각 숫자를 배열로 변환합니다. 원의 둘레를 10등분하여 0~9의 숫자를 각도 위치에 매핑합니다.',
        'draw()에서 연속된 두 숫자(digit, nextDigit)를 0~TWO_PI 범위의 각도로 map()하고, random(-diff, diff)로 약간의 변위를 줍니다. 두 각도의 원 위 좌표를 line()으로 반투명(alpha=50)하게 연결합니다.',
        '수만 개의 반투명 선이 겹치면서 숫자 쌍의 빈도에 따라 밝기가 달라져, PI 숫자열의 분포 패턴을 시각적으로 드러냅니다.',
    ],
})

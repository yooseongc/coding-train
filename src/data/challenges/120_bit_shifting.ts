import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '120_bit_shifting',
    number: 120,
    title: 'Bit Shifting',
    categoryId: 'math-algorithms',
    description: '비트 시프트 연산(<<, >>)을 시각적으로 보여줍니다. 8비트 이진수의 좌/우 시프트와 수동 비트 토글을 지원합니다.',
    files: ['bit.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #120: Bit Shifting', url: 'https://thecodingtrain.com/challenges/120-bit-shifting' },
    ],
    tags: ['bit-shift', 'binary', 'bitwise', 'operation'],
    difficulty: 'beginner',
    explanation: [
        '비트 시프트는 이진수의 모든 비트를 좌측(<<) 또는 우측(>>)으로 이동하는 연산입니다. 좌시프트는 값을 2배로, 우시프트는 절반으로 만드는 효과가 있습니다.',
        '<< 버튼은 unshiftBits()를 호출하여 (dec << 1) % 256으로 좌시프트합니다. >> 버튼은 shiftBits()로 dec >> 1 우시프트합니다. 256으로 나머지 연산하여 8비트 범위를 유지합니다.',
        '119번과 동일한 Bit 클래스를 재사용합니다. 클릭으로 개별 비트를 토글할 수 있고, getBinaryString()으로 8개 비트의 상태를 문자열로 합쳐 변환합니다.',
        'createP()로 "이진수 -> 십진수" 변환 결과를 실시간 표시합니다. 비트 시프트가 곱셈/나눗셈과 동일한 결과를 만드는 것을 시각적으로 확인할 수 있습니다.',
    ],
})

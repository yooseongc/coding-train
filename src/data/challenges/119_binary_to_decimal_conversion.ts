import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '119_binary_to_decimal_conversion',
    number: 119,
    title: 'Binary to Decimal Conversion',
    categoryId: 'math-algorithms',
    description: '8비트 2진수와 10진수 변환기를 만듭니다. Bit 클래스로 인터랙티브한 비트 토글 UI를 구현합니다.',
    files: ['bit.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #119: Binary to Decimal Conversion', url: 'https://thecodingtrain.com/challenges/119-binary-to-decimal-conversion' },
    ],
    tags: ['binary', 'decimal', 'conversion', 'bits'],
    difficulty: 'beginner',
    explanation: [
        'Bit 클래스는 각 비트의 위치, 크기, 상태(0/1)를 관리합니다. 클릭으로 toggle()하여 개별 비트를 반전할 수 있습니다. 8개의 Bit 객체를 가로로 배열하여 8비트(1바이트)를 표현합니다.',
        'convertBaseToDecimal()은 진법 변환 함수로, 각 자릿수에 base^위치를 곱하여 합산합니다. 2진수뿐 아니라 임의의 진법을 10진수로 변환할 수 있는 범용 함수입니다.',
        'convertDemicalToBase()는 역변환으로, 나눗셈 반복법을 사용합니다. 나머지를 앞에 쌓고(unshift), 몫이 0이 될 때까지 반복합니다. padStart(8, "0")으로 8자리로 맞춥니다.',
        'Random 버튼을 누르면 0~254의 랜덤 수를 2진수로 변환하여 비트를 설정합니다. createP()로 "이진수 -> 십진수" 변환 결과를 실시간 표시합니다.',
    ],
})

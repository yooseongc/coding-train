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
        { title: 'Wikipedia - Binary number', url: 'https://en.wikipedia.org/wiki/Binary_number' },
        { title: 'Wikipedia - Positional notation', url: 'https://en.wikipedia.org/wiki/Positional_notation' },
        { title: 'Wikipedia - Byte', url: 'https://en.wikipedia.org/wiki/Byte' },
    ],
    tags: ['binary', 'decimal', 'conversion', 'bits'],
    difficulty: 'beginner',
    explanation: [
        '이진수(Binary Number)는 0과 1 두 개의 숫자만 사용하는 기수법으로, 모든 디지털 컴퓨터의 기반입니다. 1703년 고트프리트 라이프니츠(Gottfried Leibniz)가 현대적 이진법을 체계화했으며, 전기 스위치의 켜짐/꺼짐 상태와 자연스럽게 대응되어 컴퓨터 설계의 핵심이 되었습니다.',
        '위치 기수법(Positional Notation)에서 각 자릿수의 값은 그 위치에 해당하는 밑(base)의 거듭제곱을 곱한 것입니다. 이진수 10110101을 10진수로 변환하면 1*128 + 0*64 + 1*32 + 1*16 + 0*8 + 1*4 + 0*2 + 1*1 = 181이 됩니다. 이 원리는 8진법, 16진법 등 모든 기수법에 동일하게 적용됩니다.',
        'Bit 클래스는 각 비트의 위치, 크기, 상태(0/1)를 관리합니다. 클릭으로 toggle()하여 개별 비트를 반전할 수 있습니다. 8개의 Bit 객체를 가로로 배열하여 8비트, 즉 1바이트(Byte)를 표현하며, 0에서 255까지 256가지 값을 나타낼 수 있습니다.',
        'convertBaseToDecimal()은 범용 진법 변환 함수로, 각 자릿수에 base^위치를 곱하여 합산합니다. convertDecimalToBase()는 역변환으로, 나눗셈 반복법을 사용합니다. 나머지를 앞에 쌓고(unshift), 몫이 0이 될 때까지 반복합니다.',
        '16진법(Hexadecimal)은 프로그래밍에서 이진수의 축약 표기로 자주 사용됩니다. 4비트가 정확히 하나의 16진 숫자에 대응하므로(예: 1010 = A), 8비트 바이트를 2자리 16진수로 간결하게 표현할 수 있습니다. 색상 코드(#FF00FF), 메모리 주소, MAC 주소 등이 16진법을 사용합니다.',
        '이진법의 이해는 컴퓨터 과학의 기초입니다. 부동소수점(Floating Point) 표현, 문자 인코딩(ASCII, UTF-8), 네트워크 서브넷 마스크, 파일 권한(chmod) 등 일상적인 프로그래밍에서 이진수와 진법 변환이 빈번하게 사용됩니다.',
    ],
})

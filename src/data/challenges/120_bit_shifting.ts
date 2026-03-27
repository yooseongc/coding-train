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
        { title: 'Wikipedia - Bitwise operation', url: 'https://en.wikipedia.org/wiki/Bitwise_operation' },
        { title: 'Wikipedia - Arithmetic shift', url: 'https://en.wikipedia.org/wiki/Arithmetic_shift' },
        { title: 'MDN - Bitwise operators', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_shift_operators' },
    ],
    tags: ['bit-shift', 'binary', 'bitwise', 'operation'],
    difficulty: 'beginner',
    explanation: [
        '비트 시프트(Bit Shifting)는 이진수의 모든 비트를 좌측(<<) 또는 우측(>>)으로 이동하는 비트 단위 연산(Bitwise Operation)입니다. CPU의 가장 기본적인 연산 중 하나로, 곱셈이나 나눗셈보다 빠르게 수행됩니다. 좌시프트 1회는 2배 곱셈, 우시프트 1회는 2로 나눈 정수 나눗셈과 동일한 효과를 가집니다.',
        '비트 연산은 컴퓨터 과학의 저수준(Low-Level) 프로그래밍에서 핵심적인 역할을 합니다. 운영체제의 권한 플래그(Permission Flags), 네트워크 프로토콜의 헤더 파싱, 그래픽 프로그래밍의 색상 조작(RGB 채널 추출), 암호학의 해시 함수 등에서 비트 연산이 필수적으로 사용됩니다.',
        '<< 버튼은 unshiftBits()를 호출하여 (dec << 1) % 256으로 좌시프트합니다. >> 버튼은 shiftBits()로 dec >> 1 우시프트합니다. 256(2^8)으로 나머지 연산하여 8비트 범위(0~255)를 유지하며, 좌시프트 시 최상위 비트가 사라지고 우시프트 시 최하위 비트가 사라집니다.',
        'JavaScript에서 >> 연산자는 부호 있는 우시프트(Sign-Propagating Right Shift)로 최상위 부호 비트를 유지하며, >>> 연산자는 부호 없는 우시프트(Zero-Fill Right Shift)로 항상 0으로 채웁니다. 이 차이는 음수를 다룰 때 중요합니다.',
        '119번과 동일한 Bit 클래스를 재사용하여 코드 재사용성을 보여줍니다. 클릭으로 개별 비트를 토글하고, getBinaryString()으로 비트 상태를 문자열로 합쳐 변환 결과를 실시간 표시합니다.',
        '비트 연산의 실용적 응용으로는 n << k로 n * 2^k 계산, n >> k로 n / 2^k 정수 나눗셈, n & 1로 홀짝 판별, n & (n-1)로 2의 거듭제곱 확인, XOR 스왑 등이 있습니다. 비트 마스킹(Bit Masking)은 여러 불리언 플래그를 하나의 정수에 효율적으로 저장하는 기법입니다.',
    ],
})

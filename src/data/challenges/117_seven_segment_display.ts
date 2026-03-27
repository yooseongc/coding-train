import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '117_seven_segment_display',
    number: 117,
    title: 'Seven Segment Display',
    categoryId: 'drawing-animation',
    description: '7세그먼트 디스플레이를 p5.js로 구현합니다. 비트 연산으로 각 세그먼트의 on/off를 결정하여 00~99 카운터를 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #117: Seven Segment Display', url: 'https://thecodingtrain.com/challenges/117-seven-segment-display' },
        { title: 'Wikipedia - Seven-segment Display', url: 'https://en.wikipedia.org/wiki/Seven-segment_display' },
        { title: 'p5.js Reference - rect()', url: 'https://p5js.org/reference/p5/rect/' },
        { title: 'MDN - 비트 연산자 (Bitwise Operators)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND' },
    ],
    tags: ['seven-segment', 'display', 'digital', 'counter'],
    difficulty: 'beginner',
    explanation: [
        '7세그먼트 디스플레이(Seven-segment display)는 1908년 특허가 출원된 이래 계산기, 디지털 시계, 전자레인지, 엘리베이터 등에 널리 사용되는 전자 표시 장치입니다. 도트 매트릭스(dot matrix) 디스플레이보다 단순하면서도 0~9 숫자와 일부 알파벳을 표현할 수 있어, 임베디드 시스템에서 여전히 활발히 사용됩니다.',
        '각 숫자를 7비트 16진수로 인코딩합니다: 0=0x7E(1111110), 1=0x30(0110000), 2=0x6D(1101101) 등. 4비트(0~15)로 0~9뿐 아니라 A~F 16진수 문자도 표현할 수 있어, BCD(Binary-Coded Decimal) 디코더와 함께 사용됩니다.',
        'getColor(value, shift)에서 비트 시프트(>>)와 비트 AND(&1)로 특정 세그먼트의 on/off를 판별합니다. 비트 연산(bitwise operation)은 하드웨어 레벨의 데이터 처리를 소프트웨어로 시뮬레이션하는 것으로, 임베디드 프로그래밍과 저수준 최적화에서 핵심적인 기법입니다.',
        'on 상태이면 밝은 빨강(alpha=295), off면 어두운 빨강(alpha=40)으로 표시하여 실제 LED의 잔광(afterglow) 효과를 시뮬레이션합니다. 이 기법은 스큐어모피즘(skeuomorphism) 디자인의 일종으로, 물리적 장치의 특성을 디지털로 재현합니다.',
        'drawDigit()에서 7개의 둥근 사각형(rect with round corners)으로 세그먼트를 그립니다. A(상단), B(우상), C(우하), D(하단), E(좌하), F(좌상), G(중앙)의 표준 배치를 따릅니다. 이 배치 규칙은 전자 부품 업계에서 국제적으로 통일된 표준입니다.',
        'frameRate(3)으로 느리게 카운트하며, num을 (num+1)%100으로 순환합니다. 십의 자리가 0이면 빈 표시(0x00)로 처리하여 선행 0을 숨기는 자연스러운 두 자리 디스플레이를 구현합니다. 이를 확장하면 시계, 스코어보드, 온도 표시기 등 다양한 디지털 계기판을 만들 수 있습니다.',
    ],
})

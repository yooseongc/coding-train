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
    ],
    tags: ['seven-segment', 'display', 'digital', 'counter'],
    difficulty: 'beginner',
    explanation: [
        '7세그먼트 디스플레이는 A~G 7개의 직선 세그먼트로 0~9 숫자를 표현합니다. 각 숫자를 7비트 16진수로 인코딩합니다: 0=0x7E, 1=0x30, 2=0x6D ... 9=0x7B.',
        'getColor(value, shift)에서 비트 시프트(>>)와 비트 AND(&1)로 특정 세그먼트의 on/off를 판별합니다. on이면 밝은 빨강(alpha=295), off면 어두운 빨강(alpha=40)으로 실제 LED 느낌을 줍니다.',
        'drawDigit()에서 7개의 둥근 사각형(rect with round corners)으로 세그먼트를 그립니다. A(상단), B(우상), C(우하), D(하단), E(좌하), F(좌상), G(중앙) 위치에 배치합니다.',
        'frameRate(3)으로 느리게 카운트하며, num을 (num+1)%100으로 순환합니다. 십의 자리가 0이면 빈 표시(0x00)로 두 자리 디스플레이를 구현합니다.',
    ],
})

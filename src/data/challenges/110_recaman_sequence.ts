import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '110_recaman_sequence',
    number: 110,
    title: "Recaman's Sequence",
    categoryId: 'math-algorithms',
    description: "레카만 수열을 호(arc)로 시각화하고 사운드로 표현합니다. a(n-1)-n이 양수이고 미사용이면 빼고, 아니면 더하는 규칙입니다.",
    files: ['sketch.js'],
    libraries: ['p5.sound.min.js'],
    references: [
        { title: "Coding Challenge #110: Recaman's Sequence", url: 'https://thecodingtrain.com/challenges/110-recamans-sequence' },
    ],
    tags: ['recaman', 'sequence', 'arc', 'number-theory'],
    difficulty: 'intermediate',
    explanation: [
        "레카만 수열은 a(0)=0에서 시작하여, a(n-1)-n이 양수이고 수열에 없으면 a(n)=a(n-1)-n, 그렇지 않으면 a(n)=a(n-1)+n으로 정의됩니다. numbers 배열로 이미 사용된 수를 추적합니다.",
        '각 스텝을 Arc 객체로 시각화합니다. 시작값과 끝값의 중점을 원의 중심으로, 두 값의 차이를 지름으로 하는 반원(arc)을 그립니다. 홀수/짝수 스텝에 따라 위/아래 반원을 번갈아 그려 리듬감을 줍니다.',
        'biggest값에 맞춰 scale()을 lerp로 부드럽게 조절하여 수열이 커져도 화면에 맞습니다. p5.Oscillator와 p5.Envelope로 각 값에 대응하는 피아노 주파수(f(n) = 2^((n-49)/12) * 440)를 재생합니다.',
        'frameRate(5)로 천천히 진행하며, 체크박스로 음소거를 토글하고 Restart 버튼으로 수열을 리셋할 수 있습니다. count >= width이면 노루프합니다.',
    ],
})

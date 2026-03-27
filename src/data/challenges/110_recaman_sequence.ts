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
        { title: "Wikipedia - Recaman's sequence", url: 'https://en.wikipedia.org/wiki/Recam%C3%A1n%27s_sequence' },
        { title: "MathWorld - Recaman's Sequence", url: 'https://mathworld.wolfram.com/RecamansSequence.html' },
        { title: 'OEIS - A005132', url: 'https://oeis.org/A005132' },
        { title: 'Wikipedia - Piano key frequencies', url: 'https://en.wikipedia.org/wiki/Piano_key_frequencies' },
    ],
    tags: ['recaman', 'sequence', 'arc', 'number-theory'],
    difficulty: 'intermediate',
    explanation: [
        "레카만 수열(Recaman's Sequence)은 콜롬비아 수학자 베르나르도 레카만 산토스(Bernardo Recaman Santos, 1954~)가 고안한 정수 수열입니다. a(0)=0에서 시작하여, a(n-1)-n이 양수이고 아직 수열에 나오지 않았으면 빼고, 그렇지 않으면 더하는 간단한 규칙이지만, 예측하기 어려운 복잡한 패턴을 만들어냅니다.",
        '이 수열의 미해결 문제 중 하나는 모든 자연수가 수열에 등장하는지 여부입니다. OEIS(On-Line Encyclopedia of Integer Sequences)의 A005132로 등록되어 있으며, 컴퓨터 탐색으로 처음 10^15개 항까지 확인했지만 아직 증명되지 않았습니다. 수열의 처음 몇 항은 0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, ...입니다.',
        '각 스텝을 Arc 객체로 시각화합니다. 시작값과 끝값의 중점을 원의 중심으로, 두 값의 차이를 지름으로 하는 반원(arc)을 그립니다. 홀수/짝수 스텝에 따라 위/아래 반원을 번갈아 그려 수직선 위에서 앞뒤로 도약하는 수열의 움직임을 아름다운 곡선 패턴으로 표현합니다.',
        'p5.Oscillator와 p5.Envelope로 각 값에 대응하는 피아노 주파수를 재생합니다. 피아노 건반 주파수 공식 f(n) = 2^((n-49)/12) * 440Hz에서 A4(49번째 건반)가 440Hz의 기준음이 됩니다. 이 공식은 12평균율(Equal Temperament) 음률 체계를 따르며, 한 옥타브에 12개의 균등한 반음 간격을 가집니다.',
        'biggest값에 맞춰 scale()을 lerp()로 부드럽게 조절하여 수열이 커져도 화면에 맞습니다. lerp(선형 보간)을 사용하면 갑작스러운 줌 대신 부드러운 스케일 전환이 이루어져 시각적으로 자연스럽습니다.',
        '수열의 시각화와 소리화(Sonification)는 수학적 패턴을 직관적으로 이해하는 강력한 도구입니다. Numberphile 등의 수학 유튜브 채널에서 레카만 수열의 아름다운 시청각적 표현이 큰 인기를 끌었으며, 수학과 예술의 교차점을 보여주는 좋은 예시입니다.',
    ],
})

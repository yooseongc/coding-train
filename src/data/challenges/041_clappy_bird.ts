import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '041_clappy_bird',
    number: 41,
    title: 'Clappy Bird',
    categoryId: 'games',
    description: '마이크 입력의 볼륨을 감지하여 박수 소리로 새를 조종하는 Flappy Bird 변형입니다.',
    files: ['bird.js', 'pipe.js', 'sketch.js'],
    libraries: ['p5.sound.min.js'],
    references: [
        { title: 'Coding Challenge #41: Clappy Bird', url: 'https://thecodingtrain.com/challenges/41-clappy-bird' },
        { title: 'p5.sound Library - p5.AudioIn', url: 'https://p5js.org/reference/p5.sound/p5.AudioIn/' },
        { title: 'Web Audio API - MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API' },
        { title: 'Hysteresis - Wikipedia', url: 'https://en.wikipedia.org/wiki/Hysteresis' },
    ],
    tags: ['game', 'sound', 'microphone', 'flappy'],
    difficulty: 'intermediate',
    explanation: [
        'Clappy Bird는 Flappy Bird의 변형으로, 마이크 입력을 활용한 대체 인터페이스(Alternative Interface) 게임입니다. 키보드나 터치 대신 소리로 게임을 조작하는 방식은 접근성(Accessibility) 관점에서도 의미가 있으며, 물리적 컨트롤러 없이도 게임을 즐길 수 있는 가능성을 보여줍니다.',
        'p5.AudioIn()으로 마이크 입력을 받아 mic.getLevel()로 실시간 볼륨(RMS, Root Mean Square)을 측정합니다. 이는 Web Audio API를 기반으로 동작하며, 브라우저가 사용자 제스처(버튼 클릭) 후에만 오디오 컨텍스트를 활성화하는 보안 정책을 따릅니다.',
        '두 개의 슬라이더(sliderTop, sliderBottom)로 볼륨 임계값을 조절합니다. 볼륨이 thresholdTop을 초과하면 bird.up()을 호출하고, thresholdBottom 아래로 내려가면 clapping 상태를 해제하는 히스테리시스(Hysteresis) 방식입니다. 히스테리시스는 신호 처리에서 노이즈로 인한 잦은 상태 전환(chattering)을 방지하는 핵심 기법입니다.',
        '화면 오른쪽에 초록색 막대로 현재 볼륨을 시각화하고, 빨간 선(thresholdTop)과 파란 선(thresholdBottom)으로 임계값을 표시합니다. map()으로 볼륨(0~1)을 화면 좌표로 변환하는 것은 정규화(Normalization)와 선형 보간(Linear Interpolation)의 실용적 적용입니다.',
        'clapping 플래그로 한 번의 박수에 한 번만 bird.up()이 호출되도록 합니다. 볼륨이 하한선 아래로 내려가야 다음 박수를 인식하여 연속 트리거를 방지합니다. 이 엣지 검출(Edge Detection) 로직은 디지털 회로의 상승 엣지 트리거(Rising Edge Trigger)와 동일한 원리입니다.',
        '이 프로젝트는 음성/소리 인식 기반 인터페이스 설계의 입문 과제로 적합합니다. 실제 응용으로는 장애인을 위한 보조 입력 장치, 핸즈프리 제어 시스템, 음악 기반 인터랙티브 아트 등에 유사한 기술이 활용됩니다.',
    ],
})

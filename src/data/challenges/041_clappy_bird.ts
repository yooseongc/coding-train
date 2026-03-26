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
    ],
    tags: ['game', 'sound', 'microphone', 'flappy'],
    difficulty: 'intermediate',
    explanation: [
        'p5.AudioIn()으로 마이크 입력을 받아 mic.getLevel()로 실시간 볼륨을 측정합니다. MIC 버튼 클릭 시 mic.start()로 마이크를 활성화하며, 스페이스바로도 조작 가능합니다.',
        '두 개의 슬라이더(sliderTop, sliderBottom)로 볼륨 임계값을 조절합니다. 볼륨이 thresholdTop을 초과하면 bird.up()을 호출하고, thresholdBottom 아래로 내려가면 clapping 상태를 해제하는 히스테리시스 방식입니다.',
        '화면 오른쪽에 초록색 막대로 현재 볼륨을 시각화하고, 빨간 선(thresholdTop)과 파란 선(thresholdBottom)으로 임계값을 표시합니다. map()으로 볼륨(0~1)을 화면 좌표로 변환합니다.',
        'clapping 플래그로 한 번의 박수에 한 번만 bird.up()이 호출되도록 합니다. 볼륨이 하한선 아래로 내려가야 다음 박수를 인식하여 연속 트리거를 방지합니다.',
    ],
})

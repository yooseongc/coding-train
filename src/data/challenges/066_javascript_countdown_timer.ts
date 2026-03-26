import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '066_javascript_countdown_timer',
    number: 66,
    title: 'JavaScript Countdown Timer',
    categoryId: 'drawing-animation',
    description: 'URL 파라미터로 분 단위 시간을 받아 카운트다운하고, 종료 시 효과음을 재생합니다.',
    files: ['sketch.js'],
    libraries: ['p5.sound.min.js'],
    bodyHtml: '<p id="timer" style="font-size: 3rem;"></p>',
    references: [
        { title: 'Coding Challenge #66: JavaScript Countdown Timer', url: 'https://thecodingtrain.com/challenges/66-javascript-countdown-timer' },
    ],
    tags: ['timer', 'countdown', 'time', 'event'],
    difficulty: 'beginner',
    explanation: [
        'getURLParams()로 쿼리 파라미터(?minute=N)에서 분 단위 시간을 읽어 timeLeft에 초 단위로 변환합니다. noCanvas()로 캔버스 없이 DOM 요소(#timer)로 시간을 표시합니다.',
        'setInterval(updateTime, 1000)으로 1초마다 updateTime을 호출합니다. millis()로 경과 시간을 측정하고 floor()로 초 단위로 변환하여 남은 시간(timeLeft - currentTime)을 계산합니다.',
        'formatTime()에서 floor(totalSeconds/60)으로 분, totalSeconds%60으로 초를 분리하고, nf(value, 2)로 2자리 제로패딩 포맷(MM:SS)을 만듭니다.',
        '남은 시간이 0이 되면 loadSound()로 미리 로드한 ding.mp3를 재생하고 clearInterval()로 타이머를 중지합니다.',
    ],
})

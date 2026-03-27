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
        { title: 'MDN - setInterval()', url: 'https://developer.mozilla.org/en-US/docs/Web/API/setInterval' },
        { title: 'p5.js Reference - millis()', url: 'https://p5js.org/reference/p5/millis/' },
        { title: 'MDN - clearInterval()', url: 'https://developer.mozilla.org/en-US/docs/Web/API/clearInterval' },
    ],
    tags: ['timer', 'countdown', 'time', 'event'],
    difficulty: 'beginner',
    explanation: [
        'JavaScript의 타이머 API는 웹 애플리케이션에서 시간 기반 동작을 구현하는 핵심 도구입니다. setInterval()은 지정된 간격으로 함수를 반복 호출하고, setTimeout()은 한 번만 호출합니다. 이 챌린지에서는 setInterval()로 1초마다 카운트다운을 업데이트하는 타이머를 만듭니다.',
        'getURLParams()로 쿼리 파라미터(?minute=N)에서 분 단위 시간을 읽어 timeLeft에 초 단위로 변환합니다. noCanvas()로 캔버스 없이 DOM 요소(#timer)만으로 시간을 표시합니다. p5.js는 캔버스 기반 그래픽뿐 아니라 DOM 조작도 지원하여 일반 웹 UI 개발에도 활용할 수 있습니다.',
        'millis()로 프로그램 시작 이후의 경과 시간(밀리초)을 측정하고 floor()로 초 단위로 변환하여 남은 시간을 계산합니다. setInterval의 간격은 정확하지 않을 수 있으므로(JavaScript의 이벤트 루프 특성상), millis() 기반의 절대 시간 측정이 더 정확한 방식입니다.',
        'formatTime()에서 floor(totalSeconds/60)으로 분, totalSeconds%60으로 초를 분리하고, nf(value, 2)로 2자리 제로패딩 포맷(MM:SS)을 만듭니다. nf()는 p5.js의 숫자 포맷팅 함수로, JavaScript의 padStart()와 유사한 역할을 합니다.',
        '남은 시간이 0이 되면 preload()에서 미리 로드한 ding.mp3를 p5.sound 라이브러리로 재생하고 clearInterval()로 타이머를 중지합니다. 오디오 파일을 preload()에서 미리 로드하는 것은 재생 지연을 방지하는 중요한 패턴입니다.',
        '실제 프로덕션 타이머 앱에서는 Web Workers를 사용하여 백그라운드 탭에서도 정확하게 동작하게 하거나, requestAnimationFrame과 결합하여 시각적 피드백을 더 부드럽게 만들 수 있습니다. Notification API를 활용하면 브라우저 알림으로 타이머 종료를 알릴 수도 있습니다.',
    ],
})

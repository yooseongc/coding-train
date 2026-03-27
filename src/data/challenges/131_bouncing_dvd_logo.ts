import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '131_bouncing_dvd_logo',
    number: 131,
    title: 'Bouncing DVD Logo',
    categoryId: 'creative-coding',
    description: 'DVD 로고가 화면 벽에 부딪히며 튕기고, 충돌할 때마다 색상이 변하는 애니메이션입니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #131: Bouncing DVD Logo', url: 'https://thecodingtrain.com/challenges/131-bouncing-dvd-logo' },
        { title: 'Wikipedia - DVD Video (Screensaver)', url: 'https://en.wikipedia.org/wiki/DVD-Video' },
        { title: 'Wikipedia - Screensaver', url: 'https://en.wikipedia.org/wiki/Screensaver' },
        { title: 'p5.js Reference - tint()', url: 'https://p5js.org/reference/p5/tint/' },
    ],
    tags: ['bouncing', 'DVD', 'logo', 'animation'],
    difficulty: 'beginner',
    explanation: [
        'DVD 플레이어의 화면보호기(screensaver)를 재현한 챌린지입니다. 2000년대 DVD 플레이어가 대기 상태일 때 로고가 화면을 떠다니며 벽에 부딪힐 때마다 색상이 바뀌는 이 화면보호기는 인터넷 밈으로도 유명합니다. 특히 미국 TV시리즈 The Office에서 직원들이 로고가 정확히 모서리에 닿는 순간을 기다리는 장면이 화제가 되었습니다.',
        '물리학적으로 이 애니메이션은 완전 탄성 충돌(elastic collision)의 1차원 반사를 구현합니다. bounce() 함수에서 x, y 위치와 이미지 크기를 비교하여 경계 충돌을 감지하고, 충돌한 축의 속도 부호를 반전시킵니다. 이는 당구공의 쿠션 반사나 빛의 거울 반사와 동일한 원리입니다.',
        'tint(r, g, b)로 이미지에 색조를 입혀 로고 색상을 변경합니다. pickColor()에서 RGB 각 채널을 100~255 범위로 제한하여 너무 어두운 색이 나오지 않도록 합니다. preload()에서 dvd_logo.png를 로드하고 windowWidth/windowHeight로 전체 화면 캔버스를 생성합니다.',
        '수학적으로 로고가 정확히 모서리에 닿으려면 화면의 가로/세로 비율과 로고의 시작 위치, 속도 비율이 특정 조건을 만족해야 합니다. 로고의 이동 경로는 사실상 토러스(torus) 위의 직선 운동과 동치이며, 속도 비율이 유리수이면 로고는 유한 시간 내에 모서리에 도달합니다.',
        '화면보호기는 원래 CRT 모니터의 번인(burn-in) 현상을 방지하기 위해 개발되었습니다. 같은 이미지가 오래 표시되면 형광체가 영구적으로 변색되는 문제를 해결하기 위해 화면의 내용을 주기적으로 변경하는 방식입니다. LCD/OLED 시대에는 기술적 필요성이 줄었지만, 장식적 요소로 여전히 사랑받고 있습니다.',
    ],
})

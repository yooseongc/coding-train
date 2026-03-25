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
    ],
    tags: ['bouncing', 'DVD', 'logo', 'animation'],
    difficulty: 'beginner',
    explanation: [
        'DVD 플레이어의 화면보호기를 재현한 챌린지입니다. DVD 로고 이미지가 대각선으로 이동하며 벽에 부딪힐 때마다 반사되고, 랜덤 색상으로 변합니다.',
        'bounce() 함수에서 x, y 위치와 이미지 크기를 비교하여 벽 충돌을 감지합니다. 충돌 시 해당 축의 속도(xspeed/yspeed)를 반전시키고 pickColor()로 RGB 각 채널을 100~255 범위에서 랜덤 생성합니다.',
        'tint(r, g, b)로 이미지에 색조를 입혀 로고 색상을 변경합니다. preload()에서 dvd_logo.png를 로드하고, windowWidth/windowHeight로 전체 화면 캔버스를 생성합니다.',
        'x, y 위치는 매 프레임 xspeed(5), yspeed(5)씩 증가하며, background(0)으로 검은 배경을 유지합니다. 로고가 정확히 모서리에 닿는 순간을 기다리는 것이 이 화면보호기의 묘미입니다.',
    ],
})

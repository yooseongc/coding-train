import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '088_snowfall',
    number: 88,
    title: 'Snowfall',
    categoryId: 'creative-coding',
    description: '눈 내리는 효과를 파티클 시스템으로 구현합니다. 스프라이트 시트 텍스처와 Perlin noise 바람, 패럴랙스 효과를 적용합니다.',
    files: ['snowflake.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #88: Snowfall', url: 'https://thecodingtrain.com/challenges/88-snowfall' },
    ],
    tags: ['snow', 'particles', 'texture', 'winter'],
    difficulty: 'beginner',
    explanation: [
        'preload()에서 눈꽃 스프라이트 시트를 로드하고, setup()에서 32x32 크기로 잘라 textures 배열에 저장합니다. 각 Snowflake에 랜덤 텍스처를 할당하여 다양한 모양의 눈송이를 표현합니다.',
        'Snowflake 클래스는 중력(gravity)과 바람(wind) 힘을 받습니다. 바람은 Perlin noise로 생성되어 자연스럽게 변하며, applyForce()에서 크기(r)에 비례하여 힘을 적용하는 패럴랙스 효과로 큰 눈송이가 더 빠르게 움직입니다.',
        'getRandomSize()는 pow(random(0,1), 3)으로 작은 크기에 편중된 분포를 만듭니다. 세제곱을 사용하면 대부분의 눈송이가 작고, 가끔 큰 것이 나타나 현실적인 눈 효과를 연출합니다.',
        '화면 아래로 벗어난 눈송이는 randomize()로 상단에서 재생성됩니다. rotate(angle)로 눈송이가 천천히 회전하며, sin(angle*2)로 좌우 흔들림(xOff)을 추가하여 자연스러운 낙하를 표현합니다.',
    ],
})

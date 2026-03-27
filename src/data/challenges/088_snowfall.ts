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
        { title: 'Wikipedia - Particle system', url: 'https://en.wikipedia.org/wiki/Particle_system' },
        { title: 'Wikipedia - Perlin noise', url: 'https://en.wikipedia.org/wiki/Perlin_noise' },
        { title: 'Wikipedia - Parallax', url: 'https://en.wikipedia.org/wiki/Parallax' },
    ],
    tags: ['snow', 'particles', 'texture', 'winter'],
    difficulty: 'beginner',
    explanation: [
        '파티클 시스템(Particle System)은 1983년 William Reeves가 영화 "Star Trek II"의 제네시스 효과를 위해 개발한 컴퓨터 그래픽스 기법입니다. 불, 연기, 비, 눈 등 불규칙한 자연 현상을 수많은 작은 입자의 집합으로 표현하며, 각 입자는 독립적인 생명주기와 물리 법칙을 따릅니다.',
        'preload()에서 눈꽃 스프라이트 시트를 로드하고, setup()에서 32x32 크기로 잘라 textures 배열에 저장합니다. 스프라이트 시트(Sprite Sheet)는 여러 이미지를 하나의 파일에 모아 로딩 횟수를 줄이는 게임 개발의 전통적인 최적화 기법입니다.',
        'Snowflake 클래스는 중력(gravity)과 바람(wind) 힘을 받습니다. 바람은 Perlin noise로 생성되어 자연스럽게 변합니다. 펄린 노이즈(Perlin Noise)는 1983년 Ken Perlin이 영화 "Tron"을 위해 개발한 절차적 노이즈 함수로, 순수 랜덤보다 자연스러운 변화를 만들어냅니다.',
        'applyForce()에서 크기(r)에 비례하여 힘을 적용하는 패럴랙스(Parallax) 효과로 큰 눈송이가 더 빠르게 움직입니다. 패럴랙스는 가까운 물체가 먼 물체보다 빠르게 이동하는 시차 현상으로, 깊이감을 부여합니다.',
        'getRandomSize()는 pow(random(0,1), 3)으로 작은 크기에 편중된 분포를 만듭니다. 세제곱을 사용하면 대부분의 눈송이가 작고 가끔 큰 것이 나타나, 실제 눈처럼 다양한 크기 분포를 가지게 됩니다.',
        '화면 아래로 벗어난 눈송이는 randomize()로 상단에서 재생성되는 오브젝트 풀링(Object Pooling) 패턴을 사용합니다. rotate(angle)로 회전하고 sin(angle*2)로 좌우 흔들림을 추가하여 실제 눈송이의 낙하 운동을 모사합니다.',
    ],
})

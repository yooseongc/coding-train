import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '155_kaleidoscope_snowflake',
    number: 155,
    title: 'Kaleidoscope Snowflake',
    categoryId: 'creative-coding',
    description: '6겹 대칭과 반사를 이용한 만화경 효과로 마우스 드로잉을 눈꽃 패턴으로 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #155: Kaleidoscope Snowflake', url: 'https://thecodingtrain.com/challenges/155-kaleidoscope-snowflake' },
    ],
    tags: ['kaleidoscope', 'snowflake', 'symmetry', 'drawing'],
    difficulty: 'beginner',
    explanation: [
        '만화경(kaleidoscope) 효과로 마우스 드로잉을 6겹 대칭 눈꽃 패턴으로 변환합니다. 중앙을 원점으로 하여 한 번의 마우스 획이 12개의 대칭 획(6회전 x 2반사)으로 복제됩니다.',
        'symmetry=6으로 60도(360/6) 간격의 회전 대칭을 설정합니다. for문에서 6번 rotate(angle)하고, 각 회전마다 원본 line()과 scale(1,-1)로 y축 반전된 line()을 그려 총 12겹 대칭을 만듭니다.',
        'HSB 컬러 모드에서 noise(xoff)로 색조를 부드럽게 변화시킵니다. 마우스 이동 거리(d)에 반비례하는 선 굵기를 적용하여, 느리게 그리면 굵고 빠르게 그리면 가는 선이 됩니다.',
        'Save 버튼으로 snowflake.png 이미지를 저장하고, Clear 버튼으로 캔버스를 초기화합니다. 슬라이더로 기본 선 굵기(1~32)를 조절할 수 있습니다.',
    ],
})

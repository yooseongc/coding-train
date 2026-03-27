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
        { title: 'Wikipedia - Kaleidoscope', url: 'https://en.wikipedia.org/wiki/Kaleidoscope' },
        { title: 'Wikipedia - Symmetry group (Dihedral group)', url: 'https://en.wikipedia.org/wiki/Dihedral_group' },
        { title: 'Wikipedia - Snowflake (Symmetry)', url: 'https://en.wikipedia.org/wiki/Snowflake#Symmetry' },
    ],
    tags: ['kaleidoscope', 'snowflake', 'symmetry', 'drawing'],
    difficulty: 'beginner',
    explanation: [
        '만화경(kaleidoscope)은 1816년 스코틀랜드의 물리학자 데이비드 브루스터(David Brewster)가 발명한 광학 장치로, 거울의 반사를 이용해 대칭 패턴을 만들어냅니다. 실제 눈 결정(snowflake)은 물 분자의 육각형 결정 구조로 인해 6겹 대칭(hexagonal symmetry)을 가지며, 이 챌린지에서는 이 자연의 대칭성을 디지털 드로잉으로 재현합니다.',
        'symmetry=6으로 60도(360/6) 간격의 회전 대칭을 설정합니다. 수학적으로 이는 이면체군(dihedral group) D6에 해당하며, 6개의 회전과 6개의 반사 대칭을 포함합니다. for문에서 6번 rotate(angle)하고, 각 회전마다 원본 line()과 scale(1,-1)로 반사된 line()을 그려 총 12겹 대칭을 만듭니다.',
        'HSB 컬러 모드에서 Perlin noise(xoff)로 색조(hue)를 부드럽게 변화시켜 자연스러운 색상 흐름을 만듭니다. 마우스 이동 거리(d)에 반비례하는 선 굵기를 적용하여, 느리게 그리면 굵고 빠르게 그리면 가는 선이 됩니다. 이 가변 굵기는 캘리그라피와 유사한 표현력을 제공합니다.',
        'Save 버튼으로 snowflake.png 이미지를 저장하고, Clear 버튼으로 캔버스를 초기화합니다. 슬라이더로 기본 선 굵기(1~32)를 조절할 수 있습니다. 사용자의 자유로운 드로잉이 수학적 대칭에 의해 정교한 패턴으로 변환되는 과정을 체험합니다.',
        '대칭 패턴 생성은 컴퓨터 그래픽스, 텍스타일 디자인, 건축 장식, 이슬람 기하학 패턴 등에 광범위하게 응용됩니다. p5.js의 translate(), rotate(), scale() 변환 함수를 활용한 이 구현은 아핀 변환(affine transformation)의 실용적 활용 사례입니다.',
    ],
})

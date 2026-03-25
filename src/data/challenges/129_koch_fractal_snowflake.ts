import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '129_koch_fractal_snowflake',
    number: 129,
    title: 'Koch Fractal Snowflake',
    categoryId: 'fractals',
    description: '코흐 눈꽃 프랙탈을 정삼각형에서 시작하여 재귀적으로 생성합니다.',
    files: ['segment.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #129: Koch Fractal Snowflake', url: 'https://thecodingtrain.com/challenges/129-koch-fractal-snowflake' },
    ],
    tags: ['koch', 'snowflake', 'fractal', 'recursion'],
    difficulty: 'intermediate',
    explanation: [
        '코흐 눈꽃은 1904년 스웨덴 수학자 Helge von Koch가 발표한 프랙탈 곡선입니다. 정삼각형의 각 변을 3등분하고 가운데 부분에 바깥으로 돌출된 작은 정삼각형을 추가하는 과정을 반복합니다.',
        'Segment 클래스의 generate()가 하나의 선분을 4개의 새 선분으로 분할합니다. 선분을 3등분하는 점 a, b를 구하고, 중간 부분에 60도 각도로 돌출점 c를 계산하여 a-c, c-b 선분을 추가합니다.',
        'mousePressed()로 클릭할 때마다 모든 세그먼트에 generate()를 적용하여 한 단계씩 세분화합니다. segments.map().reduce()로 각 세그먼트의 4개 결과를 평탄화하며, 최대 6단계까지 진행됩니다.',
        '둘레는 단계마다 4/3배로 증가하여 무한대로 발산하지만, 면적은 원래 삼각형의 8/5배에 수렴합니다. 유한한 면적을 무한한 둘레가 감싸는 프랙탈의 역설적 특성을 시각적으로 확인합니다.',
    ],
})

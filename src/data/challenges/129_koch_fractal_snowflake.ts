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
        { title: 'Wikipedia: Koch snowflake', url: 'https://en.wikipedia.org/wiki/Koch_snowflake' },
        { title: '위키백과: 코흐 눈송이', url: 'https://ko.wikipedia.org/wiki/%EC%BD%94%ED%9D%90_%EB%88%88%EC%86%A1%EC%9D%B4' },
    ],
    tags: ['koch', 'snowflake', 'fractal', 'recursion'],
    difficulty: 'intermediate',
    explanation: [
        '코흐 눈꽃(Koch snowflake)은 1904년 스웨덴 수학자 헬게 폰 코흐(Helge von Koch)가 논문 "접선이 없는 연속 곡선에 대하여(Sur une courbe continue sans tangente)"에서 발표한 최초의 프랙탈 곡선 중 하나입니다. 바이어슈트라스 함수와 함께 "모든 점에서 미분 불가능한 연속 함수"의 존재를 증명하는 반직관적 예시입니다.',
        'Segment 클래스의 generate()가 하나의 선분을 4개로 분할합니다. 선분을 3등분하는 점 a, b를 구하고, 중간 부분에 60도 각도로 돌출점 c를 계산합니다. 정삼각형에서 시작하면 눈송이, 단일 선분에서 시작하면 코흐 곡선(Koch curve)이 됩니다.',
        'mousePressed()로 클릭할 때마다 한 단계씩 세분화됩니다. segments.map().reduce()로 배열을 평탄화하며, 최대 6단계까지 진행합니다. 프랙탈 차원은 log4/log3 ≈ 1.2619로, 1차원(선)과 2차원(면) 사이의 비정수 차원을 가집니다.',
        '둘레는 단계마다 4/3배로 증가하여 무한대로 발산하지만, 면적은 원래 삼각형의 8/5배에 수렴합니다. 이 "유한한 면적을 무한한 둘레가 감싸는" 역설은 해안선 역설(coastline paradox)과 직결되며, 만델브로가 프랙탈 기하학을 정립하는 출발점 중 하나가 되었습니다.',
    ],
})

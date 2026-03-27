import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '061_fractal_spirograph',
    number: 61,
    title: 'Fractal Spirograph',
    categoryId: 'creative-coding',
    description: '중첩된 원의 회전으로 프랙탈 스피로그래프 패턴을 그립니다.',
    files: ['orbit.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #61: Fractal Spirograph', url: 'https://thecodingtrain.com/challenges/61-fractal-spirograph' },
        { title: 'Fractal Spirograph (benice-equation)', url: 'http://benice-equation.blogspot.com/2012/01/fractal-spirograph.html' },
        { title: 'Wikipedia: Spirograph', url: 'https://en.wikipedia.org/wiki/Spirograph' },
        { title: 'Wikipedia: Epicycloid', url: 'https://en.wikipedia.org/wiki/Epicycloid' },
    ],
    tags: ['spirograph', 'fractal', 'orbit', 'fourier'],
    difficulty: 'intermediate',
    explanation: [
        '스피로그래프(Spirograph)는 1965년 영국의 Denys Fisher가 발명한 기하학적 그리기 완구로, 톱니바퀴를 회전시켜 아름다운 곡선을 그립니다. 수학적으로 이는 에피사이클로이드(epicycloid)와 하이포사이클로이드(hypocycloid)의 조합입니다. 이 챌린지는 여러 개의 원을 연쇄적으로 중첩하여 프랙탈 수준의 복잡한 패턴을 만듭니다.',
        'Orbit 클래스는 부모 원 위에서 회전하는 자식 원을 표현합니다. n번째 원의 회전 속도는 k^(n-1)에 비례하며, k=-4로 인접 원이 반대 방향으로 회전합니다. 이 구조는 프톨레마이오스의 천동설에서 행성의 역행 운동을 설명하기 위해 사용한 주전원(epicycle) 모델과 동일한 수학적 원리입니다.',
        'addChild()에서 부모 반지름의 1/3 크기로 자식 원을 생성합니다. 반지름이 기하급수적으로 줄어들면서(1/3^n) 속도는 기하급수적으로 증가하여(k^n) 미세한 규모에서 빠르게 진동하는 프랙탈 디테일이 생깁니다. 이는 푸리에 급수(Fourier series)에서 고주파 성분이 세부 형태를 결정하는 원리와 유사합니다.',
        '매 프레임 resolution(50)번 원들을 업데이트하고, 가장 끝 원(end)의 좌표를 path 배열에 저장합니다. 높은 resolution은 곡선의 부드러움을 보장하며, beginShape()/vertex()로 경로를 자홍색(255,0,255) 곡선으로 그립니다.',
        'path 길이가 20000을 초과하면 앞부분을 splice로 제거하여 메모리를 관리합니다. 이러한 중첩 원 회전 시스템은 푸리에 변환의 시각적 표현이기도 하며, 3Blue1Brown의 유명한 푸리에 급수 시각화에서도 동일한 원리가 사용됩니다.',
    ],
})

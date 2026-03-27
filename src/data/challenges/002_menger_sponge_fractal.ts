import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '002_menger_sponge_fractal',
    number: 2,
    title: 'Menger Sponge Fractal',
    categoryId: 'fractals',
    description: '3D 멩거 스폰지 프랙탈을 재귀적으로 생성합니다.',
    files: ['cube.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #2: Menger Sponge Fractal', url: 'https://thecodingtrain.com/challenges/2-menger-sponge-fractal' },
        { title: '위키백과: 멩거 스펀지', url: 'https://ko.wikipedia.org/wiki/%EB%A9%A5%EA%B1%B0_%EC%8A%A4%ED%8E%80%EC%A7%80' },
        { title: 'Wikipedia: Menger sponge', url: 'https://en.wikipedia.org/wiki/Menger_sponge' },
        { title: 'Wikipedia: Sierpinski carpet', url: 'https://en.wikipedia.org/wiki/Sierpi%C5%84ski_carpet' },
    ],
    tags: ['fractal', '3D', 'recursion', 'menger'],
    difficulty: 'intermediate',
    explanation: [
        'Menger Sponge(멩거 스펀지)는 1926년 오스트리아 수학자 카를 멩거(Karl Menger)가 고안한 3D 프랙탈입니다. 1D의 칸토어 집합(Cantor set), 2D의 시에르핀스키 카펫(Sierpinski carpet)을 3차원으로 확장한 것으로, 프랙탈 차원은 약 2.727입니다.',
        '정육면체를 3×3×3=27개의 작은 큐브로 나눈 뒤, 각 면의 중심과 전체 중심(총 7개)을 제거하여 20개만 남기는 과정을 반복합니다. abs(i)+abs(j)+abs(k) > 1 조건이 이 제거 규칙을 간결하게 구현합니다.',
        'Cube 클래스의 generate() 메서드가 재귀적 분할을 담당합니다. p5.js의 WEBGL 모드와 box() 함수로 3D 큐브를 렌더링하며, normalMaterial()은 면의 법선 방향에 따라 자동으로 색상을 지정합니다.',
        'mousePressed()로 클릭할 때마다 한 단계씩 분할이 진행됩니다. 레벨이 올라갈수록 큐브 수가 기하급수적으로 증가(20^n)하므로, 성능상 3단계까지 제한합니다. 무한히 반복하면 부피는 0에 수렴하지만 표면적은 무한대로 발산하는 역설적 성질을 가집니다.',
    ],
})

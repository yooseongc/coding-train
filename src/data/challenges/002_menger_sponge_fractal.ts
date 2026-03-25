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
    ],
    tags: ['fractal', '3D', 'recursion', 'menger'],
    difficulty: 'intermediate',
    explanation: [
        'Menger Sponge는 3D 프랙탈로, 정육면체를 27개의 작은 큐브로 나눈 뒤 각 면의 중심과 전체 중심(총 7개)을 제거하여 20개만 남기는 과정을 반복합니다. abs(i)+abs(j)+abs(k) > 1 조건이 이 제거 규칙을 구현합니다.',
        'Cube 클래스의 generate() 메서드가 재귀적 분할을 담당합니다. 3중 for 루프(-1~1)로 27개 위치를 순회하며, 조건에 맞는 위치에만 크기가 1/3인 새 큐브를 생성합니다.',
        'p5.js의 WEBGL 모드와 box() 함수로 3D 큐브를 렌더링하며, normalMaterial()은 면의 법선 방향에 따라 자동으로 색상을 지정합니다.',
        'mousePressed()로 클릭할 때마다 한 단계씩 분할이 진행됩니다. 레벨이 올라갈수록 큐브 수가 기하급수적으로 증가(20^n)하므로, 3단계까지만 제한합니다.',
    ],
})

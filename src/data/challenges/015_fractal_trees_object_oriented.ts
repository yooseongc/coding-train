import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '015_fractal_trees_object_oriented',
    number: 15,
    title: 'Fractal Trees Object Oriented',
    categoryId: 'fractals',
    description: '객체 지향 방식으로 프랙탈 트리를 구현합니다.',
    files: ['branch.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #15: Fractal Trees Object Oriented', url: 'https://thecodingtrain.com/challenges/15-fractal-trees-object-oriented' },
        { title: 'Wikipedia: Fractal canopy', url: 'https://en.wikipedia.org/wiki/Fractal_canopy' },
        { title: 'p5.js Reference: p5.Vector', url: 'https://p5js.org/reference/p5/p5.Vector/' },
    ],
    tags: ['fractal', 'tree', 'OOP', 'branch'],
    difficulty: 'intermediate',
    explanation: [
        'Branch 클래스가 시작점(begin)과 끝점(end)을 p5.Vector로 저장합니다. 재귀 함수 방식과 달리 객체 지향(OOP) 접근법은 각 가지를 독립적인 객체로 관리하여, 상태 추적과 애니메이션이 용이합니다.',
        'p5.Vector.sub()로 방향 벡터를 구하고, rotate(±PI/4)로 45도 회전, mult(0.67)로 길이를 줄인 뒤 add()로 새 끝점을 계산합니다. 벡터 연산으로 가지의 방향과 길이를 수학적으로 제어하는 것이 핵심입니다.',
        'mousePressed()로 클릭할 때마다 한 세대씩 성장합니다. finished 플래그로 이미 분기한 가지를 추적하여 끝 가지에서만 새 가지가 자랍니다. jitter() 메서드로 끝점에 랜덤 변위를 추가하여 바람에 흔들리는 효과를 만듭니다.',
        '6세대 후에는 끝 가지에 꽃잎(leaf)을 추가하고 중력으로 떨어지게 합니다. 이런 성장-성숙-낙엽 사이클은 절차적 애니메이션(procedural animation)의 좋은 예시로, 게임이나 인터랙티브 아트에서 자연 현상을 시뮬레이션하는 기법입니다.',
    ],
})

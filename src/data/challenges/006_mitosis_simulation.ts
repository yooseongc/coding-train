import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '006_mitosis_simulation',
    number: 6,
    title: 'Mitosis Simulation',
    categoryId: 'physics-simulation',
    description: '세포 분열 시뮬레이션을 구현합니다.',
    files: ['cell.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #6: Mitosis Simulation', url: 'https://thecodingtrain.com/challenges/6-mitosis-simulation' },
    ],
    tags: ['biology', 'cell', 'mitosis', 'simulation'],
    difficulty: 'beginner',
    explanation: [
        'Cell 클래스는 위치(pos), 반지름(r), 색상(c)을 가집니다. mitosis() 메서드가 같은 위치에서 80% 크기의 새 세포를 생성하여 세포 분열을 시뮬레이션합니다.',
        'mousePressed()에서 클릭한 위치와 각 세포의 거리를 dist()로 계산하여 클릭된 세포를 찾습니다. 해당 세포를 제거하고 두 개의 자식 세포를 추가합니다.',
        'p5.Vector.random2D()로 매 프레임 랜덤한 방향으로 세포를 이동시켜 브라운 운동과 유사한 자연스러운 움직임을 만듭니다.',
        'color()의 네 번째 인자(alpha=100)로 반투명 효과를 주어 세포가 겹칠 때 시각적으로 자연스럽게 보이도록 합니다.',
    ],
})

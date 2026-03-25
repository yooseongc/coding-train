import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '078_simple_particle_system',
    number: 78,
    title: 'Simple Particle System',
    categoryId: 'physics-simulation',
    description: '간단한 파티클 시스템을 구현합니다. Particle 클래스로 위치, 속도, 투명도를 관리하며 수명이 다한 파티클을 제거합니다.',
    files: ['particle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #78: Simple Particle System', url: 'https://thecodingtrain.com/challenges/78-simple-particle-system' },
    ],
    tags: ['particle', 'system', 'force', 'lifespan'],
    difficulty: 'beginner',
    explanation: [
        'Particle 클래스는 고정된 발사 위치(300, 380)에서 생성되며, 수평 속도(vx)는 random(-1, 1), 수직 속도(vy)는 random(-5, -1)로 위쪽을 향합니다. alpha값이 매 프레임 5씩 감소하여 서서히 사라집니다.',
        'draw()에서 매 프레임 5개의 새 파티클을 생성하고, 역순 for문으로 모든 파티클의 update()와 show()를 호출합니다. alpha < 0이면 finished()가 true를 반환하여 splice()로 배열에서 제거합니다.',
        '역순 순회(i = length-1부터 감소)는 배열 중간 요소를 splice()할 때 인덱스 밀림 문제를 방지하는 패턴입니다. fill(255, this.alpha)로 투명도를 적용하여 자연스러운 페이드아웃 효과를 만듭니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '027_fireworks',
    number: 27,
    title: 'Fireworks',
    categoryId: 'creative-coding',
    description: '불꽃놀이 파티클 시스템을 구현합니다.',
    files: ['firework.js', 'particle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #27: Fireworks', url: 'https://thecodingtrain.com/challenges/27-fireworks' },
    ],
    tags: ['fireworks', 'particles', 'gravity', 'animation'],
    difficulty: 'beginner',
    explanation: [
        'Firework 클래스가 발사체(단일 Particle)와 폭발 파편(100개 Particle 배열)을 관리합니다. 발사체의 속도가 0 이상이 되면(최고점 도달) 폭발하여 파편을 생성합니다.',
        'Particle은 firework 여부에 따라 다르게 동작합니다. 발사체는 위로 발사(vel.y = random(-12, -8))되고, 파편은 random2D()로 전방향으로 퍼지며 vel.mult(0.9)로 감속합니다.',
        'gravity 벡터(0, 0.2)를 applyForce()로 모든 파티클에 적용합니다. 뉴턴 역학의 F=ma를 단순화한 것으로, 가속도를 누적하고 속도에 반영한 뒤 acc를 초기화합니다.',
        'background(0, 0, 0, 25)로 반투명 배경을 매 프레임 그려서 잔상(trail) 효과를 만듭니다. HSB 색상 모드로 각 불꽃에 랜덤한 색조를 부여합니다.',
    ],
})

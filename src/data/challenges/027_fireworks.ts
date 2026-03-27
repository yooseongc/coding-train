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
        { title: 'Wikipedia: Particle System', url: 'https://en.wikipedia.org/wiki/Particle_system' },
        { title: 'p5.js Reference: p5.Vector', url: 'https://p5js.org/reference/p5/p5.Vector/' },
        { title: 'Wikipedia: Projectile Motion', url: 'https://en.wikipedia.org/wiki/Projectile_motion' },
    ],
    tags: ['fireworks', 'particles', 'gravity', 'animation'],
    difficulty: 'beginner',
    explanation: [
        '불꽃놀이는 파티클 시스템의 대표적인 응용 사례입니다. 실제 불꽃놀이는 중국 당나라(7세기)에서 기원했으며, 화약의 금속 산화물 조성에 따라 색상이 결정됩니다. 이 챌린지에서는 발사체(rocket)와 폭발 파편(spark)이라는 두 가지 상태의 파티클을 사용하여 불꽃놀이를 시뮬레이션합니다.',
        'Firework 클래스가 발사체(단일 Particle)와 폭발 파편(100개 Particle 배열)을 관리합니다. 발사체의 속도가 0 이상이 되면(최고점 도달) 폭발하여 파편을 생성합니다. 이는 포물선 운동(projectile motion)에서 수직 속도가 0이 되는 최고점의 물리 원리를 활용한 것입니다.',
        'Particle은 firework 여부에 따라 다르게 동작합니다. 발사체는 위로 발사(vel.y = random(-12, -8))되고, 파편은 random2D()로 전방향으로 퍼지며 vel.mult(0.9)로 감속합니다. random2D()는 단위 벡터를 무작위 방향으로 생성하여 균일한 방사형 폭발을 만듭니다.',
        'gravity 벡터(0, 0.2)를 applyForce()로 모든 파티클에 적용합니다. 이는 뉴턴 제2법칙(F=ma)을 단순화한 것으로, 질량을 1로 가정하여 힘과 가속도를 동일시합니다. 가속도를 누적하고 속도에 반영한 뒤 acc를 초기화하는 패턴은 Daniel Shiffman의 Nature of Code에서 소개하는 표준적인 힘 적용 방식입니다.',
        'background(0, 0, 0, 25)로 반투명 배경을 매 프레임 그려서 잔상(trail) 효과를 만듭니다. 알파값 25는 약 10% 불투명도로, 이전 프레임이 서서히 사라지는 페이드아웃 효과를 만들어 불꽃의 궤적을 자연스럽게 표현합니다. HSB 색상 모드로 각 불꽃에 랜덤한 색조(hue)를 부여하여 다채로운 색상을 연출합니다.',
        '이 시뮬레이션은 게임 엔진의 이펙트 시스템과 동일한 원리를 사용합니다. 실제 게임에서는 GPU 기반 파티클 시스템으로 수만 개의 파티클을 처리하지만, 기본 구조(생성-업데이트-소멸 생명주기)는 이 챌린지와 동일합니다.',
    ],
})

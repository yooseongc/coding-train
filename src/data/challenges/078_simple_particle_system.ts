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
        { title: 'Wikipedia - Particle System', url: 'https://en.wikipedia.org/wiki/Particle_system' },
        { title: 'Nature of Code - Chapter 4: Particle Systems', url: 'https://natureofcode.com/particles/' },
        { title: 'p5.js Reference - splice()', url: 'https://p5js.org/reference/p5/splice/' },
    ],
    tags: ['particle', 'system', 'force', 'lifespan'],
    difficulty: 'beginner',
    explanation: [
        '파티클 시스템(Particle System)은 1982년 윌리엄 리브스(William T. Reeves)가 영화 "스타트렉 II: 칸의 분노"에서 제네시스 효과(행성 표면 생성 장면)를 구현하기 위해 처음 사용한 기법입니다. 작은 입자들의 집합으로 불, 연기, 폭발, 물보라 같은 비정형 현상을 표현합니다. 이후 컴퓨터 그래픽스와 게임 개발의 핵심 기술이 되었습니다.',
        'Particle 클래스는 고정된 발사 위치(300, 380)에서 생성되며, 수평 속도(vx)는 random(-1, 1), 수직 속도(vy)는 random(-5, -1)로 위쪽을 향합니다. alpha값이 매 프레임 5씩 감소하여 서서히 사라집니다. 이 수명(Lifespan) 기반 관리는 파티클 시스템의 표준 패턴입니다.',
        'draw()에서 매 프레임 5개의 새 파티클을 생성하고, 역순 for문으로 모든 파티클의 update()와 show()를 호출합니다. alpha < 0이면 finished()가 true를 반환하여 splice()로 배열에서 제거합니다. 이 생성-소멸 사이클이 파티클 시스템의 핵심입니다.',
        '역순 순회(i = length-1부터 감소)는 배열 중간 요소를 splice()할 때 인덱스 밀림(Index Shifting) 문제를 방지하는 프로그래밍 패턴입니다. fill(255, this.alpha)로 투명도를 적용하여 자연스러운 페이드아웃 효과를 만듭니다.',
        '실제 게임 엔진에서는 이 기본 구조에 중력, 바람, 난류 등의 외력, 색상/크기 변화 곡선, 텍스처 애니메이션, 서브 이미터(Sub-Emitter) 등을 추가하여 복잡한 효과를 구현합니다. Unity의 Particle System, Unreal Engine의 Niagara/Cascade가 대표적인 상용 파티클 시스템입니다.',
        '파티클 시스템은 게임(폭발, 마법 효과, 환경 효과), 영화 VFX(불, 연기, 먼지), 데이터 시각화(입자 흐름도), 인터랙티브 아트(음악 시각화, 제너러티브 아트)에 광범위하게 사용됩니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '004_purple_rain',
    number: 4,
    title: 'Purple Rain',
    categoryId: 'creative-coding',
    description: '보라색 빗방울이 내리는 애니메이션을 만듭니다.',
    files: ['drop.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #4: Purple Rain', url: 'https://thecodingtrain.com/challenges/4-purple-rain' },
        { title: 'Wikipedia: Particle System', url: 'https://en.wikipedia.org/wiki/Particle_system' },
        { title: 'p5.js Reference: map()', url: 'https://p5js.org/reference/p5/map/' },
        { title: 'p5.js Reference: line()', url: 'https://p5js.org/reference/p5/line/' },
    ],
    tags: ['particles', 'rain', 'animation', 'color'],
    difficulty: 'beginner',
    explanation: [
        'Purple Rain은 Prince의 동명 곡에서 영감을 받은 비 애니메이션 챌린지입니다. 파티클 시스템(Particle System)은 컴퓨터 그래픽스에서 불, 비, 연기 등 무수히 많은 작은 입자로 이루어진 자연 현상을 시뮬레이션하는 기법으로, 1982년 William Reeves가 Star Trek II의 제네시스 이펙트에서 처음 도입했습니다.',
        'Drop 클래스는 각 빗방울의 위치, 속도, 길이, 두께를 관리합니다. z값(0~20)을 깊이로 사용하여 map()으로 속도, 길이, 두께를 매핑함으로써 원근감을 표현합니다. 이 기법은 의사 3D(pseudo-3D) 효과로, 실제 3D 렌더링 없이 깊이를 시뮬레이션합니다.',
        'fall() 메서드에서 yspeed에 0.05씩 더해 중력 가속도를 시뮬레이션합니다. 실제 자유 낙하에서 빗방울은 공기 저항에 의해 종단 속도(terminal velocity)에 도달하지만, 이 시뮬레이션에서는 단순화된 등가속도 모델을 사용합니다. 화면 아래로 벗어나면 위쪽(-200~-100)에서 다시 시작하여 무한 반복 효과를 만듭니다.',
        'show()에서 stroke(138, 43, 226)으로 보라색(purple)을 설정하고, line()으로 빗방울을 선으로 그립니다. RGB 값 (138, 43, 226)은 CSS에서 BlueViolet이라 불리는 색상입니다. strokeWeight()로 z에 따른 두께 차이를 주어 깊이감을 강화합니다.',
        '500개의 Drop 객체를 배열로 관리하며, draw() 루프에서 매 프레임 모든 빗방울의 fall()과 show()를 호출하는 전형적인 파티클 시스템 패턴입니다. 이 구조는 게임 엔진에서 이펙트 시스템의 기본 골격과 동일하며, Unity나 Unreal Engine의 파티클 시스템도 유사한 원리로 동작합니다.',
        '실제 기상학에서 빗방울의 크기는 0.5mm~5mm 정도이며, 크기에 따라 낙하 속도가 2~9m/s로 달라집니다. 이 챌린지의 z값에 따른 속도 매핑은 이러한 현실 세계의 빗방울 물리를 단순화하여 표현한 것입니다.',
    ],
})

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
    ],
    tags: ['particles', 'rain', 'animation', 'color'],
    difficulty: 'beginner',
    explanation: [
        'Drop 클래스는 각 빗방울의 위치, 속도, 길이, 두께를 관리합니다. z값(0~20)을 깊이로 사용하여 map()으로 속도, 길이, 두께를 매핑함으로써 원근감을 표현합니다.',
        'fall() 메서드에서 yspeed에 0.05씩 더해 중력 가속도를 시뮬레이션합니다. 화면 아래로 벗어나면 위쪽(-200~-100)에서 다시 시작하여 무한 반복 효과를 만듭니다.',
        'show()에서 stroke(138, 43, 226)으로 보라색을 설정하고, line()으로 빗방울을 선으로 그립니다. strokeWeight()로 z에 따른 두께 차이를 주어 깊이감을 강화합니다.',
        '500개의 Drop 객체를 배열로 관리하며, draw() 루프에서 매 프레임 모든 빗방울의 fall()과 show()를 호출하는 전형적인 파티클 시스템 패턴입니다.',
    ],
})

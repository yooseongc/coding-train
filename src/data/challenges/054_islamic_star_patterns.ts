import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '054_islamic_star_patterns',
    number: 54,
    title: 'Islamic Star Patterns',
    categoryId: 'drawing-animation',
    description: 'Hankin의 polygons-in-contact 기법으로 이슬람 기하학적 별 패턴을 생성합니다.',
    files: ['edge.js', 'hankin.js', 'polygon.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #54: Islamic Star Patterns', url: 'https://thecodingtrain.com/challenges/54-islamic-star-patterns' },
    ],
    tags: ['islamic', 'pattern', 'geometry', 'star'],
    difficulty: 'advanced',
    explanation: [
        'E.H. Hankin의 polygons-in-contact 기법은 타일링의 각 변 중점에 X자 선을 놓고 이웃 변의 선과 만날 때까지 성장시켜 이슬람 별 패턴을 만듭니다. 접촉각(contact angle)이 핵심 파라미터입니다.',
        'Polygon 클래스로 정사각형 타일(100px)을 그리드로 배치합니다. 각 폴리곤의 close() 메서드로 변(Edge)을 생성하고, hankin() 메서드에서 각 변의 중점으로부터 Hankin 선을 성장시킵니다.',
        'angleSlider(0~90도)와 deltaSlider(0~25)로 접촉각과 오프셋을 실시간 조절합니다. 사인법칙(Law of Sines)을 활용하여 선의 교차점을 계산하고 패턴의 복잡도를 조절합니다.',
        '매 프레임 모든 폴리곤의 hankin()과 show()를 호출하여 파라미터 변경에 즉시 반응하는 인터랙티브 패턴을 만듭니다.',
    ],
})

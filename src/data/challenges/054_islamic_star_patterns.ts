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
        { title: 'Wikipedia - Islamic Geometric Patterns', url: 'https://en.wikipedia.org/wiki/Islamic_geometric_patterns' },
        { title: 'Craig S. Kaplan - Islamic Star Patterns (워털루 대학)', url: 'https://cs.uwaterloo.ca/~csk/other/starpatterns/' },
        { title: 'Wikipedia - 사인 법칙 (Law of Sines)', url: 'https://en.wikipedia.org/wiki/Law_of_sines' },
        { title: 'Kaplan & Salesin - Islamic Star Patterns in Absolute Geometry (논문)', url: 'http://grail.cs.washington.edu/wp-content/uploads/2015/08/kaplan-2004-isp.pdf' },
    ],
    tags: ['islamic', 'pattern', 'geometry', 'star'],
    difficulty: 'advanced',
    explanation: [
        '이슬람 기하학적 패턴(Islamic geometric patterns)은 7세기부터 이슬람 세계 전역의 모스크, 궁전, 서적 장식에 사용된 수학적 예술 형태입니다. 우상 숭배를 금지하는 이슬람 교리에 따라 기하학적 추상 패턴이 발달했으며, 이는 수학과 예술의 가장 아름다운 결합 중 하나로 평가됩니다.',
        'E.H. Hankin(1925)의 polygons-in-contact 기법은 타일링의 각 변 중점에 X자 선을 놓고 이웃 변의 선과 만날 때까지 성장시켜 이슬람 별 패턴을 만듭니다. 접촉각(contact angle)이 핵심 파라미터로, 이 각도에 따라 별의 꼭짓점 수와 패턴의 복잡도가 결정됩니다.',
        'Polygon 클래스로 정사각형 타일(100px)을 그리드로 배치합니다. 각 폴리곤의 close() 메서드로 변(Edge)을 생성하고, hankin() 메서드에서 각 변의 중점으로부터 Hankin 선을 성장시킵니다. Craig S. Kaplan(워털루 대학)의 연구는 이 기법을 컴퓨터 그래픽스로 체계화한 대표적인 업적입니다.',
        'angleSlider(0~90도)와 deltaSlider(0~25)로 접촉각과 오프셋을 실시간 조절합니다. 사인법칙(Law of Sines: a/sinA = b/sinB = c/sinC)을 활용하여 두 직선의 교차점을 해석적으로 계산하며, 이는 계산 기하학(computational geometry)의 기본 기법입니다.',
        '정사각형 타일 외에도 정삼각형, 정육각형 등 다양한 정다각형 타일링을 적용하면 더 복잡한 패턴을 생성할 수 있습니다. 실제 이슬람 건축에서는 이러한 패턴들이 여러 층위로 중첩되어 무한히 반복되는 듯한 시각적 효과를 만들어냅니다.',
        '현대에는 이 기법이 컴퓨터 그래픽스, 3D 프린팅, 건축 파사드 디자인, 텍스타일 패턴 등에 폭넓게 응용되고 있습니다. Grasshopper, Processing 등의 도구로 파라메트릭 이슬람 패턴을 생성하는 것이 디지털 아트와 건축 분야에서 활발히 연구되고 있습니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '133_times_tables_cardioid_visualization',
    number: 133,
    title: 'Times Tables Cardioid Visualization',
    categoryId: 'data-visualization',
    description: '원 위의 점들을 곱셈표(times table) 규칙으로 연결하여 카디오이드 패턴을 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #133: Times Tables Cardioid Visualization', url: 'https://thecodingtrain.com/challenges/133-times-tables-cardioid-visualization' },
        { title: 'Wikipedia - Cardioid (카디오이드)', url: 'https://en.wikipedia.org/wiki/Cardioid' },
        { title: 'Wikipedia - 심장형 (한국어)', url: 'https://ko.wikipedia.org/wiki/%EC%8B%AC%EC%9E%A5%ED%98%95' },
        { title: 'Mathologer - Times Tables, Pair Socks (YouTube)', url: 'https://www.youtube.com/watch?v=qhbuKbxJsk8' },
    ],
    tags: ['cardioid', 'times-table', 'modular', 'visualization'],
    difficulty: 'beginner',
    explanation: [
        '카디오이드(Cardioid)는 그리스어 kardia(심장)에서 유래한 이름으로, 고정 원 둘레를 같은 크기의 원이 굴러갈 때 그 원 위의 한 점이 그리는 심장 모양의 곡선입니다. 극좌표로 r(phi) = 2a(1 - cos(phi))로 표현되며, 마이크로폰의 지향성 패턴, 만델브로 집합의 주요 구조 등에서 자연스럽게 나타납니다.',
        '이 시각화의 핵심 아이디어는 Mathologer(YouTube 수학 채널)의 영상에서 영감을 받았습니다. 원 위에 200개의 점을 균등 배치하고, 각 점 i에서 i*factor번째 점으로 선을 그립니다. getVector()가 인덱스를 TWO_PI 범위의 각도로 변환하고 반지름 r을 곱하여 좌표를 계산합니다.',
        'factor가 0에서 점진적으로 증가(0.015/프레임)하면서 패턴이 변화합니다. factor=2일 때 카디오이드, factor=3일 때 네프로이드(nephroid), factor=4일 때 3-cusp 에피사이클로이드(epicycloid) 등 정수 배수에서 특징적인 수학적 곡선이 나타납니다.',
        '모듈러 연산(i*factor % total)으로 점 인덱스가 원을 순환합니다. 이것은 본질적으로 모듈러 산술(modular arithmetic)의 시각화로, 정수론(number theory)의 아름다운 기하학적 표현입니다. 소수 배수에서는 복잡한 패턴이, 정수 배수에서는 대칭적인 패턴이 나타납니다.',
        'stroke(255, 150)으로 반투명 선을 사용하여 선이 겹치는 부분이 밝아지며, 수학적 구조가 자연스럽게 드러납니다. 이 기법은 데이터 시각화에서 밀도(density)를 표현하는 일반적인 방법으로, 선이 많이 집중되는 곳에서 패턴의 윤곽이 선명하게 보입니다.',
        '이 시각화는 수학의 아름다움을 직관적으로 체험할 수 있는 대표적인 예시입니다. 에피사이클로이드, 하이포사이클로이드(hypocycloid), 리사주 곡선(Lissajous curve) 등 다양한 수학적 곡선들을 유사한 방식으로 시각화할 수 있으며, 이는 수학 교육과 생성적 예술(generative art) 분야에서 활발히 활용됩니다.',
    ],
})

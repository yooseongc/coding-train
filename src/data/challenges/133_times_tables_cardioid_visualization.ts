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
    ],
    tags: ['cardioid', 'times-table', 'modular', 'visualization'],
    difficulty: 'beginner',
    explanation: [
        '카디오이드는 그리스어로 "심장"을 뜻하며, 고정 원 둘레를 같은 크기의 원이 굴러갈 때 그 원 위의 한 점이 그리는 곡선입니다. 곱셈표를 이용하면 이 곡선을 간단하게 시각화할 수 있습니다.',
        '원 위에 200개의 점을 균등 배치하고, 각 점 i에서 i*factor번째 점으로 선을 그립니다. getVector()가 인덱스를 TWO_PI 범위의 각도로 변환하고 반지름 r을 곱하여 좌표를 계산합니다.',
        'factor가 0에서 점진적으로 증가(0.015/프레임)하면서 패턴이 변화합니다. factor=2일 때 카디오이드, factor=3일 때 네프로이드 등 다양한 에피사이클로이드 패턴이 나타납니다.',
        '모듈러 연산(i*factor % total)으로 점 인덱스가 원을 순환합니다. stroke(255, 150)으로 반투명 선을 사용하여 겹치는 부분이 밝아지며, 수학적 아름다움을 실시간으로 관찰합니다.',
    ],
})

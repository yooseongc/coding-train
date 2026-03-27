import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '070_nearest_neighbors_recommendation_engine',
    number: 70,
    title: 'Nearest Neighbors Recommendation Engine',
    categoryId: 'math-algorithms',
    description: 'K-최근접 이웃(KNN) 알고리즘으로 유클리드 거리 기반 영화 추천 엔진을 구현합니다.',
    files: ['sketch.js', 'movies.json'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #70: Nearest Neighbors Recommendation Engine', url: 'https://thecodingtrain.com/challenges/70-nearest-neighbors-recommendation-engine' },
        { title: 'Wikipedia - K-nearest neighbors algorithm', url: 'https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm' },
        { title: 'Wikipedia - Euclidean distance', url: 'https://en.wikipedia.org/wiki/Euclidean_distance' },
        { title: 'Wikipedia - Recommender system', url: 'https://en.wikipedia.org/wiki/Recommender_system' },
    ],
    tags: ['KNN', 'recommendation', 'similarity', 'distance'],
    difficulty: 'intermediate',
    explanation: [
        'K-최근접 이웃(K-Nearest Neighbors, KNN) 알고리즘은 1951년 Evelyn Fix와 Joseph Hodges가 처음 제안한 비모수적(non-parametric) 분류 및 회귀 알고리즘입니다. 별도의 학습 과정 없이 데이터를 저장하고, 예측 시 가장 가까운 이웃들을 참조하는 게으른 학습(lazy learning) 방식으로, 추천 시스템의 협업 필터링(Collaborative Filtering)에 널리 활용됩니다.',
        '유클리드 거리(Euclidean Distance)는 n차원 공간에서 두 점 사이의 직선 거리를 의미합니다. 영화 추천에서는 각 영화를 하나의 차원으로, 평점을 좌표값으로 취급하여 사용자 간 거리를 계산합니다. 유사도는 1/(1+d)로 변환하여 0에서 1 사이의 값으로 정규화하며, 1에 가까울수록 취향이 비슷함을 의미합니다.',
        '3단계로 구성됩니다. Part1은 두 사용자의 영화 평점 간 유클리드 거리를 계산하여 유사도를 구합니다. Part2는 선택한 사용자와 모든 다른 사용자의 유사도를 계산하여 내림차순 정렬하고, 상위 k=5명의 가장 유사한 이웃을 표시합니다. Part3는 KNN으로 아직 보지 않은 영화의 예상 평점을 가중 평균으로 예측합니다.',
        '이 알고리즘은 Netflix, Amazon 등 현대 추천 시스템의 기초가 되는 협업 필터링의 핵심입니다. 사용자 기반(User-Based) 협업 필터링은 비슷한 취향의 사용자가 좋아한 아이템을 추천하며, 아이템 기반(Item-Based) 필터링은 비슷한 아이템을 찾아 추천합니다. KNN은 그 중 가장 직관적인 접근법입니다.',
        'loadJSON()으로 movies.json(영화 제목, 사용자 평점)을 로드하고, 드롭다운과 버튼으로 인터랙티브 UI를 구성합니다. noCanvas()로 캔버스 없이 DOM 요소만 사용하여 순수한 데이터 처리와 결과 표시에 집중합니다.',
        'KNN의 성능은 k값 선택과 거리 함수에 크게 의존합니다. 유클리드 거리 외에도 코사인 유사도(Cosine Similarity), 피어슨 상관계수(Pearson Correlation), 맨해튼 거리(Manhattan Distance) 등 다양한 거리 함수를 사용할 수 있으며, 데이터 특성에 따라 적합한 함수가 달라집니다.',
    ],
})

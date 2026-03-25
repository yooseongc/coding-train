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
    ],
    tags: ['KNN', 'recommendation', 'similarity', 'distance'],
    difficulty: 'intermediate',
    explanation: [
        '3단계로 구성됩니다. Part1은 두 사용자의 영화 평점 간 유클리드 거리를 계산하여 유사도(1/(1+d))를 구합니다. 공통으로 평가한 영화만 비교하며, 유사도가 1에 가까울수록 취향이 비슷합니다.',
        'Part2는 선택한 사용자와 모든 다른 사용자의 유사도를 계산하여 내림차순 정렬합니다. 상위 k=5명의 가장 유사한 이웃을 목록으로 표시합니다.',
        'Part3는 사용자가 직접 영화 평점을 입력하면 KNN으로 아직 보지 않은 영화의 예상 평점을 계산합니다. 가장 유사한 k명의 평점을 유사도 가중 평균(weightedSum/similaritySum)으로 예측합니다.',
        'loadJSON()으로 movies.json(영화 제목, 사용자 평점)을 로드하고, 드롭다운과 버튼으로 인터랙티브 UI를 구성합니다. noCanvas()로 캔버스 없이 DOM 요소만 사용합니다.',
    ],
})

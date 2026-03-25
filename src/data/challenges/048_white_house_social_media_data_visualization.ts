import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '048_white_house_social_media_data_visualization',
    number: 48,
    title: 'White House Social Media Data Visualization',
    categoryId: 'data-visualization',
    description: '백악관 소셜 미디어 트윗 데이터를 월별 트윗 수와 최빈 단어로 시각화합니다.',
    files: ['sketch.js', 'flotus.json', 'potus.json'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #48: White House Social Media Data Visualization', url: 'https://thecodingtrain.com/challenges/48-white-house-social-media-data-visualization' },
    ],
    tags: ['data', 'social-media', 'visualization', 'JSON'],
    difficulty: 'intermediate',
    explanation: [
        'loadJSON()으로 flotus.json(영부인 트윗 데이터)을 불러옵니다. 각 트윗의 timestamp에서 Date 객체를 생성하여 월/년 키(예: "3/2016")로 그룹화하고, 트윗 수와 단어 빈도를 집계합니다.',
        '트윗 텍스트를 /\\W+/로 분할하고 소문자로 변환하여 월별 단어 빈도 객체에 카운트합니다. ignore 객체로 관사, 전치사 등 불용어(the, to, we, of 등)를 필터링합니다.',
        '월별 트윗 수를 막대그래프로 시각화합니다. map()으로 최대 트윗 수 대비 높이를 계산하고, 각 막대 위에 해당 월의 최빈 단어(길이 3 초과)를 텍스트로 표시합니다.',
    ],
})

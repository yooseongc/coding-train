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
        { title: 'GitHub - Obamathon (ITP NYU)', url: 'https://github.com/ITPNYU/Obamathon' },
        { title: 'Obama White House - First Social Media Presidency', url: 'https://obamawhitehouse.archives.gov/blog/2017/01/05/new-lenses-first-social-media-presidency' },
        { title: 'p5.js Reference - loadJSON()', url: 'https://p5js.org/reference/p5/loadJSON/' },
    ],
    tags: ['data', 'social-media', 'visualization', 'JSON'],
    difficulty: 'intermediate',
    explanation: [
        '이 챌린지는 NYU ITP의 "Obamathon" 프로젝트에서 영감을 받았습니다. 오바마 행정부는 최초의 소셜 미디어 대통령직(First Social Media Presidency)으로 불리며, 백악관이 공개한 소셜 미디어 데이터를 활용한 다양한 데이터 시각화 프로젝트가 진행되었습니다. 이 데모에서는 영부인(FLOTUS) 계정의 트윗 데이터를 분석합니다.',
        'loadJSON()으로 flotus.json을 불러온 뒤, 각 트윗의 timestamp에서 JavaScript Date 객체를 생성합니다. getMonth()와 getFullYear()로 "월/년" 형식의 키를 만들어 트윗을 그룹화하고, 월별 트윗 수와 단어 빈도를 집계합니다. 이는 시계열 데이터(Time Series Data)의 기본적인 집계 방식입니다.',
        '텍스트 분석에서는 정규식 /\\W+/(비단어 문자)로 트윗을 단어 단위로 분할하고, toLowerCase()로 대소문자를 통일합니다. 불용어(Stop Words) 필터링을 위해 the, to, we, of, and 등 의미가 약한 기능어를 ignore 객체에 등록하여 제외합니다. 이는 자연어 처리(NLP)의 기본 전처리 과정입니다.',
        '월별 트윗 수를 막대그래프(Bar Chart)로 시각화합니다. map() 함수로 최대 트윗 수 대비 막대 높이를 비례적으로 계산하고, 각 막대 위에 해당 월의 최빈 단어(길이 4 이상)를 텍스트로 표시합니다. Object.keys()로 월 키를 추출하고 reverse()로 시간순 정렬합니다.',
        '이러한 데이터 시각화는 대량의 텍스트 데이터에서 시간에 따른 주제 변화를 한눈에 파악할 수 있게 합니다. 실제 데이터 저널리즘과 소셜 미디어 분석에서 유사한 기법이 널리 사용되며, 워드 클라우드(Word Cloud)나 감성 분석(Sentiment Analysis) 등으로 확장할 수 있습니다.',
    ],
})

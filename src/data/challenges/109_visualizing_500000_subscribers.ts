import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '109_visualizing_500000_subscribers',
    number: 109,
    title: 'Visualizing 500,000 Subscribers',
    categoryId: 'data-visualization',
    description: 'Mappa.js와 Leaflet으로 YouTube 구독자 데이터를 세계 지도 위에 시각화합니다. 국가별 구독자 수를 원 크기로 표현합니다.',
    files: ['sketch.js', 'countries.json', 'subscribers_geo.csv'],
    libraries: ['p5.sound.min.js', 'mappa.min.js'],
    references: [
        { title: 'Coding Challenge #109: Visualizing 500,000 Subscribers', url: 'https://thecodingtrain.com/challenges/109-visualizing-500000-subscribers' },
    ],
    tags: ['subscribers', 'visualization', 'data', 'animation'],
    difficulty: 'beginner',
    explanation: [
        'Mappa.js 라이브러리로 Leaflet 지도와 p5.js 캔버스를 오버레이합니다. loadTable()로 구독자 CSV를, loadJSON()으로 국가별 위경도 데이터를 로드합니다.',
        '각 국가의 구독자 수를 제곱근 스케일로 변환하여 원 지름에 매핑합니다. sqrt()로 큰 값의 차이를 줄이고, 지도 줌 레벨에 비례하여 pow(2, zoom)으로 원 크기를 조절합니다.',
        'trainMap.latLngToPixel()로 위경도를 캔버스 좌표로 변환합니다. frameCount로 색조를 변화시켜 원의 색이 시간에 따라 변하는 애니메이션 효과를 줍니다. clear()로 매 프레임 투명 배경을 리셋합니다.',
    ],
})

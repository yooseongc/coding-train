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
        { title: 'Mappa.js - Map Library for p5.js', url: 'https://mappa.js.org/' },
        { title: 'GitHub - 500k Subscriber Map', url: 'https://github.com/CodingTrain/500k-Subscriber-Map' },
        { title: 'Leaflet - Open-source JavaScript Library for Maps', url: 'https://leafletjs.com/' },
    ],
    tags: ['subscribers', 'visualization', 'data', 'animation'],
    difficulty: 'beginner',
    explanation: [
        'Daniel Shiffman의 Coding Train 채널이 50만 구독자를 달성한 것을 기념하는 데이터 시각화 프로젝트입니다. YouTube Analytics에서 추출한 국가별 구독자 데이터를 세계 지도 위에 표시합니다. Mappa.js 라이브러리가 Leaflet 지도 타일과 p5.js 캔버스를 오버레이하여, 지도의 패닝/줌 기능과 p5.js의 그래픽 렌더링을 결합합니다.',
        'loadTable()로 subscribers_geo.csv(국가 코드별 구독자 수)를 로드하고, loadJSON()으로 countries.json(국가 코드별 위도/경도 중심점)을 로드합니다. 두 데이터를 국가 코드(country_id)로 조인(join)하여 각 국가의 위치와 구독자 수를 매핑합니다. 위경도 데이터가 없는 국가는 건너뜁니다.',
        '구독자 수의 범위가 매우 넓기 때문에(수십 명부터 수만 명까지), 제곱근 스케일(sqrt)로 변환하여 원 지름에 매핑합니다. 이는 원의 면적이 값에 비례하도록 하는 표준적인 비례 원(Proportional Symbol) 시각화 기법입니다. 지도 줌 레벨에 따라 pow(2, zoom)으로 원 크기를 조절하여 확대/축소 시에도 적절한 크기를 유지합니다.',
        'trainMap.latLngToPixel() 메서드로 지리적 위경도를 캔버스의 픽셀 좌표로 변환합니다. 지도 이동이나 줌 시 좌표가 자동으로 재계산되어 원이 올바른 위치에 표시됩니다. frameCount % 255로 색조(hue)를 변화시켜 시간에 따라 원의 색이 변하는 애니메이션 효과를 줍니다.',
        'clear()로 매 프레임 투명 배경을 리셋하여 Leaflet 지도 타일이 캔버스 아래에서 보이도록 합니다. Mappa.js는 Leaflet 외에도 Google Maps, Mapbox GL 등 다양한 지도 라이브러리와 호환되며, p5.js의 창의적 코딩 기능과 지리 정보 시스템(GIS)을 연결하는 브리지 역할을 합니다.',
    ],
})

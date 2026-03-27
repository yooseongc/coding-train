import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '057_mapping_earthquake_data',
    number: 57,
    title: 'Mapping Earthquake Data',
    categoryId: 'data-visualization',
    description: '웹 메르카토르 투영법으로 USGS 실시간 지진 데이터를 2D 세계 지도에 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #57: Mapping Earthquake Data', url: 'https://thecodingtrain.com/challenges/57-mapping-earthquake-data' },
        { title: 'USGS Earthquake Hazards - Data Tools', url: 'https://www.usgs.gov/natural-hazards/earthquake-hazards/data-tools' },
        { title: 'Wikipedia - Web Mercator projection', url: 'https://en.wikipedia.org/wiki/Web_Mercator_projection' },
        { title: 'Mapbox Playground - Static Maps', url: 'https://docs.mapbox.com/playground/static/' },
    ],
    tags: ['earthquake', 'map', 'data', 'geolocation'],
    difficulty: 'intermediate',
    explanation: [
        '미국 지질조사국(USGS, United States Geological Survey)은 전 세계 지진 데이터를 실시간으로 수집하여 공개 API로 제공합니다. 이 챌린지에서는 최근 한 달간의 모든 지진 데이터를 CSV 형식으로 loadStrings()를 통해 불러옵니다. CSV의 각 행을 쉼표로 split하여 위도(latitude), 경도(longitude), 규모(magnitude) 등의 필드를 추출합니다.',
        '웹 메르카토르 투영(Web Mercator Projection, EPSG:3857)은 1569년 헤라르뒤스 메르카토르(Gerardus Mercator)가 개발한 정각 원통 투영법의 변형으로, Google Maps, OpenStreetMap 등 대부분의 웹 지도 서비스에서 사용하는 표준 투영법입니다. mercX() 함수에서 경도는 선형 변환으로, mercY() 함수에서 위도는 tan(PI/4 + lat/2)의 자연로그를 사용하여 구면 좌표를 평면으로 변환합니다.',
        '지진 규모(Richter/Moment Magnitude)는 로그 스케일이므로, 시각화 시 pow(10, mag)로 지수 변환하여 실제 에너지 차이를 반영합니다. 규모 7.0 지진은 6.0보다 10배, 5.0보다 100배 큰 진폭을 나타냅니다. sqrt()를 추가로 적용하고 map()으로 0~180px 범위의 원 크기로 매핑하여, 큰 규모의 지진이 시각적으로 두드러지게 표현됩니다.',
        '경도 래핑(wrapping) 로직으로 -width/2 미만이면 +width, +width/2 초과이면 -width를 적용하여, 태평양 양쪽에 걸친 지진(특히 환태평양 조산대)이 지도 경계에서 잘리지 않도록 처리합니다. 자홍색(255,0,255) 반투명 원으로 지진 위치를 표시하여, 밀집 지역이 더 진하게 보이는 밀도 효과를 만듭니다.',
        '이 시각화를 통해 환태평양 조산대(Ring of Fire), 알프스-히말라야 조산대, 대서양 중앙 해령 등 지구의 판 경계를 따라 지진이 집중되는 패턴을 직관적으로 확인할 수 있습니다. 판 구조론(Plate Tectonics)의 핵심 증거를 데이터 시각화로 검증하는 교육적 사례입니다.',
    ],
})

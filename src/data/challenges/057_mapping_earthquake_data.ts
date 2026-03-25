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
    ],
    tags: ['earthquake', 'map', 'data', 'geolocation'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 USGS 지진 데이터 API와 Mappa.js 라이브러리가 필요합니다. 외부 API 접근이 제한될 수 있어 지도가 표시되지 않을 수 있습니다.',
    explanation: [
        'USGS earthquake API에서 최근 한 달간의 지진 CSV 데이터를 loadStrings()로 불러옵니다. 각 행을 쉼표로 split하여 위도(latitude), 경도(longitude), 규모(magnitude)를 추출합니다.',
        'mercX()와 mercY() 함수로 웹 메르카토르 투영(Web Mercator Projection)을 구현합니다. 경도는 선형 변환, 위도는 tan(PI/4 + lat/2)의 로그를 사용하여 구면 좌표를 평면으로 변환합니다.',
        '지진 규모를 pow(10, mag)와 sqrt()로 지수 스케일 변환한 뒤 map()으로 원의 크기(0~180px)로 매핑합니다. 이로써 큰 규모의 지진이 시각적으로 두드러지게 표현됩니다.',
        '경도 래핑(wrapping)을 적용하여 지도 양끝에서 원이 잘리지 않도록 합니다. 자홍색(255,0,255) 반투명 원으로 지진 위치를 표시합니다.',
    ],
})

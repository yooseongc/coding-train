import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '058_3d_earthquake_data_visualization',
    number: 58,
    title: '3D Earthquake Data Visualization',
    categoryId: 'data-visualization',
    description: 'WEBGL 3D 지구본 위에 USGS 지진 데이터를 막대 형태로 시각화합니다.',
    files: ['sketch.js'],
    libraries: ['p5.easycam.min.js'],
    references: [
        { title: 'Coding Challenge #58: 3D Earthquake Data Visualization', url: 'https://thecodingtrain.com/challenges/58-3d-earthquake-data-visualization' },
        { title: 'NASA Visible Earth - Blue Marble', url: 'https://visibleearth.nasa.gov/collection/1484/blue-marble' },
        { title: 'Wikipedia - 구면좌표계', url: 'https://ko.wikipedia.org/wiki/%EA%B5%AC%EB%A9%B4%EC%A2%8C%ED%91%9C%EA%B3%84' },
        { title: 'p5.js Reference - loadTable()', url: 'https://p5js.org/reference/p5/loadTable/' },
    ],
    tags: ['earthquake', '3D', 'globe', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        '이 챌린지는 Challenge #57의 2D 지진 시각화를 3D 지구본으로 확장합니다. WEBGL 모드에서 sphere()로 구를 생성하고, NASA의 Blue Marble 프로젝트에서 제공하는 고해상도 지구 텍스처(earth.jpg)를 입힙니다. p5.easycam 라이브러리의 createEasyCam()으로 마우스 드래그 회전, 스크롤 줌, 우클릭 패닝을 지원하는 인터랙티브 3D 카메라를 설정합니다.',
        'll2xyz() 함수는 위도/경도를 구면좌표계(Spherical Coordinate System)에서 직교좌표(Cartesian Coordinate, x/y/z)로 변환합니다. theta=radians(lat)는 위도각, phi=radians(lon)+PI는 경도각으로, x = r*cos(theta)*sin(phi), y = -r*sin(theta), z = r*cos(theta)*cos(phi) 공식을 사용합니다. y축에 음수를 적용하는 것은 화면 좌표계와 지리 좌표계의 방향 차이를 보정하기 위함입니다.',
        'loadTable()은 p5.js의 구조화된 데이터 로딩 함수로, CSV 파일을 파싱하여 행(row)과 열(column)에 접근 가능한 Table 객체를 반환합니다. USGS API에서 규모 4.5 이상의 지진 데이터만 필터링하여 로드하며, getNum() 메서드로 위도, 경도, 규모를 숫자형으로 추출합니다.',
        '각 지진 위치에 translate()로 이동한 후, 구 표면의 법선 방향으로 막대(box)를 배치해야 합니다. 이를 위해 x축 단위벡터(xaxis)와 지진 위치 벡터(pos)의 angleBetween()으로 회전 각도를, cross()로 회전축을 구합니다. rotate(angle, axis)로 변환을 적용하면 box()가 구 표면에서 수직으로 솟아오르는 효과를 만들 수 있습니다.',
        '지진 규모를 pow(10, mag)로 지수 변환한 뒤 map()으로 막대 높이(10~100)를 결정합니다. 이는 규모가 1 증가할 때 진폭이 10배 커지는 리히터 규모의 특성을 시각적으로 반영합니다. 3D 지구본 위의 막대 높이를 통해 지진의 상대적 강도를 직관적으로 비교할 수 있습니다.',
        '3D 지구본 시각화는 2D 지도에서 발생하는 투영 왜곡 없이 전 지구적 지진 분포를 자연스럽게 관찰할 수 있는 장점이 있습니다. 특히 환태평양 조산대(Ring of Fire)의 연속성이 평면 지도보다 훨씬 명확하게 드러나며, 사용자가 직접 회전하며 탐색할 수 있어 교육적 효과가 높습니다.',
    ],
})

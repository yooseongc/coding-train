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
    ],
    tags: ['earthquake', '3D', 'globe', 'WEBGL'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 USGS 지진 데이터 API가 필요합니다. 외부 API 접근이 제한될 수 있어 데이터가 로드되지 않을 수 있습니다.',
    explanation: [
        'WEBGL 모드에서 sphere(r)로 구를 만들고 earth.jpg 텍스처를 입힙니다. createEasyCam()으로 마우스 드래그 회전과 줌을 지원하는 3D 카메라를 설정합니다.',
        'll2xyz() 함수로 위도/경도를 구면좌표계에서 직교좌표(x,y,z)로 변환합니다. theta=radians(lat), phi=radians(lon)+PI를 사용하여 cos/sin 조합으로 3D 위치를 계산합니다.',
        'loadTable()로 USGS API에서 규모 4.5 이상 지진 데이터를 CSV 헤더 포함으로 로드합니다. 규모를 pow(10, mag)로 지수 변환한 뒤 map()으로 막대 높이(10~100)를 결정합니다.',
        '각 지진 위치에 translate 후, xaxis와 pos 벡터의 angleBetween()과 cross()로 회전축과 각도를 구해 법선 방향으로 box()를 배치합니다. 이로써 막대가 구 표면에서 수직으로 솟아오릅니다.',
    ],
})

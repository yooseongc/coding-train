import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '036_blobby',
    number: 36,
    title: 'Blobby',
    categoryId: 'creative-coding',
    description: '펄린 노이즈와 극좌표를 이용하여 유기적으로 변형되는 블롭(blob) 형태를 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #36: Blobby', url: 'https://thecodingtrain.com/challenges/36-blobby' },
    ],
    tags: ['blob', 'perlin', 'noise', 'organic'],
    difficulty: 'beginner',
    explanation: [
        '기본 원(ellipse)을 beginShape()/curveVertex()/endShape()로 대체하여 곡선 형태를 만듭니다. 100개의 꼭짓점을 TWO_PI 범위에 균일하게 배치하여 부드러운 원형 기본 형태를 구성합니다.',
        '각 꼭짓점에서 극좌표 각도(a)를 cos/sin으로 2D 노이즈 좌표(xoff, yoff)로 매핑합니다. noise(xoff, yoff, zoff)의 반환값을 -25~25 범위의 offset으로 변환하여 반지름에 더합니다.',
        'zoff를 매 프레임 0.01씩 증가시켜 노이즈의 3차원 축을 시간처럼 활용합니다. 이로써 블롭이 마치 살아있는 유기체처럼 부드럽게 변형되는 애니메이션이 만들어집니다.',
    ],
})

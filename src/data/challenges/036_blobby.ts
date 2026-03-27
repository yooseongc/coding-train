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
        { title: 'Wikipedia: Perlin Noise', url: 'https://en.wikipedia.org/wiki/Perlin_noise' },
        { title: 'p5.js Reference: noise()', url: 'https://p5js.org/reference/p5/noise/' },
        { title: 'p5.js Reference: curveVertex()', url: 'https://p5js.org/reference/p5/curveVertex/' },
    ],
    tags: ['blob', 'perlin', 'noise', 'organic'],
    difficulty: 'beginner',
    explanation: [
        'Blobby는 펄린 노이즈(Perlin noise)와 극좌표(polar coordinates)를 결합하여 유기적으로 변형되는 형태를 만드는 챌린지입니다. 펄린 노이즈는 1983년 Ken Perlin이 영화 Tron의 시각 효과를 위해 개발한 절차적 텍스처 생성 기법으로, 이 업적으로 아카데미 기술 공로상을 수상했습니다.',
        '기본 원(ellipse)을 beginShape()/curveVertex()/endShape()로 대체하여 곡선 형태를 만듭니다. curveVertex()는 Catmull-Rom 스플라인(spline)을 사용하여 제어점을 통과하는 부드러운 곡선을 생성합니다. 100개의 꼭짓점을 TWO_PI 범위에 균일하게 배치하여 부드러운 원형 기본 형태를 구성합니다.',
        '각 꼭짓점에서 극좌표 각도(a)를 cos/sin으로 2D 노이즈 좌표(xoff, yoff)로 매핑합니다. 이 매핑이 핵심인데, 각도의 cos과 sin은 원을 따라 연속적으로 변하므로 노이즈 값도 자연스럽게 연결됩니다. noise(xoff, yoff, zoff)의 반환값을 -25~25 범위의 offset으로 변환하여 반지름에 더합니다.',
        'zoff를 매 프레임 0.01씩 증가시켜 노이즈의 3차원 축을 시간처럼 활용합니다. 이로써 블롭이 마치 살아있는 유기체처럼 부드럽게 변형되는 애니메이션이 만들어집니다. 이 기법은 절차적 생성(procedural generation)의 핵심 원리로, 게임의 지형 생성, 물 표면 시뮬레이션, 유기체 애니메이션 등에 널리 활용됩니다.',
        '블롭(blob) 형태는 메타볼(metaball)과 유사한 개념으로, 3D 그래픽스에서 용암 램프, 물방울 합치기, 세포 분열 등 유체 형태의 시뮬레이션에 사용됩니다. 이 2D 버전은 노이즈 기반 변형의 기초를 보여주며, noiseMax 값을 조절하면 변형의 강도를 제어할 수 있습니다.',
    ],
})

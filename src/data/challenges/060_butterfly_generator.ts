import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '060_butterfly_generator',
    number: 60,
    title: 'Butterfly Generator',
    categoryId: 'creative-coding',
    description: '삼각함수와 펄린 노이즈로 대칭적인 나비 날개를 절차적으로 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #60: Butterfly Generator', url: 'https://thecodingtrain.com/challenges/60-butterfly-generator' },
        { title: '@mothgenerator (Twitter)', url: 'https://twitter.com/mothgenerator' },
        { title: 'Wikipedia: Perlin Noise', url: 'https://en.wikipedia.org/wiki/Perlin_noise' },
        { title: 'p5.js Reference: beginShape()', url: 'https://p5js.org/reference/p5/beginShape/' },
    ],
    tags: ['butterfly', 'parametric', 'curve', 'generative'],
    difficulty: 'beginner',
    explanation: [
        '이 챌린지는 @mothgenerator 트위터 봇에서 영감을 받았습니다. 절차적 생성(procedural generation)으로 나비 날개를 만드는 기법은 생성 예술(generative art)의 대표적인 사례입니다. 자연계의 나비는 약 17,500종이 존재하며, 각각 고유한 날개 패턴을 가지지만 모두 좌우 대칭이라는 공통점이 있습니다.',
        'sin(2*a) 함수로 4엽 클로버(four-leaf clover) 형태의 기본 날개 곡선을 만듭니다. 극좌표에서 r = sin(2*theta)는 로도네아 곡선(rhodonea curve)의 특수한 경우로, 4개의 꽃잎 형태를 생성합니다. 이 기본 형태에 노이즈를 더해 유기적인 날개 윤곽을 만듭니다.',
        'noise(xoff, yoff)로 각 꼭짓점의 반지름에 펄린 노이즈 변형을 더합니다. map(n, 0, 1, 50, 300)으로 노이즈를 큰 범위로 매핑하여 날개의 유기적 변형을 만듭니다. 핵심은 xoff의 대칭 처리입니다.',
        'xoff는 0~PI 구간에서 증가하고 PI~TWO_PI에서 감소하여 좌우 대칭(bilateral symmetry)을 유지합니다. 이는 실제 나비 날개의 좌우 대칭을 모방한 것입니다. yoff는 매 프레임 0.01씩 증가하여 날개가 시간에 따라 부드럽게 변형되는 애니메이션을 만듭니다.',
        'beginShape()/vertex()로 닫힌 곡선을 그리며, fill(255, 50)의 반투명 채우기와 strokeWeight(1)로 섬세한 나비 실루엣을 표현합니다. 이 절차적 생성 기법은 게임 개발에서 NPC 외형 다양화, 식물 생성, 지형 텍스처 등에 활용되며, No Man Sky 같은 게임에서 수조 개의 고유한 생물을 생성하는 데도 유사한 원리가 사용됩니다.',
    ],
})

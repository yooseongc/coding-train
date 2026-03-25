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
    ],
    tags: ['butterfly', 'parametric', 'curve', 'generative'],
    difficulty: 'beginner',
    explanation: [
        'sin(2*a) 함수로 4엽 클로버 형태의 기본 날개 곡선을 만듭니다. 각도 a를 0~TWO_PI로 순회하며, 반지름 r=sin(2*a)*n으로 극좌표 형태를 정의합니다.',
        'noise(xoff, yoff)로 각 꼭짓점의 반지름에 펄린 노이즈 변형을 더합니다. map(n, 0, 1, 50, 300)으로 노이즈를 큰 범위로 매핑하여 날개의 유기적 변형을 만듭니다.',
        'xoff는 0~PI 구간에서 증가하고 PI~TWO_PI에서 감소하여 좌우 대칭을 유지합니다. yoff는 매 프레임 0.01씩 증가하여 날개가 시간에 따라 변형되는 애니메이션을 만듭니다.',
        'beginShape()/vertex()로 닫힌 곡선을 그리며, fill(255, 50)의 반투명 채우기와 strokeWeight(1)로 섬세한 나비 실루엣을 표현합니다.',
    ],
})

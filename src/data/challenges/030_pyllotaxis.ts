import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '030_pyllotaxis',
    number: 30,
    title: 'Pyllotaxis',
    categoryId: 'creative-coding',
    description: '피보나치 나선(Phyllotaxis) 패턴을 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #30: Pyllotaxis', url: 'https://thecodingtrain.com/challenges/30-pyllotaxis' },
    ],
    tags: ['phyllotaxis', 'fibonacci', 'spiral', 'golden-ratio'],
    difficulty: 'beginner',
    explanation: [
        'Phyllotaxis(잎차례)는 식물의 잎이 배열되는 수학적 패턴입니다. 황금각(137.5도)으로 회전하며 점을 배치하면 해바라기 씨앗과 같은 나선 패턴이 자연스럽게 형성됩니다.',
        '극좌표 공식 phi = n*137.5, r = c*sqrt(n)으로 각 점의 위치를 계산합니다. 137.5도는 황금비(golden ratio)와 관련된 각도로, 점들이 겹치지 않고 균일하게 분포됩니다.',
        'cos(a)와 sin(a)으로 극좌표를 직교좌표로 변환합니다. angleMode(DEGREES)로 각도를 도 단위로 설정하여 137.5를 직접 사용합니다.',
        'n을 매 프레임 5씩 증가시켜 점이 중심에서 바깥으로 퍼져나가는 성장 애니메이션을 만듭니다. HSB 색상에서 각도(a%256)를 색조로 사용하여 나선형 색상 패턴을 부여합니다.',
    ],
})

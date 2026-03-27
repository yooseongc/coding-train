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
        { title: 'Wikipedia: Phyllotaxis', url: 'https://en.wikipedia.org/wiki/Phyllotaxis' },
        { title: 'Wikipedia: 잎차례', url: 'https://ko.wikipedia.org/wiki/%EC%9E%8E%EC%B0%A8%EB%A1%80' },
        { title: 'Algorithmic Botany: ABOP Chapter 4', url: 'http://algorithmicbotany.org/papers/abop/abop-ch4.pdf' },
    ],
    tags: ['phyllotaxis', 'fibonacci', 'spiral', 'golden-ratio'],
    difficulty: 'beginner',
    explanation: [
        'Phyllotaxis(잎차례)는 고대 그리스어 phullon(잎)과 taxis(배열)에서 유래한 용어로, 식물의 잎, 꽃잎, 씨앗이 줄기 주위에 배열되는 수학적 패턴을 연구하는 식물학의 한 분야입니다. 이 패턴은 해바라기 씨앗, 솔방울, 파인애플 표면 등 자연 곳곳에서 발견되며, 피보나치 수열과 깊은 관련이 있습니다.',
        '황금각(golden angle)인 137.5도는 360도를 황금비(phi = 1.618...)로 나눈 값입니다. 정확히는 360 * (1 - 1/phi) = 약 137.507도이며, 이 각도로 점을 배치하면 어떤 두 점도 같은 방사선 위에 놓이지 않아 공간을 가장 효율적으로 채웁니다. 이것이 식물이 햇빛을 최대한 많이 받기 위해 진화적으로 선택한 배열 방식입니다.',
        '극좌표 공식 phi = n*137.5, r = c*sqrt(n)으로 각 점의 위치를 계산합니다. 제곱근 함수를 사용하는 이유는 n번째 점이 차지하는 면적이 일정하도록 하기 위함이며, 이를 통해 점 밀도가 균일한 나선 패턴이 만들어집니다. cos(a)와 sin(a)으로 극좌표를 직교좌표(Cartesian coordinates)로 변환합니다.',
        'n을 매 프레임 5씩 증가시켜 점이 중심에서 바깥으로 퍼져나가는 성장 애니메이션을 만듭니다. HSB 색상 모드에서 각도(a%256)를 색조(hue)로 사용하여 나선형 색상 패턴을 부여합니다. 이 색상 매핑은 피보나치 나선의 구조를 시각적으로 더 잘 드러내 줍니다.',
        '이 패턴은 자연과학뿐 아니라 실용 공학에서도 활용됩니다. 태양광 집열판 배치, 안테나 어레이 설계, 원형 LED 배열 등에서 phyllotaxis 패턴을 사용하면 공간 효율을 극대화할 수 있습니다. Alan Turing도 1952년 형태 발생(morphogenesis) 논문에서 이 패턴의 수학적 원리를 연구한 바 있습니다.',
    ],
})

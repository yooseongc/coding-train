import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '108_barnsley_fern',
    number: 108,
    title: 'Barnsley Fern',
    categoryId: 'fractals',
    description: '반복 함수 시스템(IFS)으로 반즐리 양치류 프랙탈을 생성합니다. 4개의 아핀 변환을 확률적으로 적용합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #108: Barnsley Fern', url: 'https://thecodingtrain.com/challenges/108-barnsley-fern' },
    ],
    tags: ['barnsley', 'fern', 'IFS', 'probability'],
    difficulty: 'beginner',
    explanation: [
        '영국 수학자 Michael Barnsley가 고안한 반복 함수 시스템(IFS)입니다. 4개의 아핀 변환 f(x,y) = [[a,b],[c,d]][x,y] + [e,f]을 확률적으로 선택 적용하여 양치류 모양의 프랙탈을 만듭니다.',
        '각 변환의 확률: f1(1%) - 줄기, f2(85%) - 점점 작아지는 잎, f3(7%) - 왼쪽 큰 잎, f4(7%) - 오른쪽 큰 잎. 85%의 확률로 선택되는 f2가 자기유사적 축소를 만들어 전체 양치류 형태를 결정합니다.',
        'draw()에서 매 프레임 100개의 점을 그립니다. 수학적 좌표(-2.18~2.66, 0~9.99)를 map()으로 캔버스 좌표로 변환합니다. 점이 누적되면서 양치류의 섬세한 구조가 점진적으로 드러납니다.',
    ],
})

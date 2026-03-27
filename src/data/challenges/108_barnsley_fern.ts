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
        { title: 'Wikipedia: Barnsley fern', url: 'https://en.wikipedia.org/wiki/Barnsley_fern' },
        { title: 'Wikipedia: Iterated function system', url: 'https://en.wikipedia.org/wiki/Iterated_function_system' },
        { title: 'Wikipedia: Affine transformation', url: 'https://en.wikipedia.org/wiki/Affine_transformation' },
    ],
    tags: ['barnsley', 'fern', 'IFS', 'probability'],
    difficulty: 'beginner',
    explanation: [
        '영국 수학자 마이클 반슬리(Michael Barnsley, 1946-)가 1988년 저서 "Fractals Everywhere"에서 소개한 반복 함수 시스템(Iterated Function System, IFS)입니다. 4개의 아핀 변환(affine transformation) f(x,y) = [[a,b],[c,d]][x,y] + [e,f]을 확률적으로 선택 적용하여 양치류(Black Spleenwort 고사리) 형태를 생성합니다.',
        '각 변환의 확률이 양치류의 구조를 결정합니다: f1(1%) - 줄기, f2(85%) - 점점 작아지는 잎(자기유사적 축소), f3(7%) - 왼쪽 큰 잎, f4(7%) - 오른쪽 큰 잎. f2의 계수 a=0.85, d=0.85는 85% 크기로의 축소와 약간의 회전을 나타냅니다.',
        'draw()에서 매 프레임 100개의 점을 그립니다. 수학적 좌표 범위(-2.18~2.66, 0~9.99)를 map()으로 캔버스 좌표로 변환합니다. 카오스 게임(chaos game) 방식으로 점이 누적되며 양치류의 섬세한 구조가 점진적으로 드러납니다.',
        'IFS는 이미지 압축(fractal compression), 절차적 텍스처 생성, 자연물 시뮬레이션에 활용됩니다. 반슬리의 콜라주 정리(collage theorem)에 따르면, 목표 이미지에 가까운 아핀 변환 세트를 찾으면 극히 작은 데이터(변환 계수)로 복잡한 이미지를 재현할 수 있습니다.',
    ],
})

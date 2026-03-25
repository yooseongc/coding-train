import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '033_poisson-disc-sampling',
    number: 33,
    title: 'Poisson Disc Sampling',
    categoryId: 'math-algorithms',
    description: 'Robert Bridson의 Fast Poisson Disk Sampling 알고리즘으로 균일한 랜덤 점 분포를 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #33: Poisson Disc Sampling', url: 'https://thecodingtrain.com/challenges/33-poisson-disc-sampling' },
    ],
    tags: ['poisson', 'sampling', 'distribution', 'random'],
    difficulty: 'intermediate',
    explanation: [
        'Bridson 알고리즘은 O(N) 시간에 포아송 디스크 샘플을 생성합니다. 최소 거리 r=4로 설정하고, 배경 그리드의 셀 크기를 r/sqrt(2)로 하여 각 셀에 최대 하나의 샘플만 포함되도록 합니다.',
        'active 리스트에서 무작위로 점을 선택한 뒤, 반지름 r~2r 범위의 원형 영역에서 k=30번까지 후보 점을 생성합니다. 주변 그리드 셀의 이웃과 거리를 검사하여 r 이상 떨어진 점만 수용합니다.',
        'k번 시도 후에도 유효한 점을 찾지 못하면 해당 점을 active 리스트에서 제거합니다. 이 과정을 active 리스트가 빌 때까지 반복하면 전체 공간이 균일하게 채워집니다.',
        'HSB 색상 모드에서 점의 생성 순서(i)를 색조(hue)로 매핑하여 생성 과정을 시각적으로 표현합니다. 매 프레임 25개의 점을 처리하여 애니메이션 효과를 줍니다.',
    ],
})

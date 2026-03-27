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
        { title: 'Fast Poisson Disk Sampling (Bridson, SIGGRAPH 2007)', url: 'https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph07-poissondisk.pdf' },
        { title: 'Wikipedia - Supersampling: Poisson Disc', url: 'https://en.wikipedia.org/wiki/Supersampling#Poisson_disc' },
        { title: 'Visualizing Algorithms - Mike Bostock', url: 'https://bost.ocks.org/mike/algorithms/' },
        { title: 'Jason Davies - Poisson Disc Sampling Demo', url: 'https://www.jasondavies.com/poisson-disc/' },
    ],
    tags: ['poisson', 'sampling', 'distribution', 'random'],
    difficulty: 'intermediate',
    explanation: [
        '포아송 디스크 샘플링(Poisson Disk Sampling)은 모든 점 쌍 사이의 최소 거리를 보장하면서 공간을 균일하게 채우는 분포 기법입니다. Robert Bridson이 2007년 SIGGRAPH에서 발표한 알고리즘은 O(N) 시간 복잡도로 임의 차원에서 이 샘플링을 수행할 수 있어, 기존 O(N^2) 방법 대비 획기적인 성능 향상을 이루었습니다.',
        'Bridson 알고리즘의 핵심은 배경 그리드(background grid)를 활용한 공간 검색 가속입니다. 셀 크기를 r/sqrt(2)로 설정하면 각 셀에 최대 하나의 샘플만 포함되므로, 이웃 검사를 상수 시간에 수행할 수 있습니다. active 리스트에서 무작위로 점을 선택한 뒤 반지름 r에서 2r 사이의 환형(annulus) 영역에서 k=30번까지 후보 점을 생성합니다.',
        'k번 시도 후에도 유효한 점을 찾지 못하면 해당 점을 active 리스트에서 제거합니다. 이 과정을 active 리스트가 빌 때까지 반복하면 전체 공간이 균일하게 채워집니다. 결과물은 순수 랜덤 분포보다 시각적으로 훨씬 자연스러운 "블루 노이즈(Blue Noise)" 특성을 보입니다.',
        '포아송 디스크 샘플링은 컴퓨터 그래픽스에서 안티앨리어싱(Anti-aliasing), 텍스처 생성, 오브젝트 배치 등에 광범위하게 사용됩니다. 게임에서 나무나 돌 같은 자연물의 배치, 절차적 생성(Procedural Generation)에서의 도시 건물 배치 등이 대표적인 실제 응용 사례입니다.',
        'HSB 색상 모드에서 점의 생성 순서(i)를 색조(hue)로 매핑하여 생성 과정을 시각적으로 표현합니다. 매 프레임 25개의 점을 처리하여 애니메이션 효과를 주며, 알고리즘이 공간을 어떻게 채워나가는지 직관적으로 관찰할 수 있습니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '013_reaction_diffusion_algorithm',
    number: 13,
    title: 'Reaction Diffusion Algorithm',
    categoryId: 'data-visualization',
    description: '반응-확산 알고리즘으로 자연적 패턴을 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #13: Reaction Diffusion Algorithm', url: 'https://thecodingtrain.com/challenges/13-reaction-diffusion-algorithm' },
        { title: 'Karl Sims - Reaction Diffusion Tutorial', url: 'http://karlsims.com/rd.html' },
        { title: 'Wikipedia - Reaction-diffusion system', url: 'https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system' },
        { title: 'MIT - Gray-Scott Model', url: 'https://groups.csail.mit.edu/mac/projects/amorphous/GrayScott/' },
    ],
    tags: ['reaction', 'diffusion', 'pattern', 'cellular'],
    difficulty: 'advanced',
    explanation: [
        '반응-확산(Reaction-Diffusion) 시스템은 1952년 앨런 튜링(Alan Turing)이 "형태 발생의 화학적 기초(The Chemical Basis of Morphogenesis)"라는 논문에서 처음 제안한 수학적 모델입니다. 튜링은 두 종류의 화학물질(모르포겐)이 서로 다른 속도로 확산하면서 반응할 때 자발적으로 패턴이 형성될 수 있음을 보여주었습니다. 이 모델은 동물의 피부 무늬(얼룩말 줄무늬, 표범 점박이), 산호초 성장, 심장 박동 패턴 등 자연계의 다양한 패턴을 설명합니다.',
        'Gray-Scott 모델은 반응-확산 시스템의 대표적 구현으로, 두 화학물질 A와 B의 농도 변화를 수식으로 표현합니다. A\' = A + (D_A * laplace(A) - AB^2 + f(1-A)) * dt, B\' = B + (D_B * laplace(B) + AB^2 - (k+f)*B) * dt로 정의됩니다. 확산 계수 D_A=1.0, D_B=0.5, 공급률 f=0.055, 소멸률 k=0.062는 반점(spots) 패턴을 만드는 대표적 매개변수입니다.',
        'Laplacian(라플라시안)은 3x3 컨볼루션 커널로 이산 근사합니다. 중심 가중치 -1, 상하좌우(von Neumann 이웃) 0.2, 대각선(Moore 이웃) 0.05로 구성되며, 이 커널의 합은 0이 됩니다. 라플라시안은 주변 농도와의 차이를 측정하여 물질이 고농도에서 저농도로 이동하는 확산 현상을 모사합니다.',
        'double buffering 패턴으로 grid와 next 두 배열을 사용합니다. 현재 상태(grid)에서 다음 상태(next)를 동시에 계산한 후 swap()으로 참조를 교환합니다. 이는 업데이트 순서에 따라 결과가 달라지는 순서 의존성(order dependency) 문제를 방지하는 표준적 기법으로, 셀룰러 오토마타(Cellular Automata)나 GPU 렌더링에서도 동일한 패턴이 사용됩니다.',
        'loadPixels()/updatePixels()로 캔버스의 픽셀 배열에 직접 접근하여 렌더링합니다. (a-b)*255 공식으로 물질 A가 우세한 영역은 밝게, 물질 B가 우세한 영역은 어둡게 표현합니다. constrain()으로 0~255 범위를 벗어나지 않도록 클램핑합니다.',
        'feed/kill 매개변수의 미세한 조합 변화에 따라 반점, 줄무늬, 미로, 소용돌이 등 극적으로 다른 패턴이 나타납니다. 이러한 매개변수 공간의 탐색은 그 자체로 흥미로운 연구 주제이며, 실시간 인터랙티브 시뮬레이션을 통해 자연의 패턴 형성 원리를 직관적으로 이해할 수 있습니다.',
    ],
})

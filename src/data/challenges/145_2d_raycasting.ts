import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '145_2d_raycasting',
    number: 145,
    title: '2D Raycasting',
    categoryId: 'physics-simulation',
    description: '광선 투사(raycasting) 엔진으로 2D 환경에서 빛과 그림자를 시뮬레이션합니다.',
    files: ['boundary.js', 'particle.js', 'ray.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #145: 2D Raycasting', url: 'https://thecodingtrain.com/challenges/145-2d-raycasting' },
        { title: 'Wikipedia - Ray casting', url: 'https://en.wikipedia.org/wiki/Ray_casting' },
        { title: 'Wikipedia - Line-line intersection', url: 'https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection' },
        { title: 'Lode Vandevenne - Raycasting Tutorial', url: 'https://lodev.org/cgtutor/raycasting.html' },
    ],
    tags: ['raycasting', '2D', 'light', 'shadow'],
    difficulty: 'intermediate',
    explanation: [
        '레이캐스팅(ray casting)은 1980년대 컴퓨터 그래픽스에서 발전한 렌더링 기법으로, 광원이나 시점에서 광선을 발사하여 장면의 물체와 교차점을 계산합니다. Wolfenstein 3D(1992)와 같은 초기 FPS 게임에서 실시간 3D 렌더링에 핵심적으로 사용되었으며, 현대에도 충돌 감지, 가시성 판정 등에 널리 활용됩니다.',
        'Particle이 360개의 Ray를 1도 간격으로 생성하고, 5개의 랜덤 벽(Boundary)과 4개의 경계벽을 배치합니다. Ray.cast(wall)에서 선분-광선 교차 판정(line-line intersection)을 수행하며, 매개변수 t와 u를 계산합니다. t가 0~1 사이(벽 위의 점)이고 u > 0(광선 전방)일 때 교차점을 반환합니다.',
        '교차점 계산에는 두 직선의 매개변수 방정식(parametric equation)을 연립하여 해를 구하는 방법을 사용합니다. 이 방법은 행렬식(determinant)을 이용한 Cramer 법칙과 동일한 원리이며, 컴퓨터 그래픽스에서 가장 기본적인 기하학 연산 중 하나입니다.',
        'Particle.look()에서 각 Ray에 대해 모든 벽과의 교차를 확인하고, 가장 가까운(record) 교차점까지 선을 그립니다. 이것이 가시 영역을 나타내며, 벽 뒤는 어두워집니다. 이 원리는 그림자 계산(shadow casting)과 시야 판정(line of sight)의 기초가 됩니다.',
        'Perlin noise(xoff, yoff)로 Particle이 부드럽게 이동하며, 광선이 벽에 부딪히는 패턴이 실시간으로 변화합니다. stroke(255, 100)으로 반투명 광선을 사용하여 빛줄기 효과를 만듭니다. 이 시뮬레이션은 2D 환경에서 빛과 그림자의 상호작용을 직관적으로 이해하는 데 도움을 줍니다.',
    ],
})

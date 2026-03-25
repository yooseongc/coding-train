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
    ],
    tags: ['reaction', 'diffusion', 'pattern', 'cellular'],
    difficulty: 'advanced',
    explanation: [
        'Gray-Scott 반응-확산 모델을 구현합니다. 두 화학물질 A, B가 확산(diffusion)과 반응(AB^2 항)을 통해 상호작용하며, feed/kill 매개변수가 패턴의 형태를 결정합니다.',
        'Laplacian은 3x3 컨볼루션 커널(중심 -1, 상하좌우 0.2, 대각선 0.05)로 계산합니다. 이는 주변 농도와의 차이를 나타내어 확산 방향과 속도를 결정합니다.',
        'double buffering 패턴으로 grid와 next 두 배열을 사용합니다. 현재 상태(grid)에서 다음 상태(next)를 계산한 후 swap()으로 교환하여, 동시 업데이트 문제를 방지합니다.',
        'loadPixels()/updatePixels()로 픽셀 배열에 직접 접근합니다. (a-b)*255로 A가 많으면 밝고 B가 많으면 어두운 패턴을 렌더링합니다.',
    ],
})

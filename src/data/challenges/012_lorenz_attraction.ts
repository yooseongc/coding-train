import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '012_lorenz_attraction',
    number: 12,
    title: 'Lorenz Attraction',
    categoryId: 'data-visualization',
    description: '로렌츠 끌개(Lorenz attractor)를 3D로 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #12: Lorenz Attraction', url: 'https://thecodingtrain.com/challenges/12-lorenz-attraction' },
    ],
    tags: ['lorenz', 'attractor', 'chaos', '3D'],
    difficulty: 'intermediate',
    explanation: [
        'Lorenz 시스템은 세 개의 미분방정식(dx/dt, dy/dt, dz/dt)으로 정의되는 카오스 시스템입니다. 매개변수 a=10, b=28, c=8/3은 나비 모양의 끌개를 만드는 고전적인 값입니다.',
        'dt=0.01로 오일러 방법(Euler method)을 사용하여 미분방정식을 수치적으로 적분합니다. 각 단계에서 dx, dy, dz를 계산하고 현재 좌표에 더합니다.',
        'points 배열에 매 프레임 새 좌표를 추가하고, beginShape()/endShape()로 모든 점을 연결하는 연속 선을 그립니다. HSB 색상 모드로 경로에 무지개 색상을 입힙니다.',
        'camera() 함수에 mouseX, mouseY를 map()으로 변환한 값을 전달하여, 마우스 움직임으로 3D 시점을 실시간 조작할 수 있습니다.',
    ],
})

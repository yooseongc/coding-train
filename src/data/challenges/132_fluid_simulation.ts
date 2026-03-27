import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '132_fluid_simulation',
    number: 132,
    title: 'Fluid Simulation',
    categoryId: 'physics-simulation',
    description: 'Navier-Stokes 방정식 기반의 유체 시뮬레이션을 p5.js로 구현합니다.',
    files: ['fluid.js', 'fluid_utils.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #132: Fluid Simulation', url: 'https://thecodingtrain.com/challenges/132-fluid-simulation' },
        { title: 'Wikipedia - Navier-Stokes Equations', url: 'https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations' },
        { title: 'Mike Ash - Fluid Simulation for Dummies', url: 'https://mikeash.com/pyblog/fluid-simulation-for-dummies.html' },
        { title: 'Jos Stam - Real-Time Fluid Dynamics for Games (PDF)', url: 'https://www.dgp.toronto.edu/public_user/stam/reality/Research/pdf/GDC03.pdf' },
    ],
    tags: ['fluid', 'Navier-Stokes', 'simulation', 'density'],
    difficulty: 'advanced',
    explanation: [
        'Navier-Stokes 방정식은 점성 유체(viscous fluid)의 운동을 기술하는 편미분방정식으로, 1822년 Claude-Louis Navier와 1845년 George Gabriel Stokes가 정립했습니다. 이 방정식의 일반적인 해의 존재성과 매끄러움(smoothness) 증명은 클레이 수학 연구소의 밀레니엄 상금 문제 중 하나로, 100만 달러의 현상금이 걸려 있습니다.',
        '이 챌린지는 Jos Stam의 2003년 GDC 논문 "Real-Time Fluid Dynamics for Games"를 기반으로 구현합니다. Fluid 클래스에서 확산(diffusion), 투영(projection), 이류(advection) 세 단계를 반복하여 속도장과 밀도장을 업데이트합니다. 투영 단계는 Helmholtz-Hodge 분해를 이용하여 비압축성(incompressibility) 조건을 만족시킵니다.',
        'addDensity()로 캔버스 중앙에 밀도를 주입하고, addVelocity()로 Perlin noise 기반의 회전 방향 속도를 추가합니다. noise(t)에 TWO_PI*2를 곱해 시간에 따라 부드럽게 회전하는 흐름을 만듭니다. Gauss-Seidel 반복법으로 확산 방정식을 풀며, 16회 반복(iter=16)으로 수렴을 보장합니다.',
        '1024x1024 캔버스에서 SCALE(=4) 단위의 256x256 그리드로 나누어 계산합니다. 점성(viscosity=0.0000001)과 확산 계수(diffusion=0)를 조절하여 유체의 성질을 변경할 수 있으며, dt=0.2로 시뮬레이션 시간 간격을 설정합니다.',
        '유체 시뮬레이션은 영화의 VFX(물, 연기, 폭발 효과), 기상 예보, 항공기/자동차 공기역학 설계, 혈류 시뮬레이션 등에 광범위하게 응용됩니다. 실시간 시뮬레이션에서는 격자 기반(Eulerian) 방법 외에도 SPH(Smoothed Particle Hydrodynamics) 같은 입자 기반(Lagrangian) 방법이 사용되며, GPU 가속으로 더욱 정밀한 시뮬레이션이 가능해지고 있습니다.',
    ],
})

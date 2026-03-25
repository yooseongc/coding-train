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
    ],
    tags: ['fluid', 'Navier-Stokes', 'simulation', 'density'],
    difficulty: 'advanced',
    explanation: [
        'Navier-Stokes 방정식은 유체의 운동을 기술하는 편미분방정식입니다. Fluid 클래스에서 확산(diffusion), 이류(advection), 투영(projection) 단계를 반복하여 속도장과 밀도장을 업데이트합니다.',
        'addDensity()로 캔버스 중앙에 50~250 범위의 밀도를 주입하고, addVelocity()로 Perlin noise 기반의 회전 방향 속도를 추가합니다. noise(t)에 TWO_PI*2를 곱해 시간에 따라 부드럽게 회전하는 흐름을 만듭니다.',
        'fluid.step()이 한 타임스텝의 물리 시뮬레이션을 수행합니다. 속도 확산, 투영(비압축성 조건), 이류 순서로 처리하고, 밀도도 같은 과정을 거칩니다. renderD()로 밀도값을 밝기로 변환하여 시각화합니다.',
        '1024x1024 캔버스에서 SCALE 단위의 그리드로 나누어 계산합니다. 점성(viscosity=0.0000001)과 확산 계수(diffusion=0)를 조절하여 유체의 성질을 변경할 수 있으며, dt=0.2로 시뮬레이션 시간 간격을 설정합니다.',
    ],
})

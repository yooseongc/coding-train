import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '159_simple_pendulum_simulation',
    number: 159,
    title: 'Simple Pendulum Simulation',
    categoryId: 'physics-simulation',
    description: '단진자의 각가속도 공식으로 여러 길이의 진자가 동시에 흔들리는 시뮬레이션입니다.',
    files: ['pendulum.js', 'sketch.js'],
    libraries: ['dat.gui.min.js'],
    references: [
        { title: 'Coding Challenge #159: Simple Pendulum Simulation', url: 'https://thecodingtrain.com/challenges/159-simple-pendulum' },
        { title: 'myPhysicsLab - Pendulum', url: 'https://www.myphysicslab.com/pendulum/pendulum-en.html' },
        { title: 'Wikipedia - Pendulum (mechanics)', url: 'https://en.wikipedia.org/wiki/Pendulum_(mechanics)' },
        { title: 'Wikipedia - Simple harmonic motion', url: 'https://en.wikipedia.org/wiki/Simple_harmonic_motion' },
    ],
    tags: ['pendulum', 'physics', 'angular', 'simulation'],
    difficulty: 'intermediate',
    explanation: [
        '단진자(simple pendulum)는 물리학에서 가장 기본적인 진동 시스템 중 하나로, 갈릴레오 갈릴레이가 1583년 피사 대성당의 샹들리에 흔들림을 관찰하면서 등시성(isochronism)을 발견한 것으로 유명합니다. 진자의 운동 방정식은 각가속도 = -g*sin(theta)/L이며, 소각도 근사(small angle approximation)에서 단순 조화 운동(SHM)으로 환원됩니다.',
        'Pendulum 클래스에서 각가속도(angleAcceleration), 각속도(angleVelocity), 각도(angle)를 순차적으로 업데이트하는 오일러 적분(Euler integration)으로 진자 운동을 시뮬레이션합니다. 진자의 주기 T = 2*PI*sqrt(L/g)은 질량에 무관하고 길이에만 의존하는 특성이 있습니다.',
        'spacing=50 간격으로 여러 길이(i*spacing)의 진자를 생성합니다. 짧은 진자는 빠르게, 긴 진자는 느리게 흔들려 자연스러운 주기 차이를 보여줍니다. 초기 각도를 모두 PI/2(수평)로 설정하면, 시간이 지남에 따라 진자들이 점차 어긋나며 아름다운 파동 패턴을 형성합니다.',
        'dat.GUI로 중력(gravity, 0.1~1)과 감쇠(damping, 0.9~1) 파라미터를 실시간 조절합니다. 감쇠는 공기 저항과 마찰을 모사하며, damping이 1에 가까울수록 에너지 손실이 적어 오래 흔들립니다. reset 버튼으로 초기 상태를 복원할 수 있습니다.',
        '진자의 원리는 시계의 진자(pendulum clock, 1656년 크리스티안 하위헌스가 발명), 지진계, 메트로놈, 푸코의 진자(지구 자전 증명) 등에 활용되어 왔습니다. 이 시뮬레이션은 background에 투명도(100)를 주어 잔상 효과로 진자의 궤적을 시각적으로 추적할 수 있게 합니다.',
    ],
})

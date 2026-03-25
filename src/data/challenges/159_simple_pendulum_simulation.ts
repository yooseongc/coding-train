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
    ],
    tags: ['pendulum', 'physics', 'angular', 'simulation'],
    difficulty: 'intermediate',
    explanation: [
        '단진자의 운동 방정식은 각가속도 = -g*sin(theta)/L입니다. Pendulum 클래스에서 angleAcceleration, angleVelocity, angle을 순차적으로 업데이트하여 진자 운동을 시뮬레이션합니다.',
        'spacing=50 간격으로 여러 길이(i*spacing)의 진자를 생성합니다. 짧은 진자는 빠르게, 긴 진자는 느리게 흔들려 자연스러운 주기 차이를 보여줍니다. 초기 각도는 모두 PI/2(수평)입니다.',
        'dat.GUI로 중력(gravity, 0.1~1), 감쇠(damping, 0.9~1) 파라미터를 실시간 조절합니다. damping이 1에 가까울수록 에너지 손실이 적어 오래 흔들리고, reset 버튼으로 초기 상태로 복원합니다.',
        'position은 origin + (len*sin(angle), len*cos(angle))로 계산합니다. 노란색 원과 줄을 그리고, background에 투명도(100)를 주어 잔상 효과로 진자의 궤적을 시각화합니다.',
    ],
})

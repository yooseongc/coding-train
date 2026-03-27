import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '139_calculating_digits_of_pi_with_collision',
    number: 139,
    title: 'Calculating Digits of Pi with Collisions',
    categoryId: 'math-algorithms',
    description: '두 블록의 완전 탄성 충돌 횟수로 원주율(Pi)의 자릿수를 계산합니다.',
    files: ['block.js', 'sketch.js'],
    libraries: ['p5.sound.min.js'],
    references: [
        { title: 'Coding Challenge #139: Calculating Digits of Pi with Collisions', url: 'https://thecodingtrain.com/challenges/139-calculating-digits-of-pi-with-collisions' },
        { title: 'Galperin - Playing Pool with Pi (PDF)', url: 'https://www.maths.tcd.ie/~lebed/Galperin.%20Playing%20pool%20with%20pi.pdf' },
        { title: '3Blue1Brown - Why Do Colliding Blocks Compute Pi?', url: 'https://www.youtube.com/watch?v=HEfHFsfGXjs' },
        { title: 'Wikipedia - Elastic Collision', url: 'https://en.wikipedia.org/wiki/Elastic_collision' },
    ],
    tags: ['pi', 'collision', 'elastic', 'digits'],
    difficulty: 'advanced',
    explanation: [
        '2003년 수학자 Gregory Galperin이 발견한 놀라운 결과로, 질량비가 100^(d-1):1인 두 블록이 1차원에서 완전 탄성 충돌할 때 총 충돌 횟수가 Pi의 처음 d자리와 정확히 일치합니다. 예를 들어 d=1이면 3회, d=2이면 31회, d=3이면 314회입니다. 3Blue1Brown의 유명한 시각화 영상으로 대중적으로 알려졌습니다.',
        '이 현상의 수학적 핵심은 속도 공간(phase space)에서의 기하학입니다. 에너지 보존과 운동량 보존을 동시에 만족하는 속도 조합은 (sqrt(m1)*v1, sqrt(m2)*v2) 공간에서 원 위의 점들입니다. 벽 충돌은 수직선에 대한 반사, 블록 충돌은 특정 각도의 직선에 대한 반사이며, theta = arctan(sqrt(m2/m1))가 핵심 각도입니다.',
        '탄성 충돌 공식 v1 = (m1-m2)/(m1+m2)*u1 + 2*m2/(m1+m2)*u2를 적용합니다. 블록끼리의 충돌과 벽과의 충돌을 모두 카운트합니다. digits가 커질수록 질량비가 급격히 증가하여 timeSteps = 10^(d-1)으로 한 프레임에 여러 시뮬레이션 스텝을 실행하여 계산을 가속합니다.',
        'clack.wav 사운드로 충돌 효과음을 재생하고, DOM에 현재 자릿수와 충돌 횟수를 표시합니다. 이 시뮬레이션은 에너지 보존(conservation of energy)과 운동량 보존(conservation of momentum)이라는 물리학의 근본 법칙이 순수 수학 상수 Pi와 연결되는 아름다운 예시입니다.',
        '이 문제는 동역학 당구(dynamical billiards)의 특수한 경우로, 에르고드 이론(ergodic theory)과 심플렉틱 기하학(symplectic geometry)과도 관련됩니다. Pi를 계산하는 다른 방법으로는 라이프니츠 급수, 바젤 문제(Basel problem), 몬테카를로 방법, 뷔퐁의 바늘(Buffon\'s needle) 등이 있으며, 각각 수학의 서로 다른 분야에서 Pi가 나타남을 보여줍니다.',
    ],
})

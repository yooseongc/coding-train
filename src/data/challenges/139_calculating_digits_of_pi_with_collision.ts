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
    ],
    tags: ['pi', 'collision', 'elastic', 'digits'],
    difficulty: 'advanced',
    explanation: [
        'Galperin의 당구대 방법으로 Pi를 계산합니다. 질량비가 100^(d-1):1인 두 블록이 1D 탄성 충돌하면, 총 충돌 횟수가 Pi의 처음 d자리와 일치합니다. 예: d=1이면 3회, d=2이면 31회.',
        '탄성 충돌 공식 v1 = (m1-m2)/(m1+m2)*u1 + 2*m2/(m1+m2)*u2를 적용합니다. 블록끼리의 충돌과 벽과의 충돌을 모두 count합니다. 속도 공간에서 원을 그리며 theta = arctan(sqrt(m1/m2))가 핵심입니다.',
        'digits가 커질수록 질량비가 급격히 증가하여 매우 많은 충돌이 발생합니다. timeSteps = 10^(d-1)으로 한 프레임에 여러 시뮬레이션 스텝을 실행하여 계산을 가속합니다.',
        'clack.wav 사운드로 충돌 효과음을 재생하고, DOM에 현재 자릿수와 충돌 횟수를 표시합니다. 큰 블록이 화면 밖으로 나가면 다음 자릿수로 자동 리셋됩니다.',
    ],
})

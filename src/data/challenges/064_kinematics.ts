import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '064_kinematics',
    number: 64,
    title: 'Kinematics',
    categoryId: 'physics-simulation',
    description: '순운동학(Forward Kinematics)으로 연쇄 세그먼트가 펄린 노이즈로 흔들리는 촉수를 구현합니다.',
    files: ['segment.js', 'sketch.js'],
    libraries: [],
    versions: [
        { label: 'part1_forward_kinematics', files: [{ name: 'segment.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part2_inverse_kinematics', files: [{ name: 'segment.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part3_inverse_kinematics_fixed_point', files: [{ name: 'robotarm.js', content: '' }, { name: 'segment.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part4_inverse_kinematics_multiple', files: [{ name: 'segment.js', content: '' }, { name: 'tentacle.js', content: '' }, { name: 'sketch.js', content: '' }] },
    ],
    references: [
        { title: 'Coding Challenge #64: Kinematics', url: 'https://thecodingtrain.com/challenges/64-kinematics' },
    ],
    tags: ['kinematics', 'forward', 'inverse', 'arm'],
    difficulty: 'intermediate',
    explanation: [
        '순운동학(Forward Kinematics)은 각 관절의 각도로부터 끝점 위치를 계산합니다. Segment 클래스는 시작점(a), 끝점(b), 길이(len), 각도(angle)를 가지며, 부모-자식 관계로 연결됩니다.',
        '21개의 Segment를 연쇄적으로 연결하고, 각 세그먼트의 wiggle()에서 noise(xoff)로 -1~1의 자체 각도(selfAngle)를 생성합니다. xoff를 0.03씩 증가시켜 부드러운 움직임을 만듭니다.',
        'update()에서 자식의 각도는 부모의 각도에 자체 각도를 더하여 누적됩니다. calculateB()로 cos/sin을 사용해 각도와 길이로부터 끝점 b의 좌표를 계산합니다.',
        '화면 하단 중앙에서 시작하여 위로 뻗어나가는 촉수 형태입니다. while(next) 루프로 체인을 순회하며 각 세그먼트의 wiggle(), update(), show()를 순차 호출합니다.',
    ],
})

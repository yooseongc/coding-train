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
        { title: 'Wikipedia - Kinematics', url: 'https://en.wikipedia.org/wiki/Kinematics' },
        { title: 'Wikipedia - Inverse Kinematics', url: 'https://en.wikipedia.org/wiki/Inverse_kinematics' },
        { title: 'Wikipedia - Forward Kinematics', url: 'https://en.wikipedia.org/wiki/Forward_kinematics' },
    ],
    tags: ['kinematics', 'forward', 'inverse', 'arm'],
    difficulty: 'intermediate',
    explanation: [
        '운동학(Kinematics)은 힘의 원인을 고려하지 않고 물체의 운동 자체를 기술하는 물리학의 한 분야입니다. 그리스어 kinema(움직임)에서 유래했으며, "운동의 기하학(Geometry of Motion)"이라고도 불립니다. 순운동학(Forward Kinematics, FK)은 각 관절의 각도로부터 끝점(End Effector) 위치를 계산하고, 역운동학(Inverse Kinematics, IK)은 반대로 목표 위치로부터 관절 각도를 역산합니다.',
        'Segment 클래스는 시작점(a), 끝점(b), 길이(len), 각도(angle)를 가지며, 부모-자식 관계의 연쇄 구조(Kinematic Chain)로 연결됩니다. 이 구조는 로봇 팔의 링크-조인트(Link-Joint) 시스템과 동일한 모델입니다.',
        '21개의 Segment를 연쇄적으로 연결하고, 각 세그먼트의 wiggle()에서 Perlin noise(xoff)로 -1~1의 자체 각도(selfAngle)를 생성합니다. xoff를 0.03씩 증가시켜 부드러운 유기적 움직임을 만듭니다. Perlin noise는 완전한 랜덤과 달리 시간적 연속성이 있어 자연스러운 애니메이션에 적합합니다.',
        'update()에서 자식의 각도는 부모의 각도에 자체 각도를 더하여 누적됩니다. calculateB()로 cos/sin을 사용해 각도와 길이로부터 끝점 b의 좌표를 계산합니다. 이는 2D 회전 변환 행렬(Rotation Matrix)의 직접적인 적용입니다.',
        '이 챌린지는 4개의 파트로 구성됩니다. Part 1은 순운동학 촉수, Part 2는 역운동학(FABRIK 알고리즘과 유사한 방식), Part 3는 고정점이 있는 로봇 팔, Part 4는 복수의 촉수를 구현합니다.',
        '운동학은 로봇 공학(산업용 로봇 팔 제어), 게임/애니메이션(캐릭터 리깅, 절차적 애니메이션), 의료(수술 로봇, 의수/의족), 가상 현실(손 추적, 모션 캡처) 등에서 핵심적으로 사용됩니다. 특히 역운동학은 3D 애니메이션의 필수 기술입니다.',
    ],
})

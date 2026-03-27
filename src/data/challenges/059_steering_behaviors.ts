import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '059_steering_behaviors',
    number: 59,
    title: 'Steering Behaviors',
    categoryId: 'physics-simulation',
    description: '폰트의 글자 경로를 추출하여 파티클이 도착(arrive)과 회피(flee) 행동으로 텍스트를 형성합니다.',
    files: ['vehicle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #59: Steering Behaviors', url: 'https://thecodingtrain.com/challenges/59-steering-behaviors' },
        { title: 'Craig Reynolds - Steering Behaviors for Autonomous Characters', url: 'http://www.red3d.com/cwr/steer/' },
        { title: 'p5.js Reference - p5.Font.textToPoints()', url: 'https://p5js.org/reference/p5.Font/textToPoints/' },
        { title: 'Nature of Code - Chapter 5: Autonomous Agents', url: 'https://natureofcode.com/autonomous-agents/' },
    ],
    tags: ['steering', 'vehicle', 'seek', 'arrive'],
    difficulty: 'intermediate',
    explanation: [
        '조향 행동(Steering Behaviors)은 1999년 크레이그 레이놀즈(Craig Reynolds)가 GDC에서 발표한 자율 캐릭터의 이동 알고리즘 모음입니다. 핵심 공식은 steering force = desired velocity - current velocity로, 현재 움직임을 원하는 방향으로 부드럽게 전환합니다. 이 챌린지에서는 폰트의 글자 경로를 추출하여 파티클이 텍스트를 형성하는 인터랙티브 시각화를 구현합니다.',
        'loadFont()로 OTF 폰트를 로드하고 font.textToPoints()로 글자의 윤곽(Contour) 점들을 추출합니다. sampleFactor=0.25로 샘플링 밀도를 조절하여 각 점에 Vehicle을 생성합니다. textToPoints()는 폰트의 베지어 곡선(Bezier Curve)을 일정 간격으로 샘플링하는 함수입니다.',
        'Vehicle은 arrive()와 flee() 두 가지 조향 행동을 가집니다. arrive()는 목표까지의 거리에 비례하여 속도를 줄이는 도착 행동(Arrive Behavior)으로, map(d, 0, 100, 0, maxSpeed, true)로 감속합니다. 이는 목표 근처에서 진동(Oscillation)을 방지하는 핵심 기법입니다.',
        'flee()는 마우스와의 거리가 50 이하일 때 반대 방향으로 회피(Flee)합니다. arrive 가중치 1, flee 가중치 2로 설정하여 마우스 회피가 더 강하게 작용합니다. 이처럼 여러 조향 행동을 가중합으로 결합하는 것을 행동 블렌딩(Behavior Blending)이라 합니다.',
        'Vehicle은 랜덤 위치에서 시작하여 목표 위치(글자 경로)로 수렴합니다. 마우스를 가져가면 파티클이 흩어졌다가 마우스를 치우면 다시 글자 형태로 모이는 인터랙티브 효과를 보여줍니다.',
        '조향 행동은 게임 AI(NPC 이동, 적 추적, 회피 기동), 로봇 공학(자율 주행 차량의 경로 추종), 애니메이션(군중 시뮬레이션), 그리고 인터랙티브 웹 디자인(파티클 텍스트, 마우스 반응형 요소)에 폭넓게 응용됩니다.',
    ],
})

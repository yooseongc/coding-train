import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '050_animated_circle_packing',
    number: 50,
    title: 'Animated Circle Packing',
    categoryId: 'data-visualization',
    description: '이미지의 어두운 영역에 원을 배치하고 성장시키는 서클 패킹 애니메이션을 구현합니다.',
    files: ['circle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #50: Animated Circle Packing', url: 'https://thecodingtrain.com/challenges/50-animated-circle-packing' },
    ],
    tags: ['circle-packing', 'growth', 'animation', 'collision'],
    difficulty: 'intermediate',
    explanation: [
        '이미지(2017.png)를 loadPixels()로 분석하여 밝기가 0(검정)인 픽셀의 좌표를 spots 배열에 저장합니다. 서클 패킹은 이 spots 위치에만 원을 생성하여 이미지 형태를 재현합니다.',
        'newCircle()은 spots에서 랜덤 좌표를 선택하고, 기존 원들과 거리를 비교하여 다른 원 내부가 아닌 경우에만 새 Circle을 생성합니다. maxAttempts(100)를 초과하면 noLoop()으로 종료합니다.',
        'Circle 클래스의 grow()는 매 프레임 반지름을 0.5씩 증가시킵니다. 화면 경계(edges())나 다른 원과의 거리가 두 반지름 합 + 2 이하이면 growing을 false로 설정하여 성장을 멈춥니다.',
        '매 프레임 total(20)개의 새 원을 추가하며, 모든 원의 성장 여부를 검사합니다. 원은 stroke만으로 윤곽선을 그려 겹치지 않는 원 배치가 시각적으로 명확하게 보입니다.',
    ],
})

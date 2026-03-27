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
        { title: 'Wikipedia - Circle packing', url: 'https://en.wikipedia.org/wiki/Circle_packing' },
        { title: 'p5.js Reference - loadPixels()', url: 'https://p5js.org/reference/p5/loadPixels/' },
        { title: 'p5.js Reference - dist()', url: 'https://p5js.org/reference/p5/dist/' },
    ],
    tags: ['circle-packing', 'growth', 'animation', 'collision'],
    difficulty: 'intermediate',
    explanation: [
        '서클 패킹(Circle Packing)은 주어진 영역 내에 겹치지 않는 원을 최대한 밀집하게 배치하는 기하학적 문제로, 수학에서는 아폴로니우스(Apollonius)의 원 채우기 문제로 거슬러 올라갑니다. 이 챌린지에서는 이미지의 형태를 따라 원을 배치하고 성장시키는 애니메이션을 구현합니다. 서클 패킹은 정보 시각화, 포스터 디자인, 인포그래픽 등에서 데이터를 시각적으로 표현하는 기법으로 널리 사용됩니다.',
        '이미지(2017.png)를 loadPixels()로 분석하여 밝기가 0(검정)인 픽셀의 좌표를 spots 배열에 저장합니다. 이 방식으로 이미지의 어두운 영역만 추출하여 원 배치의 후보 위치로 사용합니다. 이미지 기반 서클 패킹은 사진이나 로고를 원으로 재구성하는 예술적 표현 기법입니다.',
        'newCircle() 함수는 spots 배열에서 무작위 좌표를 선택하고, dist() 함수로 기존 모든 원과의 거리를 비교합니다. 선택한 좌표가 다른 원 내부에 있으면 유효하지 않으므로 null을 반환합니다. while 루프에서 maxAttempts(100)를 초과하면 더 이상 배치할 공간이 없다고 판단하여 noLoop()으로 애니메이션을 종료합니다.',
        'Circle 클래스의 grow() 메서드는 매 프레임 반지름을 0.5씩 증가시킵니다. 충돌 감지(Collision Detection)에서는 화면 경계(edges())와 다른 원과의 거리를 검사합니다. 두 원 중심 사이의 거리가 두 반지름 합 + 2(여백) 이하이면 growing 플래그를 false로 설정하여 성장을 멈춥니다.',
        '매 프레임 total(20)개의 새 원 생성을 시도하며, 모든 기존 원의 성장과 충돌을 검사합니다. 원은 fill 없이 stroke만으로 윤곽선을 그려 겹치지 않는 배치가 시각적으로 명확하게 보입니다. 애니메이션이 진행됨에 따라 빈 공간이 줄어들면서 점점 작은 원이 추가되어 프랙탈과 유사한 다중 스케일 구조가 형성됩니다.',
    ],
})

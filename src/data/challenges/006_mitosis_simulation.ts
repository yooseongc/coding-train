import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '006_mitosis_simulation',
    number: 6,
    title: 'Mitosis Simulation',
    categoryId: 'physics-simulation',
    description: '세포 분열 시뮬레이션을 구현합니다.',
    files: ['cell.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #6: Mitosis Simulation', url: 'https://thecodingtrain.com/challenges/6-mitosis-simulation' },
        { title: 'Wikipedia - Mitosis', url: 'https://en.wikipedia.org/wiki/Mitosis' },
        { title: 'Wikipedia - Brownian Motion', url: 'https://en.wikipedia.org/wiki/Brownian_motion' },
        { title: 'p5.js Reference - p5.Vector.random2D()', url: 'https://p5js.org/reference/p5.Vector/random2D/' },
    ],
    tags: ['biology', 'cell', 'mitosis', 'simulation'],
    difficulty: 'beginner',
    explanation: [
        '유사분열(Mitosis)은 하나의 모세포가 유전적으로 동일한 두 개의 딸세포로 분열하는 과정입니다. 1882년 독일의 생물학자 발터 플레밍(Walther Flemming)이 처음 체계적으로 기술하였으며, 그리스어 mitos(실)에서 유래한 이름입니다. 이 시뮬레이션에서는 세포 분열의 핵심 개념을 단순화하여 클릭으로 세포를 분열시키는 인터랙티브 모델을 구현합니다.',
        'Cell 클래스는 위치(pos), 반지름(r), 색상(c)을 가집니다. mitosis() 메서드가 같은 위치에서 80% 크기의 새 세포를 생성하여 세포 분열을 시뮬레이션합니다. 실제 생물학에서도 분열 직후의 딸세포는 모세포보다 작으며, 성장 단계(G1 phase)를 거쳐 원래 크기로 돌아갑니다.',
        'mousePressed()에서 클릭한 위치와 각 세포의 거리를 dist()로 계산하여 클릭된 세포를 찾습니다. 해당 세포를 제거하고 두 개의 자식 세포를 추가합니다. 이는 세포 주기(Cell Cycle)에서 M기(Mitotic phase)의 세포질분열(Cytokinesis) 과정을 모델링한 것입니다.',
        'p5.Vector.random2D()로 매 프레임 랜덤한 방향으로 세포를 이동시켜 브라운 운동(Brownian Motion)과 유사한 자연스러운 움직임을 만듭니다. 브라운 운동은 1827년 로버트 브라운이 꽃가루 입자의 불규칙 운동을 관찰한 데서 유래하며, 아인슈타인이 1905년 이론적으로 설명하였습니다.',
        'color()의 네 번째 인자(alpha=100)로 반투명 효과를 주어 세포가 겹칠 때 시각적으로 자연스럽게 보이도록 합니다. 이 기법은 실제 현미경으로 관찰하는 세포의 반투명한 세포질을 시각적으로 표현하는 데 효과적입니다.',
        '이 시뮬레이션은 세포 생물학 교육용 시각화, 인터랙티브 아트, 그리고 게임 메카닉(예: 세포 분열 기반 퍼즐 게임)에 응용될 수 있습니다. 반복적인 분열로 인해 세포 수가 기하급수적으로 증가하는 지수 성장(Exponential Growth) 패턴도 관찰할 수 있습니다.',
    ],
})

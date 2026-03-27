import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '071_minesweeper',
    number: 71,
    title: 'Minesweeper',
    categoryId: 'games',
    description: '지뢰찾기 게임을 p5.js로 구현합니다. 그리드 기반 Cell 클래스와 재귀적 floodFill로 빈 칸을 자동 공개합니다.',
    files: ['cell.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #71: Minesweeper', url: 'https://thecodingtrain.com/challenges/71-minesweeper' },
        { title: 'Minesweeper (video game) - Wikipedia', url: 'https://en.wikipedia.org/wiki/Minesweeper_(video_game)' },
        { title: 'Flood fill - Wikipedia', url: 'https://en.wikipedia.org/wiki/Flood_fill' },
        { title: 'Minesweeper is NP-complete - Clay Mathematics Institute', url: 'https://en.wikipedia.org/wiki/Minesweeper_(video_game)#Computational_complexity' },
    ],
    tags: ['minesweeper', 'grid', 'recursion', 'game'],
    difficulty: 'intermediate',
    explanation: [
        'Minesweeper는 1960년대 메인프레임 게임에서 유래하여, 1990년 Windows 3.1에 기본 탑재되면서 세계에서 가장 널리 알려진 퍼즐 게임 중 하나가 되었습니다. Microsoft는 사용자가 마우스 클릭과 우클릭에 익숙해지도록 하기 위해 이 게임을 포함시켰습니다.',
        'Cell 클래스는 각 셀의 위치(i, j), 지뢰 여부(bee), 공개 상태(revealed), 인접 지뢰 수(neighborCount)를 관리합니다. countBees()는 8방향 이웃(Moore neighborhood)을 순회하며 주변 지뢰 개수를 계산합니다. 이 이웃 탐색 패턴은 이미지 처리의 컨볼루션(convolution) 커널과 동일한 구조입니다.',
        'floodFill()은 재귀적으로 동작합니다. 클릭한 셀의 neighborCount가 0이면 인접한 미공개 셀을 모두 reveal()하고, 그 셀도 0이면 다시 재귀 호출하여 연쇄적으로 빈 영역을 공개합니다. 이 Flood Fill 알고리즘은 그래픽 편집기의 페인트 버킷 도구, 이미지 세그멘테이션 등에 널리 사용됩니다.',
        'setup()에서 make2DArray()로 2D 그리드를 생성하고, options 배열에서 랜덤으로 totalBees(30)개의 지뢰를 배치합니다. splice()로 이미 선택된 위치를 제거하여 중복 배치를 방지하는 Fisher-Yates 셔플의 변형을 사용합니다.',
        'mousePressed()에서 클릭한 셀을 찾아 reveal()하고, 지뢰를 클릭하면 gameOver()로 모든 셀을 공개합니다. show()에서 공개된 셀은 회색 배경에 숫자를, 지뢰는 원으로 표시합니다.',
        '흥미롭게도 Minesweeper의 일관성 판정 문제는 NP-완전(NP-complete)임이 증명되었습니다. 이는 Richard Kaye가 2000년에 증명했으며, 밀레니엄 문제인 P vs NP 문제와 연결됩니다. 큰 보드에서 최적의 Minesweeper 전략을 찾는 것은 제약 충족 문제(CSP, Constraint Satisfaction Problem)로 모델링할 수 있습니다.',
    ],
})

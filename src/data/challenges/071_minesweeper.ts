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
    ],
    tags: ['minesweeper', 'grid', 'recursion', 'game'],
    difficulty: 'intermediate',
    explanation: [
        'Cell 클래스는 각 셀의 위치(i, j), 지뢰 여부(bee), 공개 상태(revealed), 인접 지뢰 수(neighborCount)를 관리합니다. countBees()는 8방향 이웃을 순회하며 주변 지뢰 개수를 계산합니다.',
        'floodFill()은 재귀적으로 동작합니다. 클릭한 셀의 neighborCount가 0이면 인접한 미공개 셀을 모두 reveal()하고, 그 셀도 0이면 다시 재귀 호출하여 연쇄적으로 빈 영역을 공개합니다.',
        'setup()에서 make2DArray()로 2D 그리드를 생성하고, options 배열에서 랜덤으로 totalBees(30)개의 지뢰를 배치합니다. splice()로 중복 배치를 방지합니다.',
        'mousePressed()에서 클릭한 셀을 찾아 reveal()하고, 지뢰를 클릭하면 gameOver()로 모든 셀을 공개합니다. show()에서 공개된 셀은 회색 배경에 숫자를, 지뢰는 원으로 표시합니다.',
    ],
})

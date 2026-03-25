import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '072_frogger',
    number: 72,
    title: 'Frogger',
    categoryId: 'games',
    description: '1981년 KONAMI의 아케이드 게임 Frogger를 p5.js로 구현합니다. 도로의 자동차와 강의 통나무를 피해 개구리를 이동시킵니다.',
    files: ['rectangle.js', 'car.js', 'frog.js', 'log.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #72: Frogger', url: 'https://thecodingtrain.com/challenges/72-frogger' },
    ],
    tags: ['frogger', 'game', 'collision', 'lanes'],
    difficulty: 'intermediate',
    explanation: [
        '화면은 그리드(50px) 단위로 구성됩니다. 하단은 시작 지점, 중간에 자동차가 달리는 도로(row1-3), 안전지대(row4), 통나무가 떠 있는 강(row5-7), 최상단이 목표입니다.',
        'Car, Log 객체는 각각 속도와 방향을 가지고 수평으로 이동하며 화면 밖으로 나가면 반대편에서 다시 나타납니다. Frog은 방향키로 그리드 단위 이동하며, intersects()로 충돌을 감지합니다.',
        '강 영역에서 개구리는 반드시 통나무 위에 있어야 합니다. frog.attach(log)로 통나무에 붙으면 통나무와 함께 이동하고, 통나무 위에 없으면 resetGame()으로 초기화됩니다.',
        'Rectangle 클래스는 Car, Log, Frog의 공통 부모로 위치, 크기, 이동, 충돌 감지 등의 기본 로직을 제공합니다. 자동차와 충돌하거나 강에 빠지면 개구리가 시작 위치로 돌아갑니다.',
    ],
})

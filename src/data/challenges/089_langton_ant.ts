import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '089_langton_ant',
    number: 89,
    title: "Langton's Ant",
    categoryId: 'math-algorithms',
    description: "랭턴의 개미를 구현합니다. 흰색이면 오른쪽, 검은색이면 왼쪽으로 회전하는 단순 규칙에서 복잡한 패턴이 창발합니다.",
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: "Coding Challenge #89: Langton's Ant", url: 'https://thecodingtrain.com/challenges/89-langtons-ant' },
    ],
    tags: ['langton', 'ant', 'cellular', 'automata'],
    difficulty: 'intermediate',
    explanation: [
        "랭턴의 개미는 2차원 범용 튜링 기계로, 두 가지 규칙만 가집니다: (1) 흰색 칸에서는 90도 시계 방향 회전 후 색 반전, 전진, (2) 검은색 칸에서는 90도 반시계 방향 회전 후 색 반전, 전진.",
        '방향은 0(위), 1(오른쪽), 2(아래), 3(왼쪽)으로 인코딩합니다. turnRight()는 (dir+1)%4, turnLeft()는 (dir+3)%4로 계산합니다. 모듈러 연산으로 경계를 토러스 구조로 연결합니다.',
        '400x400 픽셀 해상도에서 매 프레임 100번 반복합니다. 초반 수백 스텝은 대칭적 단순 패턴, 수천 스텝 후 혼돈적 불규칙 패턴, 약 10,000스텝 후에는 104스텝 주기로 반복되는 "고속도로" 패턴이 나타납니다.',
    ],
})

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
        { title: "Wikipedia - Langton's ant", url: 'https://en.wikipedia.org/wiki/Langton%27s_ant' },
        { title: 'Wikipedia - Cellular automaton', url: 'https://en.wikipedia.org/wiki/Cellular_automaton' },
        { title: 'Wikipedia - Turing machine', url: 'https://en.wikipedia.org/wiki/Turing_machine' },
    ],
    tags: ['langton', 'ant', 'cellular', 'automata'],
    difficulty: 'intermediate',
    explanation: [
        "랭턴의 개미(Langton's Ant)는 1986년 크리스 랭턴(Chris Langton)이 고안한 2차원 셀룰러 오토마톤(Cellular Automaton)입니다. 극도로 단순한 두 가지 규칙만으로 복잡한 행동이 창발(emergence)하는 대표적인 예시로, 2000년에 범용 튜링 기계(Universal Turing Machine)임이 증명되었습니다.",
        "규칙은 다음과 같습니다: (1) 흰색 칸에서는 90도 시계 방향 회전 후 색 반전, 전진, (2) 검은색 칸에서는 90도 반시계 방향 회전 후 색 반전, 전진. 이 두 규칙만으로 단순함, 혼돈, 질서의 세 가지 행동 모드가 나타납니다.",
        '방향은 0(위), 1(오른쪽), 2(아래), 3(왼쪽)으로 인코딩합니다. turnRight()는 (dir+1)%4, turnLeft()는 (dir+3)%4로 모듈러 연산을 사용합니다. 경계도 모듈러 연산으로 토러스(Torus) 구조를 형성하여 개미가 한쪽 끝을 벗어나면 반대쪽에서 나타납니다.',
        '세 가지 행동 모드가 관찰됩니다. 초반 수백 스텝에서는 대칭적인 단순 패턴(Simplicity), 수백에서 약 10,000 스텝까지는 혼돈적 불규칙 패턴(Chaos), 그 이후에는 104스텝 주기로 대각선 방향의 "고속도로(Highway)" 패턴이 무한히 반복됩니다.',
        '랭턴의 개미는 셀룰러 오토마톤 이론에서 중요한 위치를 차지합니다. 존 콘웨이(John Conway)의 라이프 게임(Game of Life), 스티븐 울프램(Stephen Wolfram)의 초등 셀룰러 오토마톤과 함께 단순한 규칙에서 복잡성이 창발하는 현상을 보여주는 대표적인 시스템입니다.',
        '이 아이디어는 터마이트(Turmite)로 확장되어 더 많은 색상과 상태를 가진 변형들이 연구되고 있습니다. 인공 생명(Artificial Life), 복잡계(Complex Systems) 연구의 중요한 도구이며, 자기 조직화(Self-Organization) 현상의 이해에 기여합니다.',
    ],
})

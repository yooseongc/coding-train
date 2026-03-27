import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '126_toothpicks',
    number: 126,
    title: 'Toothpicks',
    categoryId: 'creative-coding',
    description: '이쑤시개 수열 패턴을 생성하여 프랙탈 성장 과정을 시각화합니다.',
    files: ['toothpick.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #126: Toothpicks', url: 'https://thecodingtrain.com/challenges/126-toothpicks' },
        { title: 'Wikipedia - Toothpick Sequence', url: 'https://en.wikipedia.org/wiki/Toothpick_sequence' },
        { title: 'OEIS A139250 - Toothpick Sequence', url: 'https://oeis.org/A139250' },
        { title: 'OEIS A139250 - Animation', url: 'https://oeis.org/A139250/a139250.anim.html' },
    ],
    tags: ['toothpick', 'pattern', 'recursive', 'growth'],
    difficulty: 'beginner',
    explanation: [
        '이쑤시개 수열(Toothpick Sequence)은 2D 평면에서 선분을 직각으로 반복 배치하여 프랙탈 패턴을 만드는 기하학적 구성입니다. 첫 단계는 하나의 수직 선분이고, 이후 각 단계에서 노출된(다른 이쑤시개에 가려지지 않은) 끝점마다 직각 방향의 새 이쑤시개를 추가합니다. 이 과정은 셀룰러 오토마톤(Cellular Automaton)의 일종으로도 해석됩니다.',
        'Toothpick 클래스는 방향(dir)에 따라 수평 또는 수직으로 배치됩니다. newPick 플래그가 true인 이쑤시개만 양 끝점(a, b)에서 새 이쑤시개를 생성하며, 기존 이쑤시개의 끝점과 겹치면 생성하지 않습니다. 이 충돌 검사가 프랙탈 패턴의 빈 공간을 만드는 핵심 메커니즘입니다.',
        'OEIS(Online Encyclopedia of Integer Sequences)의 A139250 수열로 등록된 이쑤시개 수열은 0, 1, 3, 7, 11, 15, 23, 35, 43, ... 으로 진행됩니다. 성장률 T(n)/n^2은 n이 2의 거듭제곱에 가까울 때 최대(약 0.67)이고, 약 1.43배 지점에서 최소(약 0.45)로, 프랙탈적 진동 패턴을 보입니다.',
        'scale(factor)로 전체 패턴이 캔버스에 맞도록 자동 축소합니다. 충분히 성장하면 T-square 프랙탈이나 Ulam-Warburton 셀룰러 오토마톤과 유사한 구조가 나타납니다. 이러한 자기 유사적(self-similar) 패턴은 수학, 물리학, 컴퓨터 과학의 교차점에서 연구되는 흥미로운 주제입니다.',
        '이쑤시개 수열은 재귀적 구조와 조합론적 성질 덕분에 이산 수학과 수열 이론의 교육적 도구로 활용됩니다. 유사한 구성으로는 Ulam-Warburton 오토마톤, Sierpinski carpet, 그리고 다양한 L-system 기반 프랙탈이 있으며, 모두 단순한 규칙에서 복잡한 구조가 창발하는 예시입니다.',
    ],
})

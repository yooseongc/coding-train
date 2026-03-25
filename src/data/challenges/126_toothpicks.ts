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
    ],
    tags: ['toothpick', 'pattern', 'recursive', 'growth'],
    difficulty: 'beginner',
    explanation: [
        '이쑤시개 수열은 직각으로 이쑤시개를 반복 배치하여 만드는 2D 프랙탈 패턴입니다. 첫 단계는 하나의 선분이고, 이후 각 단계에서 노출된 끝점마다 직각 방향으로 새 이쑤시개를 추가합니다.',
        'Toothpick 클래스는 방향(dir)에 따라 수평 또는 수직으로 배치됩니다. newPick 플래그가 true인 이쑤시개만 양 끝점(a, b)에서 새 이쑤시개를 생성하며, 기존 이쑤시개와 겹치면 생성하지 않습니다.',
        'sequence 배열에 누적 이쑤시개 수를 기록하여 OEIS A139250 수열을 표시합니다. 성장률은 n^2에 비례하며 0.45*n^2 ~ 0.67*n^2 사이에서 프랙탈 패턴으로 진동합니다.',
        'scale(factor)로 전체 패턴이 캔버스에 맞도록 자동 축소합니다. minX/maxX를 추적하여 확대 비율을 계산하고, T-square 프랙탈과 유사한 구조가 점진적으로 형성됩니다.',
    ],
})

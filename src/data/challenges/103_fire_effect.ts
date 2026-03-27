import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '103_fire_effect',
    number: 103,
    title: 'Fire Effect',
    categoryId: 'creative-coding',
    description: 'DOOM 스타일의 화염 효과를 픽셀 조작으로 구현합니다. 열원, 확산, 냉각, 대류의 4단계로 사실적인 불꽃을 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #103: Fire Effect', url: 'https://thecodingtrain.com/challenges/103-fire-effect' },
        { title: 'Fire Effect Algorithm (Hugo Elias)', url: 'https://web.archive.org/web/20160418004150/http://freespace.virgin.net/hugo.elias/models/m_fire.htm' },
        { title: 'Wikipedia - Doom (1993 video game)', url: 'https://en.wikipedia.org/wiki/Doom_(1993_video_game)' },
        { title: 'Wikipedia - Demoscene', url: 'https://en.wikipedia.org/wiki/Demoscene' },
    ],
    tags: ['fire', 'effect', 'pixel', 'DOOM'],
    difficulty: 'intermediate',
    explanation: [
        '화염 효과(Fire Effect)는 1990년대 데모씬(Demoscene) 커뮤니티와 DOOM(1993) 등 초기 PC 게임에서 유명해진 클래식 그래픽 효과입니다. Hugo Elias의 튜토리얼로 널리 알려진 이 알고리즘은 열원, 확산, 냉각, 대류의 4가지 물리적 과정을 단순화하여 사실적인 불꽃을 실시간으로 생성합니다.',
        '4단계로 구성됩니다: (1) 열원(Heat Source) - 하단에 최대 밝기 픽셀을 랜덤 배치, (2) 확산(Heat Spread) - 상하좌우 4방향 평균으로 열 전파, (3) 냉각(Cooling) - Perlin noise 기반 냉각맵 적용, (4) 대류(Convection) - 결과를 한 픽셀 위로 이동하여 불꽃이 올라가는 효과 생성.',
        'createGraphics()로 buffer1, buffer2, cooling 3개의 그래픽 버퍼를 관리합니다. 이중 버퍼링(Double Buffering)으로 깜빡임 없이 부드러운 애니메이션을 구현합니다. cool()에서 Perlin noise로 불규칙한 냉각맵을 생성하며, pow(n, 3)으로 대부분을 낮은 냉각값으로 만들어 불꽃의 불규칙한 혀(tongue) 모양을 만듭니다.',
        '데모씬(Demoscene)은 1980년대부터 시작된 컴퓨터 아트 하위문화로, 제한된 하드웨어에서 인상적인 시각 효과를 만드는 것을 목표로 합니다. 화염 효과, 물결 효과, 플라즈마(Plasma), 터널 효과 등이 대표적인 데모씬 효과이며, 2020년 유네스코 무형문화유산에 등재되었습니다.',
        '화면 왼쪽에 불꽃 효과를, 오른쪽에 냉각맵을 나란히 표시합니다. 마우스 클릭으로 임의 위치에 열원을 추가할 수 있어 인터랙티브한 불꽃 조작이 가능합니다.',
        '실제 화재 시뮬레이션은 유체역학(Fluid Dynamics)과 화학 반응(Combustion)을 결합한 훨씬 복잡한 모델을 사용합니다. 그러나 이 간단한 픽셀 기반 접근법은 게임, 인터랙티브 아트, UI 효과 등에서 여전히 유용하며, 절차적 생성(Procedural Generation)의 좋은 입문 예제입니다.',
    ],
})

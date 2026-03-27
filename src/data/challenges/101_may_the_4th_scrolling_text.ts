import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '101_may_the_4th_scrolling_text',
    number: 101,
    title: 'May the 4th Scrolling Text',
    categoryId: 'creative-coding',
    description: 'Star Wars 오프닝 크롤을 p5.js WEBGL로 재현합니다. 3D 원근 변환으로 텍스트가 우주 공간으로 사라지는 효과를 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #101: May the 4th Scrolling Text', url: 'https://thecodingtrain.com/challenges/101-may-the-4th-scrolling-text' },
        { title: 'Wikipedia - Star Wars opening crawl', url: 'https://en.wikipedia.org/wiki/Star_Wars_opening_crawl' },
        { title: 'p5.js Reference - WEBGL mode', url: 'https://p5js.org/reference/p5/WEBGL/' },
        { title: 'Wikipedia - 3D projection', url: 'https://en.wikipedia.org/wiki/3D_projection' },
    ],
    tags: ['star-wars', 'scrolling', 'text', '3D'],
    difficulty: 'beginner',
    explanation: [
        'Star Wars 오프닝 크롤(Opening Crawl)은 1977년 첫 영화 이래 모든 시리즈에서 사용된 상징적인 연출입니다. 노란색 텍스트가 3D 원근 변환으로 우주 공간 속으로 사라지는 이 효과는 영화사에서 가장 유명한 타이포그래피 연출 중 하나로 꼽힙니다.',
        'WEBGL 모드에서 rotateX(PI/4)로 텍스트 평면을 X축 기준으로 45도 기울이면, 원근 투영(Perspective Projection)에 의해 아래쪽은 가깝고 크게, 위쪽은 멀고 작게 보이는 크롤 효과가 자연스럽게 나타납니다. WEBGL 모드에서는 원점이 화면 중앙이므로 별도 translate가 필요 없습니다.',
        'preload()에서 loadStrings()로 텍스트 파일을, loadFont()로 커스텀 폰트를 로드합니다. p5.js의 WEBGL 모드에서 text()를 사용하려면 반드시 OpenType/TrueType 폰트를 loadFont()로 로드해야 합니다. 브라우저 기본 폰트는 WEBGL 3D 렌더링에서 지원되지 않습니다.',
        'text(txt, -w/2, y, w, height*10)으로 텍스트 박스를 그리며, y값을 매 프레임 2씩 감소시켜 위로 스크롤합니다. y가 -3000 이하면 리셋하여 무한 반복합니다. 노란색(238, 213, 75)은 원작 Star Wars의 크롤 색상(Pantone 123C)을 재현한 것입니다.',
        '3D 원근 투영(Perspective Projection)은 카메라에서 멀어질수록 물체가 작아지는 현실적 시각 효과를 제공합니다. 이와 대비되는 직교 투영(Orthographic Projection)은 거리에 관계없이 크기가 일정합니다. p5.js WEBGL 모드는 기본적으로 원근 투영을 사용하며, perspective() 함수로 시야각(FOV)을 조절할 수 있습니다.',
    ],
})

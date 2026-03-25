import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '083_doodle_chrome_extension',
    number: 83,
    title: 'Doodle Chrome Extension',
    categoryId: 'drawing-animation',
    description: 'Chrome Extension으로 웹 페이지 위에 자유롭게 낙서할 수 있는 확장 프로그램을 만듭니다.',
    files: ['manifest.json', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #83: Doodle Chrome Extension', url: 'https://thecodingtrain.com/challenges/83-doodle-chrome-extension' },
    ],
    tags: ['chrome-extension', 'canvas', 'drawing', 'overlay'],
    difficulty: 'intermediate',
    codeOnly: true,
    explanation: [
        'p5.js를 Content Script로 주입하여 웹 페이지 위에 투명 캔버스를 오버레이합니다. 이 캔버스에서 마우스 드래그로 자유롭게 그림을 그릴 수 있습니다.',
        'manifest.json의 content_scripts에 p5.min.js와 sketch.js를 모두 포함시키며, matches 패턴으로 모든 웹 페이지에서 동작하도록 설정합니다.',
        'sketch.js에서 createCanvas()로 전체 화면 크기의 캔버스를 만들고, CSS로 position:fixed와 z-index를 높게 설정하여 기존 콘텐츠 위에 표시합니다.',
    ],
})

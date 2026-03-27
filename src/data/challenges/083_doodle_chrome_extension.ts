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
        { title: 'Chrome Extensions - Content Scripts', url: 'https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts' },
        { title: 'p5.js Reference - Instance Mode', url: 'https://p5js.org/reference/p5/p5/' },
        { title: 'MDN - CSS pointer-events', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events' },
    ],
    tags: ['chrome-extension', 'canvas', 'drawing', 'overlay'],
    difficulty: 'intermediate',
    codeOnly: true,
    explanation: [
        'p5.js의 인스턴스 모드(Instance Mode)를 사용하여 Chrome Extension의 Content Script에서 안전하게 p5.js를 실행합니다. 인스턴스 모드는 new p5(sketch) 형태로 p5를 생성하며, 전역 스코프를 오염시키지 않아 기존 웹 페이지의 JavaScript와 충돌을 방지합니다.',
        'manifest.json의 content_scripts에 p5.min.js와 sketch.js를 모두 포함시킵니다. matches 패턴("<all_urls>")으로 모든 웹 페이지에서 동작하도록 설정합니다. Content Script의 JavaScript 파일은 선언된 순서대로 로드되므로, p5.min.js가 sketch.js보다 먼저 선언되어야 합니다.',
        'createCanvas(windowWidth, windowHeight)로 브라우저 전체 화면 크기의 캔버스를 만들고, CSS의 position:fixed로 스크롤에 영향받지 않는 고정 위치에 배치합니다. clear()로 캔버스를 투명하게 만들어 기존 웹 콘텐츠가 보이게 합니다.',
        'pointer-events CSS 속성을 "none"으로 설정하여 캔버스가 아래 콘텐츠의 마우스 이벤트를 가로채지 않도록 합니다. 이를 통해 사용자는 캔버스 아래의 링크 클릭이나 텍스트 선택을 정상적으로 할 수 있으며, mouseIsPressed 시에만 드로잉이 활성화됩니다.',
        'document.body.style["userSelect"] = "none"으로 텍스트 선택을 방지하여 드래그 드로잉 중 의도치 않은 텍스트 하이라이트를 막습니다. line(mouseX, mouseY, pmouseX, pmouseY)로 현재 마우스 위치와 이전 프레임의 마우스 위치를 연결하여 연속적인 선을 그립니다.',
        '이 확장 프로그램은 웹 페이지 위에 주석이나 낙서를 남기는 어노테이션(annotation) 도구의 기본 형태입니다. 실제 프로덕션에서는 저장/불러오기, 색상 변경, 지우개, 스크린샷 캡처 등의 기능을 추가하여 교육용 주석 도구나 버그 리포팅 도구로 발전시킬 수 있습니다.',
    ],
})

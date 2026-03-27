import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '082_image_chrome_extension',
    number: 82,
    title: 'Image Chrome Extension',
    categoryId: 'drawing-animation',
    description: 'Chrome Extension으로 웹 페이지의 모든 이미지를 고양이 사진으로 바꾸는 확장 프로그램을 만듭니다.',
    files: ['manifest.json', 'kitten.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #82: Image Chrome Extension', url: 'https://thecodingtrain.com/challenges/82-image-chrome-extension' },
        { title: 'Chrome Extensions 공식 문서 - Getting Started', url: 'https://developer.chrome.com/docs/extensions/get-started' },
        { title: 'Chrome Extensions - Content Scripts', url: 'https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts' },
        { title: 'MDN - Document.getElementsByTagName()', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName' },
    ],
    tags: ['chrome-extension', 'content-script', 'DOM', 'image'],
    difficulty: 'intermediate',
    codeOnly: true,
    explanation: [
        'Chrome Extension은 Chrome 브라우저의 기능을 확장하는 소프트웨어 프로그램입니다. HTML, CSS, JavaScript 같은 웹 기술로 개발하며, manifest.json 파일이 확장 프로그램의 메타데이터, 권한, 스크립트 설정 등을 정의하는 핵심 설정 파일입니다. 이 챌린지에서는 Manifest V2 형식을 사용합니다.',
        'content_scripts 항목의 matches 패턴("<all_urls>")으로 모든 웹 페이지에서 kitten.js를 자동 실행하도록 설정합니다. web_accessible_resources로 확장 프로그램에 번들된 고양이 이미지 파일들을 웹 페이지에서 접근 가능하게 선언합니다.',
        'kitten.js는 Content Script로, document.getElementsByTagName("img")으로 페이지의 모든 이미지 요소를 찾습니다. chrome.extension.getURL()로 확장 프로그램 내부 리소스의 절대 URL을 생성하고, 각 이미지의 src 속성을 무작위 고양이 이미지로 교체합니다.',
        'Content Script는 웹 페이지의 DOM에 접근할 수 있지만, 페이지의 JavaScript 실행 컨텍스트와는 격리된 환경(isolated world)에서 실행됩니다. 이 격리 메커니즘은 확장 프로그램과 웹 페이지 스크립트 간의 변수 충돌을 방지하고 보안을 강화합니다.',
        '현재 Chrome Extension은 Manifest V3로 전환되어, V2의 chrome.extension.getURL()은 chrome.runtime.getURL()로 대체되었고, 보안 정책이 강화되었습니다. V3에서는 Service Worker가 Background Page를 대체하고, 원격 코드 실행이 제한되는 등 중요한 변화가 있습니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '084_word_definition_chrome_extension',
    number: 84,
    title: 'Word Definition Chrome Extension',
    categoryId: 'drawing-animation',
    description: 'Chrome Extension으로 웹 페이지에서 선택한 단어의 사전 정의를 팝업으로 보여주는 확장 프로그램입니다.',
    files: ['manifest.json', 'background.js', 'content.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #84: Word Definition Chrome Extension', url: 'https://thecodingtrain.com/challenges/84-word-definition-chrome-extension' },
        { title: 'Chrome Extensions - Message Passing', url: 'https://developer.chrome.com/docs/extensions/develop/concepts/messaging' },
        { title: 'Wordnik API 문서', url: 'https://developer.wordnik.com/docs' },
        { title: 'MDN - window.getSelection()', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection' },
    ],
    tags: ['chrome-extension', 'API', 'wordnik', 'messaging'],
    difficulty: 'advanced',
    codeOnly: true,
    explanation: [
        'Chrome Extension의 아키텍처는 크게 Background Script, Content Script, Popup(Browser Action)의 세 영역으로 나뉩니다. 각 영역은 서로 다른 실행 컨텍스트에서 동작하며, 메시지 패싱(Message Passing)을 통해 통신합니다. 이 챌린지에서는 세 영역을 모두 활용하여 단어 사전 검색 확장 프로그램을 만듭니다.',
        'Content Script(content.js)는 웹 페이지의 DOM에 접근하여 사용자의 텍스트 선택을 감지합니다. window.getSelection()으로 선택된 텍스트를 추출하고, chrome.runtime.sendMessage()로 Background Script에 전달합니다. 이 API는 Selection API로, 사용자가 드래그하여 선택한 텍스트 범위를 프로그래밍적으로 접근할 수 있게 합니다.',
        'Background Script(background.js)는 확장 프로그램의 이벤트 허브 역할을 합니다. Content Script에서 선택된 단어를 받아 Wordnik API(영어 사전 API)로 HTTP 요청을 보내 단어의 정의를 가져옵니다. Background Script는 탭에 종속되지 않으므로 크로스 오리진(CORS) 제약 없이 외부 API를 호출할 수 있습니다.',
        'chrome.runtime.onMessage와 chrome.tabs.sendMessage를 사용한 메시징 패턴은 Chrome Extension의 핵심 통신 방식입니다. Content Script에서 Background Script로는 chrome.runtime.sendMessage(), 반대 방향으로는 chrome.tabs.sendMessage()를 사용합니다. 이 비동기 메시징 모델은 마이크로서비스 아키텍처의 이벤트 기반 통신과 유사한 패턴입니다.',
        'sketch.js는 Browser Action 팝업에서 p5.js의 noCanvas() 모드로 DOM 기반 UI를 구성합니다. chrome.extension.getBackgroundPage()로 Background Script의 전역 변수에 직접 접근하여 선택된 단어를 가져오고, loadJSON()으로 Wordnik API를 호출하여 정의를 표시합니다.',
        '이 프로젝트는 외부 API 연동, 비동기 메시징, DOM 조작, UI 렌더링 등 웹 개발의 핵심 개념들을 Chrome Extension이라는 실용적인 형태로 학습할 수 있습니다. 실제 확장 프로그램 개발 시에는 API 키 보안, 에러 핸들링, 사용자 설정 저장(chrome.storage) 등을 추가적으로 고려해야 합니다.',
    ],
})

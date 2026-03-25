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
    ],
    tags: ['chrome-extension', 'API', 'wordnik', 'messaging'],
    difficulty: 'advanced',
    codeOnly: true,
    explanation: [
        'Background Script(background.js)는 확장 프로그램의 이벤트 허브 역할을 합니다. Content Script에서 선택된 단어를 받아 Wordnik API로 사전 정의를 요청합니다.',
        'Content Script(content.js)는 웹 페이지에서 텍스트 선택 이벤트를 감지합니다. window.getSelection()으로 선택된 텍스트를 추출하고, chrome.runtime.sendMessage()로 Background Script에 전달합니다.',
        'chrome.runtime.onMessage와 chrome.tabs.sendMessage를 사용한 메시징 패턴은 Chrome Extension의 핵심 통신 방식입니다. Content Script ↔ Background Script 간 양방향 메시지를 주고받습니다.',
        'sketch.js는 Browser Action 팝업에서 p5.js로 단어 정의를 시각적으로 표시합니다. 팝업은 manifest.json의 browser_action.default_popup으로 지정됩니다.',
    ],
})

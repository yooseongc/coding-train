import { Link } from 'react-router-dom'
import { CodeBlock } from '@study-ui/components'
import { useTitle } from '../../hooks/useTitle'

const bookmarkletBasicCode = `javascript:(function(){
    var elts = document.getElementsByTagName('p');
    for (var i = 0; i < elts.length; i++) {
        elts[i].style['background-color'] = '#C036F3';
    }
})()`

const bookmarkletExternalCode = `(function () {
    var script = document.createElement('script');
    script.src = 'http://example.com/custom-script.js';
    document.body.appendChild(script);
})();`

const manifestBasicCode = `{
    "manifest_version": 2,
    "name": "My Extension",
    "version": "0.1"
}`

const manifestContentScriptCode = `{
    "manifest_version": 2,
    "name": "My Extension",
    "version": "0.1",
    "content_scripts": [
        {
            "matches": ["<all_urls>"],
            "js": ["content.js"]
        }
    ]
}`

const manifestUrlMatchCode = `{
    "manifest_version": 2,
    "name": "My Extension",
    "version": "0.1",
    "content_scripts": [
        {
            "matches": [
                "http://github.com/*",
                "https://github.com/*",
                "http://*.github.com/*",
                "https://*.github.com/*"
            ],
            "js": ["content.js"]
        }
    ]
}`

const backgroundScriptCode = `// background.js
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    // tab: current tab info (id, url, title, etc.)
    console.log('Button clicked on tab:', tab.id);
}`

const manifestBackgroundCode = `{
    "browser_action": {
        "default_icon": "icon.png"
    },
    "background": {
        "scripts": ["background.js"]
    }
}`

const messagingSendCode = `// background.js - Sending a message
function buttonClicked(tab) {
    var msg = { message: "user clicked!" };
    chrome.tabs.sendMessage(tab.id, msg);
}`

const messagingReceiveCode = `// content.js - Receiving a message
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
    if (request.message === "user clicked!") {
        // Do something on the page!
    }
}`

const popupManifestCode = `"browser_action": {
    "default_title": "My Extension Tooltip",
    "default_popup": "popup.html"
}`

const omniboxCode = `// manifest.json
"omnibox": { "keyword": "a2z" }

// background.js
chrome.omnibox.onInputEntered.addListener(omniChanged);

function omniChanged(text) {
    // text: user's input after the keyword
    // Open new tab, send message, etc.
}`

export default function GuideChromeExtension() {
    useTitle('Chrome Extension')
    return (
        <div className="max-w-full mx-auto px-3 lg:px-4 py-6">
            {/* Back link */}
            <Link
                to="/"
                className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 mb-6"
            >
                &larr; Home
            </Link>

            {/* Title */}
            <div className="mb-10">
                <div className="inline-block text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-900 rounded-full px-3 py-1 mb-4">
                    Browser Extension
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Chrome Extension
                    <span className="text-cyan-600 dark:text-cyan-400 ml-3 text-2xl font-normal">
                        브라우저 확장 프로그램
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl leading-relaxed">
                    Chrome 확장 프로그램의 기본 구조와 동작 원리를 학습합니다.
                    Bookmarklet부터 시작하여 Content Script, Background Script,
                    Messaging API까지 단계별로 알아봅니다.
                </p>
            </div>

            {/* Overview */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Chrome Extension이란?
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Chrome Extension은 Chrome 브라우저의 기능을 확장하는 작은 프로그램입니다.
                        웹 페이지의 내용을 수정하거나, UI 요소를 추가하거나, 탭을 관리하거나,
                        주소창과 상호작용하는 등 다양한 기능을 구현할 수 있습니다.
                    </p>
                    <p>
                        이 튜토리얼에서는 선택한 단어의 사전적 정의를 Wordnik API를 사용하여
                        조회하는 Chrome Extension을 만드는 것을 목표로 합니다.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">확장 프로그램의 예시</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Web Paint - 웹 페이지 위에 그림 그리기</li>
                            <li>Momentum - 새 탭 페이지를 대시보드로 교체</li>
                            <li>Wordless Web - 웹 페이지에서 텍스트 제거</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Bookmarklets */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Bookmarklet (북마클릿)
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Bookmarklet은 "Bookmark + Applet"의 합성어로, 웹 브라우저의 즐겨찾기(북마크)에
                        JavaScript 코드를 등록하여 사용하는 간단한 애플리케이션입니다.
                        Chrome Extension의 전신이라고 할 수 있습니다.
                    </p>
                    <p>
                        <code className="text-pink-600 dark:text-pink-400">javascript:</code> 프로토콜 뒤에
                        IIFE(즉시 실행 함수 표현식)를 작성하면 북마클릿이 됩니다.
                        아래 예제는 페이지의 모든 p 태그 배경색을 보라색으로 변경합니다:
                    </p>
                    <CodeBlock code={bookmarkletBasicCode} language="javascript" filename="Bookmarklet - Basic" />
                    <p>
                        외부 스크립트를 동적으로 로드하는 방식도 가능합니다.
                        이 방법을 사용하면 북마클릿을 업데이트하지 않아도 서버의 스크립트를 변경하는 것만으로
                        동작을 업데이트할 수 있습니다:
                    </p>
                    <CodeBlock code={bookmarkletExternalCode} language="javascript" filename="Bookmarklet - External Script" />
                </div>
            </section>

            {/* manifest.json */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    manifest.json
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        모든 Chrome Extension은 <code className="text-pink-600 dark:text-pink-400">manifest.json</code>
                        파일이 필요합니다. 이 파일은 확장 프로그램의 메타데이터(이름, 버전, 권한,
                        사용하는 파일 참조 등)를 정의합니다.
                    </p>

                    <h3 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">기본 구조</h3>
                    <CodeBlock code={manifestBasicCode} language="json" filename="manifest.json (minimal)" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">Content Script 등록</h3>
                    <p>
                        Content Script는 웹 페이지의 DOM에 접근하여 내용을 수정하는 스크립트입니다.
                        <code className="text-pink-600 dark:text-pink-400">matches</code> 필드로 어떤 URL에서
                        동작할지 지정합니다:
                    </p>
                    <CodeBlock code={manifestContentScriptCode} language="json" filename="manifest.json (all URLs)" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">특정 URL 매칭</h3>
                    <p>
                        와일드카드(<code className="text-pink-600 dark:text-pink-400">*</code>)를 사용하여
                        특정 도메인에서만 동작하도록 제한할 수 있습니다:
                    </p>
                    <CodeBlock code={manifestUrlMatchCode} language="json" filename="manifest.json (GitHub only)" />

                    <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 mt-4">
                        <h3 className="font-medium text-cyan-800 dark:text-cyan-300 mb-2">설치 방법</h3>
                        <ol className="list-decimal list-inside space-y-1 text-cyan-700 dark:text-cyan-400">
                            <li><code>chrome://extensions/</code> 페이지로 이동</li>
                            <li>우측 상단의 "개발자 모드" 활성화</li>
                            <li>"압축해제된 확장 프로그램을 로드합니다" 클릭</li>
                            <li>manifest.json이 있는 폴더 선택</li>
                            <li>코드 수정 시 확장 프로그램을 리로드</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Content Scripts */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Content Script
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Content Script는 웹 페이지의 컨텍스트에서 실행되는 JavaScript 파일입니다.
                        DOM에 직접 접근하여 페이지의 내용을 읽거나 수정할 수 있습니다.
                    </p>
                    <p>
                        Chrome은 기본적으로 DOM 로딩이 완전히 끝난 후 Content Script를 로드하므로,
                        별도의 <code className="text-pink-600 dark:text-pink-400">document.onload</code> 이벤트
                        핸들러로 감쌀 필요가 없습니다.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">Content Script의 특징</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            <li>웹 페이지의 DOM에 직접 접근 가능</li>
                            <li>페이지의 JavaScript 변수에는 직접 접근 불가 (격리된 환경)</li>
                            <li>Chrome Extension API의 일부만 사용 가능</li>
                            <li>Background Script와 Messaging API로 통신</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Background Scripts */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Background Script
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Background Script는 확장 프로그램의 이벤트 페이지에서 실행됩니다.
                        브라우저 액션(상단 우측 버튼), 페이지 액션(주소창 아이콘) 등의
                        UI 요소와 연결되어 동작합니다.
                    </p>
                    <CodeBlock code={backgroundScriptCode} language="javascript" filename="background.js" />
                    <CodeBlock code={manifestBackgroundCode} language="json" filename="manifest.json (background)" />
                    <p>
                        Background Script는 각 탭이 아닌 <code className="text-pink-600 dark:text-pink-400">chrome://extensions/</code>
                        페이지의 "뷰 검사 (백그라운드 페이지)"에서 디버깅할 수 있습니다.
                    </p>
                </div>
            </section>

            {/* Messaging */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Messaging API
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Content Script와 Background Script는 서로 다른 컨텍스트에서 실행되므로,
                        Chrome Messaging API를 통해 통신해야 합니다.
                    </p>

                    <h3 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">메시지 보내기 (Background &rarr; Content)</h3>
                    <CodeBlock code={messagingSendCode} language="javascript" filename="background.js (send)" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">메시지 받기 (Content Script)</h3>
                    <CodeBlock code={messagingReceiveCode} language="javascript" filename="content.js (receive)" />
                </div>
            </section>

            {/* Additional Features */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    추가 기능
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Popup</h3>
                    <p>
                        확장 프로그램 아이콘을 클릭했을 때 팝업 창을 표시할 수 있습니다.
                        팝업은 HTML 파일로 정의하며, Content Script나 Background Script와
                        Messaging API를 통해 통신합니다.
                    </p>
                    <CodeBlock code={popupManifestCode} language="json" filename="manifest.json (popup)" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">Omnibox (주소창)</h3>
                    <p>
                        키워드를 등록하면 주소창에서 해당 키워드를 입력하여 확장 프로그램의 동작을
                        트리거할 수 있습니다.
                    </p>
                    <CodeBlock code={omniboxCode} language="javascript" filename="Omnibox" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">Override Page</h3>
                    <p>
                        Chrome의 새 탭(new tab) 페이지를 커스텀 HTML로 대체할 수 있습니다.
                        Momentum과 같은 확장 프로그램이 이 기능을 사용합니다.
                    </p>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">Chrome Extension API</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <div><strong>Alarms</strong> - 타이머/알람 설정</div>
                            <div><strong>Tabs</strong> - 탭 생성/관리</div>
                            <div><strong>Windows</strong> - 창 관리</div>
                            <div><strong>TTS</strong> - 텍스트 음성 변환</div>
                            <div><strong>WebRequest</strong> - 네트워크 요청 감시</div>
                            <div><strong>Storage</strong> - 데이터 저장</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* References */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-green-500">&#128206;</span> 참고 자료
                </h2>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="https://developer.chrome.com/docs/extensions/reference/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Chrome Extensions API Reference &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://shiffman.net/a2z/chrome-ext/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Shiffman - Chrome Extensions &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Coding Train - Chrome Extension Playlist &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://developer.chrome.com/docs/extensions/mv3/messaging/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Chrome Messaging API &uarr;
                        </a>
                    </li>
                </ul>
            </section>

            <p className="text-center text-xs text-gray-400 dark:text-gray-700 mt-10">
                &copy; 2026 yooseongc &middot; coding-train
            </p>
        </div>
    )
}

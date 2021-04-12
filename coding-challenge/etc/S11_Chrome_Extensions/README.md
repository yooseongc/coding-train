

#### What to do?

> Make a chrome extension that looks up a selected word’s definition using the Wordnik API.

#### References
 * https://developer.chrome.com/docs/extensions/reference/
 * https://shiffman.net/a2z/chrome-ext/
 * https://www.wordnik.com/
 * https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS


#### 1. Introduction to Chrome Extensions

 * 1) Bookmarklet = Bookmark + Applet; 웹 브라우저의 북마크를 활용한 작은 애플리케이션
    - 즐겨찾기에 자바스크립트를 등록해 사용할 수 있음.
    - ex) deletionist 
 * 2) Chrome Extension
    - Chrome Browser에서 제공하는 API를 활용한 애플리케이션
    - ex) Web Paint, Momentum, codedoodl.es, decodeia, girsvsgit, wordless web

#### 2. Bookmarklets

```javascript
javascript:(function(){})()
```

> 위 코드와 같이 IIFE를 사용하면 bookmarklet을 만들 수 있음.


```javascript
(function() {
  var elts = document.getElementsByTagName('p');
  for (var i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = '#C036F3';
  }
})();
```

> 위 코드를 `bookapplet.html`의 `<a href="">` 안에 넣어보자.   

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>BookMarklet</title>
</head>
<body>
    <h1>BookMarklet</h1>
    <p>
        This is a paragraph of <a href="javascript:(function() {
            var elts = document.getElementsByTagName('p');
            for (var i = 0; i < elts.length; i++) {
              elts[i].style['background-color'] = '#C036F3';
            }
          })()">Bookmarklet!</a>
    </p>
</body>
</html>
```

> 페이지의 모든 paragraph 태그의 background-color가 퍼플로 바뀐다.   
> 또한, 이 링크를 즐겨찾기로 등록하면, Bookmarklet이 즐겨찾기에 등록이 된다.   

```javascript
(function () {
  var script = document.createElement('script');
  script.src = 'http://shiffman.net/a2z/js/bookmarklet.js';
  document.body.appendChild(script);
})();
```

> 위와 같은 방식으로 자바스크립트를 추가할 수도 있으며, 

```javascript
(function () {
  var script = document.createElement('script');
  var url = 'http://shiffman.net/a2z/js/bookmarklet.js';
  script.src = url + "?" + new Date().getTime();
  document.body.appendChild(script);
})();
```

> 이런 방식으로 자동 업그레이드 적용도 가능할 것이다.


#### 3. Chrome Extension

 * Bookmarlet이 하는 것과 같은 방식으로 동작하며, 더 많은 것을 할 수 있음.
 * 인터페이스 요소를 추가하거나, 탭을 열고 닫거나, 주소창과 상호작용 하는 등 페이지의 컨텐츠를 바꾸는 것 외에도 Chrome Browser API를 이용하여 다양한 것을 할 수 있음.

##### 3-1. Content Scripts

###### manifest.json

 * 모든 Chrome Extension은 `manifest.json`파일이 필요함.
 * 이 파일은 extension에 대한 metadata를 담고 있음.
 * metadata라 함은 `permission`, `references of all other files` 등
 * 아래는 manifest.json의 예시임.

```json
{
  "manifest_version": 2,
  "name": "My Extension",
  "version": "0.1"
}
```

###### content scripts

 * 아래 `manifest.json`의 `content_script`에 자바스크립트 파일을 추가하고, 실제 파일 `content.js`를 추가함.
```json
{
  "manifest_version": 2,
  "name": "My Extension",
  "version": "0.1",
  "content_scripts": [
    {
      "js": ["content.js"]
    }
  ]
}
```

 * 어느 URL에서 동작할지 설정이 필요함
 * `<all_urls>` 또는 `*` wildcard를 사용할 수 있음.

```json
{
  "manifest_version": 2,
  "name": "My Extension",
  "version": "0.1",
  "content_scripts": [
    {
        "matches": [
        "<all_urls>"
        ],
        "js": ["content.js"]
    }
  ]
}
```
```json
{
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
}
```

 * 기본적으로 Chrome은 content script를 DOM 로딩이 완전히 끝난 후 로딩하기 때문에, 별도의 document.onload 등의 이벤트로 감쌀 필요가 없음.
 * `chrome://extensions/` 페이지에서 개발자 모드를 활성화한 후, `압축해제된 확장 프로그램을 로드합니다.`를 클릭하여 등록해보자.
 * 만약 코드를 수정하였다면, reload를 해야할 수 있음.

###### backround scripts

 * UI 또한 Chrome Extension의 한 파트로써 추가가능함.
 * 이는 `browser actions` 또는 `page actions`를 이용.
 * `browser action`은 브라우저 상단 우측에 버튼을 만들고, `page action`은 주소창에 나타나는 아이콘임.
 * 동작은 `background script`를 아래 코드와 같이 이용하여 추가할 수 있음. (background.js)
 * 해당 스크립트는 manifest.json에 등록이 필요.

```javascript
// background.js

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // The user clicked the button!
  // 'tab' is an object with information about the current open tab
}
```

```json
  "browser_action": {
    "default_icon": "icon.png"
  },
  "background": {
    "scripts": ["background.js"],
  }
```

 * background script는 브라우저의 각 탭이 아닌, `chrome://extensions/` 페이지에서 제공하는 `뷰 검사 (백그라운드 페이지)`에서 디버깅이 가능함.
 * buttonClicked의 인수 tab은 아래와 같은 구조로, 현재 탭의 정보가 담긴 object임.
 * 자세한 사항은 Chrome API를 통해 확인 가능.

```json
{
    "active": true,
    "audible": false,
    "autoDiscardable": true,
    "discarded": false,
    "groupId": -1,
    "height": 900,
    "highlighted": true,
    "id": 831,
    "incognito": false,
    "index": 2,
    "mutedInfo": {
        "muted": false
    },
    "pinned": false,
    "selected": true,
    "status": "complete",
    "width": 1182,
    "windowId": 722
}
```


###### messaging

 * `content script`와 `background script`간 통신을 위해서는 Chrome message API를 사용해야 함.
 * `background script`에서의 그 예시는 아래와 같음.

```javascript
function buttonClicked(tab) {
  var msg = {
    message: "user clicked!"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}
```

 * 반면, `content script`에서 받는 부분의 예시는 아래와 같음.

```javascript
// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
    // Do something!
  }
}
```

 * 자세한 것은 https://developer.chrome.com/docs/extensions/mv3/messaging/ 참고


###### popup
 * Chrome Extension 아이콘을 눌렀을 때 버튼에서 pop-up을 띄우는 기능.
 * 아래와 같이 pop-up HTML을 extension에 포함시키고, `manifest.json`에 참조를 하는 방식으로 가능
 * pop-up은 `content script`나 `background script`와 `messaging API`를 통해 통신이 가능.

```json
"browser_action": {
  "default_title": "you can also add a tool tip here",
  "default_popup": "popup.html"
}
```

 * 또한, 아래와 같은 방식으로 `background script`의 변수에 접근할 수도 있음.

```javascript
var word = chrome.extension.getBackgroundPage().word;
```


###### omnibox (address bar)
 * browser action은 omnibox에 키워드를 입력함으로써 동작을 트리거할 수 있음.
 * `manifest.json`에 아래 옵션을 넣으면 됨.
 * 'a2z'라는 키워드를 입력하면 `background script`에서 처리 가능함.
  
```json
  "omnibox": {
    "keyword": "a2z"
  }
```
```javascript
// This event is fired when the user hits "enter"
chrome.omnibox.onInputEntered.addListener(omniChanged);

function omniChanged(text) {
  // The variable "text" has the text the user typed
  // You could open a new tab on a specific page that uses that text
  // or send a message to a content script
  // etc.
}
```


###### override page
 * Chrome extension은 url override 기능을 제공함.
 * 가령, 크롬의 새 탭(new tab)을 열었을 때 보이는 화면을 커스텀하게 변경할 수 있음.
 * 아래와 같은 방식으로 `manifest.json`에 등록

```
  "chrome_url_overrides": {
    "newtab": "newtab.html"
  }
```


###### API
 * Alarms API - https://developer.chrome.com/extensions/alarms
 * tabs - https://developer.chrome.com/extensions/tabs  
 * windows - https://developer.chrome.com/extensions/windows
 * tts (text-to-speech) - https://developer.chrome.com/extensions/tts
 * webRequest - https://developer.chrome.com/extensions/webRequest


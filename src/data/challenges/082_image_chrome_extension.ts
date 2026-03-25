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
    ],
    tags: ['chrome-extension', 'content-script', 'DOM', 'image'],
    difficulty: 'intermediate',
    codeOnly: true,
    explanation: [
        'Chrome Extension의 manifest.json은 확장 프로그램의 메타데이터를 정의합니다. content_scripts 항목에서 어떤 URL에서 어떤 스크립트를 실행할지 지정합니다.',
        'kitten.js는 Content Script로, 페이지의 모든 <img> 태그를 찾아 src를 고양이 이미지 API URL로 교체합니다. document.getElementsByTagName("img")으로 이미지를 순회합니다.',
        'Content Script는 웹 페이지의 DOM에 접근할 수 있지만, 페이지의 JavaScript 실행 컨텍스트와는 격리됩니다. 이를 통해 안전하게 DOM을 조작할 수 있습니다.',
    ],
})

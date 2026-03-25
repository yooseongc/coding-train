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
    ],
    tags: ['star-wars', 'scrolling', 'text', '3D'],
    difficulty: 'beginner',
    explanation: [
        'WEBGL 모드에서 rotateX(PI/4)로 텍스트 평면을 기울이면, 아래쪽이 가깝고 위쪽이 멀어지는 Star Wars 크롤 효과가 나타납니다. WEBGL은 원점이 화면 중앙이므로 별도 translate가 필요 없습니다.',
        'preload()에서 loadStrings()로 텍스트 파일을, loadFont()로 커스텀 폰트(AvenirNextLTPro-Demi)를 로드합니다. join(lines, "\\n")으로 배열을 줄바꿈 포함 문자열로 합칩니다.',
        'text(txt, -w/2, y, w, height*10)으로 텍스트 박스를 그리며, y값을 매 프레임 2씩 감소시켜 위로 스크롤합니다. y가 -3000 이하면 리셋하여 무한 반복합니다. 노란색(238, 213, 75)으로 원작의 색감을 재현합니다.',
    ],
})

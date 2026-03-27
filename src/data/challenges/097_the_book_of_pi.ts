import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '097_the_book_of_pi',
    number: 97,
    title: 'The Book of Pi',
    categoryId: 'data-visualization',
    description: 'PI의 100만 자리를 PDF "책"으로 생성합니다. 숫자를 색상으로 매핑한 그래픽 버전과 텍스트 버전 두 가지를 만듭니다.',
    files: ['sketch.js', 'pi-1million.txt'],
    libraries: ['p5.pdf.js'],
    references: [
        { title: 'Coding Challenge #97: The Book of Pi', url: 'https://thecodingtrain.com/challenges/97-the-book-of-pi' },
        { title: 'GitHub - p5.js-pdf Library', url: 'https://github.com/zenozeng/p5.js-pdf' },
        { title: 'Wikipedia - Pi', url: 'https://en.wikipedia.org/wiki/Pi' },
        { title: 'p5.js Reference - colorMode()', url: 'https://p5js.org/reference/p5/colorMode/' },
    ],
    tags: ['pi', 'digits', 'text', 'visualization'],
    difficulty: 'beginner',
    explanation: [
        'Pi의 100만 자리를 물리적 "책" 형태의 PDF로 생성하는 프로젝트입니다. p5.js-pdf 라이브러리(zenozeng 개발)의 createPDF()로 다중 페이지 PDF를 프로그래밍 방식으로 생성합니다. 두 가지 버전을 만드는데, Part1은 색상 기반 그래픽 버전, Part2는 텍스트 기반 버전입니다.',
        'Part1에서 colorMode(HSB, 1.0)을 사용하여 각 숫자(0~9)를 digit/10의 색조(hue)로 매핑합니다. HSB(Hue-Saturation-Brightness) 색상 모델은 인간의 색상 인지와 직관적으로 대응하여, 0은 빨강, 3은 녹색, 6은 파랑 등으로 자연스럽게 구분됩니다. 100x100 그리드에 10,000자씩 배분하여 100페이지의 컬러 모자이크 PDF를 생성합니다.',
        'Part2에서는 850x1150 크기의 표준 문서 페이지에 margin=100의 여백을 두고 Courier 고정폭(Monospace) 폰트로 숫자를 배열합니다. 고정폭 폰트를 사용하는 이유는 모든 숫자가 동일한 폭을 차지하여 격자 형태로 정렬되기 때문입니다. textWidth()로 문자 폭을, 14.4px로 줄 높이를 설정하여 페이지를 채웁니다.',
        'pdf.beginRecord()로 PDF 기록을 시작하고, 페이지가 채워지면 pdf.nextPage()로 새 페이지를 추가합니다. "3."으로 시작하는 전체 Pi 값을 순차적으로 기록하며, pdf.endRecord()와 pdf.save()로 최종 PDF 파일을 다운로드합니다.',
        'Pi를 "책"으로 물리화하는 것은 무한이라는 수학적 개념을 유한한 물리적 형태로 표현하려는 시도입니다. 실제로 100만 자리는 Pi의 극히 일부에 불과하며(현재 100조 자리 이상 계산됨), 이 책은 수학의 아름다움과 무한의 개념을 직관적으로 체험하게 합니다. 색상 버전에서 특정 패턴이 보이지 않는 것 자체가 Pi의 정규성(Normality)을 시각적으로 시사합니다.',
    ],
})

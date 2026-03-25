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
    ],
    tags: ['pi', 'digits', 'text', 'visualization'],
    difficulty: 'beginner',
    explanation: [
        'p5.js-pdf 라이브러리의 createPDF()로 다중 페이지 PDF를 생성합니다. Part1은 100x100 그리드에 HSB 색상으로 숫자를 표현하고, Part2는 Courier 폰트로 숫자를 텍스트로 배열합니다.',
        'Part1에서 colorMode(HSB, 1.0)을 사용하여 각 숫자(0~9)를 digit/10의 색조(hue)로 매핑합니다. 100만 자리를 페이지당 10,000자씩 배분하여 100페이지의 컬러 PDF를 만듭니다.',
        'Part2에서는 850x1150 크기의 페이지에 여백(margin=100)을 두고 Courier 고정폭 폰트로 숫자를 채웁니다. pdf.nextPage()로 페이지를 넘기며, "3."으로 시작하는 전체 PI 값을 텍스트 책으로 생성합니다.',
    ],
})

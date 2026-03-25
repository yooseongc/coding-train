import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '156_peeking_inside_pi',
    number: 156,
    title: 'Peeking Inside Pi',
    categoryId: 'data-visualization',
    description: 'Pi의 100만 자리 숫자에서 원하는 숫자열을 검색하는 인터랙티브 도구를 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #156: Peeking Inside Pi', url: 'https://thecodingtrain.com/challenges/156-peeking-inside-pi' },
    ],
    tags: ['pi', 'digits', 'peek', 'visualization'],
    difficulty: 'beginner',
    explanation: [
        'Pi의 처음 100만 자리가 담긴 텍스트 파일(pi-million.txt)을 로드하고, 입력한 숫자열이 몇 번째 자리에 있는지 검색합니다.',
        'preload()에서 loadStrings()로 Pi 데이터를 로드합니다. createInput()으로 검색 입력 필드를 만들고, input 이벤트마다 searchItUp()을 호출하여 실시간 검색합니다.',
        'indexOf() 함수로 문자열 검색을 구현합니다. 시작 인덱스를 2로 설정하여 "3." 이후부터 검색하며, 중첩 반복문으로 첫 문자 일치 후 나머지를 비교하는 단순 검색을 사용합니다.',
        'noCanvas()로 캔버스 없이 DOM 요소만 사용합니다. 검색 결과의 위치(인덱스)를 표시하고, 찾지 못하면 해당 메시지를 보여줍니다. 생일, 전화번호 등을 Pi 속에서 찾는 재미를 제공합니다.',
    ],
})

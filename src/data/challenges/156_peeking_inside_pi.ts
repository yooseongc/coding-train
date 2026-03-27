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
        { title: 'Pi Day - Fathom Information Design', url: 'http://pi.fathom.info/' },
        { title: 'Wikipedia - Boyer-Moore string-search algorithm', url: 'https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm' },
        { title: 'Wikipedia - Pi (Digit distribution)', url: 'https://en.wikipedia.org/wiki/Pi#Digit_distribution' },
    ],
    tags: ['pi', 'digits', 'peek', 'visualization'],
    difficulty: 'beginner',
    explanation: [
        '원주율 Pi는 수학에서 가장 유명한 상수로, 소수점 이하의 자릿수가 무한히 이어지며 반복되지 않는 무리수(irrational number)이자 초월수(transcendental number)입니다. Pi의 자릿수에서 특정 숫자열을 찾는 것은 수학적 호기심을 자극하는 흥미로운 활동으로, 이 챌린지에서는 Pi의 처음 100만 자리에서 원하는 숫자열을 검색합니다.',
        'preload()에서 loadStrings()로 Pi 데이터(pi-million.txt)를 로드합니다. createInput()으로 검색 입력 필드를 만들고, input 이벤트마다 searchItUp()을 호출하여 실시간 검색합니다. 소스 코드의 주석에서는 효율적인 문자열 검색을 위한 Boyer-Moore 알고리즘도 언급하고 있습니다.',
        'indexOf() 함수로 문자열 검색을 구현합니다. 시작 인덱스를 2로 설정하여 "3." 이후부터 검색하며, 중첩 반복문으로 첫 문자 일치 후 나머지를 비교하는 단순 검색을 사용합니다. 100만 자리 내에서 6자리 이하의 숫자열은 대부분 찾을 수 있습니다.',
        'noCanvas()로 캔버스 없이 DOM 요소만 사용합니다. 검색 결과의 위치(인덱스)를 표시하고, 찾지 못하면 해당 메시지를 보여줍니다. 생일, 전화번호 등 개인적으로 의미 있는 숫자를 Pi 속에서 찾는 재미를 제공합니다.',
        'Pi의 자릿수 분포는 정규성(normality) 추측과 관련이 있습니다. 정규수(normal number)라면 0~9 각 숫자가 균등하게 나타나야 하며, 실제로 수조 자리까지 계산한 결과 이 추측과 일치하지만 아직 수학적으로 증명되지는 않았습니다.',
    ],
})

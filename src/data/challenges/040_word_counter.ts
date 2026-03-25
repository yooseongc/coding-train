import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '040_word_counter',
    number: 40,
    title: 'Word Counter',
    categoryId: 'text-nlp',
    description: '텍스트 파일의 단어 빈도를 세어 빈도순으로 정렬하는 용어 색인(concordance)을 구현합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #40: Word Counter', url: 'https://thecodingtrain.com/challenges/40-word-counter' },
    ],
    tags: ['word', 'counter', 'frequency', 'text'],
    difficulty: 'beginner',
    explanation: [
        'loadStrings()로 rainbow.txt를 줄 단위 배열로 불러온 뒤 join("\\n")으로 하나의 문자열로 합칩니다. 정규표현식 /\\W+/로 비단어 문자를 기준으로 split하여 토큰 배열을 만듭니다.',
        'map()으로 소문자 변환 후 reduce()로 객체에 단어별 카운트를 누적합니다. /\\d+/ 패턴으로 숫자만으로 구성된 토큰은 제외하여 의미 있는 단어만 집계합니다.',
        'Object.keys()로 단어 키 배열을 추출한 뒤 sort()에서 counter[b] - counter[a]로 빈도 내림차순 정렬합니다. createDiv()로 각 단어와 빈도수를 DOM에 출력합니다.',
    ],
})

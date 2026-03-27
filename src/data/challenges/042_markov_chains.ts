import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '042_markov_chains',
    number: 42,
    title: 'Markov Chains',
    categoryId: 'text-nlp',
    description: 'N-gram 기반 마르코프 체인으로 원문 스타일의 새로운 텍스트와 이름을 자동 생성합니다.',
    files: ['sketch.js', 'names.txt', 'unicorn.txt'],
    libraries: [],
    bodyHtml: '<button id="mk1btn">Generate</button><div id="mk1res"></div><button id="mk2btn">Generate</button><div id="mk2res"></div>',
    references: [
        { title: 'Coding Challenge #42: Markov Chains', url: 'https://thecodingtrain.com/challenges/42-markov-chains' },
        { title: 'Wikipedia: 마르코프 연쇄', url: 'https://ko.wikipedia.org/wiki/%EB%A7%88%EB%A5%B4%EC%BD%94%ED%94%84_%EC%97%B0%EC%87%84' },
        { title: 'Wikipedia: N-gram', url: 'https://en.wikipedia.org/wiki/N-gram' },
        { title: 'Setosa: Markov Chains 시각적 설명', url: 'https://setosa.io/ev/markov-chains/' },
        { title: 'Wikipedia: Markov property', url: 'https://en.wikipedia.org/wiki/Markov_property' },
    ],
    tags: ['markov', 'chain', 'text', 'generation'],
    difficulty: 'intermediate',
    explanation: [
        '마르코프 체인(Markov chain)은 러시아 수학자 안드레이 마르코프(Andrey Markov, 1856-1922)가 제안한 확률 모델로, 마르코프 성질(Markov property)에 기반합니다. 마르코프 성질이란 미래 상태가 오직 현재 상태에만 의존하고 과거 이력에는 무관하다는 "기억 없음(memoryless)" 속성입니다.',
        'N-gram은 연속된 N개의 문자(또는 단어)로 구성된 시퀀스입니다. 이 구현에서는 order=3인 트라이그램(trigram)을 사용하여, 3글자 문자열을 키로 하고 그 다음에 올 문자들을 배열로 저장합니다. 학습 시 텍스트를 한 글자씩 슬라이딩하며 ngrams 객체를 구축합니다.',
        'markov1()은 unicorn.txt에서 연속 텍스트를 학습하여 100자를 생성합니다. markov2()는 이름 목록에서 학습하되, beginnings 배열에 각 이름의 첫 3글자를 따로 저장하여 자연스러운 시작점을 제공합니다. 두 방식 모두 random(possibilities)로 다음 문자를 확률적으로 선택합니다.',
        '마르코프 체인 텍스트 생성은 현대 자연어 처리의 출발점 중 하나입니다. 클로드 섀넌(Claude Shannon)의 1948년 정보 이론 논문에서도 마르코프 모델로 영어 텍스트를 생성하는 예시를 다루었습니다. 오늘날에는 GPT 같은 대규모 언어 모델이 이 개념을 극대화한 것이지만, N-gram 기반 마르코프 모델은 챗봇, 자동 완성, 음악 생성 등에서 여전히 활용됩니다.',
    ],
})

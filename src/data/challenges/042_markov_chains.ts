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
    ],
    tags: ['markov', 'chain', 'text', 'generation'],
    difficulty: 'intermediate',
    explanation: [
        '마르코프 체인은 현재 상태만으로 다음 상태를 결정하는 확률 모델입니다. order=3인 N-gram을 사용하여 3글자 연속 문자열을 키로, 다음에 올 문자를 값 배열로 저장합니다.',
        'markov1()은 unicorn.txt에서 연속 텍스트를 학습합니다. 초기 gram으로 시작하여 random(possibilities)로 다음 문자를 선택하고, 결과 문자열의 마지막 3글자를 새 gram으로 사용하여 100자를 생성합니다.',
        'markov2()는 이름 목록(names.txt)에서 학습하되, beginnings 배열에 각 이름의 첫 3글자를 따로 저장합니다. 생성 시 random(beginnings)로 시작점을 선택하여 자연스러운 이름을 만듭니다.',
        '두 파트 모두 버튼 클릭 시 createP()로 결과를 출력합니다. ngrams 객체에 없는 gram을 만나면 break하여 생성을 종료합니다.',
    ],
})

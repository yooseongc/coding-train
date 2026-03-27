import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '079_number_guessing_chatbot',
    number: 79,
    title: 'Number Guessing Chatbot',
    categoryId: 'text-nlp',
    description: 'RiveScript 챗봇 라이브러리를 사용하여 1~10 사이의 숫자 맞추기 게임 챗봇을 만듭니다.',
    files: ['sketch.js'],
    libraries: ['rivescript.min.js'],
    bodyHtml: '<h1>Chatbot</h1><p>say: <input id="user_input" /> <button id="submit">submit</button></p><p>reply: <span id="output"></span></p>',
    references: [
        { title: 'Coding Challenge #79: Number Guessing Chatbot', url: 'https://thecodingtrain.com/challenges/79-number-guessing-chatbot' },
        { title: 'RiveScript 공식 사이트', url: 'https://www.rivescript.com/' },
        { title: 'RiveScript JavaScript 라이브러리 (GitHub)', url: 'https://github.com/aichaos/rivescript-js' },
        { title: 'Wikipedia: Chatbot', url: 'https://en.wikipedia.org/wiki/Chatbot' },
    ],
    tags: ['chatbot', 'number', 'guessing', 'DOM'],
    difficulty: 'beginner',
    explanation: [
        'RiveScript는 노아 페터슨(Noah Petherbridge)이 개발한 챗봇용 스크립팅 언어로, AIML(Artificial Intelligence Markup Language)에서 영감을 받았지만 더 직관적인 문법을 제공합니다. "+"로 패턴(사용자 입력), "-"로 응답, "*"로 조건 분기를 정의하며, 변수 저장(<set>/<get>)과 와일드카드(<star>)를 지원합니다.',
        'brainrive.txt에서 "set #" 패턴으로 정답을 챗봇 내부 변수에 저장합니다. 사용자가 숫자를 입력하면 "#" 패턴이 매칭되고, "*" 조건에서 <star>(사용자 입력)와 <get num>(저장된 정답)을 비교하여 "higher", "lower", "you got it!" 중 적절한 응답을 반환합니다.',
        'loadBot()에서 bot.loadFile()로 RiveScript 파일을 비동기 로드하고, bot.sortReplies()로 패턴 우선순위를 정리합니다. floor(random(10))+1로 1-10 사이의 정답을 생성한 뒤 bot.reply()로 "set N" 명령을 보내 게임을 시작합니다.',
        '이 챌린지는 규칙 기반(rule-based) 챗봇의 기본 원리를 보여줍니다. 초기 챗봇인 ELIZA(1966, Joseph Weizenbaum)도 패턴 매칭으로 동작했으며, 이런 접근법은 고객 서비스 FAQ 봇이나 게임 NPC 대화 등에서 여전히 활용됩니다.',
    ],
})

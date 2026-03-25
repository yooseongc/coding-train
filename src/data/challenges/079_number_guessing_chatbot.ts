import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '079_number_guessing_chatbot',
    number: 79,
    title: 'Number Guessing Chatbot',
    categoryId: 'text-nlp',
    description: 'RiveScript 챗봇 라이브러리를 사용하여 1~10 사이의 숫자 맞추기 게임 챗봇을 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    codeOnly: true,
    bodyHtml: '<p>say: <input id="user_input" /> <button id="submit">submit</button></p><p>reply: <span id="output"></span></p>',
    references: [
        { title: 'Coding Challenge #79: Number Guessing Chatbot', url: 'https://thecodingtrain.com/challenges/79-number-guessing-chatbot' },
    ],
    tags: ['chatbot', 'number', 'guessing', 'DOM'],
    difficulty: 'beginner',
    notice: '이 챌린지는 RiveScript 챗봇 라이브러리가 필요합니다. 외부 라이브러리 로드에 실패할 수 있습니다.',
    explanation: [
        'RiveScript는 챗봇용 간단한 스크립팅 언어로, 패턴 매칭 기반의 대화 규칙을 정의합니다. brainrive.txt에 "+" 패턴과 "-" 응답, "*" 조건을 작성하여 숫자 비교 로직을 구현합니다.',
        'loadBot()에서 bot.loadFile()로 RiveScript 파일을 비동기 로드하고, floor(random(10))+1로 정답을 설정한 뒤 bot.reply()로 "set N" 명령을 보내 챗봇 내부에 정답을 저장합니다.',
        'noCanvas()로 캔버스 없이 HTML DOM을 사용합니다. select()로 input과 button을 연결하고, 사용자 입력을 bot.reply()에 전달하면 RiveScript가 숫자 비교 후 "pick a higher/lower number" 또는 "you got it!"을 응답합니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '080_voice_chatbot',
    number: 80,
    title: 'Voice Chatbot',
    categoryId: 'text-nlp',
    description: 'p5.Speech 라이브러리의 음성인식(SpeechRec)과 음성합성(Speech)으로 RiveScript 기반 음성 챗봇을 구현합니다.',
    files: ['sketch.js'],
    libraries: ['rivescript.min.js', 'p5.speech.js'],
    bodyHtml: '<h1>Voice Chatbot</h1><p>say: <span id="input"></span></p><p>reply: <span id="output"></span></p>',
    references: [
        { title: 'Coding Challenge #80: Voice Chatbot', url: 'https://thecodingtrain.com/challenges/80-voice-chatbot' },
        { title: 'RiveScript 공식 사이트', url: 'https://www.rivescript.com/' },
        { title: 'MDN: Web Speech API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API' },
        { title: 'p5.Speech 라이브러리', url: 'https://idmnyu.github.io/p5.js-speech/' },
    ],
    tags: ['voice', 'speech', 'recognition', 'synthesis'],
    difficulty: 'intermediate',
    explanation: [
        'p5.Speech 라이브러리는 브라우저의 Web Speech API를 p5.js에서 쉽게 사용할 수 있게 감싸는 래퍼입니다. p5.SpeechRec(음성인식, STT)로 마이크 입력을 텍스트로 변환하고, p5.Speech(음성합성, TTS)로 텍스트를 음성으로 출력합니다. Web Speech API는 W3C 표준으로, Chrome, Edge 등 주요 브라우저에서 지원합니다.',
        'RiveScript로 "knock knock" 농담 챗봇을 구현합니다. % 기호는 이전 응답 컨텍스트(previous reply)를 정의하여 다단계 대화(multi-turn conversation)를 처리합니다. "Who is there?" 응답 후 다음 사용자 입력은 "% who is there" 컨텍스트에서 처리되어, 대화의 흐름을 유지합니다.',
        'continuous=true로 지속적 음성인식을 활성화하고, interim=false로 최종 결과만 사용합니다. speechRec.resultValue가 true일 때 인식된 텍스트(resultString)를 bot.reply()에 전달하고, 응답을 speech.speak()와 DOM에 동시에 출력합니다.',
        '음성 인터페이스는 시리(Siri), 알렉사(Alexa), 구글 어시스턴트 등 현대 AI 비서의 기반 기술입니다. STT(Speech-to-Text) → NLU(자연어 이해) → 대화 관리 → NLG(자연어 생성) → TTS(Text-to-Speech) 파이프라인의 축소판을 이 챌린지에서 체험할 수 있습니다.',
    ],
})

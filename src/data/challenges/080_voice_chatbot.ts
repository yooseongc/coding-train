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
    ],
    tags: ['voice', 'speech', 'recognition', 'synthesis'],
    difficulty: 'intermediate',
    explanation: [
        'p5.SpeechRec로 마이크 입력을 텍스트로 변환하고, p5.Speech로 텍스트를 음성으로 출력합니다. continuous=true로 지속적 음성인식을 활성화하고, interim=false로 최종 결과만 사용합니다.',
        'RiveScript로 "knock knock" 농담 챗봇을 구현합니다. brainrive.txt에 패턴 매칭 규칙과 %로 이전 응답 컨텍스트를 정의하여 다단계 대화를 처리합니다.',
        'speechRec.resultValue가 true일 때 인식된 텍스트(resultString)를 bot.reply()에 전달하고, 응답을 speech.speak()로 읽어줍니다. inputSpan과 outputSpan에 대화 내용을 실시간 표시합니다.',
    ],
})

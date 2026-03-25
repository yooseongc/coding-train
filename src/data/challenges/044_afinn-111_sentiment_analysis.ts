import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '044_afinn-111_sentiment_analysis',
    number: 44,
    title: 'AFINN-111 Sentiment Analysis',
    categoryId: 'text-nlp',
    description: 'AFINN-111 감성 사전을 이용하여 입력 텍스트의 긍정/부정 감성 점수를 실시간으로 분석합니다.',
    files: ['sketch.js', 'afinn111.json'],
    libraries: [],
    bodyHtml: '<textarea id="txt" cols="50" rows="3">I am happy</textarea><p id="scoreP"></p><p id="comparativeP"></p><p id="wordlistP"></p>',
    references: [
        { title: 'Coding Challenge #44: AFINN-111 Sentiment Analysis', url: 'https://thecodingtrain.com/challenges/44-afinn-111-sentiment-analysis' },
    ],
    tags: ['sentiment', 'analysis', 'AFINN', 'NLP'],
    difficulty: 'intermediate',
    explanation: [
        'AFINN-111은 2477개 영어 단어에 -5(부정)~+5(긍정) 정수 점수를 부여한 감성 사전입니다. convert.js가 TSV 파일을 loadTable()로 읽어 JSON으로 변환하고, sketch.js는 이 JSON을 loadJSON()으로 사용합니다.',
        '텍스트 입력 필드의 input 이벤트에서 /\\W/로 단어를 분리하고, 각 단어를 소문자로 변환하여 afinn 사전에서 점수를 조회합니다. hasOwnProperty()로 사전에 존재하는 단어만 점수를 합산합니다.',
        'totalScore(총점)과 comparative(총점/단어수)를 실시간으로 표시합니다. 점수가 부여된 단어 목록도 함께 출력하여 어떤 단어가 점수에 기여하는지 확인할 수 있습니다.',
    ],
})

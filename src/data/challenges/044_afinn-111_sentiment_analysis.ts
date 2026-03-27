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
        { title: 'AFINN: Finn Arup Nielsen 논문', url: 'http://www2.imm.dtu.dk/pubdb/pubs/6010-full.html' },
        { title: 'Wikipedia: Sentiment analysis', url: 'https://en.wikipedia.org/wiki/Sentiment_analysis' },
        { title: 'Wikipedia: 자연어 처리', url: 'https://ko.wikipedia.org/wiki/%EC%9E%90%EC%97%B0%EC%96%B4_%EC%B2%98%EB%A6%AC' },
    ],
    tags: ['sentiment', 'analysis', 'AFINN', 'NLP'],
    difficulty: 'intermediate',
    explanation: [
        '감성 분석(Sentiment Analysis)은 자연어 처리(NLP), 텍스트 분석, 전산 언어학을 결합하여 텍스트에서 감정 상태와 주관적 정보를 식별하고 정량화하는 기술입니다. 마케팅, 고객 서비스, 임상 의학, 소셜 미디어 모니터링 등 다양한 분야에서 활용됩니다.',
        'AFINN-111은 덴마크 공과대학(DTU)의 핀 오럽 닐센(Finn Arup Nielsen)이 2009-2011년에 수동으로 레이블링한 감성 사전으로, 2477개 영어 단어에 -5(매우 부정)~+5(매우 긍정) 정수 점수를 부여합니다. 사전 기반(lexicon-based) 접근법의 대표적인 예로, 머신러닝 없이도 빠르고 해석 가능한 감성 분석이 가능합니다.',
        '텍스트 입력 필드의 input 이벤트에서 /\\W/로 단어를 분리하고, 각 단어를 소문자로 변환하여 afinn 사전에서 점수를 조회합니다. totalScore(총점)와 comparative(총점/단어수, 정규화된 감성 점수)를 실시간으로 표시하며, 점수가 부여된 단어 목록도 함께 출력합니다.',
        '사전 기반 감성 분석의 한계는 문맥, 풍자, 부정어("not good")를 처리하기 어렵다는 점입니다. 이를 보완하기 위해 VADER(Valence Aware Dictionary), TextBlob, 또는 BERT 같은 딥러닝 모델을 사용하는 현대적 접근법이 발전했습니다. 하지만 AFINN의 단순함과 투명성은 교육과 프로토타이핑에서 여전히 가치가 있습니다.',
    ],
})

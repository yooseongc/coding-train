import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '128_sketchrnn_snowflakes',
    number: 128,
    title: 'SketchRNN Snowflakes',
    categoryId: 'neural-networks-ml',
    description: 'ml5.js의 SketchRNN 모델을 사용하여 AI가 눈꽃 결정을 자동으로 그립니다.',
    files: ['sketch.js'],
    libraries: ['ml5.min.js'],
    references: [
        { title: 'Coding Challenge #128: SketchRNN Snowflakes', url: 'https://thecodingtrain.com/challenges/128-sketchrnn-snowflakes' },
    ],
    tags: ['sketchRNN', 'snowflake', 'ml5', 'generative'],
    difficulty: 'intermediate',
    explanation: [
        'SketchRNN은 Google Magenta 팀이 Quick, Draw! 데이터로 훈련한 순환 신경망(RNN)으로, 카테고리별 낙서를 생성할 수 있습니다. ml5.js를 통해 "snowflake" 모델을 로드합니다.',
        'model.generate(gotSketch)로 다음 획(stroke)을 비동기적으로 받아옵니다. strokePath.dx/dy에 0.2를 곱한 스케일로 x, y를 업데이트하며, pen이 "down"일 때만 line()을 그립니다.',
        'pen 상태가 "end"가 되면 하나의 눈꽃 그리기가 완료됩니다. model.reset()으로 상태를 초기화하고 랜덤 위치에서 새 눈꽃을 시작하여, 캔버스에 여러 눈꽃이 누적됩니다.',
        '800x800 캔버스의 중앙을 원점으로 translate하여 눈꽃들이 화면 전체에 분포합니다. 각 눈꽃은 AI가 학습한 패턴을 기반으로 생성되어 매번 다른 형태를 보여줍니다.',
    ],
})

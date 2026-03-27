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
        { title: 'SketchRNN Demo - Google Magenta', url: 'https://magenta.tensorflow.org/sketch-rnn-demo' },
        { title: 'ml5.js SketchRNN Reference', url: 'https://ml5js.org/reference/api-SketchRNN/' },
        { title: 'A Neural Representation of Sketch Drawings (arXiv)', url: 'https://arxiv.org/abs/1704.03477' },
    ],
    tags: ['sketchRNN', 'snowflake', 'ml5', 'generative'],
    difficulty: 'intermediate',
    explanation: [
        'SketchRNN은 2017년 Google Magenta 팀의 David Ha와 Douglas Eck이 발표한 순환 신경망(RNN) 모델로, Quick, Draw! 데이터셋에서 수백만 개의 인간 드로잉을 학습했습니다. 내부적으로 변분 오토인코더(VAE, Variational Autoencoder)와 LSTM(Long Short-Term Memory) 셀을 결합한 seq2seq 아키텍처를 사용하며, 드로잉을 잠재 공간(latent space)의 벡터로 인코딩하고 다시 디코딩할 수 있습니다.',
        'ml5.js를 통해 "snowflake" 모델을 로드합니다. ml5.js는 TensorFlow.js를 기반으로 한 친화적인 머신러닝 라이브러리로, 복잡한 모델을 간단한 API로 사용할 수 있게 해줍니다. model.generate(gotSketch)로 다음 획(stroke)을 비동기적으로 받아오며, 각 스트로크는 dx, dy(이동량)와 pen 상태(down, up, end)로 구성됩니다.',
        'strokePath.dx/dy에 0.2를 곱한 스케일로 x, y를 업데이트하며, pen이 "down"일 때만 line()을 그립니다. 이 스케일링은 생성된 드로잉이 화면에 적절한 크기로 표시되도록 합니다. SketchRNN은 확률적(stochastic)으로 다음 획을 생성하므로, 같은 모델이라도 매번 다른 결과물을 만들어냅니다.',
        'pen 상태가 "end"가 되면 하나의 눈꽃 그리기가 완료됩니다. model.reset()으로 LSTM의 은닉 상태(hidden state)를 초기화하고 랜덤 위치에서 새 눈꽃을 시작하여, 캔버스에 여러 눈꽃이 누적되는 아름다운 겨울 장면을 만듭니다.',
        '800x800 캔버스의 중앙을 원점으로 translate하여 눈꽃들이 화면 전체에 분포합니다. 각 눈꽃은 AI가 학습한 패턴을 기반으로 생성되어 매번 다른 형태를 보여줍니다. 이것은 생성 모델(generative model)의 핵심 가치인 "학습된 분포에서 새로운 샘플 생성"을 시각적으로 보여주는 예제입니다.',
        'SketchRNN은 단순한 드로잉 생성을 넘어, 스타일 보간(interpolation), 드로잉 완성, 카테고리 간 변환 등 다양한 응용이 가능합니다. Google의 AutoDraw 같은 실제 제품에도 유사한 기술이 적용되었으며, 인간-AI 협업 창작의 가능성을 보여주는 중요한 연구입니다.',
    ],
})

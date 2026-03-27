import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '153_interactive_sketchrnn',
    number: 153,
    title: 'Interactive SketchRNN',
    categoryId: 'neural-networks-ml',
    description: '사용자가 그린 시작 경로를 SketchRNN이 이어서 완성하는 인터랙티브 드로잉입니다.',
    files: ['rdp.js', 'sketch.js'],
    libraries: ['ml5.min.js'],
    references: [
        { title: 'Coding Challenge #153: Interactive SketchRNN', url: 'https://thecodingtrain.com/challenges/153-interactive-sketchrnn' },
        { title: 'ml5.js - SketchRNN', url: 'https://learn.ml5js.org/#/reference/sketchrnn' },
        { title: 'Google AI Blog - Teaching Machines to Draw', url: 'https://ai.googleblog.com/2017/04/teaching-machines-to-draw.html' },
        { title: 'A Neural Representation of Sketch Drawings (arXiv)', url: 'https://arxiv.org/abs/1704.03477' },
    ],
    tags: ['sketchRNN', 'interactive', 'ml5', 'drawing'],
    difficulty: 'intermediate',
    explanation: [
        'SketchRNN은 Google Magenta 팀이 2017년에 발표한 순환 신경망(RNN) 기반의 드로잉 생성 모델입니다. Quick, Draw! 데이터셋에서 수백만 개의 손그림을 학습하여 다양한 물체의 드로잉 패턴을 익혔습니다. 이 챌린지에서는 ml5.js를 통해 사용자의 드로잉을 AI가 이어서 완성하는 인터랙티브 협업 드로잉을 구현합니다.',
        'ml5.sketchRNN("catpig") 모델을 로드하여 고양이와 돼지의 복합 드로잉 패턴을 사용합니다. 마우스를 누르면 사용자 드로잉 모드로 전환되고, 마우스를 떼면 사용자가 그린 점들(seedPoints)을 152번 챌린지의 RDP 알고리즘으로 단순화합니다.',
        '단순화된 경로를 dx/dy 형식의 seedPath로 변환하고, sketchRNN.generate(seedPath, gotStrokePath)로 AI에 전달합니다. SketchRNN은 Variational Autoencoder(VAE)와 LSTM을 결합한 아키텍처로, 입력된 시작 획의 문맥을 이해하고 자연스러운 후속 획을 생성합니다.',
        'AI가 생성한 currentStroke의 dx/dy로 x,y를 업데이트하며 line()을 그립니다. pen 상태가 "down"일 때만 선을 긋고, "end"가 되면 model.reset() 후 다시 generate를 호출합니다. 이 과정에서 신경망이 학습한 드로잉의 시퀀스 패턴과 공간 구조를 확인할 수 있습니다.',
        '이러한 인간-AI 협업 드로잉은 창작 도구, 교육용 앱, 접근성 보조 기술 등에 응용될 수 있습니다. SketchRNN은 생성 모델(generative model)의 대표적인 예시로, 이후 Stable Diffusion, DALL-E 등 더 발전된 이미지 생성 AI의 토대가 되었습니다.',
    ],
})

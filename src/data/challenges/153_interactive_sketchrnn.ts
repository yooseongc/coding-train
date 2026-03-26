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
    ],
    tags: ['sketchRNN', 'interactive', 'ml5', 'drawing'],
    difficulty: 'intermediate',
    explanation: [
        'ml5.sketchRNN("catpig") 모델을 로드하여 사용자의 드로잉을 AI가 이어서 완성합니다. 마우스를 누르면 사용자 드로잉 모드, 떼면 AI 생성 모드로 전환됩니다.',
        '사용자가 그린 점들(seedPoints)을 RDP 알고리즘으로 단순화합니다. 단순화된 경로를 dx/dy 형식의 seedPath로 변환하고, sketchRNN.generate(seedPath, gotStrokePath)로 AI에 전달합니다.',
        'AI가 생성한 currentStroke의 dx/dy로 x,y를 업데이트하며 line()을 그립니다. pen 상태가 "down"일 때만 선을 긋고, "end"가 되면 model.reset() 후 다시 generate를 호출합니다.',
        'clear 버튼으로 캔버스를 초기화합니다. 사용자가 시작 획을 그리면 AI가 나머지를 완성하는 협업 드로잉 과정을 통해, 신경망의 학습된 드로잉 패턴을 체험합니다.',
    ],
})

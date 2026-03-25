import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '150_ai_rainbows_with_runway_ml',
    number: 150,
    title: 'AI Rainbows with RunwayML',
    categoryId: 'neural-networks-ml',
    description: 'RunwayML의 StyleGAN 모델과 Perlin noise로 AI가 생성한 무지개 이미지를 부드럽게 변화시킵니다.',
    files: ['sketch.js'],
    libraries: [],
    codeOnly: true,
    references: [
        { title: 'Coding Challenge #150: AI Rainbows with RunwayML', url: 'https://thecodingtrain.com/challenges/150-ai-rainbows-with-runwayml' },
    ],
    tags: ['AI', 'rainbow', 'runway', 'style-transfer'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 RunwayML 서비스 연동이 필요합니다. 외부 서비스 없이는 AI 기능이 동작하지 않습니다.',
    explanation: [
        'RunwayML의 호스팅된 StyleGAN 모델을 사용하여 무지개 이미지를 생성합니다. rw.HostedModel로 모델 URL과 토큰을 설정하고, 512차원의 잠재 벡터(z)를 입력하여 이미지를 출력합니다.',
        '512개의 NoiseLoop 객체가 각 z 차원의 값을 생성합니다. 각 NoiseLoop은 Perlin noise 공간에서 원형 경로를 따라 -1~1 사이를 부드럽게 변화하며, 시작과 끝이 자연스럽게 연결됩니다.',
        'setInterval(250ms)로 0.25초마다 z 벡터를 업데이트하고 generateRainbow()를 호출합니다. truncation=0.5로 생성 이미지의 다양성을 적절히 조절합니다.',
        'angle이 PI*2/7200씩 증가하여 약 30분에 한 바퀴를 돕니다. 모델 응답의 base64 이미지를 img.src에 직접 할당하여 캔버스 없이 DOM 이미지로 표시합니다.',
    ],
})

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
        { title: 'StyleGAN - Wikipedia', url: 'https://en.wikipedia.org/wiki/StyleGAN' },
        { title: 'RunwayML', url: 'https://runwayml.com/' },
        { title: 'Generative Adversarial Network - Wikipedia', url: 'https://en.wikipedia.org/wiki/Generative_adversarial_network' },
    ],
    tags: ['AI', 'rainbow', 'runway', 'style-transfer'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 RunwayML 서비스 연동이 필요합니다. 외부 서비스 없이는 AI 기능이 동작하지 않습니다.',
    explanation: [
        'StyleGAN은 2018년 NVIDIA 연구팀이 발표한 생성적 적대 신경망(GAN, Generative Adversarial Network)의 혁신적 변형입니다. Ian Goodfellow가 2014년에 제안한 GAN은 생성자(Generator)와 판별자(Discriminator)가 경쟁하며 학습하는 구조로, 사실적인 이미지 생성에 획기적인 발전을 가져왔습니다. StyleGAN은 스타일 기반 아키텍처로 생성 이미지의 다양한 속성을 독립적으로 제어할 수 있습니다.',
        'RunwayML은 크리에이터를 위한 AI 플랫폼으로, 복잡한 머신러닝 모델을 API로 쉽게 사용할 수 있게 해줍니다. rw.HostedModel로 모델 URL과 인증 토큰을 설정하고, 512차원의 잠재 벡터(latent vector, z)를 입력하면 무지개 이미지가 생성됩니다. 잠재 공간(latent space)에서의 작은 변화가 생성 이미지의 부드러운 변화로 나타납니다.',
        '512개의 NoiseLoop 객체가 각 z 차원의 값을 생성합니다. 각 NoiseLoop은 Perlin noise 공간에서 원형 경로(circular path)를 따라 -1~1 사이를 부드럽게 변화합니다. cos(angle)과 sin(angle)을 noise 함수의 오프셋으로 사용하여 시작과 끝이 자연스럽게 연결되는 무한 루프 애니메이션을 만듭니다.',
        'setInterval(250ms)로 0.25초마다 z 벡터를 업데이트하고 generateRainbow()를 호출합니다. truncation 매개변수(0.5)는 잠재 벡터를 평균 방향으로 축소하여, 값이 낮을수록 평균적이지만 안정적인 이미지를, 높을수록 다양하지만 품질이 불안정한 이미지를 생성합니다.',
        'angle이 PI*2/7200씩 증가하여 약 30분(7200 프레임 * 0.25초)에 한 바퀴를 돕니다. 모델 응답의 base64 이미지를 img.src에 직접 할당하여 캔버스 없이 DOM 이미지로 표시합니다. 이 루프 구조 덕분에 영상을 GIF로 캡처하면 완벽하게 반복되는 무지개 애니메이션을 만들 수 있습니다.',
        'GAN 기반 이미지 생성은 예술, 디자인, 엔터테인먼트 등 다양한 분야에서 혁신을 일으키고 있습니다. 딥페이크(deepfake), 가상 인물 생성, 이미지 초해상도(super-resolution) 등에 활용되며, 2022년 이후에는 Stable Diffusion, DALL-E 같은 확산 모델(diffusion model)이 GAN을 대체하는 추세이지만, GAN의 핵심 아이디어는 여전히 중요합니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '102_water_ripple',
    number: 102,
    title: 'Water Ripple',
    categoryId: 'physics-simulation',
    description: '수면 파문(물결) 효과를 2D 파동 시뮬레이션으로 구현합니다. 이중 버퍼와 감쇠로 반사까지 표현합니다.',
    files: ['sketch.js'],
    libraries: ['gif.js'],
    references: [
        { title: 'Coding Challenge #102: Water Ripple', url: 'https://thecodingtrain.com/challenges/102-water-ripple' },
        { title: '2D Water Ripple Algorithm (Hugo Elias)', url: 'https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm' },
        { title: 'Wikipedia - Wave equation', url: 'https://en.wikipedia.org/wiki/Wave_equation' },
        { title: 'Wikipedia - Double buffering', url: 'https://en.wikipedia.org/wiki/Multiple_buffering#Double_buffering_in_computer_graphics' },
    ],
    tags: ['water', 'ripple', 'wave', 'pixel'],
    difficulty: 'intermediate',
    explanation: [
        '수면 파문(Water Ripple) 시뮬레이션은 2D 파동 방정식(Wave Equation)의 이산화된 근사입니다. Hugo Elias의 유명한 알고리즘을 기반으로, 각 픽셀의 높이값이 주변 픽셀로부터 전파되는 방식으로 사실적인 물결 효과를 실시간으로 생성합니다. 이 기법은 1990년대 데모씬(Demoscene) 커뮤니티에서 인기 있었던 클래식 효과입니다.',
        '이중 버퍼(Double Buffer) 기법으로 파동을 시뮬레이션합니다. 새 높이는 주변 4방향의 평균값에 2를 곱하고 현재값을 빼서 계산하며, 감쇠 계수(dampening=0.995)를 곱하여 에너지가 서서히 소멸됩니다. 매 프레임 두 버퍼를 스왑하여 이전 상태와 현재 상태를 번갈아 참조합니다.',
        '파동 방정식은 물리학의 기본 방정식 중 하나로, 소리, 빛, 수면파 등 다양한 파동 현상을 설명합니다. 이 시뮬레이션은 파동의 중첩(Superposition), 반사(Reflection), 감쇠(Damping)를 모두 재현합니다. 두 파문이 만나면 간섭 무늬가 생기고, 벽에 부딪히면 반사파가 발생합니다.',
        'mouseDragged()로 마우스 위치에 높이값 500을 설정하면 그 지점에서 파문이 퍼져나갑니다. loadPixels()/updatePixels()로 픽셀 배열에 직접 접근하여 높이값을 밝기로 변환하고, pixelDensity(1)로 레티나 디스플레이 보정 없이 1:1 매핑합니다.',
        'GIF 녹화 기능도 포함되어 있습니다. gif.js 라이브러리로 버튼 클릭 시 녹화를 시작/중지하고, Web Worker로 GIF를 인코딩하여 새 창에서 열어줍니다. Web Worker는 메인 스레드를 차단하지 않고 CPU 집약적인 GIF 인코딩을 수행합니다.',
        '이 기법은 게임 개발에서 수면 효과, 인터랙티브 아트 설치, 음향 시뮬레이션의 시각화 등에 응용됩니다. 더 정교한 수면 시뮬레이션은 나비에-스토크스 방정식(Navier-Stokes Equations)이나 SPH(Smoothed Particle Hydrodynamics) 등을 사용하지만, 이 간단한 이중 버퍼 방식도 놀라울 정도로 사실적인 결과를 만들어냅니다.',
    ],
})

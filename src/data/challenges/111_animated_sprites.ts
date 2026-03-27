import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '111_animated_sprites',
    number: 111,
    title: 'Animated Sprites',
    categoryId: 'drawing-animation',
    description: '스프라이트 시트에서 프레임을 추출하여 2D 스프라이트 애니메이션을 구현합니다. JSON 데이터로 프레임 위치를 관리합니다.',
    files: ['sprite.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #111: Animated Sprites', url: 'https://thecodingtrain.com/challenges/111-animated-sprites' },
        { title: 'Wikipedia - Sprite (Computer Graphics)', url: 'https://en.wikipedia.org/wiki/Sprite_(computer_graphics)' },
        { title: 'OpenGameArt - Horse of Spring (스프라이트 에셋)', url: 'https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring' },
        { title: 'p5.js Reference - image() / loadImage()', url: 'https://p5js.org/reference/p5/image/' },
    ],
    tags: ['sprite', 'animation', 'spritesheet', 'frame'],
    difficulty: 'beginner',
    explanation: [
        '스프라이트(Sprite)는 컴퓨터 그래픽스에서 2D 비트맵을 더 큰 장면에 합성하는 기법으로, 1970년대 후반 Texas Instruments의 Danny Hillis가 처음 명명했습니다. 초기에는 TI-99/4A, Atari, NES 등의 하드웨어 스프라이트 엔진이 이를 처리했으며, 현대에는 소프트웨어적으로 GPU 가속을 활용합니다.',
        'preload()에서 loadJSON()으로 프레임 메타데이터(horse.json)를, loadImage()로 스프라이트 시트(horse.png)를 로드합니다. 스프라이트 시트는 여러 프레임을 하나의 이미지 파일에 모아놓은 것으로, HTTP 요청 수를 줄이고 메모리 효율을 높이는 게임 개발의 표준 기법입니다.',
        'spriteSheet.get(x, y, w, h)로 JSON에 정의된 좌표와 크기를 기반으로 각 프레임 영역을 개별 이미지로 추출합니다. JSON 메타데이터에는 각 프레임의 위치(x, y)와 크기(w, h)가 기록되어 있어, 불규칙한 크기의 프레임도 정확하게 잘라낼 수 있습니다.',
        'Sprite 클래스는 animation 배열(프레임 이미지들)과 speed를 가집니다. animate()에서 speed에 따라 인덱스를 증가시키고, 배열 끝에 도달하면 0으로 돌아가 루프합니다. 이러한 프레임 기반 애니메이션(frame-based animation)은 플립북(flipbook) 원리와 동일합니다.',
        '5마리의 말을 각각 다른 속도(random(0.1, 0.7))로 생성하여 경주 효과를 만듭니다. dash()로 수평 이동하고, 144px 간격의 가로줄로 레인을 구분합니다. 애니메이션 속도와 이동 속도를 독립적으로 제어할 수 있어 자연스러운 동작 표현이 가능합니다.',
        '현대 게임 엔진(Unity, Godot)이나 웹 프레임워크(Phaser, PixiJS)에서는 TexturePacker 같은 도구로 스프라이트 시트를 자동 생성하고, 스프라이트 아틀라스(atlas)로 관리합니다. OpenGameArt 같은 사이트에서 무료 게임 에셋을 구할 수 있어 프로토타이핑에 유용합니다.',
    ],
})

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
    ],
    tags: ['sprite', 'animation', 'spritesheet', 'frame'],
    difficulty: 'beginner',
    explanation: [
        'preload()에서 loadJSON()으로 프레임 메타데이터(horse.json)를, loadImage()로 스프라이트 시트(horse.png)를 로드합니다. spriteSheet.get(x, y, w, h)로 각 프레임 영역을 개별 이미지로 추출합니다.',
        'Sprite 클래스는 animation 배열(프레임 이미지들)과 speed를 가집니다. animate()에서 speed에 따라 인덱스를 증가시키고, 배열 끝에 도달하면 0으로 돌아가 루프합니다. show()에서 현재 프레임 이미지를 image()로 그립니다.',
        '5마리의 말을 각각 다른 속도(random(0.1, 0.7))로 생성하여 경주 효과를 만듭니다. dash()로 수평 이동하고, 144px 간격의 가로줄로 레인을 구분합니다.',
    ],
})

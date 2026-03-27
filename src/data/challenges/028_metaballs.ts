import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '028_metaballs',
    number: 28,
    title: 'Metaballs',
    categoryId: '3d-geometry',
    description: '메타볼(Metaballs) 효과를 구현합니다.',
    files: ['blob.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #28: Metaballs', url: 'https://thecodingtrain.com/challenges/28-metaballs' },
        { title: 'Wikipedia - Metaballs', url: 'https://en.wikipedia.org/wiki/Metaballs' },
        { title: 'Wikipedia - Implicit surface', url: 'https://en.wikipedia.org/wiki/Implicit_surface' },
        { title: 'p5.js Reference - set()', url: 'https://p5js.org/reference/p5/set/' },
    ],
    tags: ['metaballs', 'blob', 'pixel', 'isosurface'],
    difficulty: 'intermediate',
    explanation: [
        '메타볼(Metaball)은 1982년 일본의 CG 연구자 블린(Jim Blinn)이 제안한 암시적 표면(Implicit Surface) 기법입니다. 각 볼(blob)이 주변에 영향력 필드를 생성하고, 여러 볼이 가까워지면 필드가 합쳐져 마치 액체 방울이 융합하는 것처럼 보이는 유기적 형태를 만듭니다. 이 기법은 1990년대 용암 램프(Lava Lamp) 시뮬레이션에서 대중적으로 알려졌습니다.',
        '각 픽셀에서 모든 blob까지의 유클리드 거리(Euclidean Distance)를 계산하고, sum += r/d 공식으로 영향력을 누적합니다. 거리 d가 작을수록 영향력이 커지는 역거리 가중(Inverse Distance Weighting) 원리입니다. 두 blob이 가까워지면 중간 영역의 합산 값이 높아져 등치면(Isosurface)이 연결되고, 시각적으로 융합되는 효과가 나타납니다.',
        'Blob 클래스는 위치, 속도, 반지름을 가지며 캔버스 경계에 닿으면 속도의 부호를 반전시켜 반사합니다. 10개의 Blob이 랜덤한 방향과 속도로 독립적으로 움직이면서, 근접할 때만 서로 융합되는 것처럼 보이는 다이내믹한 시뮬레이션을 만듭니다.',
        'HSB 색상 모드에서 sum 값을 색조(Hue)로 직접 매핑하여, 영향력이 강한 영역은 특정 색으로, 약한 영역은 다른 색으로 표현합니다. set(x, y, color())로 매 픽셀을 개별 렌더링하므로, 모든 픽셀에 대해 모든 blob과의 거리를 계산하는 O(width * height * blobs) 복잡도를 가집니다.',
        '캔버스 크기를 400x200으로 제한하여 실시간 성능을 확보합니다. 메타볼은 현대 3D 그래픽스에서 유체 시뮬레이션, 분자 시각화, 게임 내 슬라임이나 용암 효과 등에 활용됩니다. 3D 확장 시에는 마칭 큐브(Marching Cubes) 알고리즘으로 등치면을 폴리곤 메시로 변환합니다.',
    ],
})

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
    ],
    tags: ['metaballs', 'blob', 'pixel', 'isosurface'],
    difficulty: 'intermediate',
    explanation: [
        'Metaball은 각 blob의 영향력을 거리에 반비례하여 합산하는 기법입니다. 각 픽셀에서 모든 blob까지의 거리를 계산하고, sum += r/d로 영향력을 누적하여 등치면(isosurface) 효과를 만듭니다.',
        'Blob 클래스는 위치, 속도, 반지름을 가지며 벽에 닿으면 반사합니다. 10개의 Blob이 독립적으로 움직이면서 근접할 때 서로 융합되는 것처럼 보이는 유기적 형태를 만듭니다.',
        'HSB 색상 모드에서 sum 값을 색조(hue)로 사용하여 영향력이 강한 영역은 특정 색으로, 약한 영역은 다른 색으로 표현합니다. set(x, y, color())로 픽셀 단위 렌더링을 수행합니다.',
        '모든 픽셀에 대해 모든 blob과의 거리를 계산하므로 O(width*height*blobs) 복잡도입니다. 캔버스 크기를 작게 유지하여 실시간 성능을 확보합니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '122_quick_draw',
    number: 122,
    title: 'Quick, Draw!',
    categoryId: 'neural-networks-ml',
    description: 'Google Quick Draw API에서 드로잉 데이터를 불러와 애니메이션으로 재생합니다.',
    files: ['sketch.js'],
    libraries: [],
    bodyHtml: '<div id="canvasDiv"></div>',
    references: [
        { title: 'Coding Challenge #122: Quick, Draw!', url: 'https://thecodingtrain.com/challenges/122-quick-draw' },
    ],
    tags: ['quick-draw', 'CNN', 'recognition', 'drawing'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 외부 Quick Draw 데이터셋 API를 호출합니다. 데이터 로드에 시간이 걸릴 수 있습니다.',
    explanation: [
        'Google Quick, Draw!는 사용자가 그린 낙서를 신경망이 인식하는 게임으로, 수백만 개의 드로잉 데이터셋을 공개했습니다. 이 챌린지에서는 해당 API에서 고양이 드로잉 데이터를 가져와 화면에 재생합니다.',
        'loadJSON()으로 Quick Draw API에서 JSON 형식의 드로잉 데이터를 받아옵니다. drawing 배열은 여러 경로(path)로 구성되며, 각 경로는 x좌표 배열과 y좌표 배열을 포함합니다.',
        'draw()에서 pathIndex와 index를 증가시키며 한 프레임에 하나의 점을 그립니다. prevx/prevy로 이전 점과 현재 점을 line()으로 연결하고, 경로가 바뀌면 펜을 들어 올립니다.',
        '하나의 드로잉이 완료되면 newData()로 새로운 데이터를 불러와 무한히 다른 고양이 그림을 감상할 수 있습니다. frameRate(22)로 적절한 애니메이션 속도를 설정합니다.',
    ],
})

import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '045_saving_p5_drawings_to_firebase',
    number: 45,
    title: 'Saving p5 Drawings to Firebase',
    categoryId: 'drawing-animation',
    description: '마우스로 그린 드로잉을 Firebase Realtime Database에 저장하고 불러오는 협업 드로잉 앱입니다.',
    files: ['sketch.js'],
    libraries: [],
    codeOnly: true,
    references: [
        { title: 'Coding Challenge #45: Saving p5 Drawings to Firebase', url: 'https://thecodingtrain.com/challenges/45-saving-p5-drawings-to-firebase' },
    ],
    tags: ['drawing', 'firebase', 'save', 'mouse'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 Firebase 연동이 필요합니다. Firebase 설정 없이는 저장 기능이 동작하지 않으며, 드로잉 기능만 확인할 수 있습니다.',
    explanation: [
        'mousePressed 이벤트에서 새 경로(currentPath)를 시작하고 drawing 배열에 추가합니다. 드래그 중 매 프레임 {x: mouseX, y: mouseY}를 currentPath에 push하고, mouseReleased에서 드로잉을 종료합니다.',
        'Firebase Realtime Database에 ref("drawings").push()로 드로잉 데이터를 저장합니다. ref.on("value") 리스너로 실시간 데이터 변경을 감지하여 저장된 드로잉 목록을 자동 갱신합니다.',
        'getURLParams()로 쿼리 파라미터(?id=key)를 확인하여 permalink로 특정 드로잉을 직접 불러올 수 있습니다. ref.once("value")로 해당 키의 드로잉 데이터를 한 번 읽어옵니다.',
        'draw()에서 저장된 경로들을 beginShape()/vertex()/endShape()로 렌더링합니다. clear 버튼으로 현재 drawing 배열을 초기화할 수 있습니다.',
    ],
})

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
        { title: 'Firebase Tutorial (Daniel Shiffman)', url: 'https://shiffman.net/a2z/firebase/' },
        { title: 'Firebase Realtime Database 공식 문서', url: 'https://firebase.google.com/docs/database' },
        { title: 'p5.js Reference - beginShape()', url: 'https://p5js.org/reference/p5/beginShape/' },
    ],
    tags: ['drawing', 'firebase', 'save', 'mouse'],
    difficulty: 'intermediate',
    notice: '이 챌린지는 Firebase 연동이 필요합니다. Firebase 설정 없이는 저장 기능이 동작하지 않으며, 드로잉 기능만 확인할 수 있습니다.',
    explanation: [
        'Firebase는 Google이 제공하는 BaaS(Backend as a Service) 플랫폼으로, 별도의 서버 구축 없이 실시간 데이터베이스, 인증, 호스팅 등을 사용할 수 있습니다. 이 챌린지에서는 Firebase Realtime Database를 활용하여 p5.js 드로잉 데이터를 클라우드에 저장하고 공유하는 협업 드로잉 앱을 구현합니다.',
        'mousePressed 이벤트에서 새 경로(currentPath)를 시작하고 drawing 배열에 추가합니다. 드래그 중 매 프레임 {x: mouseX, y: mouseY}를 currentPath에 push하고, mouseReleased에서 드로잉을 종료합니다. 이 패턴은 벡터 드로잉 애플리케이션의 기본 구조입니다.',
        'Firebase Realtime Database에 ref("drawings").push()로 드로잉 데이터를 저장합니다. ref.on("value") 리스너로 실시간 데이터 변경을 감지하여 저장된 드로잉 목록을 자동 갱신합니다. 이 실시간 동기화(real-time sync) 기능이 Firebase의 핵심 강점으로, WebSocket 기반으로 동작합니다.',
        'getURLParams()로 쿼리 파라미터(?id=key)를 확인하여 permalink로 특정 드로잉을 직접 불러올 수 있습니다. ref.once("value")로 해당 키의 드로잉 데이터를 한 번 읽어옵니다. 이러한 permalink 패턴은 웹 애플리케이션에서 콘텐츠 공유의 기본적인 방식입니다.',
        'draw()에서 저장된 경로들을 beginShape()/vertex()/endShape()로 렌더링합니다. p5.js의 vertex() 함수는 임의의 다각형이나 자유 곡선을 정점(vertex) 단위로 정의할 수 있게 해주며, 이를 통해 마우스 궤적을 부드러운 선으로 표현합니다.',
        '이 프로젝트는 Firebase 설정(API 키, 프로젝트 ID 등)이 필요하여 브라우저에서 단독으로 실행할 수 없습니다. 실제 배포 시에는 Firebase Security Rules를 설정하여 데이터 접근 권한을 관리하고, API 키를 환경 변수로 분리하는 것이 보안상 중요합니다.',
    ],
})

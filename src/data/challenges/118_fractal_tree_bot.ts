import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '118_fractal_tree_bot',
    number: 118,
    title: 'Fractal Tree Bot',
    categoryId: 'fractals',
    description: 'node-p5로 서버사이드에서 프랙탈 트리를 생성하고 이미지로 저장하는 봇을 만듭니다. 재귀 분기로 나무를 그립니다.',
    files: ['bot.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #118: Fractal Tree Bot', url: 'https://thecodingtrain.com/challenges/118-fractal-tree-bot' },
        { title: 'Wikipedia: Mastodon (소셜 네트워크)', url: 'https://en.wikipedia.org/wiki/Mastodon_(social_network)' },
        { title: 'node-canvas (서버사이드 캔버스)', url: 'https://github.com/Automattic/node-canvas' },
    ],
    tags: ['fractal', 'tree', 'bot', 'mastodon'],
    difficulty: 'intermediate',
    codeOnly: true,
    notice: '이 챌린지는 Node.js 환경에서 실행되는 서버사이드 봇입니다. 브라우저에서는 실행할 수 없으며, 코드만 확인할 수 있습니다.',
    explanation: [
        'node-p5 라이브러리로 Node.js 환경에서 헤드리스(headless) p5.js 스케치를 실행합니다. 브라우저 없이 서버에서 이미지를 생성할 수 있어, 소셜 미디어 봇이나 자동화 파이프라인에 활용할 수 있습니다. 명령줄 인자(process.argv[2])로 분기 각도를 받아 다양한 형태의 프랙탈 트리를 생성합니다.',
        'branch(p, h) 재귀 함수에서 높이의 0.66배로 축소하며, theta 각도로 좌우 분기합니다. h > 2이면 계속 분기하고, 그 이하이면 재귀를 종료합니다. push()/pop()으로 좌표 변환 상태를 격리하여 좌우 가지를 독립적으로 그립니다.',
        'saveCanvas()로 PNG 이미지로 저장하고 noLoop()으로 단일 프레임만 렌더링합니다. 원래 이 봇은 Mastodon(분산형 소셜 네트워크)에 프랙탈 트리 이미지를 자동 게시하도록 설계되었습니다.',
        '서버사이드 이미지 생성은 OG 이미지 자동 생성, 데이터 시각화 리포트, 생성형 아트 봇 등에 널리 쓰입니다. node-canvas, Puppeteer, Sharp 등의 도구가 이 용도로 활용됩니다.',
    ],
})

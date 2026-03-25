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
    ],
    tags: ['fractal', 'tree', 'bot', 'mastodon'],
    difficulty: 'intermediate',
    codeOnly: true,
    notice: '이 챌린지는 Node.js 환경에서 실행되는 서버사이드 봇입니다. 브라우저에서는 실행할 수 없으며, 코드만 확인할 수 있습니다.',
    explanation: [
        'node-p5 라이브러리로 Node.js 환경에서 p5.js 스케치를 실행합니다. 명령줄 인자(process.argv[2])로 분기 각도를 받아 다양한 형태의 프랙탈 트리를 생성합니다.',
        'branch(p, h) 재귀 함수에서 높이의 0.66배로 축소하며, theta 각도로 좌우 분기합니다. h > 2이면 계속 분기하고, 그 이하이면 재귀를 종료합니다. push()/pop()으로 좌표 변환을 격리합니다.',
        'translate(width/2, height)로 하단 중앙에서 시작하고, line(0, 0, 0, -120)으로 줄기를 그린 뒤 translate(0, -120)으로 끝점으로 이동하여 branch()를 호출합니다. saveCanvas()로 PNG 이미지로 저장합니다.',
    ],
})

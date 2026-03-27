import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '022_julia_set',
    number: 22,
    title: 'Julia Set',
    categoryId: 'fractals',
    description: '줄리아 집합을 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #22: Julia Set', url: 'https://thecodingtrain.com/challenges/22-julia-set' },
        { title: 'Wikipedia: Julia set', url: 'https://en.wikipedia.org/wiki/Julia_set' },
        { title: '위키백과: 쥘리아 집합', url: 'https://ko.wikipedia.org/wiki/%EC%A5%98%EB%A6%AC%EC%95%84_%EC%A7%91%ED%95%A9' },
    ],
    tags: ['julia', 'fractal', 'complex', 'animation'],
    difficulty: 'intermediate',
    explanation: [
        'Julia 집합은 프랑스 수학자 가스통 줄리아(Gaston Julia, 1893-1978)가 1918년에 연구한 프랙탈입니다. Mandelbrot와 같은 점화식 z_{n+1} = z_n^2 + c를 사용하지만, c를 고정하고 초기값 z_0를 변화시키는 점이 다릅니다. 각 픽셀이 z_0에 해당하며, c 값 하나가 전체 집합의 형태를 결정합니다.',
        'ca = cos(angle*3.213), cb = sin(angle)로 c값을 시간에 따라 변화시켜 Julia 집합이 실시간으로 변형(morphing)되는 애니메이션을 만듭니다. c가 Mandelbrot 집합 내부에 있으면 연결된 Julia 집합이, 외부에 있으면 먼지처럼 분리된 Fatou dust가 생성됩니다.',
        'HSB 색상 모드에서 반복 횟수의 제곱근에 비례하는 색조(hue)를 미리 계산하여 colorsRed/Green/Blue 룩업 테이블에 저장합니다. 이 사전 계산(precomputation) 최적화로 매 프레임 수십만 픽셀의 색상 계산을 효율적으로 처리합니다.',
        'Julia 집합과 Mandelbrot 집합은 쌍대(dual) 관계에 있습니다. Mandelbrot 집합의 특정 점을 c로 선택하면 해당 Julia 집합을 볼 수 있으며, Mandelbrot 집합의 경계 근처의 c값이 가장 복잡하고 아름다운 Julia 집합을 만들어냅니다.',
    ],
})

import type { GlossaryEntry } from '@study-ui/components'

export const glossary: GlossaryEntry[] = [
    // ── p5.js ──
    { id: 'setup', term: 'setup()', category: 'p5', definition: 'p5.js 스케치 시작 시 한 번 실행되는 초기화 함수. 캔버스 생성, 변수 초기화 등을 수행합니다.' },
    { id: 'draw', term: 'draw()', category: 'p5', definition: 'setup() 이후 매 프레임 반복 호출되는 함수. 애니메이션과 인터랙션의 핵심 루프입니다.' },
    { id: 'createCanvas', term: 'createCanvas()', category: 'p5', definition: 'HTML 캔버스 요소를 생성합니다. WEBGL 모드를 지정하면 3D 렌더링이 가능합니다.' },
    { id: 'loadPixels', term: 'loadPixels()', category: 'p5', definition: '캔버스의 픽셀 데이터를 pixels[] 배열로 로드합니다. 직접 픽셀 조작 시 사용합니다.' },
    { id: 'noise', term: 'noise()', aliases: ['perlin noise'], category: 'p5', definition: 'Perlin Noise 값을 반환합니다. 자연스러운 랜덤 패턴 생성에 사용되며 연속적인 값을 제공합니다.' },
    { id: 'p5vector', term: 'p5.Vector', category: 'p5', definition: '2D/3D 벡터를 표현하는 클래스. add, sub, mult, normalize 등 벡터 연산을 제공합니다.' },
    { id: 'push-pop', term: 'push()/pop()', category: 'p5', definition: '변환 행렬과 스타일 설정을 스택에 저장/복원합니다. 독립적인 좌표 변환에 필수입니다.' },
    { id: 'map', term: 'map()', category: 'p5', definition: '값을 한 범위에서 다른 범위로 선형 매핑합니다. 좌표 변환, 색상 매핑 등에 사용합니다.' },
    { id: 'lerp', term: 'lerp()', aliases: ['linear interpolation'], category: 'p5', definition: '두 값 사이를 선형 보간합니다. 부드러운 전환이나 애니메이션에 사용합니다.' },

    // ── 알고리즘 ──
    { id: 'recursion', term: '재귀(Recursion)', category: 'algorithm', definition: '함수가 자기 자신을 호출하는 프로그래밍 기법. 기저 조건(base case)과 재귀 단계로 구성됩니다.' },
    { id: 'bfs', term: 'BFS(너비 우선 탐색)', aliases: ['Breadth-First Search'], category: 'algorithm', definition: '그래프에서 시작 노드로부터 가까운 노드부터 탐색하는 알고리즘. 큐를 사용합니다.' },
    { id: 'dfs', term: 'DFS(깊이 우선 탐색)', aliases: ['Depth-First Search'], category: 'algorithm', definition: '그래프에서 한 경로를 끝까지 탐색한 후 되돌아오는 알고리즘. 스택 또는 재귀를 사용합니다.' },
    { id: 'astar', term: 'A* 알고리즘', category: 'algorithm', definition: '휴리스틱을 사용한 최단 경로 탐색 알고리즘. f(n) = g(n) + h(n)으로 비용을 추정합니다.' },
    { id: 'quadtree', term: '쿼드트리(Quadtree)', category: 'algorithm', definition: '2D 공간을 4개의 사분면으로 재귀적으로 분할하는 트리 자료구조. 공간 검색과 충돌 감지에 사용합니다.' },
    { id: 'markov', term: '마르코프 체인(Markov Chain)', category: 'algorithm', definition: '현재 상태만으로 다음 상태를 확률적으로 결정하는 모델. 텍스트 생성, 예측 등에 활용됩니다.' },
    { id: 'cfg', term: 'CFG(문맥 자유 문법)', aliases: ['Context-Free Grammar'], category: 'algorithm', definition: '비단말 기호를 규칙에 따라 확장하여 문자열을 생성하는 형식 문법. 프로그래밍 언어 파싱에 사용됩니다.' },
    { id: 'quicksort', term: '퀵소트(Quicksort)', category: 'algorithm', definition: '피벗을 기준으로 분할 정복하는 정렬 알고리즘. 평균 O(n log n)의 시간 복잡도를 가집니다.' },
    { id: 'knn', term: 'KNN(K-최근접 이웃)', aliases: ['K-Nearest Neighbors'], category: 'algorithm', definition: '가장 가까운 K개의 이웃을 참조하여 분류/회귀하는 알고리즘. 추천 시스템에 활용됩니다.' },
    { id: 'minimax', term: '미니맥스(Minimax)', category: 'algorithm', definition: '상대의 최선 수를 가정하고 자신의 최적 수를 찾는 게임 트리 탐색 알고리즘입니다.' },

    // ── 수학 ──
    { id: 'fractal', term: '프랙탈(Fractal)', category: 'math', definition: '자기 유사성을 가진 기하학적 구조. 만델브로, 코흐 눈꽃, 시에르핀스키 삼각형 등이 대표적입니다.' },
    { id: 'mandelbrot', term: '만델브로 집합(Mandelbrot Set)', category: 'math', definition: 'z_{n+1} = z_n² + c에서 발산하지 않는 복소수 c의 집합. 무한한 자기 유사성을 가집니다.' },
    { id: 'julia', term: '줄리아 집합(Julia Set)', category: 'math', definition: '만델브로와 같은 점화식에서 c를 고정하고 z₀를 변화시켜 얻는 프랙탈 집합입니다.' },
    { id: 'l-system', term: 'L-시스템(Lindenmayer System)', category: 'math', definition: '문자열 치환 규칙으로 복잡한 패턴을 생성하는 형식 문법. 식물 구조 모델링에 사용됩니다.' },
    { id: 'fourier', term: '푸리에 급수(Fourier Series)', category: 'math', definition: '주기 함수를 사인과 코사인의 합으로 분해하는 수학적 도구. 신호 처리의 기초입니다.' },
    { id: 'bezier', term: '베지어 곡선(Bézier Curve)', category: 'math', definition: '제어점을 이용해 매끄러운 곡선을 정의합니다. 폰트, 벡터 그래픽, CAD에서 핵심적으로 사용됩니다.' },
    { id: 'perlin-noise', term: '펄린 노이즈(Perlin Noise)', category: 'math', definition: '켄 펄린이 발명한 자연스러운 랜덤 패턴 생성 알고리즘. 지형, 텍스처, 파티클에 활용됩니다.' },
    { id: 'complex-number', term: '복소수(Complex Number)', category: 'math', definition: 'a + bi 형태의 수. 실수부와 허수부로 구성되며 프랙탈, 신호 처리 등에 사용됩니다.' },

    // ── 물리 ──
    { id: 'steering', term: '조향 행동(Steering Behaviors)', category: 'physics', definition: 'Craig Reynolds가 제안한 자율 에이전트의 움직임 모델. seek, flee, arrive, wander 등이 있습니다.' },
    { id: 'flocking', term: '플로킹(Flocking)', category: 'physics', definition: '분리(separation), 정렬(alignment), 결합(cohesion) 세 규칙으로 무리 행동을 시뮬레이션합니다.' },
    { id: 'verlet', term: '베를레 적분(Verlet Integration)', category: 'physics', definition: '속도 없이 이전/현재 위치로 다음 위치를 계산하는 수치 적분법. 천 시뮬레이션에 사용됩니다.' },
    { id: 'raycasting', term: '레이캐스팅(Raycasting)', category: 'physics', definition: '광선을 쏘아 교차점을 계산하는 기법. 2.5D 렌더링, 시야 계산, 충돌 감지에 사용됩니다.' },
    { id: 'pendulum', term: '진자(Pendulum)', category: 'physics', definition: '중력과 장력에 의해 진동하는 시스템. 단진자는 SHM, 이중 진자는 카오스 시스템입니다.' },
    { id: 'particle-system', term: '파티클 시스템(Particle System)', category: 'physics', definition: '다수의 작은 입자로 불꽃, 연기, 비 등 자연 현상을 시뮬레이션하는 기법입니다.' },

    // ── 머신러닝 ──
    { id: 'perceptron', term: '퍼셉트론(Perceptron)', category: 'ml', definition: '가장 단순한 신경망 단위. 입력에 가중치를 곱하고 합산 후 활성화 함수를 적용합니다.' },
    { id: 'backprop', term: '역전파(Backpropagation)', category: 'ml', definition: '신경망의 오차를 출력층에서 입력층으로 전파하여 가중치를 조정하는 학습 알고리즘입니다.' },
    { id: 'genetic-algo', term: '유전 알고리즘(Genetic Algorithm)', category: 'ml', definition: '선택, 교차, 돌연변이로 해를 진화시키는 최적화 기법. 자연선택을 모방합니다.' },
    { id: 'neuroevolution', term: '신경진화(Neuroevolution)', category: 'ml', definition: '유전 알고리즘으로 신경망의 구조나 가중치를 진화시키는 기법입니다.' },
    { id: 'tensorflow', term: 'TensorFlow.js', category: 'ml', definition: '브라우저에서 실행되는 머신러닝 라이브러리. 학습과 추론 모두 JavaScript로 가능합니다.' },
    { id: 'transfer-learning', term: '전이 학습(Transfer Learning)', category: 'ml', definition: '사전 학습된 모델의 지식을 새 작업에 활용하는 기법. 적은 데이터로도 좋은 성능을 얻습니다.' },
]

export const CATEGORY_LABEL: Record<string, string> = {
    p5: 'p5.js',
    algorithm: '알고리즘',
    math: '수학',
    physics: '물리',
    ml: '머신러닝',
}

export const CATEGORY_COLOR: Record<string, string> = {
    p5: 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30',
    algorithm: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30',
    math: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30',
    physics: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30',
    ml: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30',
}

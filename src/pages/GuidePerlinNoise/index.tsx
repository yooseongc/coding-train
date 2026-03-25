import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CodeBlock } from '@study-ui/components'
import { SKETCHES_BASE } from '../../data/challengeRegistry'
import P5CodeView from '../../components/P5Runner/P5CodeView'
import type { SketchFile } from '../../types/challenge'
import { useTitle } from '../../hooks/useTitle'

const gridSetupCode = `const grid = [];
const nodes = 8;`

const randomVectorCode = `function createRandomUnitVector() {
    const theta = Math.random() * 2 * Math.PI;
    return {
        x: Math.cos(theta),
        y: Math.sin(theta)
    };
}

for (let i = 0; i < nodes; i++) {
    const row = [];
    for (let j = 0; j < nodes; j++) {
        row.push(createRandomUnitVector());
    }
    grid.push(row);
}`

const dotProductCode = `function dotProductGrid(x, y, vertX, vertY) {
    const gradientVector = grid[vertX][vertY];
    const distanceVector = { x: x - vertX, y: y - vertY };
    return gradientVector.x * distanceVector.x
         + gradientVector.y * distanceVector.y;
}`

const interpolationCode = `// Linear interpolation (simple but has visible ridges)
function linearInterpolation(x, a, b) {
    return a + x * (b - a);
}

// Perlin's smootherstep (quintic polynomial for smooth curves)
function smootherstep(x) {
    return 6 * Math.pow(x, 5) - 15 * Math.pow(x, 4) + 10 * Math.pow(x, 3);
}

function interp(x, a, b) {
    return a + smootherstep(x) * (b - a);
}`

const finalCode = `const Perlin2d = {
    randomVector: function() {
        const theta = Math.random() * 2 * Math.PI;
        return { x: Math.cos(theta), y: Math.sin(theta) };
    },
    dotProductGrid: function(x, y, vx, vy) {
        let gVect;
        const dVect = { x: x - vx, y: y - vy };
        if (this.gradients[[vx, vy]]) {
            gVect = this.gradients[[vx, vy]];
        } else {
            gVect = this.randomVector();
            this.gradients[[vx, vy]] = gVect;
        }
        return dVect.x * gVect.x + dVect.y * gVect.y;
    },
    smootherstep: function(x) {
        return 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3;
    },
    interp: function(x, a, b) {
        return a + this.smootherstep(x) * (b - a);
    },
    seed: function() {
        this.gradients = {};
        this.memory = {};
    },
    get: function(x, y) {
        if (this.memory.hasOwnProperty([x, y])) {
            return this.memory[[x, y]];
        }
        const xf = Math.floor(x);
        const yf = Math.floor(y);

        // dot products at four corners
        const tl = this.dotProductGrid(x, y, xf, yf);
        const tr = this.dotProductGrid(x, y, xf + 1, yf);
        const bl = this.dotProductGrid(x, y, xf, yf + 1);
        const br = this.dotProductGrid(x, y, xf + 1, yf + 1);

        // bilinear interpolation
        const xt = this.interp(x - xf, tl, tr);
        const xb = this.interp(x - xf, bl, br);
        const v = this.interp(y - yf, xt, xb);

        this.memory[[x, y]] = v;
        return v;
    }
};

Perlin2d.seed();`

const PERLIN_FILES = ['perlin2d.js', 'sketch.js']

export default function GuidePerlinNoise() {
    useTitle('Perlin Noise')
    const [files, setFiles] = useState<SketchFile[]>([])

    useEffect(() => {
        Promise.all(
            PERLIN_FILES.map(async (name) => ({
                name,
                content: await fetch(`${SKETCHES_BASE}/perlin_noise_impl/${name}`).then((r) => r.text()),
            })),
        ).then(setFiles)
    }, [])

    return (
        <div className="max-w-full mx-auto px-3 lg:px-4 py-6">
            {/* Back link */}
            <Link
                to="/"
                className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 mb-6"
            >
                &larr; Home
            </Link>

            {/* Title */}
            <div className="mb-10">
                <div className="inline-block text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 rounded-full px-3 py-1 mb-4">
                    Procedural Generation
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Perlin Noise
                    <span className="text-amber-600 dark:text-amber-400 ml-3 text-2xl font-normal">
                        자연스러운 랜덤 생성
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl leading-relaxed">
                    Perlin Noise는 자연스럽고 부드러운 랜덤 패턴을 생성하는 알고리즘입니다.
                    컴퓨터 그래픽스에서 텍스처, 불꽃, 연기, 지형 등을 표현하는 데 널리 사용되며,
                    이 가이드에서는 JavaScript로 직접 구현하며 원리를 이해합니다.
                </p>
            </div>

            {/* What is Perlin Noise */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Perlin Noise란?
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        일반적인 난수(Math.random())는 완전히 무작위하여 인접한 값들 사이에
                        아무런 연관성이 없습니다. 하지만 자연 현상(산의 높낮이, 바람의 세기, 구름의 형태)은
                        부드럽게 연결된 변화를 보입니다.
                    </p>
                    <p>
                        1983년 Ken Perlin이 발명한 Perlin Noise는 이러한 자연스러운 연속성을
                        수학적으로 구현한 것입니다. 인접한 좌표의 노이즈 값이 부드럽게 변화하여,
                        자연스러운 패턴을 생성합니다.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                        <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-2">활용 분야</h3>
                        <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-400">
                            <li>절차적 지형 생성 (Minecraft, No Man's Sky 등)</li>
                            <li>텍스처 생성 (나무결, 대리석, 구름 등)</li>
                            <li>파티클 시스템의 자연스러운 움직임</li>
                            <li>Flow Field 기반 시각 예술</li>
                            <li>애니메이션의 유기적인 움직임</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    알고리즘 원리
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        2D Perlin Noise 알고리즘은 다음 단계를 따릅니다:
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                            <li>n차원 격자(grid)를 정의합니다</li>
                            <li>격자의 각 노드에 무작위 방향의 단위 벡터(gradient vector)를 할당합니다</li>
                            <li>노이즈 함수에 좌표(x, y)를 입력합니다</li>
                            <li>해당 좌표가 속한 격자 셀을 찾습니다</li>
                            <li>셀의 4개 꼭짓점까지의 거리 벡터를 계산합니다</li>
                            <li>각 꼭짓점의 그래디언트 벡터와 거리 벡터의 내적을 구합니다</li>
                            <li>4개의 내적값을 보간(interpolation)하여 최종 값을 얻습니다</li>
                        </ol>
                    </div>

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">
                        Step 1: 격자 설정
                    </h3>
                    <p>
                        2차원 격자를 정의합니다. 격자의 크기는 노이즈의 "확대/축소" 수준을 결정합니다.
                    </p>
                    <CodeBlock code={gridSetupCode} language="javascript" filename="Grid Setup" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">
                        Step 2: 랜덤 그래디언트 벡터
                    </h3>
                    <p>
                        각 격자 노드에 단위 길이의 랜덤 벡터를 할당합니다. 삼각함수(cos, sin)를 사용하면
                        임의의 각도에 대해 길이가 1인 벡터를 쉽게 생성할 수 있습니다.
                    </p>
                    <CodeBlock code={randomVectorCode} language="javascript" filename="Random Unit Vectors" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">
                        Step 3: 내적 계산 (Dot Product)
                    </h3>
                    <p>
                        주어진 점에서 격자 꼭짓점까지의 거리 벡터와, 해당 꼭짓점의 그래디언트 벡터의
                        내적을 계산합니다. 이 내적값이 해당 꼭짓점이 최종 노이즈 값에 기여하는 정도를 결정합니다.
                    </p>
                    <CodeBlock code={dotProductCode} language="javascript" filename="Dot Product Grid" />

                    <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-2">
                        Step 4: 보간 (Interpolation)
                    </h3>
                    <p>
                        4개 꼭짓점의 내적값을 보간하여 최종 값을 구합니다.
                        선형 보간(linear interpolation)은 간단하지만 격자 경계에서 눈에 띄는 경계선이 생깁니다.
                        Ken Perlin의 smootherstep 함수(5차 다항식)를 사용하면 훨씬 부드러운 결과를 얻을 수 있습니다.
                    </p>
                    <CodeBlock code={interpolationCode} language="javascript" filename="Interpolation Functions" />
                </div>
            </section>

            {/* Final Implementation */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    완성된 구현
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <p>
                        위의 모든 단계를 하나의 객체로 통합한 최종 구현입니다.
                        <code className="text-pink-600 dark:text-pink-400">memory</code> 객체를 사용하여
                        이미 계산한 좌표의 값을 캐싱하고, <code className="text-pink-600 dark:text-pink-400">seed()</code>를
                        호출하여 새로운 노이즈 패턴을 생성할 수 있습니다.
                    </p>
                    <CodeBlock code={finalCode} language="javascript" filename="Perlin2d (Final)" />
                </div>
            </section>

            {/* Interactive Demo */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    인터랙티브 데모
                </h2>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <p>
                        아래는 위의 Perlin2d 구현을 p5.js로 시각화한 데모입니다.
                        각 픽셀의 밝기가 해당 좌표의 Perlin Noise 값에 의해 결정됩니다.
                        인접한 픽셀들이 부드럽게 변화하는 자연스러운 패턴을 확인할 수 있습니다.
                    </p>
                </div>
                <P5CodeView files={files} width={400} height={400} />
            </section>

            {/* References */}
            <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-green-500">&#128206;</span> 참고 자료
                </h2>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="https://joeiddon.github.io/projects/javascript/perlin.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Creating Perlin Noise in JavaScript &uarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://en.wikipedia.org/wiki/Perlin_noise"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Wikipedia - Perlin Noise &uarr;
                        </a>
                    </li>
                </ul>
            </section>

            <p className="text-center text-xs text-gray-400 dark:text-gray-700 mt-10">
                &copy; 2026 yooseongc &middot; coding-train
            </p>
        </div>
    )
}

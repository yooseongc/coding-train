import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { CardGrid } from '@study-ui/components'
import { useTitle } from '../../hooks/useTitle'

const difficultyLabel = { beginner: '입문', intermediate: '중급', advanced: '심화' }
const difficultyColor = {
    beginner: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30',
    intermediate: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30',
    advanced: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30',
}

export default function Home() {
    useTitle('')
    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            {/* Hero */}
            <div className="mb-12">
                <div className="inline-block text-xs font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-900 rounded-full px-3 py-1 mb-4">
                    Creative Coding with p5.js
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Coding Train Study
                    <span className="text-pink-600 dark:text-pink-400 ml-3 text-2xl font-normal">코딩 트레인</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
                    Daniel Shiffman의 Coding Challenge를 직접 구현하며 배우는 창의적 코딩.
                    알고리즘, 프랙탈, 물리 시뮬레이션, 게임, 신경망까지 — p5.js로 시각화합니다.
                </p>
                <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
                    검색하려면{' '}
                    <kbd className="border border-gray-300 dark:border-gray-700 rounded px-1.5 py-0.5 font-mono text-xs">
                        ⌘K
                    </kbd>{' '}
                    를 누르세요
                </p>
            </div>

            {/* 안내 */}
            <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 mb-10 flex gap-4">
                <div className="text-3xl">🚂</div>
                <div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">어떻게 사용하나요?</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        카테고리를 선택하면 관련 코딩 챌린지 목록을 볼 수 있습니다.
                        각 챌린지에는{' '}
                        <span className="text-pink-600 dark:text-pink-400">라이브 p5.js 실행기</span>와{' '}
                        <span className="text-blue-600 dark:text-blue-400">소스 코드</span>,{' '}
                        <span className="text-green-600 dark:text-green-400">학습 자료 링크</span>가 포함되어 있습니다.
                    </p>
                </div>
            </div>

            {/* Coding Challenges */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Coding Challenges
            </h2>
            <CardGrid cols={2} className="gap-4">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={cat.route}
                        className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-pink-400 dark:hover:border-pink-700 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-200 p-5 flex gap-4"
                    >
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-pink-50 dark:group-hover:bg-pink-900/40 flex items-center justify-center text-xl">
                            {cat.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h2 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white text-sm leading-snug">
                                    {cat.title}
                                </h2>
                                <span
                                    className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded ${difficultyColor[cat.difficulty]}`}
                                >
                                    {difficultyLabel[cat.difficulty]}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">{cat.description}</p>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-xs text-gray-400 font-mono">
                                    {cat.challengeIds.length} challenges
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {cat.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 font-mono"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </CardGrid>

            {/* Guides */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                Guides
            </h2>
            <CardGrid cols={2} className="gap-4">
                {[
                    { to: '/guide/nature-of-code', icon: '🧬', title: 'Nature of Code', desc: 'Chapter 10 — 퍼셉트론부터 신경망 시각화까지 단계별 학습' },
                    { to: '/guide/neural-network', icon: '🔮', title: 'Toy Neural Network', desc: '행렬 연산, 피드포워드, 역전파를 직접 구현하는 신경망' },
                    { to: '/guide/tensorflow', icon: '📐', title: 'TensorFlow.js', desc: '텐서, 연산, Layers API, Core API 종합 가이드' },
                    { to: '/guide/perlin-noise', icon: '🌊', title: 'Perlin Noise', desc: '자연스러운 랜덤 패턴 생성 알고리즘 구현 + 인터랙티브 데모' },
                    { to: '/guide/chrome-extension', icon: '🧩', title: 'Chrome Extension', desc: 'manifest.json, content script, background script 가이드' },
                ].map((guide) => (
                    <Link
                        key={guide.to}
                        to={guide.to}
                        className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-purple-400 dark:hover:border-purple-700 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-200 p-5 flex gap-4"
                    >
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-xl">
                            {guide.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white text-sm">
                                {guide.title}
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{guide.desc}</p>
                        </div>
                    </Link>
                ))}
            </CardGrid>

            <p className="text-center text-xs text-gray-400 dark:text-gray-700 mt-10">
                © 2026 yooseongc · coding-train
            </p>
        </div>
    )
}

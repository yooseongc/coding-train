import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getAllChallenges } from '../../data/challengeRegistry'
import { categories, getCategoryForChallenge } from '../../data/categories'
import type { CodingChallenge } from '../../types/challenge'
import { useTitle } from '../../hooks/useTitle'

const difficultyLabel = { beginner: '입문', intermediate: '중급', advanced: '심화' }
const difficultyColor = {
    beginner: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
    intermediate: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
    advanced: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800',
}

export default function ChallengeIndex() {
    useTitle('코딩 챌린지 목록')
    const allChallenges = getAllChallenges()
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

    const filtered = useMemo(() => {
        let result = allChallenges
        if (search) {
            const q = search.toLowerCase()
            result = result.filter(
                (c) =>
                    c.title.toLowerCase().includes(q) ||
                    c.description.toLowerCase().includes(q) ||
                    c.tags.some((t) => t.toLowerCase().includes(q)) ||
                    String(c.number).includes(q),
            )
        }
        if (selectedCategory) {
            const cat = categories.find((c) => c.id === selectedCategory)
            if (cat) result = result.filter((c) => cat.challengeIds.includes(c.id))
        }
        if (selectedDifficulty) {
            result = result.filter((c) => c.difficulty === selectedDifficulty)
        }
        return result
    }, [allChallenges, search, selectedCategory, selectedDifficulty])

    const stats = useMemo(() => {
        const byDiff = { beginner: 0, intermediate: 0, advanced: 0 }
        allChallenges.forEach((c) => byDiff[c.difficulty]++)
        return { total: allChallenges.length, ...byDiff }
    }, [allChallenges])

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    코딩 챌린지 목록
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    전체 {stats.total}개 코딩 챌린지를 검색하고 탐색할 수 있습니다.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-6">
                <StatBadge label="전체" count={stats.total} color="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800" />
                <StatBadge label="입문" count={stats.beginner} color="text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30" />
                <StatBadge label="중급" count={stats.intermediate} color="text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30" />
                <StatBadge label="심화" count={stats.advanced} color="text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-900/30" />
            </div>

            {/* Search + Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="flex-1 relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="제목, 태그, 번호로 검색..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500"
                    />
                </div>
                <select
                    value={selectedCategory ?? ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                >
                    <option value="">모든 카테고리</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.icon} {cat.title}
                        </option>
                    ))}
                </select>
                <select
                    value={selectedDifficulty ?? ''}
                    onChange={(e) => setSelectedDifficulty(e.target.value || null)}
                    className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                >
                    <option value="">모든 난이도</option>
                    <option value="beginner">입문</option>
                    <option value="intermediate">중급</option>
                    <option value="advanced">심화</option>
                </select>
            </div>

            {/* Results count */}
            <div className="text-xs text-gray-400 mb-3">
                {filtered.length === allChallenges.length
                    ? `${allChallenges.length}개 챌린지`
                    : `${filtered.length} / ${allChallenges.length}개`}
            </div>

            {/* Challenge List */}
            <div className="grid gap-2">
                {filtered.map((challenge) => (
                    <ChallengeRow key={challenge.id} challenge={challenge} />
                ))}
                {filtered.length === 0 && (
                    <div className="text-center text-gray-400 dark:text-gray-600 py-16">
                        검색 결과가 없습니다.
                    </div>
                )}
            </div>
        </div>
    )
}

function StatBadge({ label, count, color }: { label: string; count: number; color: string }) {
    return (
        <div className={`rounded-lg px-4 py-3 text-center ${color}`}>
            <div className="text-xl font-bold">{count}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-70">{label}</div>
        </div>
    )
}

function ChallengeRow({ challenge }: { challenge: CodingChallenge }) {
    const cat = getCategoryForChallenge(challenge.id)
    return (
        <Link
            to={`/challenge/${challenge.id}`}
            className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-pink-400 dark:hover:border-pink-700 transition-all"
        >
            <span className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-mono text-xs font-bold text-gray-500 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                {String(challenge.number).padStart(3, '0')}
            </span>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white truncate">
                        {challenge.title}
                    </span>
                    <span className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded border ${difficultyColor[challenge.difficulty]}`}>
                        {difficultyLabel[challenge.difficulty]}
                    </span>
                </div>
                <p className="text-xs text-gray-500 truncate mt-0.5">{challenge.description}</p>
            </div>
            {cat && (
                <span className="hidden sm:inline-flex shrink-0 items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5">
                    <span>{cat.icon}</span>
                    <span className="font-medium">{cat.title}</span>
                </span>
            )}
        </Link>
    )
}

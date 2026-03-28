import { useState } from 'react'
import { glossary, CATEGORY_LABEL, CATEGORY_COLOR } from '../../data/glossary'
import { useTitle } from '../../hooks/useTitle'

export default function Glossary() {
    useTitle('용어 사전')
    const [filter, setFilter] = useState<string>('')
    const [category, setCategory] = useState<string>('all')

    const categories = Object.keys(CATEGORY_LABEL)

    const filtered = glossary.filter((entry) => {
        if (category !== 'all' && entry.category !== category) return false
        if (!filter) return true
        const q = filter.toLowerCase()
        return (
            entry.term.toLowerCase().includes(q) ||
            entry.definition.toLowerCase().includes(q) ||
            entry.aliases?.some((a) => a.toLowerCase().includes(q))
        )
    })

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                용어 사전
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
                코딩 챌린지에서 사용되는 주요 용어 {glossary.length}개를 정리했습니다.
            </p>

            {/* 필터 */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="용어 검색..."
                    className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    aria-label="용어 검색"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    aria-label="카테고리 필터"
                >
                    <option value="all">전체 카테고리</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{CATEGORY_LABEL[cat]}</option>
                    ))}
                </select>
            </div>

            {/* 결과 */}
            <div className="space-y-3">
                {filtered.length === 0 ? (
                    <p className="text-center text-gray-400 dark:text-gray-600 py-8">
                        검색 결과가 없습니다.
                    </p>
                ) : (
                    filtered.map((entry) => (
                        <div
                            key={entry.id}
                            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {entry.term}
                                        </span>
                                        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${CATEGORY_COLOR[entry.category]}`}>
                                            {CATEGORY_LABEL[entry.category]}
                                        </span>
                                    </div>
                                    {entry.aliases && entry.aliases.length > 0 && (
                                        <p className="text-xs text-gray-400 dark:text-gray-600 mb-1 font-mono">
                                            {entry.aliases.join(', ')}
                                        </p>
                                    )}
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {entry.definition}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <p className="text-center text-xs text-gray-400 dark:text-gray-700 mt-8">
                {filtered.length} / {glossary.length} 용어
            </p>
        </div>
    )
}

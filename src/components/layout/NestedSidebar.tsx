import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '@study-ui/components'
import { categories, getCategoryForChallenge } from '../../data/categories'
import { challengeRegistry } from '../../data/challengeRegistry'

interface NestedSidebarProps {
    onSearchOpen: () => void
    mobileOpen: boolean
    onMobileClose: () => void
    collapsed?: boolean
}

function getExpandedState(): Record<string, boolean> {
    try {
        const v = localStorage.getItem('sidebar-expanded')
        return v ? JSON.parse(v) : {}
    } catch {
        return {}
    }
}

export default function NestedSidebar({ onSearchOpen, mobileOpen, onMobileClose, collapsed = false }: NestedSidebarProps) {
    const { theme, toggle } = useTheme()
    const location = useLocation()
    const [expanded, setExpanded] = useState<Record<string, boolean>>(getExpandedState)

    // 현재 라우트에 해당하는 카테고리를 자동 펼침
    useEffect(() => {
        const match = location.pathname.match(/\/challenge\/(\w+)/)
        if (match) {
            const cat = getCategoryForChallenge(match[1])
            if (cat && !expanded[cat.id]) {
                setExpanded((prev) => {
                    const next = { ...prev, [cat.id]: true }
                    localStorage.setItem('sidebar-expanded', JSON.stringify(next))
                    return next
                })
            }
        }
        const catMatch = location.pathname.match(/\/category\/([\w-]+)/)
        if (catMatch && !expanded[catMatch[1]]) {
            setExpanded((prev) => {
                const next = { ...prev, [catMatch[1]]: true }
                localStorage.setItem('sidebar-expanded', JSON.stringify(next))
                return next
            })
        }
    }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

    const toggleExpanded = (id: string) => {
        setExpanded((prev) => {
            const next = { ...prev, [id]: !prev[id] }
            localStorage.setItem('sidebar-expanded', JSON.stringify(next))
            return next
        })
    }

    return (
        <aside
            className={[
                'bg-gray-50 dark:bg-gray-900',
                'border-r border-gray-200 dark:border-gray-800',
                'flex flex-col h-full overflow-hidden',
                'fixed inset-y-0 left-0 z-40 transition-transform duration-300',
                mobileOpen ? 'translate-x-0' : '-translate-x-full',
                'md:relative md:inset-auto md:z-auto md:translate-x-0 md:transition-[width] md:duration-200',
                collapsed ? 'md:w-0 md:border-r-0' : 'md:w-72 md:shrink-0',
            ].join(' ')}
        >
            {/* Logo */}
            <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <NavLink to="/" className="block" onClick={onMobileClose}>
                    <div className="text-sm font-bold text-pink-600 dark:text-pink-400 tracking-widest uppercase">
                        Coding Train Study
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">Creative Coding with p5.js</div>
                </NavLink>
                <button
                    onClick={onMobileClose}
                    className="md:hidden p-1 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    aria-label="메뉴 닫기"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Search */}
            <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800">
                <button
                    onClick={onSearchOpen}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm transition-colors"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="flex-1 text-left text-xs">검색...</span>
                    <kbd className="hidden sm:inline text-xs border border-gray-300 dark:border-gray-600 rounded px-1">⌘K</kbd>
                </button>
            </div>

            {/* Nested Navigation */}
            <nav className="flex-1 min-h-0 overflow-y-auto py-2 px-2">
                {/* Section header: Coding Challenges */}
                <div className="px-3 py-1.5 mb-1 text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                    Coding Challenges
                </div>
                {categories.map((cat) => {
                    const isExpanded = expanded[cat.id] ?? false
                    const registeredChallenges = cat.challengeIds.filter((id) => challengeRegistry.has(id))

                    return (
                        <div key={cat.id} className="mb-0.5">
                            {/* Category header */}
                            <div className="flex items-center">
                                <NavLink
                                    to={cat.route}
                                    onClick={onMobileClose}
                                    className={({ isActive }) =>
                                        `flex-1 flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                                            isActive
                                                ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                                        }`
                                    }
                                >
                                    <span className="text-base leading-none">{cat.icon}</span>
                                    <span className="font-medium leading-snug flex-1">{cat.title}</span>
                                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600">
                                        {registeredChallenges.length}/{cat.challengeIds.length}
                                    </span>
                                </NavLink>
                                {cat.challengeIds.length > 0 && (
                                    <button
                                        onClick={() => toggleExpanded(cat.id)}
                                        className="p-1.5 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                        aria-label={isExpanded ? '접기' : '펼치기'}
                                    >
                                        <svg
                                            className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* Challenge sub-items */}
                            {isExpanded && (
                                <div className="ml-4 pl-3 border-l border-gray-200 dark:border-gray-800 mt-0.5 mb-1">
                                    {cat.challengeIds.map((challengeId) => {
                                        const challenge = challengeRegistry.get(challengeId)
                                        const num = challengeId.split('_')[0]
                                        const name = challenge?.title ?? challengeId.split('_').slice(1).join(' ')
                                        const isRegistered = !!challenge

                                        return (
                                            <NavLink
                                                key={challengeId}
                                                to={`/challenge/${challengeId}`}
                                                onClick={onMobileClose}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors ${
                                                        isActive
                                                            ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                                                            : isRegistered
                                                              ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                              : 'text-gray-400 dark:text-gray-600'
                                                    }`
                                                }
                                            >
                                                <span className="font-mono text-[10px] text-gray-400 dark:text-gray-600 shrink-0 w-6">
                                                    {num}
                                                </span>
                                                <span className="truncate capitalize">{name}</span>
                                                {!isRegistered && (
                                                    <span className="ml-auto text-[9px] text-gray-400 dark:text-gray-700 shrink-0">
                                                        TBD
                                                    </span>
                                                )}
                                            </NavLink>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    )
                })}
                {/* Guides */}
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
                    <div className="px-3 py-1 text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                        Guides
                    </div>
                    {[
                        { to: '/guide/nature-of-code', icon: '🧬', label: 'Nature of Code' },
                        { to: '/guide/neural-network', icon: '🔮', label: 'Toy Neural Network' },
                        { to: '/guide/tensorflow', icon: '📐', label: 'TensorFlow.js' },
                        { to: '/guide/perlin-noise', icon: '🌊', label: 'Perlin Noise' },
                        { to: '/guide/chrome-extension', icon: '🧩', label: 'Chrome Extension' },
                    ].map((guide) => (
                        <NavLink
                            key={guide.to}
                            to={guide.to}
                            onClick={onMobileClose}
                            className={({ isActive }) =>
                                `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                                    isActive
                                        ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                                }`
                            }
                        >
                            <span className="text-sm leading-none">{guide.icon}</span>
                            <span className="font-medium leading-snug">{guide.label}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>

            {/* Footer */}
            <div className="px-2 py-2 border-t border-gray-200 dark:border-gray-800 space-y-1">
                <NavLink
                    to="/challenges"
                    onClick={onMobileClose}
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                                ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`
                    }
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    코딩 챌린지 목록
                </NavLink>
                <button
                    onClick={toggle}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    {theme === 'dark' ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            라이트 모드
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                            다크 모드
                        </>
                    )}
                </button>
            </div>
        </aside>
    )
}

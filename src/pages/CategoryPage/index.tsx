import { useParams, Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { challengeRegistry } from '../../data/challengeRegistry'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'
import { useTitle } from '../../hooks/useTitle'

export default function CategoryPage() {
    const { categoryId } = useParams<{ categoryId: string }>()
    const category = categories.find((c) => c.id === categoryId)
    useTitle(category?.title ?? '카테고리')

    if (!category) {
        return (
            <div className="flex items-center justify-center h-64 text-gray-400">
                카테고리를 찾을 수 없습니다.
            </div>
        )
    }

    const registered = category.challengeIds.filter((id) => challengeRegistry.has(id))
    const unregistered = category.challengeIds.filter((id) => !challengeRegistry.has(id))

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="mb-8">
                <Link to="/" className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 mb-3 inline-block">
                    ← Home
                </Link>
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{category.icon}</span>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                    </h1>
                    <span className="text-sm text-gray-400 font-mono">
                        {registered.length}/{category.challengeIds.length}
                    </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                    {category.description}
                </p>
            </div>

            {/* Registered challenges */}
            {registered.length > 0 && (
                <div className="grid gap-3 mb-8">
                    {registered.map((id) => {
                        const challenge = challengeRegistry.get(id)!
                        return <ChallengeCard key={id} challenge={challenge} />
                    })}
                </div>
            )}

            {/* Unregistered challenges */}
            {unregistered.length > 0 && (
                <>
                    <h2 className="text-sm font-semibold text-gray-400 dark:text-gray-600 mb-3 uppercase tracking-wider">
                        포팅 예정 ({unregistered.length})
                    </h2>
                    <div className="grid gap-2">
                        {unregistered.map((id) => {
                            const num = id.split('_')[0]
                            const name = id.split('_').slice(1).join(' ')
                            return (
                                <div
                                    key={id}
                                    className="flex items-center gap-4 rounded-lg border border-dashed border-gray-200 dark:border-gray-800 p-3 opacity-50"
                                >
                                    <span className="shrink-0 w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-mono text-xs text-gray-400">
                                        {num}
                                    </span>
                                    <span className="text-sm text-gray-400 capitalize">{name}</span>
                                    <span className="ml-auto text-[10px] text-gray-400 dark:text-gray-700">TBD</span>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}

            {category.challengeIds.length === 0 && (
                <div className="text-center text-gray-400 dark:text-gray-600 py-16">
                    아직 포팅된 챌린지가 없습니다. 곧 추가될 예정입니다.
                </div>
            )}
        </div>
    )
}

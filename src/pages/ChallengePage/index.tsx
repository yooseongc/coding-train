import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getChallenge, fetchAllSketchFiles, SKETCHES_BASE } from '../../data/challengeRegistry'
import { getCategoryForChallenge } from '../../data/categories'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import P5CodeView from '../../components/P5Runner/P5CodeView'
import P5MultiVersion from '../../components/P5Runner/P5MultiVersion'
import type { SketchFile } from '../../types/challenge'
import { useTitle } from '../../hooks/useTitle'

export default function ChallengePage() {
    const { challengeId } = useParams<{ challengeId: string }>()
    const challenge = challengeId ? getChallenge(challengeId) : undefined
    const category = challengeId ? getCategoryForChallenge(challengeId) : undefined
    useTitle(challenge ? `#${String(challenge.number).padStart(3, '0')} ${challenge.title}` : '챌린지')
    const [files, setFiles] = useState<SketchFile[]>([])
    const [versionFiles, setVersionFiles] = useState<Array<{ label: string; files: SketchFile[]; libraries?: string[] }>>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const hasVersions = !!(challenge?.versions && challenge.versions.length > 0)

    useEffect(() => {
        if (!challenge) return
        setLoading(true)
        setError(null)

        if (challenge.versions && challenge.versions.length > 0) {
            // Multi-version: fetch files for each version from subdirectories
            Promise.all(
                challenge.versions.map(async (ver) => ({
                    label: ver.label,
                    libraries: ver.libraries,
                    files: await Promise.all(
                        ver.files.map(async (f) => ({
                            name: f.name,
                            content: await fetch(`${SKETCHES_BASE}/${challenge.id}/${ver.label}/${f.name}`).then((r) => r.text()),
                        })),
                    ),
                })),
            )
                .then(setVersionFiles)
                .catch((e: Error) => setError(e.message))
                .finally(() => setLoading(false))
        } else {
            fetchAllSketchFiles(challenge)
                .then(setFiles)
                .catch((e: Error) => setError(e.message))
                .finally(() => setLoading(false))
        }
    }, [challenge])

    if (!challenge) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400 dark:text-gray-600">
                <p className="text-lg mb-2">챌린지를 찾을 수 없습니다.</p>
                <p className="text-sm">아직 포팅되지 않은 챌린지일 수 있습니다.</p>
            </div>
        )
    }

    const difficultyColor = {
        beginner: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30',
        intermediate: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30',
        advanced: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30',
    }
    const difficultyLabel = { beginner: '입문', intermediate: '중급', advanced: '심화' }

    return (
        <div className="max-w-full mx-auto px-3 lg:px-4 py-6">
            {/* Breadcrumb */}
            {category && (
                <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-600 mb-4">
                    <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-400">Home</Link>
                    <span>/</span>
                    <Link to={category.route} className="hover:text-gray-600 dark:hover:text-gray-400">
                        {category.icon} {category.title}
                    </Link>
                    <span>/</span>
                    <span className="text-gray-600 dark:text-gray-400">#{String(challenge.number).padStart(3, '0')}</span>
                </div>
            )}

            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        #{String(challenge.number).padStart(3, '0')} {challenge.title}
                    </h1>
                    <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded ${difficultyColor[challenge.difficulty]}`}>
                        {difficultyLabel[challenge.difficulty]}
                    </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                    {challenge.description}
                </p>
            </div>

            {/* Notice banner */}
            {challenge.notice && (
                <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4 mb-4 flex items-start gap-3">
                    <span className="text-amber-500 text-lg shrink-0">⚠️</span>
                    <p className="text-sm text-amber-700 dark:text-amber-300">{challenge.notice}</p>
                </div>
            )}

            {/* P5 Code View */}
            {loading && (
                <div className="flex items-center justify-center h-64 text-gray-400">
                    <svg className="animate-spin w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    스케치 파일 로딩 중...
                </div>
            )}
            {error && (
                <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-6 text-red-600 dark:text-red-400 text-sm">
                    스케치 파일을 불러오지 못했습니다: {error}
                </div>
            )}
            {/* Code-only view (Chrome Extensions etc.) */}
            {!loading && !error && challenge.codeOnly && files.length > 0 && (
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    {files.map((file) => (
                        <div key={file.name} className="border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-xs font-mono text-gray-500 dark:text-gray-400">
                                {file.name}
                            </div>
                            <SyntaxHighlighter
                                language={file.name.endsWith('.json') ? 'json' : 'javascript'}
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, borderRadius: 0, background: '#0d1117', fontSize: '0.82rem' }}
                                showLineNumbers
                            >
                                {file.content.trim()}
                            </SyntaxHighlighter>
                        </div>
                    ))}
                </div>
            )}
            {!loading && !error && !challenge.codeOnly && hasVersions && versionFiles.length > 0 && (
                <P5MultiVersion
                    versions={versionFiles}
                    width={challenge.canvasWidth ?? 600}
                    height={challenge.canvasHeight ?? 600}
                />
            )}
            {!loading && !error && !challenge.codeOnly && !hasVersions && files.length > 0 && (
                <P5CodeView
                    files={files}
                    libraries={challenge.libraries}
                    challengeId={challenge.id}
                    bodyHtml={challenge.bodyHtml}
                    width={challenge.canvasWidth ?? 600}
                    height={challenge.canvasHeight ?? 600}
                />
            )}

            {/* Explanation */}
            {challenge.explanation && challenge.explanation.length > 0 && (
                <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="text-blue-500">💡</span> 코드 설명
                    </h2>
                    <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {challenge.explanation.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            )}

            {/* References + Tags — card style matching explanation */}
            <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                {challenge.references.length > 0 && (
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="text-green-500">📎</span> 참고 자료
                        </h2>
                        <ul className="space-y-2">
                            {challenge.references.map((ref) => (
                                <li key={ref.url}>
                                    <a
                                        href={ref.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                                    >
                                        {ref.title} ↗
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {challenge.tags.length > 0 && (
                    <div className={challenge.references.length > 0 ? 'mt-5 pt-5 border-t border-gray-100 dark:border-gray-800' : ''}>
                        <div className="flex flex-wrap gap-2">
                            {challenge.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-full px-2.5 py-1 font-mono"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

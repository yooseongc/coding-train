import { useState } from 'react'
import type { SketchFile } from '../../types/challenge'
import P5CodeView from './P5CodeView'

interface Version {
    label: string
    files: SketchFile[]
    libraries?: string[]
}

interface P5MultiVersionProps {
    versions: Version[]
    width?: number
    height?: number
    className?: string
}

/**
 * 멀티파트 챌린지용 탭 전환 컴포넌트.
 * 각 탭이 다른 버전의 스케치를 보여줍니다.
 */
export default function P5MultiVersion({
    versions,
    width = 600,
    height = 600,
    className = '',
}: P5MultiVersionProps) {
    const [activeVersion, setActiveVersion] = useState(0)

    if (versions.length === 0) return null

    const current = versions[activeVersion]

    return (
        <div className={className}>
            {/* Version Tabs */}
            <div className="flex items-center gap-1 mb-3 overflow-x-auto">
                {versions.map((v, i) => (
                    <button
                        key={v.label}
                        onClick={() => setActiveVersion(i)}
                        className={`text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                            i === activeVersion
                                ? 'bg-pink-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        {v.label}
                    </button>
                ))}
            </div>

            <P5CodeView
                files={current.files}
                libraries={current.libraries}
                width={width}
                height={height}
            />
        </div>
    )
}

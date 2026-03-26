import { IframeRunner } from '@study-ui/components'
import type { SketchFile } from '../../types/challenge'
import { LIBS_BASE, SKETCHES_BASE } from '../../data/challengeRegistry'

interface P5RunnerProps {
    files: SketchFile[]
    libraries?: string[]
    challengeId?: string
    bodyHtml?: string
    width?: number
    height?: number
    className?: string
}

export default function P5Runner({
    files,
    libraries = [],
    challengeId,
    bodyHtml = '',
    width = 600,
    height = 600,
    className = '',
}: P5RunnerProps) {
    const libraryUrls = [
        `${LIBS_BASE}/p5.min.js`,
        ...libraries.map((lib) => `${LIBS_BASE}/${lib}`),
    ]

    const baseUrl = challengeId ? `${SKETCHES_BASE}/${challengeId}/` : undefined

    return (
        <IframeRunner
            files={files}
            libraryUrls={libraryUrls}
            baseUrl={baseUrl}
            bodyHtml={bodyHtml}
            width={width}
            height={height}
            title={challengeId ? `p5.js sketch: ${challengeId}` : 'p5.js sketch'}
            allow="microphone; camera"
            pauseFn="noLoop"
            resumeFn="loop"
            className={className}
        />
    )
}

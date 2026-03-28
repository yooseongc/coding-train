import { useState } from 'react'
import { CodeViewer } from '@study-ui/components'
import type { FileGroup } from '@study-ui/components'
import type { SketchFile } from '../../types/challenge'
import P5Runner from './P5Runner'

interface P5CodeViewProps {
    files: SketchFile[]
    libraries?: string[]
    challengeId?: string
    bodyHtml?: string
    width?: number
    height?: number
    className?: string
}

export default function P5CodeView({
    files,
    libraries = [],
    challengeId,
    bodyHtml,
    width = 600,
    height = 600,
    className = '',
}: P5CodeViewProps) {
    const [editedFiles, setEditedFiles] = useState<SketchFile[] | null>(null)

    const activeFiles = editedFiles ?? files

    const fileGroups: FileGroup[] = []

    if (libraries.length > 0) {
        fileGroups.push({
            label: 'libraries',
            files: libraries.map((lib) => ({ name: lib })),
            defaultOpen: false,
        })
    }

    fileGroups.push({
        label: 'core',
        files: [{ name: 'p5.min.js' }],
        defaultOpen: false,
    })

    const runner = (
        <P5Runner
            files={activeFiles}
            libraries={libraries}
            challengeId={challengeId}
            bodyHtml={bodyHtml}
            width={width}
            height={height}
        />
    )

    return (
        <CodeViewer
            files={activeFiles}
            fileGroups={fileGroups}
            runner={runner}
            language="javascript"
            runnerHeight={height}
            editable
            onFilesChange={setEditedFiles}
            className={className}
        />
    )
}

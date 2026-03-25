import { useState } from 'react'
import type { SketchFile } from '../../types/challenge'

interface FileTreeProps {
    files: SketchFile[]
    activeIndex: number
    onSelect: (index: number) => void
    libraries?: string[]
}

const fileIcon = (name: string) => {
    if (name.endsWith('.js')) return '📄'
    if (name.endsWith('.json')) return '📋'
    if (name.endsWith('.css')) return '🎨'
    return '📎'
}

function FolderToggle({ label, defaultOpen = true, children }: { label: string; defaultOpen?: boolean; children: React.ReactNode }) {
    const [open, setOpen] = useState(defaultOpen)
    return (
        <div>
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center gap-1 px-2 py-1 text-[10px] text-gray-500 dark:text-gray-500 font-mono hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded"
            >
                <svg
                    className={`w-2.5 h-2.5 shrink-0 transition-transform ${open ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>{open ? '📂' : '📁'} {label}</span>
            </button>
            {open && <div>{children}</div>}
        </div>
    )
}

export default function FileTree({ files, activeIndex, onSelect, libraries = [] }: FileTreeProps) {
    return (
        <div className="w-44 shrink-0 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col text-xs overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                Files
            </div>

            <div className="flex-1 overflow-y-auto py-1">
                {/* Sketch files */}
                <FolderToggle label="sketch" defaultOpen={true}>
                    {files.map((file, i) => (
                        <button
                            key={file.name}
                            onClick={() => onSelect(i)}
                            className={`w-full text-left flex items-center gap-1.5 px-3 pl-6 py-1.5 transition-colors ${
                                i === activeIndex
                                    ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                        >
                            <span className="text-[10px]">{fileIcon(file.name)}</span>
                            <span className="font-mono truncate">{file.name}</span>
                        </button>
                    ))}
                </FolderToggle>

                {/* Libraries */}
                {libraries.length > 0 && (
                    <FolderToggle label="libraries" defaultOpen={false}>
                        {libraries.map((lib) => (
                            <div key={lib} className="flex items-center gap-1.5 px-3 pl-6 py-1.5 text-gray-400 dark:text-gray-600">
                                <span className="text-[10px]">📦</span>
                                <span className="font-mono truncate">{lib}</span>
                            </div>
                        ))}
                    </FolderToggle>
                )}

                {/* Core */}
                <FolderToggle label="core" defaultOpen={false}>
                    <div className="flex items-center gap-1.5 px-3 pl-6 py-1.5 text-gray-400 dark:text-gray-600">
                        <span className="text-[10px]">📦</span>
                        <span className="font-mono truncate">p5.min.js</span>
                    </div>
                </FolderToggle>
            </div>

            <div className="px-3 py-1.5 border-t border-gray-200 dark:border-gray-800 text-[10px] text-gray-400 dark:text-gray-600">
                {files.length} file{files.length !== 1 ? 's' : ''}
            </div>
        </div>
    )
}

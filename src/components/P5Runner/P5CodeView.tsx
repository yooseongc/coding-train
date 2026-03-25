import { useState, useRef, useEffect, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { SketchFile } from '../../types/challenge'
import P5Runner from './P5Runner'
import FileTree from './FileTree'

type LayoutMode = 'horizontal' | 'vertical' | 'code-only'

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
    const [activeTab, setActiveTab] = useState(0)
    const [layout, setLayout] = useState<LayoutMode>('horizontal')
    const [showFileTree, setShowFileTree] = useState(true)
    const codeScrollRef = useRef<HTMLDivElement>(null)
    const [canScrollDown, setCanScrollDown] = useState(false)

    const checkScroll = useCallback(() => {
        const el = codeScrollRef.current
        if (!el) return
        setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 8)
    }, [])

    useEffect(() => {
        const t = setTimeout(checkScroll, 100)
        return () => clearTimeout(t)
    }, [activeTab, layout, checkScroll])

    if (files.length === 0) {
        return (
            <div className="text-center text-gray-400 py-8">
                스케치 파일을 로드하는 중...
            </div>
        )
    }

    const activeFile = files[activeTab]
    const panelHeight = height + 268

    const layoutBtn = (mode: LayoutMode, icon: string, title: string) => (
        <button
            onClick={() => setLayout(mode)}
            className={`text-xs px-1.5 py-1 rounded transition-colors ${
                layout === mode
                    ? 'text-pink-600 dark:text-pink-400 bg-white dark:bg-gray-800'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
            }`}
            title={title}
        >
            {icon}
        </button>
    )

    const tabBar = (
        <div className="flex items-center bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shrink-0">
            {/* Fixed: file tree toggle */}
            <button
                onClick={() => setShowFileTree((v) => !v)}
                className={`shrink-0 text-xs px-2 py-2 transition-colors ${
                    showFileTree
                        ? 'text-pink-600 dark:text-pink-400'
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                title={showFileTree ? '파일 트리 숨기기' : '파일 트리 보기'}
            >
                {showFileTree ? '◧' : '☰'}
            </button>
            <div className="w-px h-4 bg-gray-200 dark:bg-gray-700 shrink-0" />
            {/* Scrollable: file tabs */}
            <div className="flex items-center overflow-x-auto min-w-0 flex-1 px-1">
                {files.map((file, i) => (
                    <button
                        key={file.name}
                        onClick={() => setActiveTab(i)}
                        className={`shrink-0 text-xs font-mono px-3 py-2 whitespace-nowrap transition-colors ${
                            i === activeTab
                                ? 'text-pink-600 dark:text-pink-400 bg-white dark:bg-gray-800 border-b-2 border-pink-500'
                                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                    >
                        {file.name}
                    </button>
                ))}
            </div>
            <div className="shrink-0 flex items-center gap-0.5 px-1.5 py-1 mr-1 rounded-md bg-gray-200 dark:bg-gray-800">
                {layoutBtn('horizontal', '◫', '좌우 분할')}
                {layoutBtn('vertical', '⬒', '상하 분할')}
                {layoutBtn('code-only', '□', '코드만')}
            </div>
        </div>
    )

    const codePanel = (
        <div className="flex-1 relative min-h-0 bg-[#0d1117]">
            <div
                ref={codeScrollRef}
                onScroll={checkScroll}
                className="absolute inset-0 overflow-auto"
            >
                <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    customStyle={{ margin: 0, borderRadius: 0, background: '#0d1117', fontSize: '0.82rem', minHeight: '100%' }}
                    showLineNumbers
                >
                    {activeFile.content.trim()}
                </SyntaxHighlighter>
            </div>
            {canScrollDown && (
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
                    <div className="h-8 bg-gradient-to-t from-[#0d1117] to-transparent" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 bg-gray-800/80 rounded-full px-2 py-0.5 animate-bounce">
                        ↓ scroll
                    </div>
                </div>
            )}
        </div>
    )

    const runnerPanel = (
        <P5Runner files={files} libraries={libraries} challengeId={challengeId} bodyHtml={bodyHtml} width={width} height={height} />
    )

    const fileTree = showFileTree ? (
        <FileTree files={files} activeIndex={activeTab} onSelect={setActiveTab} libraries={libraries} />
    ) : null

    if (layout === 'horizontal') {
        return (
            <div className={`rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden ${className}`}>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 lg:w-1/2" style={{ height: panelHeight }}>
                        {fileTree}
                        <div className="flex flex-col flex-1 min-w-0">{tabBar}{codePanel}</div>
                    </div>
                    <div className="lg:w-1/2 bg-gray-50 dark:bg-gray-950 flex flex-col overflow-hidden" style={{ height: panelHeight }}>
                        {runnerPanel}
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'vertical') {
        return (
            <div className={`rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden ${className}`}>
                <div className="bg-gray-50 dark:bg-gray-950">{runnerPanel}</div>
                <div className="flex border-t border-gray-200 dark:border-gray-800" style={{ height: 480 }}>
                    {fileTree}
                    <div className="flex flex-col flex-1 min-w-0">{tabBar}{codePanel}</div>
                </div>
            </div>
        )
    }

    return (
        <div className={`rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden ${className}`}>
            <div className="flex" style={{ height: panelHeight }}>
                {fileTree}
                <div className="flex flex-col flex-1 min-w-0">{tabBar}{codePanel}</div>
            </div>
        </div>
    )
}

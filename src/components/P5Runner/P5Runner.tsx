import { useRef, useState, useCallback, useEffect } from 'react'
import type { SketchFile } from '../../types/challenge'
import { LIBS_BASE, SKETCHES_BASE } from '../../data/challengeRegistry'
import { useIsDark } from '@study-ui/components'

interface ConsoleEntry {
    level: 'log' | 'warn' | 'error' | 'info'
    args: string
    timestamp: number
}

interface P5RunnerProps {
    files: SketchFile[]
    libraries?: string[]
    challengeId?: string
    bodyHtml?: string
    width?: number
    height?: number
    className?: string
}

const CONSOLE_BRIDGE = `
<script>
(function() {
    const origConsole = { log: console.log, warn: console.warn, error: console.error, info: console.info };
    function send(level, args) {
        try {
            parent.postMessage({ type: '__p5_console__', level: level, args: Array.from(args).map(function(a) {
                if (a instanceof Error) return a.message;
                if (typeof a === 'object') try { return JSON.stringify(a); } catch(e) { return String(a); }
                return String(a);
            }).join(' '), timestamp: Date.now() }, '*');
        } catch(e) {}
        origConsole[level].apply(console, args);
    }
    console.log = function() { send('log', arguments); };
    console.warn = function() { send('warn', arguments); };
    console.error = function() { send('error', arguments); };
    console.info = function() { send('info', arguments); };
    window.onerror = function(msg, src, line, col) {
        send('error', ['[Error] ' + msg + ' (line ' + line + ')']);
    };
})();
<\/script>`

const levelColors: Record<string, string> = {
    log: 'text-gray-300',
    info: 'text-blue-400',
    warn: 'text-yellow-400',
    error: 'text-red-400',
}

const levelIcons: Record<string, string> = {
    log: '›',
    info: 'ℹ',
    warn: '⚠',
    error: '✕',
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
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const consoleEndRef = useRef<HTMLDivElement>(null)
    const [isRunning, setIsRunning] = useState(true)
    const [key, setKey] = useState(0)
    const [consoleEntries, setConsoleEntries] = useState<ConsoleEntry[]>([])
    const [showConsole, setShowConsole] = useState(true)
    const isDark = useIsDark()

    const buildSrcdoc = useCallback(() => {
        const libScripts = [
            `<script src="${LIBS_BASE}/p5.min.js"><\/script>`,
            ...libraries.map((lib) => `<script src="${LIBS_BASE}/${lib}"><\/script>`),
        ].join('\n    ')

        const sketchScripts = files
            .map((f) => `<script>\n${f.content}\n<\/script>`)
            .join('\n    ')

        const bg = isDark ? '#000' : '#f8f8f8'
        const fg = isDark ? '#ccc' : '#333'
        const accent = '#ec4899'
        const baseTag = challengeId ? `<base href="${SKETCHES_BASE}/${challengeId}/" />` : ''

        return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    ${baseTag}
    <style>
        html, body { margin: 0; padding: 0; background: ${bg}; color: ${fg}; font-family: sans-serif; font-size: 12px; }
        canvas { display: block; }
        input[type="range"] { width: 200px; margin: 6px 8px; accent-color: ${accent}; }
        p, span, div:not(:has(canvas)) { padding: 0 8px; }
        select, button, input { margin: 4px 8px; }
    </style>
    ${CONSOLE_BRIDGE}
    ${libScripts}
</head>
<body>
    ${bodyHtml}
    ${sketchScripts}
</body>
</html>`
    }, [files, libraries, isDark, challengeId, bodyHtml])

    // Listen for console messages from iframe
    useEffect(() => {
        const handler = (e: MessageEvent) => {
            if (e.data?.type === '__p5_console__') {
                setConsoleEntries((prev) => {
                    const next = [...prev, { level: e.data.level, args: e.data.args, timestamp: e.data.timestamp }]
                    return next.length > 200 ? next.slice(-200) : next
                })
            }
        }
        window.addEventListener('message', handler)
        return () => window.removeEventListener('message', handler)
    }, [])

    // Auto-scroll console (only within the console panel, not the whole page)
    useEffect(() => {
        const el = consoleEndRef.current
        if (el) {
            el.parentElement?.scrollTo({ top: el.parentElement.scrollHeight, behavior: 'smooth' })
        }
    }, [consoleEntries])

    const restart = useCallback(() => {
        setKey((k) => k + 1)
        setIsRunning(true)
        setConsoleEntries([])
    }, [])

    const togglePause = useCallback(() => {
        const iframe = iframeRef.current
        if (!iframe?.contentWindow) return
        try {
            const win = iframe.contentWindow as Window & { noLoop?: () => void; loop?: () => void }
            if (isRunning) {
                win.noLoop?.()
            } else {
                win.loop?.()
            }
            setIsRunning((r) => !r)
        } catch {
            // cross-origin
        }
    }, [isRunning])

    useEffect(() => {
        setIsRunning(true)
    }, [key])

    const srcdoc = buildSrcdoc()
    const errorCount = consoleEntries.filter((e) => e.level === 'error').length
    const warnCount = consoleEntries.filter((e) => e.level === 'warn').length

    return (
        <div className={`flex flex-col w-full ${className}`}>
            {/* Canvas + DOM elements */}
            <div className="relative rounded-t-lg overflow-hidden bg-black dark:bg-black">
                <iframe
                    ref={iframeRef}
                    key={key}
                    srcDoc={srcdoc}
                    title="p5.js sketch"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-modals"
                    allow="microphone; camera"
                    className="w-full border-0"
                    style={{ height: height + 60 }}
                />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
                <button
                    onClick={togglePause}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    {isRunning ? '⏸ Pause' : '▶ Resume'}
                </button>
                <button
                    onClick={restart}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    🔄 Restart
                </button>
                <div className="ml-auto flex items-center gap-2">
                    {errorCount > 0 && (
                        <span className="text-[10px] text-red-600 dark:text-red-400 font-mono">{errorCount} error{errorCount > 1 ? 's' : ''}</span>
                    )}
                    {warnCount > 0 && (
                        <span className="text-[10px] text-yellow-600 dark:text-yellow-400 font-mono">{warnCount} warn{warnCount > 1 ? 's' : ''}</span>
                    )}
                    <button
                        onClick={() => setShowConsole((v) => !v)}
                        className={`text-xs font-mono px-2 py-1 rounded transition-colors ${
                            showConsole
                                ? 'bg-gray-400 dark:bg-gray-600 text-white'
                                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-600'
                        }`}
                    >
                        Console
                    </button>
                    <span className="text-[10px] text-gray-500 font-mono">{width}×{height}</span>
                </div>
            </div>

            {/* Console Panel */}
            {showConsole && (
                <div className="bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 rounded-b-lg overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-200 dark:border-gray-800">
                        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Console</span>
                        <button
                            onClick={() => setConsoleEntries([])}
                            className="text-[10px] text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-mono transition-colors"
                        >
                            Clear
                        </button>
                    </div>
                    <div className="h-32 overflow-y-auto font-mono text-[11px] leading-relaxed">
                        {consoleEntries.length === 0 && (
                            <div className="px-3 py-2 text-gray-400 dark:text-gray-600 italic">No console output</div>
                        )}
                        {consoleEntries.map((entry, i) => (
                            <div
                                key={i}
                                className={`flex gap-2 px-3 py-0.5 hover:bg-gray-100 dark:hover:bg-gray-800/50 ${levelColors[entry.level]} ${
                                    entry.level === 'error' ? 'bg-red-50 dark:bg-red-900/10' : entry.level === 'warn' ? 'bg-yellow-50 dark:bg-yellow-900/10' : ''
                                }`}
                            >
                                <span className="shrink-0 w-3 text-center opacity-60">{levelIcons[entry.level]}</span>
                                <span className="break-all">{entry.args}</span>
                            </div>
                        ))}
                        <div ref={consoleEndRef} />
                    </div>
                </div>
            )}
        </div>
    )
}

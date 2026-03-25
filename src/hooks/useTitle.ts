import { useEffect } from 'react'

export function useTitle(title: string) {
    useEffect(() => {
        const prev = document.title
        document.title = title ? `${title} — Coding Train Study` : 'Coding Train Study'
        return () => { document.title = prev }
    }, [title])
}

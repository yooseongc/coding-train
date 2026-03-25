import type { GlossaryEntry } from '@study-ui/components'

export const glossary: GlossaryEntry[] = []

export const CATEGORY_LABEL: Record<string, string> = {
    p5: 'p5.js',
    algorithm: '알고리즘',
    math: '수학',
    physics: '물리',
    ml: '머신러닝',
}

export const CATEGORY_COLOR: Record<string, string> = {
    p5: 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30',
    algorithm: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30',
    math: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30',
    physics: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30',
    ml: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30',
}

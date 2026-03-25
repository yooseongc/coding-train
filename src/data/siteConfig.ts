import type { SiteConfig } from '@study-ui/components'
import { categories } from './categories'
import { glossary, CATEGORY_LABEL, CATEGORY_COLOR } from './glossary'
import { sectionIndex } from './searchIndex'

export const siteConfig: SiteConfig = {
    name: 'Coding Train Study',
    subtitle: 'Creative Coding with p5.js',
    topics: categories,
    glossary: {
        entries: glossary,
        categoryLabels: CATEGORY_LABEL,
        categoryColors: CATEGORY_COLOR,
    },
    searchIndex: sectionIndex,
    footerLinks: [
        { label: '코딩 챌린지 목록', to: '/challenges', icon: 'link' },
    ],
}

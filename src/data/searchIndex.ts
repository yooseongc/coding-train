import type { SectionEntry } from '@study-ui/components'
import { categories } from './categories'

export const sectionIndex: SectionEntry[] = categories.map((cat) => ({
    topicId: cat.id,
    sectionId: cat.id,
    title: `${cat.title} — ${cat.subtitle}`,
    route: cat.route,
}))

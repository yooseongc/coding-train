import type { SectionEntry } from '@study-ui/components'
import { categories } from './categories'
import { getAllChallenges } from './challengeRegistry'

// 카테고리 검색 항목
const categoryEntries: SectionEntry[] = categories.map((cat) => ({
    topicId: cat.id,
    sectionId: cat.id,
    title: `${cat.title} — ${cat.subtitle}`,
    route: cat.route,
}))

// 챌린지 검색 항목
const challengeEntries: SectionEntry[] = getAllChallenges().map((ch) => ({
    topicId: ch.categoryId,
    sectionId: ch.id,
    title: `#${String(ch.number).padStart(3, '0')} ${ch.title}`,
    route: `/challenge/${ch.id}`,
}))

export const sectionIndex: SectionEntry[] = [...categoryEntries, ...challengeEntries]

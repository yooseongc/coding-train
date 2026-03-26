import { useMemo } from 'react'
import { NestedSidebar as BaseNestedSidebar } from '@study-ui/components'
import type { NavSection, NavExtra } from '@study-ui/components'
import { categories } from '../../data/categories'
import { challengeRegistry } from '../../data/challengeRegistry'

interface NestedSidebarProps {
    onSearchOpen: () => void
    mobileOpen: boolean
    onMobileClose: () => void
    collapsed?: boolean
}

export default function NestedSidebar({ onSearchOpen, mobileOpen, onMobileClose, collapsed = false }: NestedSidebarProps) {
    const sections: NavSection[] = useMemo(() => [{
        label: 'Coding Challenges',
        groups: categories.map((cat) => {
            const registeredChallenges = cat.challengeIds.filter((id) => challengeRegistry.has(id))
            return {
                id: cat.id,
                label: cat.title,
                route: cat.route,
                icon: cat.icon,
                count: `${registeredChallenges.length}/${cat.challengeIds.length}`,
                children: cat.challengeIds.map((challengeId) => {
                    const challenge = challengeRegistry.get(challengeId)
                    const num = challengeId.split('_')[0]
                    const name = challenge?.title ?? challengeId.split('_').slice(1).join(' ')
                    return {
                        id: challengeId,
                        label: name,
                        route: `/challenge/${challengeId}`,
                        prefix: num,
                        enabled: !!challenge,
                        disabledLabel: !challenge ? 'TBD' : undefined,
                    }
                }),
            }
        }),
    }], [])

    const extras: NavExtra[] = useMemo(() => [
        { route: '/guide/nature-of-code', icon: '\uD83E\uDDEC', label: 'Nature of Code' },
        { route: '/guide/neural-network', icon: '\uD83D\uDD2E', label: 'Toy Neural Network' },
        { route: '/guide/tensorflow', icon: '\uD83D\uDCD0', label: 'TensorFlow.js' },
        { route: '/guide/perlin-noise', icon: '\uD83C\uDF0A', label: 'Perlin Noise' },
        { route: '/guide/chrome-extension', icon: '\uD83E\uDDE9', label: 'Chrome Extension' },
    ], [])

    const footerLinks: NavExtra[] = useMemo(() => [
        { route: '/challenges', label: '\uCF54\uB529 \uCC4C\uB9B0\uC9C0 \uBAA9\uB85D' },
    ], [])

    return (
        <BaseNestedSidebar
            title="Coding Train Study"
            subtitle="Creative Coding with p5.js"
            accentColor="pink"
            sections={sections}
            extras={extras}
            footerLinks={footerLinks}
            onSearchOpen={onSearchOpen}
            mobileOpen={mobileOpen}
            onMobileClose={onMobileClose}
            collapsed={collapsed}
        />
    )
}

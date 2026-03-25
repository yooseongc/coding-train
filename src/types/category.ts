import type { Topic } from '@study-ui/components'

export interface ChallengeCategory extends Topic {
    icon: string
    challengeIds: string[]
}

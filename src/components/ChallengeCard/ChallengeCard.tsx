import { Link } from 'react-router-dom'
import type { CodingChallenge } from '../../types/challenge'

const difficultyColor = {
    beginner: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30',
    intermediate: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30',
    advanced: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30',
}

const difficultyLabel = { beginner: '입문', intermediate: '중급', advanced: '심화' }

interface ChallengeCardProps {
    challenge: CodingChallenge
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
    return (
        <Link
            to={`/challenge/${challenge.id}`}
            className="group flex items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-pink-400 dark:hover:border-pink-700 p-4 transition-all"
        >
            <span className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-mono text-sm font-bold text-gray-500 group-hover:text-pink-600 dark:group-hover:text-pink-400">
                {String(challenge.number).padStart(3, '0')}
            </span>
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                        {challenge.title}
                    </span>
                    <span className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded ${difficultyColor[challenge.difficulty]}`}>
                        {difficultyLabel[challenge.difficulty]}
                    </span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-1">{challenge.description}</p>
            </div>
        </Link>
    )
}

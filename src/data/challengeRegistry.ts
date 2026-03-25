import type { CodingChallenge } from '../types/challenge'

/**
 * 챌린지 메타데이터 레지스트리.
 * 각 챌린지의 스케치 파일은 public/sketches/{id}/ 에 위치하며 런타임에 fetch로 로드합니다.
 * 챌린지가 포팅될 때마다 이 레지스트리에 추가합니다.
 */
export const challengeRegistry: Map<string, CodingChallenge> = new Map()

export function registerChallenge(challenge: CodingChallenge) {
    challengeRegistry.set(challenge.id, challenge)
}

export function getChallenge(id: string): CodingChallenge | undefined {
    return challengeRegistry.get(id)
}

export function getAllChallenges(): CodingChallenge[] {
    return Array.from(challengeRegistry.values()).sort((a, b) => a.number - b.number)
}

/** 스케치 파일의 base URL */
export const SKETCHES_BASE = import.meta.env.BASE_URL + 'sketches'

/** 라이브러리 파일의 base URL */
export const LIBS_BASE = import.meta.env.BASE_URL + 'lib'

/**
 * 스케치 파일을 fetch하여 내용을 반환합니다.
 */
export async function fetchSketchFile(challengeId: string, fileName: string): Promise<string> {
    const url = `${SKETCHES_BASE}/${challengeId}/${fileName}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
    return res.text()
}

/**
 * 챌린지의 모든 스케치 파일을 fetch합니다.
 */
export async function fetchAllSketchFiles(
    challenge: CodingChallenge,
): Promise<Array<{ name: string; content: string }>> {
    return Promise.all(
        challenge.files.map(async (name) => ({
            name,
            content: await fetchSketchFile(challenge.id, name),
        })),
    )
}

export interface SketchFile {
    name: string
    content: string
}

export interface SketchVersion {
    label: string
    files: SketchFile[]
    libraries?: string[]
}

export interface Reference {
    title: string
    url: string
}

export interface CodingChallenge {
    id: string
    number: number
    title: string
    categoryId: string
    description: string
    files: string[]
    libraries: string[]
    references: Reference[]
    tags: string[]
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    versions?: SketchVersion[]
    canvasWidth?: number
    canvasHeight?: number
    /** 코드에 대한 학습용 설명 (마크다운이 아닌 plain text 배열, 각 항목이 단락) */
    explanation?: string[]
    /** p5 러너를 사용하지 않고 코드만 표시 (Chrome Extension 등) */
    codeOnly?: boolean
    /** 외부 서비스 의존 안내 문구 */
    notice?: string
    /** iframe body에 주입할 HTML (특수 DOM 요소가 필요한 챌린지용) */
    bodyHtml?: string
}

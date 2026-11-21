export interface ContentSection {
  heading: string
  /** Paragraphs rendered before any list */
  paragraphs?: string[]
  /** Paragraphs rendered after the lists */
  after?: string[]
  items?: string[]
  /** "Who does the work" style pairs */
  pairs?: { term: string; detail: string }[]
  /** Budget bands */
  bands?: { band: string; text: string }[]
  /** Steps in a real sequence */
  steps?: string[]
}

export interface ContentPage {
  slug: string
  title: string
  h1: string
  description: string
  audience: 'business' | 'agency'
  intro: string[]
  doodle?: string
  doodleColor?: string
  sections: ContentSection[]
  related: { label: string; to: string }[]
}

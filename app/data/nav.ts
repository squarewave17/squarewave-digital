export interface NavItem {
  label: string
  to: string
}

export const primaryNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'For agencies', to: '/agencies' },
  { label: 'For businesses', to: '/services' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
]

export const businessNav: NavItem[] = [
  { label: 'Web design and build', to: '/services/web-design' },
  { label: 'Applications', to: '/services/web-apps' },
  { label: 'E-commerce', to: '/services/ecommerce' },
  { label: 'SEO', to: '/services/seo' },
  { label: 'Marketing', to: '/services/marketing' },
  { label: 'Branding', to: '/services/branding' },
  { label: 'Care retainers', to: '/services/care-retainers' },
]

export const agencyNav: NavItem[] = [
  { label: 'Overview and rates', to: '/agencies' },
  { label: 'Overflow and backlog', to: '/agencies/overflow' },
  { label: 'Batch work', to: '/agencies/batch-work' },
  { label: 'Delivery audit', to: '/agencies/delivery-audit' },
  { label: 'Partner enquiry', to: '/agencies/enquire' },
]

export const studioNav: NavItem[] = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
  { label: 'Plan a project', to: '/project-planner' },
]

export const legalNav: NavItem[] = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Cookies', to: '/cookies' },
  { label: 'Terms', to: '/terms' },
]

/**
 * Facts about the studio. Every page reads from here, so a change lands
 * everywhere at once. Nothing in this file is a placeholder.
 */
export const contact = {
  phone: '07908 966398',
  phoneHref: 'tel:07908966398',
  email: 'info@squarewavedigital.co.uk',
  emailHref: 'mailto:info@squarewavedigital.co.uk',
  clientArea: 'https://client.squarewavedigital.co.uk/wp-login.php',

  name: 'Paul Ryder',
  legalName: 'Paul Ryder',

  /** Where the work happens, said plainly. The timezone is a feature, not a footnote. */
  base: 'the Philippines',
  baseLine: 'A UK business, run remotely from the Philippines.',
  /** The window kept free for calls and stand-ups, in UK time. */
  ukHours: '8am to 1pm UK time',
  /** The one-line version of the timezone benefit. */
  overnight: 'Brief me in your morning, review it in your next one.',

  responseTime: 'one working day',
  callLength: '30 minutes',

  /** Proof links. Empty one and the site hides the links that use it. */
  github: 'https://github.com/squarewave17',
  githubUser: 'squarewave17',
  /** This site's own repository. The home page and About point at it. */
  siteRepo: 'https://github.com/squarewave17/squarewave-digital',
}

/**
 * Agency pricing. Published on purpose: agencies filter on rate and stack
 * before they read a word of copy. The day rate is an introductory one and
 * is explained wherever it appears, with the standard rate beside it as
 * the anchor, so it reads as a founding offer rather than a cheap one.
 */
export const rates = {
  day: '£100',
  blockSize: 'ten',
  blockRate: '£90 a day',
  blockValidity: 'three months',
  audit: '£1,000',
  partnerSlots: 'three',
  slotsStatus: 'Taking on new partners now.',
  payment: '14 days from invoice',
  /** The standard rate the introductory one is measured against. */
  standardDay: '£300',
  introNote:
    'An introductory rate for my first three partner agencies, fixed for the first three months of each partnership and written into the agreement. The standard rate is £300 a day.',
  stacks: [
    'WordPress, including Oxygen and hand-built themes',
    'WooCommerce',
    'Vue and Nuxt',
    'React and Next',
    'Node and TypeScript',
    'PHP',
    'Plain HTML, CSS and JavaScript, done properly',
  ],
  stacksLine: 'WordPress and Oxygen, WooCommerce, Vue and Nuxt, React and Next, Node, TypeScript and PHP.',
  /** The risk reversal. One day, one ticket, judged on the code. */
  pilot: 'One ticket, one day, my normal rate. If you would not book a second day, you do not pay for the first.',
}

/**
 * Form endpoints (Formspree). One form serves both; the `form` field and the
 * subject line tell them apart in the inbox. Notifications go to the
 * address set in the Formspree dashboard (paul@), not to `contact.email`.
 * If a value is ever emptied, the site falls back to opening the visitor's
 * email app with the details filled in, so nothing is lost.
 */
export const forms = {
  planner: 'https://formspree.io/f/xkjrvrzl',
  agency: 'https://formspree.io/f/xkjrvrzl',
}

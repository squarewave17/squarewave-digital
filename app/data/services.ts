import type { ContentPage } from './types'

/**
 * The seven business service pages. Copy mirrors content/services/*.md.
 * Links use [label](/path); placeholders use [LIKE THIS].
 */
export const services: ContentPage[] = [
  {
    slug: 'web-design',
    title: 'Website design and build',
    h1: 'A website that does a job, not a pretty placeholder.',
    description:
      'Brochure and small-business websites with a clear page set, CMS, forms that work, and SEO foundations. I lead the build; a designer joins if the brief needs one.',
    audience: 'business',
    doodle: '/img/doodles/website.png',
    doodleColor: '/img/doodles/website-color.png',
    intro: [
      'Most people who come here need a site: something that explains what you do, can be found, and lets a person enquire or buy without calling your mobile and hoping.',
      'I lead website projects. I structure, build, and launch them. If the brief needs a stronger visual identity than I should be inventing on a Tuesday, the studio’s designer takes the identity, still under one proposal.',
    ],
    sections: [
      {
        heading: 'Who this is for',
        paragraphs: [
          'Owner-operators, small teams, and new businesses who need a first serious site or a replacement for something neglected. Not a 200-page intranet. Not a pitch-deck microsite with no content.',
        ],
      },
      {
        heading: 'What a typical site includes',
        items: [
          'A page set we agree in the proposal (for example: home, what you do, about, work or services, FAQ, contact, plus whatever the business actually needs)',
          'A CMS so you can change the obvious things without emailing me for a typo',
          'Forms that arrive in an inbox you check',
          'Mobile layout that is usable, not “it squashes”',
          'SEO foundations: sensible titles, headings, structure, speed, and the ability to be indexed',
          'Basic analytics, if you want them',
          'Enough training that you can log in without dread',
          'Launch on a real domain, with redirects if we are replacing an old site',
        ],
        after: ['That is the job. “Online presence” on the old site meant this, with more adjectives.'],
      },
      {
        heading: 'What is not automatic',
        items: [
          'A new logo and brand system, see [branding](/services/branding)',
          'A shop, see [e-commerce](/services/ecommerce)',
          'A custom tool, see [applications](/services/web-apps)',
          'Ongoing SEO content or link work, see [SEO](/services/seo)',
          'Ads and social campaigns, see [marketing](/services/marketing)',
          'Photography, illustration, or long-form copy I have not scoped',
          'A blog you will not write (we will not build an empty magazine)',
        ],
      },
      {
        heading: 'Who does the work',
        pairs: [
          { term: 'Brief, structure, build, CMS, launch', detail: 'Me' },
          { term: 'Visual design system, art direction', detail: 'Me on simpler jobs; the studio’s designer when the brand needs real craft' },
          { term: 'Extra build capacity', detail: 'A peer if the timeline or complexity says so' },
        ],
        after: ['You still talk to me.'],
      },
      {
        heading: 'Budgets for websites',
        bands: [
          { band: '£200 to £3,000', text: 'A tight, bounded site or a focused rebuild. Few pages, clear offer, limited custom behaviour.' },
          { band: '£3,000 to £10,000', text: 'A proper small-business site: more pages, more care in the design, room for a specialist if needed.' },
          { band: '£10,000 and up', text: 'Larger sites, or a site that is one part of a bigger piece of work (brand, shop, search, app).' },
        ],
        after: ['Same path as everything else: planner, call, proposal, build, launch, optional [care](/services/care-retainers). [Budget notes](/how-it-works#budgets).'],
      },
    ],
    related: [
      { label: 'All services', to: '/services' },
      { label: 'SEO', to: '/services/seo' },
      { label: 'E-commerce', to: '/services/ecommerce' },
      { label: 'Branding', to: '/services/branding' },
    ],
  },
  {
    slug: 'web-apps',
    title: 'Custom web applications',
    h1: 'A small application that removes a bottleneck.',
    description:
      'Custom web apps and workflow tools. I lead product decisions and build; extra engineering or UX joins when the problem needs it.',
    audience: 'business',
    doodle: '/img/doodles/d04.png',
    intro: [
      'Sometimes the website is not the problem. The problem is the spreadsheet, the inbox, the three systems that do not talk, or the process that only lives in someone’s head.',
      'I lead application work: what we are actually building, what we are not, and the build itself. I bring in extra engineering or UX when the problem is bigger than a sensible solo build.',
      'Before I was an engineer I spent fourteen years as a product manager, so the first thing I do on an application brief is work out which three features are the product and which eleven are a wish list. That is usually where the budget goes right or wrong.',
    ],
    sections: [
      {
        heading: 'Who this is for',
        paragraphs: [
          'Businesses that can point at a repeated pain, quoting, booking, client intake, internal tracking, a customer tool, and want software that fits that pain. Not people who want “an app” because it sounds like a start-up.',
        ],
      },
      {
        heading: 'What this usually looks like',
        items: [
          'A scoped set of users and jobs (who logs in, what they must do)',
          'A web app, not a novelty native app “for the store” unless we have a reason',
          'Integrations only where they earn their keep',
          'Admin so you are not stuck emailing me to change a label',
          'Launch that includes how you will actually run it on a Tuesday',
        ],
      },
      {
        heading: 'What I will push back on',
        items: [
          'Building fourteen features before anyone has used one',
          'Recreating a big SaaS product for a tenth of the budget',
          '“Uber for X” with no operator and no money',
          'Native iOS and Android as the first move when a web app would do',
        ],
      },
      {
        heading: 'Who does the work',
        pairs: [
          { term: 'Discovery, product decisions, core build', detail: 'Me' },
          { term: 'Extra engineering, specialist integrations', detail: 'A peer when the proposal says so' },
          { term: 'UX depth, interface craft', detail: 'The studio’s designer when the product is the product' },
        ],
        paragraphs: ['Accountability stays with me.'],
      },
      {
        heading: 'Budgets for applications',
        paragraphs: [
          'Honestly: most real custom tools do not live in the £200 to £3,000 band. That band can cover a spike, a prototype, or a very small automation, not a product.',
        ],
        bands: [
          { band: '£3,000 to £10,000', text: 'A modest, well-fenced tool.' },
          { band: '£10,000 and up', text: 'Anything with real user roles, integrations, or a life after version one.' },
        ],
      },
    ],
    related: [
      { label: 'All services', to: '/services' },
      { label: 'Websites', to: '/services/web-design' },
      { label: 'Care', to: '/services/care-retainers' },
      { label: 'How it works', to: '/how-it-works' },
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce websites',
    h1: 'A shop that takes money, including when you are not standing there.',
    description:
      'Online shops that take payment and stay maintainable. I lead setup and build; design, catalogue help or paid media join when needed.',
    audience: 'business',
    doodle: '/img/doodles/ecom.png',
    doodleColor: '/img/doodles/ecom-color.png',
    intro: [
      'If you sell things, a brochure site is only half the job. I lead store builds: catalogue structure, checkout that works, and a setup you can run without a weekly crisis.',
      'Design, catalogue help, or paid-media specialists join when we have agreed they should, after the shop exists, or as part of the same proposal if the budget is real.',
    ],
    sections: [
      {
        heading: 'Who this is for',
        paragraphs: [
          'Retailers and makers who want to sell without living on a marketplace, and service businesses that need to sell a simple product range or booked offering online. Not a marketplace for other people’s stock unless that is a properly funded application.',
        ],
      },
      {
        heading: 'What a typical shop includes',
        items: [
          'A platform that fits the job (we pick it in the proposal; we do not worship one logo)',
          'Product pages you can maintain',
          'Payments, shipping or delivery rules, and basic tax and VAT setup as relevant',
          'A cart and checkout people can finish',
          'Order notifications that go to a human',
          'SEO foundations on category and product templates',
          'Training so adding a product is not a support ticket',
        ],
      },
      {
        heading: 'What is not automatic',
        items: [
          'Photographing the entire catalogue',
          'Writing 400 unique product descriptions',
          'Marketplace integrations you mentioned once in passing',
          'Ongoing ads, see [marketing](/services/marketing)',
          'A full brand refresh, see [branding](/services/branding)',
          'Custom manufacturing or warehouse software, that is [an application](/services/web-apps)',
        ],
      },
      {
        heading: 'Who does the work',
        pairs: [
          { term: 'Platform choice, build, launch', detail: 'Me' },
          { term: 'Theme and visual design', detail: 'Me on simpler stores; the studio’s designer when the brand needs it' },
          { term: 'Catalogue wrangling', detail: 'You, me, or extra help if the catalogue is huge. We say which.' },
          { term: 'Paid traffic after launch', detail: 'A marketing specialist, scoped separately or as a phase' },
        ],
      },
      {
        heading: 'Budgets for shops',
        paragraphs: ['A real shop with payments, shipping, and more than a handful of products rarely sits at the bottom of the starter band.'],
        bands: [
          { band: '£200 to £3,000', text: 'Only if the shop is tiny and the platform work is bounded (or we are fixing a slice of an existing store).' },
          { band: '£3,000 to £10,000', text: 'A proper small shop, launched properly.' },
          { band: '£10,000 and up', text: 'Larger catalogues, heavier customisation, or shop plus brand, search or campaigns.' },
        ],
      },
    ],
    related: [
      { label: 'All services', to: '/services' },
      { label: 'Websites', to: '/services/web-design' },
      { label: 'Marketing', to: '/services/marketing' },
      { label: 'SEO', to: '/services/seo' },
    ],
  },
  {
    slug: 'seo',
    title: 'SEO',
    h1: 'Be findable for the things you actually sell.',
    description:
      'Search foundations on every site I build. Deeper SEO, technical work, content, ongoing programmes, scoped honestly with the studio’s SEO specialist.',
    audience: 'business',
    doodle: '/img/doodles/reputation.png',
    doodleColor: '/img/doodles/reputation-color.png',
    intro: [
      'SEO is not a package of mystery and monthly PDFs. On every website I build, I include foundations: the site can be indexed, titles and structure make sense, and we are not fighting the template.',
      'Deeper search work, research, content, technical fixes on a messy existing site, ongoing programmes, is a separate, honest scope. I lead the brief. The studio’s SEO specialist leads the programme when the work is a programme, not a setup.',
    ],
    sections: [
      {
        heading: 'What “foundations” means',
        paragraphs: ['Included with a site build.'],
        items: [
          'Pages that can be indexed',
          'Titles, headings, and URLs that describe the page',
          'A structure Google and humans can both follow',
          'Sensible speed and mobile usability',
          'Redirects when we replace an old site',
          'No “coming soon” as the destination for your important pages',
        ],
      },
      {
        heading: 'What deeper SEO looks like',
        items: [
          'Keyword and intent work tied to real services',
          'Technical cleanup on a site that has been through three agencies',
          'On-page work and internal linking with a point',
          'Content you will actually publish (or pay someone to publish)',
          'Measurement that is not vanity',
        ],
        after: ['I will not sell you a retainer that is twelve screenshots of an audit tool. Foundations are not a promise you will rank for “solicitor Manchester” next Tuesday.'],
      },
      {
        heading: 'Who does the work',
        pairs: [
          { term: 'Foundations on a Squarewave build', detail: 'Me' },
          { term: 'Technical, ongoing and content programmes', detail: 'Me on smaller jobs; the studio’s SEO specialist when the programme is the job' },
          { term: 'Copy at volume', detail: 'You, or a writer we bring in' },
        ],
      },
      {
        heading: 'Who this is not for',
        items: [
          'Anyone who wants guaranteed rankings. Nobody honest sells that.',
          'Sites with no useful content and no intention of creating any.',
          'Black-hat shortcuts. I will not do them, and I will not hire someone who will.',
        ],
      },
      {
        heading: 'Budgets',
        paragraphs: [
          'Foundations live inside the website budget. A real SEO programme is usually its own line, sometimes inside £3,000 to £10,000 for a defined piece of work, often £10,000 and up if it is ongoing plus content plus technical debt. [Budget notes](/how-it-works#budgets).',
        ],
      },
    ],
    related: [
      { label: 'All services', to: '/services' },
      { label: 'Websites', to: '/services/web-design' },
      { label: 'Marketing', to: '/services/marketing' },
    ],
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    h1: 'Marketing with a brief, not a content calendar for its own sake.',
    description:
      'Campaigns and channels with a brief and a point. I stay accountable; specialists run ads, social, email or content when that is the professional move.',
    audience: 'business',
    doodle: '/img/doodles/d03.png',
    intro: [
      'The old site promised marketing and social campaigns. The useful version is: decide who you are talking to, pick a channel that can reach them, and run the work without a twelve-person “always on” circus.',
      'I scope marketing and stay the client contact. Ads, social, email, and content production are specialist work. I bring those people in when we have something worth pointing at, usually a site or shop that is ready.',
    ],
    sections: [
      {
        heading: 'What this can include',
        items: [
          'A tight campaign around a launch or offer',
          'Paid search or paid social, run by someone who does that for a living',
          'Email that is not a newsletter you will abandon in week three',
          'Social, if there is a reason to be there other than “we should be on Instagram”',
          'Landing pages that match the ad, not a homepage and a prayer',
        ],
      },
      {
        heading: 'What I will not do',
        items: [
          'Post “engagement” sludge six times a week because a package says so',
          'Spend your ad budget to learn things we could have learned with a conversation',
          'Promise a viral moment',
          'Run channels you cannot support with stock, time, or a product that exists',
        ],
      },
      {
        heading: 'Who does the work',
        pairs: [
          { term: 'Fit, brief, accountability, site and landing support', detail: 'Me' },
          { term: 'Ads, social ops, email platforms, content production', detail: 'Specialists I trust, named as such in the proposal' },
        ],
        after: ['You still have one thread.'],
      },
      {
        heading: 'Sequence matters',
        paragraphs: [
          'If the site is a coming-soon page, marketing will only advertise the coming-soon page. We fix the thing people land on first, see [web design](/services/web-design) or [e-commerce](/services/ecommerce), then we spend money to send humans there.',
        ],
      },
      {
        heading: 'Budgets',
        paragraphs: [
          'Campaigns have media cost (what the platforms take) and work cost (what humans take). The planner bands are for the work, not your ad spend. Small tests can live in the middle band. Ongoing multi-channel work is usually £10,000 and up in effort, plus media, or a monthly retainer we write down.',
        ],
      },
    ],
    related: [
      { label: 'All services', to: '/services' },
      { label: 'SEO', to: '/services/seo' },
      { label: 'Branding', to: '/services/branding' },
      { label: 'Care retainers', to: '/services/care-retainers' },
    ],
  },
  {
    slug: 'branding',
    title: 'Branding and graphic design',
    h1: 'Look like one business, on purpose.',
    description:
      'Identity and design by the studio’s graphic designer, briefed and applied by Squarewave. One proposal, one contact, not a separate design studio surprise.',
    audience: 'business',
    doodle: '/img/doodles/d11.png',
    intro: [
      'Branding here means a usable identity: how you look and sound, applied to the site and the things people actually see. It is not a 90-page brand book nobody opens.',
      'I brief the work and apply it. The identity itself is the studio’s graphic designer, because that is craft, and I will not charge you design rates to fumble a logo in a browser.',
      'The old footer said “graphic design”. This is that page, with a grown-up name.',
    ],
    sections: [
      {
        heading: 'What this can include',
        items: [
          'Logo and a small, usable system (type, colour, a few rules)',
          'Application to the [website](/services/web-design) so the brand is not a PNG in a folder',
          'Basic items: social avatars, a simple letterhead, a one-page PDF if we scoped it',
          'Art direction for a shop or campaign when that is part of the same job',
        ],
      },
      {
        heading: 'What this is not',
        items: [
          'A six-month “finding your why” retreat',
          'Packaging for a supermarket pitch unless we explicitly take that on',
          'Illustration, photography, or film I have not priced',
          'A rebrand you cannot afford to roll out (we will talk about that before anyone draws)',
        ],
      },
      {
        heading: 'Who does the work',
        pairs: [
          { term: 'Brief, constraints, application on the site', detail: 'Me' },
          { term: 'Identity, visual system, illustration', detail: 'The studio’s graphic designer' },
          { term: 'Print production at volume', detail: 'Only if we said so' },
        ],
        after: ['You still talk to me. You do not get a surprise second studio.'],
      },
      {
        heading: 'Budgets',
        paragraphs: ['A real identity plus a site is rarely the bottom starter band. Logo-only favours and “can you just make it pop” are how everyone ends up unhappy.'],
        bands: [
          { band: '£200 to £3,000', text: 'Only for very small graphic jobs or applying an existing brand cleanly.' },
          { band: '£3,000 to £10,000', text: 'Identity plus a proper site is a common conversation in this band if we keep both tight.' },
          { band: '£10,000 and up', text: 'Fuller systems, more applications, or brand plus shop or campaign.' },
        ],
      },
    ],
    related: [
      { label: 'All services', to: '/services' },
      { label: 'Web design', to: '/services/web-design' },
      { label: 'Marketing', to: '/services/marketing' },
    ],
  },
  {
    slug: 'care-retainers',
    title: 'Website care and retainers',
    h1: 'After launch, you can keep the keys, or keep a person.',
    description: 'Optional updates, hosting and support after launch. No hostage hosting, no surprise subscription. I stay your contact.',
    audience: 'business',
    doodle: '/img/doodles/d07.png',
    intro: [
      'A project can end at launch. Many should. Some should not: plugins age, content changes, shops need minding, and “we will be fine” lasts until a PHP update on a bank holiday.',
      'Care is optional. I will not hide a retainer in the last line of a website proposal. If you already know you want ongoing help, say so on the planner.',
    ],
    sections: [
      {
        heading: 'What care can include',
        items: [
          'CMS and plugin updates, with a brain attached',
          'Backups you can actually restore',
          'Hosting, if we agree I am the one holding it',
          'Small content and layout changes inside an agreed monthly slice',
          'A human to email when something is on fire',
          'Uptime checks and the boring maintenance a live site needs',
        ],
        after: [
          'Campaign or SEO retainers are related but different, see [marketing](/services/marketing) and [SEO](/services/seo). We can put them in one relationship if that is simpler. We still write down what the hours are for.',
        ],
      },
      {
        heading: 'What care is not',
        items: [
          'Unlimited redesigns for a tenner a month',
          'A way to sneak a rebuild through as “small changes”',
          'Hostage hosting: if you want to leave, we plan an exit, not a trap',
          '24/7 operations theatre I cannot honestly staff as one person',
        ],
        after: ['If you need follow-the-sun operations, you need a different kind of supplier. I will say that.'],
      },
      {
        heading: 'Who does the work',
        paragraphs: ['Me, for most care. Hosting operations or a campaign retainer may include a specialist. You still contact me.'],
      },
      {
        heading: 'How we price it',
        paragraphs: [
          'Monthly, written down: what is included, what rolls over (if anything), what is billed extra, and notice period. The planner’s project bands are for project work, not a care menu. We set the retainer after we know what we launched.',
        ],
      },
      {
        heading: 'Existing client login',
        paragraphs: [
          'If we already work together this way, use the [client area](https://client.squarewavedigital.co.uk/wp-login.php) when that is how we set you up. If you are not a client yet, start with the [planner](/project-planner) or [contact](/contact).',
        ],
      },
    ],
    related: [
      { label: 'All services', to: '/services' },
      { label: 'How it works', to: '/how-it-works' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)

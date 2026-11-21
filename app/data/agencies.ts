import type { ContentPage } from './types'
import { contact, rates } from './nav'

/** The three agency offers. Copy mirrors content/agencies/*.md. */
export const agencyOffers: ContentPage[] = [
  {
    slug: 'overflow',
    title: 'Overflow and backlog development for agencies',
    h1: 'The work you sold in March, shipped.',
    description: `Senior developer time on your projects, in your tools, under your name if agreed. ${rates.day} a day or pre-paid blocks. For the work you sold and cannot ship.`,
    audience: 'agency',
    doodle: '/img/doodles/d10.png',
    intro: [
      'Every agency has a pile. Sold, scoped, part-invoiced, and sitting behind the next shiny project because the one senior who could do it is on three other things.',
      `I take the pile. ${rates.day} a day or a block of days, on your projects, in your tools, with one written update a week.`,
    ],
    sections: [
      {
        heading: 'What overflow work looks like',
        items: [
          'Finishing a build somebody started and left.',
          'A client site that has been “nearly done” for two months.',
          'Feature work on an existing application your team does not have bandwidth for.',
          'The integration nobody wants to touch: payment gateway, CRM, booking engine, the API with the PDF documentation.',
          'A bug backlog that has become a client-relationship problem.',
          'Covering a developer’s leave, notice period, or burnout without a recruitment fee.',
          'Technical scoping on a project you are about to quote, so the estimate is not a guess.',
        ],
      },
      {
        heading: 'How I work in your studio',
        items: [
          'Your tools. Your Git, your project tool, your Slack or Teams, your staging. I do not make you adopt mine.',
          'Your conventions. I read the existing code before I have opinions about it. Then I might have some, in writing, for you to ignore.',
          'One update a week, in writing, plus whatever your stand-up looks like if you want me in it.',
          `Your mornings, my afternoons. ${contact.baseLine} I keep ${contact.ukHours} free for calls and stand-ups, and the rest of my day runs ahead of yours. ${contact.overnight}`,
          'Decisions I can make, I make. Decisions that cost you money or change scope come to you first.',
          'White-label if agreed. I can be “one of the team” on client calls and in tools. Or a named contractor. In writing, either way.',
          'Hand-over as I go. Documentation and commit messages a stranger could follow. You should never be stuck because I am the only one who knows.',
        ],
      },
      {
        heading: 'What I will push back on',
        items: [
          '“Can you just” over chat with no ticket. It goes in the tool, or it did not happen. This protects your budget as much as my day.',
          'Being the only person who knows how something works.',
          'A fixed price on a codebase I have not seen. Blocks are time. [Batches](/agencies/batch-work) are fixed-price after scoping.',
          'Client calls where I have not been told whether I am your team or a contractor. We decide that before the first one.',
        ],
      },
      {
        heading: 'Stacks',
        paragraphs: ['Agencies filter on stack first, so here is mine.'],
        items: rates.stacks,
        after: ['If your stack is not on that list, ask. If I cannot do it well, I will say so rather than learn on your invoice.'],
      },
      {
        heading: 'Rates',
        pairs: [
          { term: 'Introductory rate', detail: rates.introNote },
          { term: 'Day rate', detail: `${rates.day} a day.` },
          { term: `Pre-paid block of ${rates.blockSize} days`, detail: `${rates.blockRate}, used within ${rates.blockValidity}.` },
          { term: 'Half days', detail: 'Fine for small tickets. I will not bill a day for an hour.' },
          { term: 'Pilot day', detail: rates.pilot },
          { term: 'Payment', detail: `${rates.payment}. Blocks are paid up front.` },
        ],
        after: ['Prices exclude VAT where applicable. [Terms for agency work](/terms#agencies).'],
      },
    ],
    related: [
      { label: 'For agencies', to: '/agencies' },
      { label: 'Batch work', to: '/agencies/batch-work' },
      { label: 'Delivery audit', to: '/agencies/delivery-audit' },
      { label: 'FAQ for agencies', to: '/faq#agencies' },
    ],
  },
  {
    slug: 'batch-work',
    title: 'Fixed-price batch work for agencies',
    h1: 'The job nobody wants, done to a spec and a price.',
    description:
      'Repetitive jobs done to a spec and a fixed price. Site migrations, bulk landing pages, accessibility passes, plugin and version updates across your client estate.',
    audience: 'agency',
    doodle: '/img/doodles/d02.png',
    intro: [
      'Some work is too boring for your seniors and too risky for your juniors. So it sits in the backlog, and every quarter it costs you a client or a weekend.',
      'I do it as a batch: one spec, one price, one hand-over.',
    ],
    sections: [
      {
        heading: 'What counts as batch work',
        items: [
          'Migrations. CMS to CMS, host to host, builder to builder, old theme to new, with redirects that actually redirect.',
          'Bulk builds. Twenty, forty, two hundred landing pages or product pages from a template and a spreadsheet.',
          'Estate maintenance. Plugin, framework and PHP or Node version updates across every client site you look after, with a test pass and a report per site.',
          'Accessibility passes. A WCAG fix list applied across a site or an estate, with before-and-after evidence.',
          'Performance passes. Core Web Vitals work across a set of sites.',
          'Content and data. Imports, clean-ups, redirects by the thousand, structured data across a catalogue.',
          'Anything else you can describe as “the same thing, N times”.',
        ],
      },
      {
        heading: 'How a batch runs',
        steps: [
          'Scoping call. You show me the job and a sample. I ask the questions that change the price: how many, how messy, what “done” looks like, who signs it off.',
          'Written spec and fixed price. Per job, or per unit if it is genuinely repeatable.',
          'A pilot. One or two units. You check them. We adjust the spec if reality disagrees with the spreadsheet.',
          'The batch. Progress in your tool, a running tally, no silence. Because my day runs ahead of yours, units briefed in your morning tend to be waiting for review by your next one.',
          'Hand-over. What was done, what was skipped and why, what you need to watch.',
        ],
      },
      {
        heading: 'What changes the price',
        items: [
          'The count, obviously.',
          'Consistency. Forty pages from one template is a batch. Forty pages that are each “a bit different” is forty small projects, and I will say so on the call rather than discover it on your invoice.',
          'Access. If I am waiting for logins from thirty clients, that time goes somewhere. We agree where up front.',
          'Sign-off. One person who can say yes is cheap. A client review on every unit is not.',
        ],
      },
      {
        heading: 'What I will push back on',
        items: [
          'A fixed price before I have seen a sample. The pilot exists for a reason.',
          'Scope that grows unit by unit. New things go in a new batch, with a new price.',
          'A batch on a stack I do not know well. See [stacks](/agencies/overflow#stacks).',
        ],
      },
      {
        heading: 'Pricing',
        paragraphs: [
          `Fixed price per batch, or a per-unit rate once the pilot proves the unit is stable. Quoted in writing after the scoping call. Larger batches are split into stages, each invoiced on delivery. Payment: ${rates.payment}.`,
          'Prices exclude VAT where applicable. [Terms for agency work](/terms#agencies).',
        ],
      },
    ],
    related: [
      { label: 'For agencies', to: '/agencies' },
      { label: 'Overflow and backlog', to: '/agencies/overflow' },
      { label: 'Delivery audit', to: '/agencies/delivery-audit' },
      { label: 'FAQ for agencies', to: '/faq#agencies' },
    ],
  },
  {
    slug: 'delivery-audit',
    title: 'Agency delivery audit',
    h1: 'Find out why projects slip before you hire another developer.',
    description: `Two weeks inside your delivery process. A written report on where time and margin leak between sale and launch, and a plan to fix it. ${rates.audit}, fixed. From a developer who ran product for fourteen years.`,
    audience: 'agency',
    doodle: '/img/doodles/d29.png',
    intro: [
      'When delivery keeps slipping, the instinct is to hire. Sometimes that is right. Often the problem is upstream of the code: scope agreed in a sales call and never written down, estimates nobody owns, a hand-off between design and build that loses a week every time, a review step that depends on one person’s inbox.',
      'I spent fourteen years as a product manager before ten as a software engineer. I have watched that pattern from both ends of the ticket. The audit is two weeks of me looking at how work actually moves through your studio, and a plain-English report on what to change.',
    ],
    sections: [
      {
        heading: 'What the audit covers',
        items: [
          'Sale to brief. How scope gets agreed, and what gets lost between the proposal and the first ticket.',
          'Estimating and pricing. Who estimates, how, and how often it turns out to be right.',
          'Hand-offs. Design to build, build to QA, QA to client, client to launch. Where the week goes.',
          'Tooling. What you use, what you enter twice, what lives in someone’s head.',
          'Capacity. How work is scheduled against people, and where it silently queues.',
          'Client communication. Where chasing happens, in both directions, and why.',
          'Technical drag. The codebases, hosting and habits that make every job slower than it needs to be.',
        ],
      },
      {
        heading: 'What you get',
        items: [
          'A written report. Findings ranked by what they cost you, each with the evidence.',
          'A fix plan. What to change first, what to change later, what to leave alone.',
          'A read-out with whoever runs delivery, and the founder if they want to be there.',
          'No slides. No “digital transformation”. A document you can act on the following Monday.',
        ],
      },
      {
        heading: 'How it runs',
        steps: [
          'A short call to agree access, confidentiality, and who I talk to.',
          'Week one: I look. Project tool, repos, a few conversations with the people doing the work, and two or three recent projects traced from sale to launch.',
          'Week two: I write. I check findings with you before the report, so nothing lands as a surprise and nobody gets ambushed.',
          'Read-out. Then you decide what to do, with or without me.',
        ],
      },
      {
        heading: 'Implementing the fixes',
        paragraphs: ['Separate scope, and sometimes not needed at all.'],
        items: [
          'Some fixes are process. You do them yourself, and the report says how.',
          'Some are tooling or automation. I can build those, quoted separately.',
          'Some are “clear the backlog so the process can breathe”. That is [overflow](/agencies/overflow) or [batch work](/agencies/batch-work).',
        ],
      },
      {
        heading: 'Who this is for',
        paragraphs: [
          'Agencies of roughly five to fifty people where the founder or delivery lead can feel the drag but cannot name it. Not for studios that want a report to prove a conclusion they have already reached, and not a substitute for an accountant if the problem is pricing.',
        ],
      },
      {
        heading: 'Fee',
        paragraphs: [`${rates.audit}, fixed. Half on booking, half on delivery of the report. Implementation is quoted separately. Prices exclude VAT where applicable.`],
      },
    ],
    related: [
      { label: 'For agencies', to: '/agencies' },
      { label: 'Overflow and backlog', to: '/agencies/overflow' },
      { label: 'Batch work', to: '/agencies/batch-work' },
      { label: 'About me', to: '/about' },
    ],
  },
]

export const agencyOfferBySlug = (slug: string) => agencyOffers.find((o) => o.slug === slug)

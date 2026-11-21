<script setup lang="ts">
import { contact, rates } from '~/data/nav'

useSeoMeta({
  title: 'Frequently asked questions',
  description: 'Straight answers on working with a three-person studio: quality, timelines, budgets, who you talk to, IP, retainers, and how agency work runs.',
})

const general = [
  {
    q: 'Are you an agency or a freelancer?',
    a: ['A small studio. Three freelancers: me, leading the work and doing the development; a graphic designer; and an SEO specialist. No bench, no new-business team, no careers page. I also work for agencies that need senior hands, see [For agencies](/agencies).'],
  },
  {
    q: 'If you outsource, who am I actually hiring?',
    a: ['You are hiring Squarewave Digital. I stay your contact and I stay accountable for the delivery. Specialists are briefed and reviewed by me. You are not collecting invoices from a group chat.'],
  },
  {
    q: 'How do you keep quality up if someone else does part of the work?',
    a: ['I do not hand you a stranger and wish you luck. The specialist is in the proposal, I write their brief, I review what they produce, and I fix it if it is not good enough. If I cannot get the right person, I will not take that part of the job.'],
  },
  { q: 'Who do I talk to day to day?', a: [`Me. ${contact.name}. Same person who read the enquiry.`] },
  {
    q: 'What do you actually do yourself?',
    a: ['I lead scoping, proposals, and delivery. I do the website and application work I am equipped to do. The studio’s designer and SEO specialist take identity and search. I bring in peers for campaign execution, extra engineering, or overflow when the brief needs it. Each [service page](/services) says what I typically lead and when a specialist joins.'],
  },
  {
    q: 'I only need a simple website. Is that too small?',
    a: ['No, if the scope is honest. The £200 to £3,000 band exists for bounded work. A “simple website” that also needs a brand, a shop, and a marketing engine is not simple. We will sort that on the call.'],
  },
  {
    q: 'Can you do SEO, marketing, and branding as well as the website?',
    a: ['Yes, as a studio offer: I scope it, I stay the lead, and the specialists do the specialist parts. You do not have to hire four companies. You also do not get four departments by magic on a starter budget.'],
  },
  {
    q: 'How long does a project take?',
    a: [
      'It depends on scope, your feedback speed, and whether we are waiting on content, photography, or third-party access. As a rough feel, not a promise: small, bounded site work takes weeks, not a year. A full small-business site or shop is typically a number of weeks to a few months. A custom application is scoped on the call; rush jobs cost more and still have physics.',
      'I put dates in the proposal.',
    ],
  },
  {
    q: 'What do your budget bands actually buy?',
    a: ['£200 to £3,000 is small and bounded. £3,000 to £10,000 is a proper site or shop, or a modest app, as one job. £10,000 and up is larger or multi-workstream work. Details: [How it works, budgets](/how-it-works#budgets).'],
  },
  {
    q: 'Do I own the work?',
    a: ['Yes, on the terms we agree. Typically: once invoices for that phase are paid, you own the deliverables we created for you. Third-party tools, fonts, stock, plugins, and platforms keep their own licences. I do not hold your site hostage for fun. I also do not hand over unpaid work. The [terms](/terms) are the legal version.'],
  },
  {
    q: 'Will you lock me into hosting or a retainer?',
    a: ['No. [Care](/services/care-retainers) is optional. If we host, we agree it. If you want to take the site elsewhere after launch, we plan for that instead of building a trap.'],
  },
  {
    q: 'Do you have a portfolio?',
    a: ['Short, and honest about it. This site is the most recent thing I shipped, and I am not going to invent case studies to keep it company. For agencies, the pilot day exists so you can judge the code rather than a testimonial. When I can show client work, with permission, named or anonymised, it will go on [About](/about).'],
  },
  { q: 'Do you work with start-ups?', a: ['Yes, if the brief is real and the budget matches the job. I do not build fourteen features on a hope and a logo.'] },
  {
    q: 'Where are you based?',
    a: [
      `Squarewave Digital is a UK business. I run it remotely from the Philippines, so most of my working day is ahead of yours. I keep ${contact.ukHours} free for calls and stand-ups, and everything is in writing anyway.`,
      'For agencies that usually means work briefed in your morning is waiting in staging by your next one. For businesses it means I am as available as any UK supplier you would never meet in person, which is most of them.',
    ],
  },
  {
    q: 'What happens after I submit the project planner?',
    a: [`I read it and reply within ${contact.responseTime}. Then a call, then a proposal, then you decide. Step by step: [after you submit](/how-it-works#after-you-submit).`],
  },
  {
    q: 'Is there a client login?',
    a: ['Yes, for existing client work: the [client area](https://client.squarewavedigital.co.uk/wp-login.php). It is not how new projects start. New work starts with the planner or [contact](/contact).'],
  },
  {
    q: 'Do you write blogs or run a referral scheme?',
    a: ['Not at launch. An empty blog and a referral policy nobody can read are how the old site looked busy and was not. If those become real, they will get real pages.'],
  },
]

const agencies = [
  {
    q: 'Do you work for agencies as well as direct clients?',
    a: ['Yes. Overflow and backlog development, fixed-price batch work, and a delivery audit for studios whose projects keep slipping. It has its own section, rates and enquiry form: [For agencies](/agencies).'],
  },
  {
    q: 'Will you poach our clients?',
    a: ['No. The partner agreement says I do not contact or pitch your clients, and if one of them emails me directly I forward it to you. I would rather have your repeat business than one of your clients once.'],
  },
  {
    q: 'Can you work under our name?',
    a: ['Yes, if we agree it in writing before the first client call. I can appear as part of your team in tools and on calls, or as a named contractor. Your choice. What I will not do is guess.'],
  },
  { q: 'Do you use our tools or yours?', a: ['Yours. Your Git, project tool, chat and staging. I send one written update a week unless you want more.'] },
  {
    q: 'Can we try you before committing to a block?',
    a: [`Yes, and I would rather you did. ${rates.pilot} You get to judge the code, the commit messages and the communication on something real.`],
  },
  {
    q: 'How does the timezone work day to day?',
    a: [
      `I am in the Philippines, most of a working day ahead of the UK. ${contact.ukHours} is kept free for calls, stand-ups and anything that needs a live conversation. After that I keep working while your afternoon runs, so a ticket briefed before your lunch is usually waiting for review when you open your laptop the next morning.`,
      'Agencies with a UK team tend to like it: review in the morning, brief in the afternoon, repeat.',
    ],
  },
  {
    q: 'What does it cost?',
    a: [`${rates.day} a day for overflow, or blocks of ${rates.blockSize} days at ${rates.blockRate}. That is an introductory rate for my first ${rates.partnerSlots} partner agencies, fixed for three months, against a standard ${rates.standardDay}. A fixed price per batch. ${rates.audit} for the audit. Numbers in full on [the agency page](/agencies#rates). Payment terms are ${rates.payment}; blocks are paid up front.`],
  },
  {
    q: 'Why not just hire a developer?',
    a: ['If you have a year of solid senior work and the margin to carry it, do. If you have a backlog, a spike, a batch job, or a gap to cover, a contractor who does not need onboarding is cheaper and leaves when the work does.'],
  },
  {
    q: 'How many agencies do you work with at once?',
    a: [`At most ${rates.partnerSlots}. Enough to keep the direct client work alive and your work moving. ${rates.slotsStatus}`],
  },
]
</script>

<template>
  <div>
    <PageIntro title="Questions people actually ask" doodle="/img/doodles/d06.png">
      <p>If yours is not here, <a :href="contact.emailHref">email me</a> or use the <NuxtLink to="/project-planner">project planner</NuxtLink>.</p>
      <template #actions>
        <a href="#agencies">Jump to questions from agencies</a>
      </template>
    </PageIntro>

    <section class="section">
      <div class="wrap faq">
        <h2 class="faq__h">Working with me</h2>
        <dl class="qa">
          <template v-for="item in general" :key="item.q">
            <dt><RichText :text="item.q" /></dt>
            <dd>
              <p v-for="(p, i) in item.a" :key="i"><RichText :text="p" /></p>
            </dd>
          </template>
        </dl>
      </div>
    </section>

    <section id="agencies" class="section">
      <div class="wrap faq">
        <h2 class="faq__h">Questions from agencies</h2>
        <dl class="qa">
          <template v-for="item in agencies" :key="item.q">
            <dt><RichText :text="item.q" /></dt>
            <dd>
              <p v-for="(p, i) in item.a" :key="i"><RichText :text="p" /></p>
            </dd>
          </template>
        </dl>
      </div>
    </section>

    <CtaBand title="Still need a human?" text="Plan a project, or send a partner enquiry if you run an agency." />
  </div>
</template>

<style scoped>
.faq {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2.4fr);
  gap: var(--sp-3) var(--sp-6);
  align-items: start;
}

.faq__h {
  font-size: var(--fs-4);
  font-weight: var(--w-bold);
  position: sticky;
  top: var(--sp-3);
}

.qa {
  margin: 0;
  display: grid;
  gap: 0;
  max-width: var(--measure);
}

.qa dt {
  font-weight: var(--w-bold);
  color: var(--ink);
  font-size: var(--fs-2);
  padding-top: var(--sp-3);
  border-top: 1px solid var(--rule);
}

.qa dd {
  margin: 0.5rem 0 var(--sp-3);
  display: grid;
  gap: var(--sp-2);
}

@media (max-width: 48em) {
  .faq {
    grid-template-columns: 1fr;
  }

  .faq__h {
    position: static;
  }
}
</style>

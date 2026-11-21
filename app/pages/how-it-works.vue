<script setup lang="ts">
import { contact } from '~/data/nav'

useSeoMeta({
  title: 'How a Squarewave project works',
  description:
    'From project planner to launch: one conversation, a written proposal, then build. Specialists join only when we agree they should.',
})
</script>

<template>
  <div>
    <PageIntro title="From a rough idea to something you can use." doodle="/img/doodles/d05.png">
      <p>
        You do not need a perfect brief. You need enough for me to see the shape of the work, decide if I can help, and
        write something we can both stand behind.
      </p>
      <p>This page is the trust page. There is no portfolio here yet. There is a process I will actually follow.</p>
      <template #actions>
        <NuxtLink to="/project-planner" class="btn">Plan a project</NuxtLink>
      </template>
    </PageIntro>

    <section class="section">
      <div class="wrap">
        <div class="panel panel--agency">
          <h2 class="panel__h">If you run an agency</h2>
          <p>
            This page describes how a business project runs. Agency work is shorter: enquiry, a call, a one-page partner
            agreement, then a first block, batch or audit. It has its own <NuxtLink to="/agencies#how-it-runs">process</NuxtLink>,
            its own <NuxtLink to="/agencies#rates">rates</NuxtLink> and its own <NuxtLink to="/agencies/enquire">enquiry form</NuxtLink>.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <ol class="steps steps--big">
          <li>
            <h3>You send a short brief</h3>
            <p>
              Use the <NuxtLink to="/project-planner">project planner</NuxtLink>. Name, how to reach you, what kind of
              thing you need, a few sentences, a rough launch window, and a budget band.
            </p>
            <p>I read it. There is no routing team and no “right agent”.</p>
            <p>If it is a poor fit, I will say so, preferably with a useful nudge, not a void.</p>
          </li>
          <li>
            <h3>I reply, then we talk</h3>
            <p>
              If it looks like a fit I reply within <strong>{{ contact.responseTime }}</strong>. We book a call of about
              <strong>{{ contact.callLength }}</strong>.
            </p>
            <p>On the call we talk about:</p>
            <ul>
              <li>what “done” looks like for you</li>
              <li>who will use it and what they need to do</li>
              <li>what already exists (site, brand, shop, tools)</li>
              <li>timing and constraints</li>
              <li>whether I would do this myself, with a specialist, or not at all</li>
            </ul>
            <p>
              You can <a :href="contact.emailHref">email</a> or <a :href="contact.phoneHref">call {{ contact.phone }}</a>
              instead of the planner if that is easier. The planner just makes the first pass cleaner.
            </p>
          </li>
          <li>
            <h3>A written proposal</h3>
            <p>No work starts on a vibe. The proposal covers:</p>
            <ul>
              <li>scope: what is in, what is out</li>
              <li>price and how it is billed</li>
              <li>timing</li>
              <li>who does what (me, and any named kind of specialist)</li>
              <li>what I need from you (copy, photos, access, decisions)</li>
              <li>what happens after launch, if anything</li>
            </ul>
            <p>
              If the budget band and the dream are in different postcodes, the proposal will say that. We can cut scope,
              phase the work, or stop there.
            </p>
          </li>
          <li>
            <h3>Build</h3>
            <p>
              I lead the build. If we agreed a designer, SEO specialist, extra developer, or campaign help, they work to
              a brief I write. I review their work before you are asked to live with it.
            </p>
            <p>You get progress you can respond to, not radio silence and a big reveal. You still have one contact: me.</p>
            <p class="links"><NuxtLink to="/about#network">About the network</NuxtLink></p>
          </li>
          <li>
            <h3>Launch</h3>
            <p>
              Launch means the thing works in the real world: pages live, forms going to the right place, payments
              taking money if that is the job, and you knowing how to change the bits you are meant to change.
            </p>
            <p>I will not call it launched because a staging site looked pretty on my machine.</p>
          </li>
          <li>
            <h3>Care, if you want it</h3>
            <p>
              After launch you can walk away with the keys, or we can agree a
              <NuxtLink to="/services/care-retainers">care retainer</NuxtLink>: updates, backups, hosting, small
              changes, someone to email when a plugin has a tantrum.
            </p>
            <p>Care is optional. It is not a surprise subscription hidden in the proposal.</p>
          </li>
        </ol>
      </div>
    </section>

    <section id="budgets" class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>Budgets</h2>
          <p>Same bands as the planner. They are conversation starters.</p>
        </div>
        <div class="grid-3">
          <div class="band">
            <h3>£200 to £3,000</h3>
            <p>
              Small and bounded. Examples: a tight brochure site, a handful of pages rebuilt properly, a single
              integration, starter SEO or setup. Not a custom application plus a brand system plus a campaign.
            </p>
          </div>
          <div class="band">
            <h3>£3,000 to £10,000</h3>
            <p>
              A proper small-business website or shop, or a modest application, with design and build in one piece of
              work. Enough room to bring a specialist in if the brief needs one.
            </p>
          </div>
          <div class="band">
            <h3>£10,000 and up</h3>
            <p>
              Larger applications, fuller e-commerce, or more than one workstream: site and brand, site and search, site
              and app. Still one lead. Still no padding for the sake of looking expensive.
            </p>
          </div>
        </div>
        <p class="links budgets__links">
          <NuxtLink to="/services/web-design">Website scope</NuxtLink>
          <NuxtLink to="/services/web-apps">Application scope</NuxtLink>
          <NuxtLink to="/services">All services</NuxtLink>
        </p>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid-2">
        <div class="stack">
          <h2>What I need from you</h2>
          <p>
            Projects stall when nobody can decide, and when the copy is “we will send that next week” for two months. I
            will say what I need, and when. If you cannot give it, we adjust the plan instead of pretending.
          </p>
        </div>
        <div id="after-you-submit" class="stack">
          <h2>What happens after you submit</h2>
          <ol class="tight">
            <li>You get a confirmation that the planner arrived.</li>
            <li>I read it (not an assistant, not a bot).</li>
            <li>You hear from me within {{ contact.responseTime }}: a yes-let’s-talk, a clarifying question, or a no-and-why.</li>
            <li>We book the call. Then a proposal. Then you decide.</li>
          </ol>
          <p>No coming-soon page. No “check back in a few days”.</p>
        </div>
      </div>
    </section>

    <CtaBand audience="business" title="Start with the planner" text="The form is short on purpose." />
  </div>
</template>

<style scoped>
.panel--agency {
  background: var(--slate);
  color: #e9e9ec;
  display: grid;
  gap: var(--sp-2);
}

.panel__h {
  font-size: var(--fs-3);
  font-weight: var(--w-bold);
  color: #fff;
}

.panel--agency a {
  color: #fff;
  text-decoration-color: #6f6f7a;
}

.panel--agency a:hover {
  text-decoration-color: var(--hl);
}

.steps--big {
  gap: var(--sp-6);
  max-width: 52rem;
}

.steps--big > li {
  display: grid;
  gap: var(--sp-2);
  padding-left: 4.25rem;
}

.steps--big > li::before {
  width: 3rem;
  height: 3rem;
  font-size: var(--fs-3);
}

.steps--big h3 {
  font-size: var(--fs-4);
  font-weight: var(--w-bold);
  margin: 0;
}

.band {
  display: grid;
  gap: 0.5rem;
  align-content: start;
  padding-left: var(--sp-3);
  border-left: 4px solid var(--hl);
}

.budgets__links {
  margin-top: var(--sp-5);
}

.stack {
  display: grid;
  gap: var(--sp-2);
  align-content: start;
}

.stack h2 {
  font-size: var(--fs-4);
  font-weight: var(--w-bold);
  margin-bottom: var(--sp-1);
}

.tight {
  display: grid;
  gap: 0.6rem;
}
</style>

<script setup lang="ts">
import { contact } from '~/data/nav'

useSeoMeta({
  title: 'About',
  description:
    'Squarewave Digital is Paul Ryder, a developer with ten years in software engineering and fourteen in product management, plus a graphic designer and an SEO specialist. A UK business, run remotely on UK hours.',
})
</script>

<template>
  <div>
    <PageIntro title="A small studio: one developer, two specialists, and twenty-four years of knowing where projects go wrong." doodle="/img/doodles/d01.png">
      <p>
        Squarewave Digital is three people. Me, {{ contact.name }}, leading the work and doing the
        development. A graphic designer. An SEO specialist. Each of us is a freelancer in our own field; together we are
        the studio. We do digital work for small and growing businesses: sites, shops, applications, and the search and
        marketing that sit around them. I also work with agencies that have more sold work than senior hands.
      </p>
      <p>
        We are a studio, not an agency: no account managers, no bench, no org chart. You get a clear offer and a grown-up
        process from three people who each do one thing well.
      </p>
      <p>
        {{ contact.baseLine }} I keep {{ contact.ukHours }} free for calls and stand-ups; the rest of my working day runs
        ahead of yours, which agencies tend to like once they have found a hand-off waiting in staging at 9am.
      </p>
      <template #actions>
        <NuxtLink to="/project-planner" class="btn">Plan a project</NuxtLink>
        <NuxtLink to="/agencies">Working with agencies</NuxtLink>
      </template>
    </PageIntro>

    <section class="section">
      <div class="wrap ticket">
        <div class="ticket__text">
          <h2>Both sides of the ticket</h2>
          <p>
            Before I wrote code for a living, I spent fourteen years as a product manager. That is fourteen years of
            roadmaps, estimates that were wrong, stakeholders who needed a number by Friday, and a slow education in
            where projects actually slip. It is rarely the code. It is the hand-off nobody owns, the scope agreed in a
            sales call and never written down, the review step that lives in one person’s inbox.
          </p>
          <p>
            Then ten years as a software engineer, which taught me the other half: what the people building the thing
            need from the people asking for it.
          </p>
        </div>
        <div class="ticket__sides">
          <div class="panel">
            <h3>For businesses</h3>
            <p>That means I scope properly, I say no to building fourteen features before anyone has used one, and I write proposals that survive contact with reality.</p>
          </div>
          <div class="panel panel--slate">
            <h3>For agencies</h3>
            <p>It means I can pick up a ticket without a babysitter, and I can tell you where your delivery process is leaking because I have run one.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid-2">
        <div class="stack">
          <h2>If we can help you grow, you will help us grow</h2>
          <p>That line stayed from the old site because it is still the deal.</p>
          <p>
            I take on work I can deliver well, either myself or with people I already trust. I price it so the project
            can be done properly. I do not invent a department, a junior, and a monthly “strategy hour” so the invoice
            looks like a bigger company.
          </p>
          <p>If the work will not help you, or I cannot stand behind it, I will say no.</p>
        </div>
        <div class="stack">
          <h2>What “professional without the padding” actually means</h2>
          <p>
            Standing teams are useful when you have standing work. Most small projects do not. They need a clear brief,
            someone who can design or build (or both), and a specialist on the days you need a specialist.
          </p>
          <ul class="tight">
            <li><strong>One contact.</strong> You talk to me. You do not get handed between a closer, an account manager, and a stranger in a project tool.</li>
            <li><strong>A written proposal.</strong> Scope, money, dates, and who is doing the work, before anyone starts.</li>
            <li><strong>Specialists on purpose.</strong> Design, deeper SEO, campaigns, extra engineering: I bring people in when the brief needs them, not to pad the team slide.</li>
            <li><strong>I own the quality.</strong> If a peer’s work is not good enough, I fix it. You are not the project manager of my contacts list.</li>
            <li><strong>No overhead you did not ask for.</strong> You are not paying for an office, a new-business team, or a careers page I have not built.</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="network" class="section">
      <div class="wrap network">
        <Doodle3D src="/img/doodles/d10.png" class="network__doodle" />
        <div class="stack">
          <h2>How I work with other professionals</h2>
          <p>
            Two of them are the studio: a graphic designer and an SEO specialist who are on most projects that need
            their skill. Beyond that I have people I can call: developers, marketing and campaign specialists,
            illustrators. All of them are fellow professionals, not a hidden payroll and not a race to the cheapest quote.
          </p>
          <p>When they join a project:</p>
          <ul class="tight">
            <li>you will know, in the proposal, that they are part of the work</li>
            <li>I brief them and review what comes back</li>
            <li>you still have one thread and one person accountable</li>
          </ul>
          <p>If I do not have the right person for the job, I will not pretend I do.</p>
          <p>
            Because I hire specialists, I know what a good subcontractor looks like. When an agency hires me, that is
            the standard I am held to, and it is the one I hold myself to.
          </p>
          <p class="links">
            <NuxtLink to="/how-it-works">How a project runs</NuxtLink>
            <NuxtLink to="/services">Services and who leads what</NuxtLink>
            <NuxtLink to="/agencies">For agencies</NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <section id="who-its-for" class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>Who it’s for</h2>
        </div>
        <div class="grid-3">
          <div class="stack">
            <h3>A good fit: businesses</h3>
            <ul class="tight">
              <li>Owner-operators and small teams who need a site, shop, or tool that works.</li>
              <li>New businesses that need a first serious presence.</li>
              <li>Established firms stuck on a neglected site, a DIY theme, or a supplier that went quiet.</li>
            </ul>
          </div>
          <div class="stack">
            <h3>A good fit: agencies</h3>
            <ul class="tight">
              <li>Studios of roughly five to fifty people with a backlog of sold work and not enough senior hands.</li>
              <li>Agencies with a batch job nobody wants: a migration, bulk page builds, an accessibility pass, estate-wide updates.</li>
              <li>Founders or delivery leads who can feel the drag in their process but cannot name it.</li>
            </ul>
          </div>
          <div class="stack">
            <h3>A poor fit</h3>
            <ul class="tight">
              <li>Formal enterprise procurement and long RFP cycles.</li>
              <li>Clients who want the performance of a large team more than the outcome.</li>
              <li>Unpaid spec, “exposure”, or vague equity.</li>
              <li>Agencies shopping for the cheapest developer, or for a hidden employee without a contract.</li>
              <li>Work I cannot cover myself or through someone I trust.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap stack pretend">
        <h2>What I will not pretend</h2>
        <p>
          There is no wall of logos here. I would rather say that than invent case studies, team photos, or results I
          cannot point to. This site is the most recent thing I shipped: a Nuxt 4 static build with hand-made 3D paper
          doodles and no theme underneath it, which tells you more about how I work than a testimonial I wrote myself.
          <a v-if="contact.siteRepo" :href="contact.siteRepo" rel="noopener">The code is public.</a>
        </p>
        <p>
          For agencies, that is also why the first day is a pilot: one ticket, one day, my normal rate, and if you would
          not book a second day you do not pay for the first. You judge the code, not the website. When there are client
          stories I can show, named or anonymised, they will go here.
        </p>
        <p class="links"><NuxtLink to="/faq">Frequently asked questions</NuxtLink></p>
      </div>
    </section>

    <CtaBand title="Talk to a person" text="I read every enquiry." />
  </div>
</template>

<style scoped>
.ticket {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: start;
}

.ticket__text {
  display: grid;
  gap: var(--sp-2);
}

.ticket__text h2 {
  margin-bottom: var(--sp-2);
}

.ticket__sides {
  display: grid;
  gap: var(--sp-3);
}

.ticket__sides .panel {
  display: grid;
  gap: 0.5rem;
}

.panel--slate {
  background: var(--slate);
  color: #e9e9ec;
}

.panel--slate h3 {
  color: #fff;
}

@media (max-width: 52em) {
  .ticket {
    grid-template-columns: 1fr;
  }
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

.network {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: center;
}

.network__doodle {
  max-width: 20rem;
  justify-self: center;
}

@media (max-width: 52em) {
  .network {
    grid-template-columns: 1fr;
  }

  .network__doodle {
    max-width: 13rem;
    justify-self: start;
  }
}

.pretend {
  max-width: var(--measure);
}
</style>

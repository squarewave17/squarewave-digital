<script setup lang="ts">
import { contact, rates } from '~/data/nav'

useSeoMeta({
  title: 'Overflow development, batch work and delivery fixes for agencies',
  description:
    'Senior UK developer for web and digital agencies, working remotely on UK hours. Overflow at a published day rate, fixed-price batch work, and a delivery audit from someone who ran product for fourteen years. Pilot day first. No poaching, no managing.',
})

const offers = [
  {
    to: '/agencies/overflow',
    title: 'Overflow and backlog',
    note: 'Start here',
    text: 'Senior development time on your projects, in your tools, under your name if you want it. Day rate or a pre-paid block. For the “we sold it in March” pile, the integration nobody wants to touch, and covering a developer’s leave without a recruitment fee.',
    src: '/img/doodles/d10.png',
  },
  {
    to: '/agencies/batch-work',
    title: 'Batch work',
    note: 'Or here',
    text: 'One repetitive job, done to a spec, to a fixed price. Migrations, forty landing pages, an accessibility pass, plugin and version updates across the client estate. The jobs you do not want a senior on and should not give a junior.',
    src: '/img/doodles/d02.png',
  },
  {
    to: '/agencies/delivery-audit',
    title: 'Delivery audit',
    note: 'Once I am inside',
    text: 'Two weeks inside your process. A written report on where time and margin leak between sale and launch, and a plan to stop it. From someone who has run product and can read the repo.',
    src: '/img/doodles/d29.png',
  },
]
</script>

<template>
  <div>
    <PageIntro title="A senior pair of hands for the work you have sold and cannot ship." audience="agency" doodle="/img/doodles/d18.png">
      <p>
        Most agencies I talk to do not have a sales problem. They have a shipping problem: a backlog of promised work, a
        batch job that keeps getting bumped, and one senior developer doing three people’s jobs.
      </p>
      <p>
        I take that work on. I have been a software engineer for ten years and a product manager for fourteen before
        that, so I can pick up a ticket without a babysitter and I can usually see why the ticket exists.
      </p>
      <p><strong>Your client stays your client.</strong> I say that on this page, in the agreement, and in practice.</p>
      <p>
        {{ contact.baseLine }} I keep {{ contact.ukHours }} free for calls and stand-ups; the rest of my day runs ahead of
        yours. {{ contact.overnight }}
      </p>
      <template #actions>
        <NuxtLink to="/agencies/enquire" class="btn">Partner enquiry</NuxtLink>
        <a href="#rates">Rates</a>
        <a href="#stacks">Stacks</a>
        <a href="#how-it-runs">How it runs</a>
      </template>
    </PageIntro>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>Three ways to use me</h2>
        </div>
        <ul class="offers">
          <li v-for="o in offers" :key="o.to" class="offer">
            <Doodle3D :src="o.src" class="offer__doodle" />
            <div class="offer__body">
              <p class="offer__note">{{ o.note }}</p>
              <h3><NuxtLink :to="o.to">{{ o.title }}</NuxtLink></h3>
              <p>{{ o.text }}</p>
            </div>
          </li>
        </ul>
        <p class="offers__after">
          Most agencies start with the first two. The audit tends to come up once I have been inside for a while and can
          see the pattern.
        </p>
      </div>
    </section>

    <section id="stacks" class="section">
      <div class="wrap stacks">
        <div class="stack">
          <h2>Stacks</h2>
          <p>
            Agencies filter on stack first, so here is mine. If yours is not on the list, ask. If I cannot do it well, I
            will say so rather than learn on your invoice.
          </p>
        </div>
        <ul class="stacks__list">
          <li v-for="s in rates.stacks" :key="s">{{ s }}</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid-2">
        <div class="stack">
          <h2>What you are buying</h2>
          <ul class="tight">
            <li><strong>A pilot day before anything else.</strong> {{ rates.pilot }}</li>
            <li><strong>Senior judgement.</strong> I do not need a spec for every button. I ask when it matters and get on with it when it does not.</li>
            <li><strong>No management overhead.</strong> One written update a week unless you want more. I use your project tool, your Git, your Slack or Teams, your staging.</li>
            <li><strong>Overnight turnaround.</strong> Most of my working day runs ahead of yours. Tickets briefed in your morning tend to be waiting for review by your next one.</li>
            <li><strong>No surprises.</strong> Blocks are pre-agreed. Batches are fixed-price after a pilot. If something is going to overrun, you hear before, not after.</li>
            <li><strong>No poaching.</strong> I do not contact your clients. I do not pitch them. If one of them emails me directly, I forward it to you.</li>
            <li><strong>White-label if you want it.</strong> I can appear as part of your team on calls and in tools, if we agree it in writing. Or I can be a named contractor. Your choice, not my secret.</li>
            <li><strong>Written down.</strong> Everything above is in a one-page partner agreement before any work starts.</li>
          </ul>
        </div>
        <div class="stack">
          <h2>What I am not</h2>
          <ul class="tight">
            <li><strong>The cheapest developer on a job board.</strong> If price is the only criterion, I am the wrong call and I will say so in the first email.</li>
            <li><strong>A hidden employee.</strong> I work as a contractor under a written agreement, for at most {{ rates.partnerSlots }} agencies at a time, with hours we have agreed.</li>
            <li><strong>A design studio, an SEO agency, or a paid media team.</strong> The studio’s designer and SEO specialist can join, the same way they do for direct clients, but the core offer here is development and delivery.</li>
            <li><strong>A yes-man.</strong> If a job is going to fail, or a process is the actual problem, I say so. Quietly, in writing, to you.</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="how-it-runs" class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>How agency work runs</h2>
        </div>
        <ol class="steps steps--wide">
          <li>You send the <NuxtLink to="/agencies/enquire">partner enquiry</NuxtLink>. I reply within {{ contact.responseTime }}.</li>
          <li>A call, about {{ contact.callLength }}. What is stuck, what stack and tools you use, what “good” looks like, and whether I am the right fit.</li>
          <li>A one-page partner agreement: confidentiality, no solicitation of your clients, white-label or named, IP transfers to you on payment, payment terms, and whether I can tell an anonymised version of the story later. Short, boring, signed before anything starts.</li>
          <li><strong>A pilot day.</strong> {{ rates.pilot }} You judge the code, the commit messages and the communication on something real.</li>
          <li>A first block, batch or audit. Small on purpose, so we both find out if it works before anyone commits to a quarter.</li>
          <li>Review. If your studio makes more money with me in it, we keep going. If not, we stop with no hard feelings and no notice period drama.</li>
        </ol>
      </div>
    </section>

    <section id="rates" class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>Rates</h2>
        </div>
        <dl class="kv kv--rates">
          <dt>Introductory rate</dt>
          <dd>{{ rates.introNote }}</dd>
          <dt>Pilot day</dt>
          <dd>{{ rates.day }}. {{ rates.pilot }}</dd>
          <dt>Overflow</dt>
          <dd>{{ rates.day }} a day, or blocks of {{ rates.blockSize }} days at {{ rates.blockRate }}, paid up front and used within {{ rates.blockValidity }}. Half days for small tickets.</dd>
          <dt>Batch work</dt>
          <dd>Fixed price per job, quoted in writing after a scoping call and a pilot unit. Per-unit pricing once the unit is proven stable.</dd>
          <dt>Delivery audit</dt>
          <dd>{{ rates.audit }}, fixed. Half on booking, half on delivery of the report.</dd>
          <dt>Payment</dt>
          <dd>{{ rates.payment }}. I am one person; sixty-day terms are a loan I cannot offer.</dd>
        </dl>
        <p class="rates__note">
          Why so low: I would rather buy my first three agency relationships with a rate than with a pitch deck. The
          pilot day means it costs you nothing to find out whether the work is worth the standard one.
        </p>
        <p class="rates__note">Prices exclude VAT where applicable. The <NuxtLink to="/terms#agencies">terms for agency work</NuxtLink> cover the rest.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid-2">
        <div class="stack">
          <h2>Why not just hire?</h2>
          <p>Sometimes you should. If you have twelve months of solid senior work and the margin to carry it, hire.</p>
          <p>
            If you have a backlog, seasonal spikes, a batch job, a developer on leave, or a process you cannot see from
            inside, a contractor who does not need onboarding is cheaper and faster, and leaves when the work does.
          </p>
        </div>
        <div class="stack">
          <h2>Slots</h2>
          <p>
            I take {{ rates.partnerSlots }} agency partners at a time, so that direct client work does not starve and so
            your work does not either.
          </p>
          <p class="slots">{{ rates.slotsStatus }}</p>
          <p>If the slots are full, send the enquiry anyway and I will tell you when one opens.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="links">
          <span class="muted">Related</span>
          <NuxtLink to="/agencies/overflow">Overflow</NuxtLink>
          <NuxtLink to="/agencies/batch-work">Batch work</NuxtLink>
          <NuxtLink to="/agencies/delivery-audit">Delivery audit</NuxtLink>
          <NuxtLink to="/about">About me</NuxtLink>
          <NuxtLink to="/faq#agencies">FAQ for agencies</NuxtLink>
          <NuxtLink to="/terms#agencies">Terms</NuxtLink>
        </p>
      </div>
    </section>

    <CtaBand audience="agency" title="Next" :text="`Tell me what is stuck. I read it myself and reply within ${contact.responseTime}.`" />
  </div>
</template>

<style scoped>
.offers {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--sp-5);
}

.offer {
  display: grid;
  grid-template-columns: 14rem minmax(0, 1fr);
  gap: var(--sp-4) var(--sp-5);
  align-items: center;
  margin: 0;
}

.offer__doodle {
  max-width: 14rem;
}

.offer__body {
  display: grid;
  gap: 0.5rem;
  max-width: var(--measure);
}

.offer__note {
  font-weight: var(--w-bold);
  color: var(--ink);
  background: var(--hl);
  display: inline-block;
  justify-self: start;
  padding: 0.1em 0.5em;
  border-radius: 4px;
  font-size: var(--fs-0);
}

.offer h3 a {
  text-decoration-color: transparent;
}

.offer h3 a:hover {
  text-decoration-color: var(--hl-2);
}

.offers__after {
  margin-top: var(--sp-4);
  max-width: var(--measure);
}

@media (max-width: 40em) {
  .offer {
    grid-template-columns: 7rem minmax(0, 1fr);
    align-items: start;
  }

  .offer__doodle {
    max-width: 7rem;
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

.stacks {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
  gap: var(--sp-4) var(--sp-6);
  align-items: start;
}

.stacks__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 var(--sp-4);
}

.stacks__list li {
  margin: 0;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--rule);
  font-weight: var(--w-semi);
  color: var(--ink);
}

@media (max-width: 52em) {
  .stacks,
  .stacks__list {
    grid-template-columns: 1fr;
  }
}

.steps--wide {
  max-width: 50rem;
}

.kv--rates {
  max-width: 56rem;
}

.rates__note {
  margin-top: var(--sp-3);
  color: var(--fg-muted);
}

.slots {
  font-weight: var(--w-bold);
  color: var(--ink);
}

.muted {
  color: var(--fg-muted);
}
</style>

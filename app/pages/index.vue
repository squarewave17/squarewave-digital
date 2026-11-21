<script setup lang="ts">
import { contact, rates } from '~/data/nav'

useSeoMeta({
  title: 'Senior development for UK agencies with more sold work than hands',
  description:
    'Squarewave Digital is Paul Ryder: ten years as a software engineer, fourteen as a product manager before that. Overflow, batch work and delivery audits for UK web and digital agencies, at a published day rate, in your tools, under your name if you want it. Websites, applications and shops for businesses too.',
})

// The four things an agency wants to know before reading a word of copy.
const facts = [
  { k: `${rates.day} a day`, v: `Published. Blocks of ${rates.blockSize} days at ${rates.blockRate}. You know what a day costs before we talk.` },
  { k: 'A pilot day first', v: 'One ticket, one day. If you would not book a second day, you do not pay for the first.' },
  { k: 'Overnight turnaround', v: `${contact.ukHours} kept free for calls and stand-ups. The rest of my day runs ahead of yours.` },
  { k: 'No poaching, in writing', v: 'A one-page partner agreement before any work starts. Your client stays your client.' },
]

const agencyOutcomes = [
  {
    title: 'Ship the backlog',
    text: 'The work you sold in March gets delivered. Senior development time on your projects, in your tools, under your name if you want it. Day rate or a pre-paid block.',
    src: '/img/doodles/d10.png',
  },
  {
    title: 'Clear the batch',
    text: 'Migrations, forty landing pages, an accessibility pass, plugin and version updates across every client site. One spec, one fixed price, one hand-over.',
    src: '/img/doodles/d02.png',
  },
  {
    title: 'Fix the leak',
    text: 'If projects keep slipping, the problem is usually upstream of the code. Two weeks inside your process and a plain-English report on where time and margin go, from someone who has run product and can read the repo.',
    src: '/img/doodles/d29.png',
  },
]

const businessOutcomes = [
  {
    title: 'Be found',
    text: 'If people cannot find you, you are asking them to take your word for it. A clear site, sensible structure, and search foundations mean you can be found and understood, not just “online”.',
    src: '/img/doodles/website.png',
    color: '/img/doodles/website-color.png',
  },
  {
    title: 'Sell or get enquiries',
    text: 'The point of most sites is not to look busy. It is so the right person can buy, book, or get in touch. Forms, shops, and calls to action that match how you actually work.',
    src: '/img/doodles/ecom.png',
    color: '/img/doodles/ecom-color.png',
  },
  {
    title: 'Run the business better',
    text: 'Sometimes the job is not a brochure. It is a small application, a cleaner workflow, or a site that stops you copy-pasting the same job into three tools.',
    src: '/img/doodles/customers.png',
  },
]

const agencyServices = [
  { to: '/agencies/overflow', label: 'Overflow and backlog', text: 'senior hands on the work you have sold and cannot ship.' },
  { to: '/agencies/batch-work', label: 'Batch work', text: 'the repetitive job, to a spec and a fixed price.' },
  { to: '/agencies/delivery-audit', label: 'Delivery audit', text: 'find out why projects slip before you hire another developer.' },
]

const businessServices = [
  { to: '/services/web-design', label: 'Websites', text: 'brochure and small-business sites people can actually use.' },
  { to: '/services/web-apps', label: 'Applications', text: 'tools that fix a workflow, not another dashboard for its own sake.' },
  { to: '/services/ecommerce', label: 'E-commerce', text: 'shops that take payment and do not fight you on a Monday morning.' },
  { to: '/services/seo', label: 'SEO', text: 'foundations on every build; deeper search work when it is worth doing.' },
  { to: '/services/marketing', label: 'Marketing', text: 'campaigns and channels with a specialist when the brief needs one.' },
  { to: '/services/branding', label: 'Branding', text: 'identity and design through a designer I trust, still under one proposal.' },
  { to: '/services/care-retainers', label: 'Care', text: 'updates, hosting and support after launch, if you want them.' },
]

const tools = [
  { src: '/img/tools/vue.png', label: 'Vue' },
  { src: '/img/tools/react.jpg', label: 'React' },
  { src: '/img/tools/wordpress.png', label: 'WordPress' },
  { src: '/img/tools/oxygen.png', label: 'Oxygen' },
]
</script>

<template>
  <div>
    <!-- Hero: text on the left, the lightbulb figure beside it. Stacks on phones. -->
    <section class="hero">
      <div class="wrap hero__grid">
        <div class="hero__body">
          <p class="hero__kicker">For UK web and digital agencies</p>
          <h1 class="hero__title">
            <span class="hero__line">Senior development for agencies</span>
            <span class="hero__line"><span class="hero__mark">that have sold more than they can ship.</span></span>
          </h1>
          <p class="hero__lead">
            I am {{ contact.name }}: ten years as a software engineer, fourteen as a product manager before that. I take
            overflow, batch work and delivery problems off your plate, in your tools, under your name if you want it,
            at a published day rate, with a signed promise not to touch your clients.
          </p>
          <div class="btn-row hero__actions">
            <NuxtLink to="/agencies/enquire" class="btn">Partner enquiry</NuxtLink>
            <NuxtLink to="/agencies" class="btn btn--ghost">Rates and how it runs</NuxtLink>
          </div>
          <p class="hero__sub">
            Run a business rather than an agency? <NuxtLink to="/services">I build websites, shops and tools too.</NuxtLink>
          </p>
        </div>
        <div class="hero__art">
          <HeroLightbulb />
        </div>
      </div>
    </section>

    <!-- The four facts an agency checks first -->
    <section class="facts" aria-label="Key facts">
      <div class="wrap">
        <ul class="facts__list">
          <li v-for="f in facts" :key="f.k" class="fact">
            <p class="fact__k">{{ f.k }}</p>
            <p class="fact__v">{{ f.v }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Who I work with -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>Who I work with</h2>
        </div>
        <div class="grid-2 doors">
          <div class="panel door door--agency">
            <h3>I run an agency</h3>
            <p>
              You have more sold work than senior hands, a batch job nobody wants, or a delivery process that keeps
              slipping and you cannot see why from inside. You want a safe pair of hands that does not need managing
              and will not poach your clients.
            </p>
            <div class="btn-row door__actions">
              <NuxtLink to="/agencies/enquire" class="btn">Partner enquiry</NuxtLink>
              <NuxtLink to="/agencies">What I do for agencies</NuxtLink>
            </div>
          </div>
          <div class="panel door">
            <h3>I run a business</h3>
            <p>
              You need a site, a shop, or a tool that removes a bottleneck. You want one person to talk to, a written
              proposal, and something you can actually use.
            </p>
            <div class="btn-row door__actions">
              <NuxtLink to="/project-planner" class="btn">Plan a project</NuxtLink>
              <NuxtLink to="/services">What I do for businesses</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- For agencies: outcomes -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>For agencies, what you get out of it</h2>
        </div>
        <ul class="outcomes grid-3">
          <li v-for="o in agencyOutcomes" :key="o.title" class="outcome">
            <Doodle3D :src="o.src" class="outcome__doodle" />
            <h3>{{ o.title }}</h3>
            <p>{{ o.text }}</p>
          </li>
        </ul>
        <p class="links"><NuxtLink to="/agencies">How agency work runs, and the rates</NuxtLink></p>
      </div>
    </section>

    <!-- For agencies: start small -->
    <section class="section">
      <div class="wrap start">
        <div class="start__text">
          <h2>Start small, on purpose</h2>
          <p>
            Agencies get burned by contractors who talk well and ship badly. So the first step is a day, not a quarter.
          </p>
          <ol class="steps steps--compact">
            <li>You send the <NuxtLink to="/agencies/enquire">partner enquiry</NuxtLink>. I reply within {{ contact.responseTime }}.</li>
            <li>A {{ contact.callLength }} call: what is stuck, your stack, your tools, what “good” looks like.</li>
            <li>A one-page partner agreement: confidentiality, no solicitation of your clients, white-label or named, IP to you on payment.</li>
            <li><strong>A pilot day.</strong> {{ rates.pilot }}</li>
            <li>Then a block, a batch or an audit. We review monthly. If your studio is not making more money with me in it, we stop.</li>
          </ol>
          <p class="start__where">
            {{ contact.baseLine }} {{ contact.ukHours }} is kept free for calls and stand-ups, and the rest of my day runs
            ahead of yours. {{ contact.overnight }}
          </p>
        </div>
        <Doodle3D src="/img/doodles/d18.png" class="start__doodle" />
      </div>
    </section>

    <!-- For businesses: outcomes -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>For businesses, what you get out of it</h2>
        </div>
        <ul class="outcomes grid-3">
          <li v-for="o in businessOutcomes" :key="o.title" class="outcome">
            <Doodle3D :src="o.src" :color="o.color" class="outcome__doodle" />
            <h3>{{ o.title }}</h3>
            <p>{{ o.text }}</p>
          </li>
        </ul>
        <p class="links"><NuxtLink to="/services">Browse services</NuxtLink></p>
      </div>
    </section>

    <!-- How the studio works -->
    <section class="section">
      <div class="wrap studio">
        <div class="studio__text">
          <h2>How the studio works</h2>
          <p>
            I lead every brief. Design and SEO come from the two specialists who make up the rest of the studio. When a
            job needs more than the three of us, extra development, a campaign pair of hands, illustration, I bring in
            people I already trust. You do not interview anyone, brief them separately, or chase three inboxes.
          </p>
          <p>
            Because I hire specialists, I know what a good subcontractor looks like: turns up, reads the existing code
            before having opinions, writes things down, does not need chasing. That is the standard I hold myself to
            when the client is an agency.
          </p>
          <p>
            This site is the most recent thing I shipped: a Nuxt 4 static build, hand-made 3D paper doodles, no theme.
            <a v-if="contact.siteRepo" :href="contact.siteRepo" rel="noopener">The code is on GitHub.</a>
          </p>
          <p class="studio__line">You deal with me. I deal with the work.</p>
          <p class="links">
            <NuxtLink to="/about">About me</NuxtLink>
            <NuxtLink to="/how-it-works">How it works</NuxtLink>
            <NuxtLink to="/agencies">For agencies</NuxtLink>
          </p>
        </div>
        <Doodle3D src="/img/doodles/d01.png" class="studio__doodle" />
      </div>
    </section>

    <!-- What I can take on -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>What I can take on</h2>
        </div>
        <div class="grid-2">
          <div>
            <h3 class="list-h">For agencies</h3>
            <ul class="offer-list">
              <li v-for="s in agencyServices" :key="s.to">
                <NuxtLink :to="s.to">{{ s.label }}</NuxtLink> <span>{{ s.text }}</span>
              </li>
            </ul>
            <p class="offer-stacks">Stacks: {{ rates.stacksLine }}</p>
          </div>
          <div>
            <h3 class="list-h">For businesses</h3>
            <ul class="offer-list">
              <li v-for="s in businessServices" :key="s.to">
                <NuxtLink :to="s.to">{{ s.label }}</NuxtLink> <span>{{ s.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Costs -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>What it usually costs</h2>
        </div>
        <div class="grid-2 costs">
          <div class="stack">
            <h3 class="list-h">Agencies</h3>
            <dl class="kv">
              <dt>Overflow</dt>
              <dd>{{ rates.day }} a day, or blocks of {{ rates.blockSize }} days at {{ rates.blockRate }}. Half days for small tickets.</dd>
              <dt>Batch work</dt>
              <dd>Fixed price per job, quoted in writing after a scoping call and a pilot unit.</dd>
              <dt>Delivery audit</dt>
              <dd>{{ rates.audit }}, fixed. Half on booking, half on the report.</dd>
              <dt>Payment</dt>
              <dd>{{ rates.payment }}. Blocks are paid up front.</dd>
            </dl>
            <p class="links"><NuxtLink to="/agencies#rates">Rates in full</NuxtLink></p>
          </div>
          <div class="stack">
            <h3 class="list-h">Businesses</h3>
            <p>Starting points, not a menu.</p>
            <dl class="kv">
              <dt>£200 to £3,000</dt>
              <dd>Small, well-bounded work. A tight site, a focused set of pages, or a starter package.</dd>
              <dt>£3,000 to £10,000</dt>
              <dd>A proper small-business website or shop, or a modest application, designed and built as one job.</dd>
              <dt>£10,000 and up</dt>
              <dd>Larger apps, fuller shops, or more than one workstream.</dd>
            </dl>
            <p class="costs__note">If the budget and the brief do not fit, I will say so. Better that than a cheap yes.</p>
            <p class="links"><NuxtLink to="/how-it-works#budgets">Budget notes</NuxtLink></p>
          </div>
        </div>
      </div>
    </section>

    <!-- How a business project runs -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>How a business project runs</h2>
        </div>
        <div class="grid-2 runs">
          <div>
            <ol class="steps steps--compact">
              <li>You send a short brief through the <NuxtLink to="/project-planner">project planner</NuxtLink>.</li>
              <li>I reply within {{ contact.responseTime }} if it looks like a fit, or I tell you if it does not.</li>
              <li>We talk for about {{ contact.callLength }}. I write a proposal: scope, price, timing, who does what.</li>
              <li>We build. Specialists join only if we agreed they should.</li>
              <li>We launch. Care afterwards is optional, not a surprise subscription.</li>
            </ol>
            <p class="links runs__link"><NuxtLink to="/how-it-works">Full process</NuxtLink></p>
          </div>
          <div class="runs__agency">
            <h3 class="list-h">If you run an agency</h3>
            <p>
              The path is shorter: enquiry, a call, a one-page partner agreement, a pilot day, then a block, batch or
              audit. Small on purpose, so we both find out if it works.
            </p>
            <p class="links"><NuxtLink to="/agencies#how-it-runs">How agency work runs</NuxtLink></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools: true, quiet, useful to agencies filtering on stack -->
    <section class="section section--tight tools">
      <div class="wrap">
        <p class="tools__label">Tools I work in</p>
        <ul class="tools__list">
          <li v-for="t in tools" :key="t.label">
            <img :src="t.src" :alt="t.label" loading="lazy" />
          </li>
        </ul>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
/* Hero ------------------------------------------------------------ */
.hero {
  position: relative;
  padding-block: var(--sp-5) var(--sp-6);
  overflow: hidden;
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: center;
}

.hero__body {
  display: grid;
  gap: var(--sp-3);
  justify-items: start;
}

.hero__kicker {
  font-weight: var(--w-bold);
  color: var(--ink);
  background: var(--hl);
  padding: 0.1em 0.5em;
  border-radius: 4px;
  font-size: var(--fs-0);
  opacity: 0;
  animation: hero-line 0.9s var(--ease-out) forwards;
}

/* Smaller than the page-wide h1 scale: two lines of headline beside the
   figure, with the buttons comfortably above the fold on a laptop. */
.hero__title {
  max-width: 22ch;
  font-size: clamp(2.25rem, 1.4rem + 2.6vw, 3.5rem);
}

.hero__line {
  display: block;
  opacity: 0;
  transform: translateY(0.35em);
  animation: hero-line 0.9s var(--ease-out) forwards;
}

.hero__line + .hero__line {
  animation-delay: 160ms;
}

/* A marker stroke drawn under the words themselves (follows line wraps). */
.hero__mark {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 24' preserveAspectRatio='none'%3E%3Cpath d='M6 15 C 110 5, 200 21, 310 11 S 500 17, 594 9' fill='none' stroke='%23e6f23b' stroke-width='11' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 0% 0.22em;
  padding-bottom: 0.04em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  animation: hero-stroke 0.9s 0.8s var(--ease-out) forwards;
}

.hero__lead {
  max-width: 54ch;
  font-size: var(--fs-2);
  line-height: 1.55;
  opacity: 0;
  animation: hero-line 0.9s 0.35s var(--ease-out) forwards;
}

.hero__actions {
  margin-top: var(--sp-1);
  opacity: 0;
  animation: hero-line 0.9s 0.5s var(--ease-out) forwards;
}

.hero__sub {
  color: var(--fg-muted);
  opacity: 0;
  animation: hero-line 0.9s 0.6s var(--ease-out) forwards;
}

/* Faded via filters, not opacity: opacity breaks the multiply blend that
   hides the clip's white background. Transform, filter and blend all sit
   on this one element so the blend sees the paper beneath it. */
.hero__art {
  justify-self: center;
  width: min(100%, 26rem);
  filter: invert(1) brightness(0.3) invert(1);
  mix-blend-mode: multiply;
  animation: hero-art 1.4s var(--ease-out) both;
}

@keyframes hero-line {
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes hero-art {
  from {
    transform: translateY(1.25rem);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes hero-stroke {
  to {
    background-size: 100% 0.22em;
  }
}

@media (max-width: 52em) {
  .hero {
    padding-block: var(--sp-4) var(--sp-5);
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__art {
    width: min(100%, 15rem);
    justify-self: center;
  }
}

/* Facts ----------------------------------------------------------- */
.facts__list {
  list-style: none;
  margin: 0;
  padding: var(--sp-4) 0;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--sp-4);
}

.fact {
  margin: 0;
  display: grid;
  gap: 0.35rem;
  align-content: start;
}

.fact__k {
  font-weight: var(--w-bold);
  color: var(--ink);
  font-size: var(--fs-2);
  line-height: var(--lh-snug);
}

.fact__v {
  font-size: var(--fs-0);
  line-height: 1.5;
}

@media (max-width: 56em) {
  .facts__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 36em) {
  .facts__list {
    grid-template-columns: 1fr;
    gap: var(--sp-3);
  }
}

/* Doors ----------------------------------------------------------- */
.door {
  display: grid;
  gap: var(--sp-2);
  align-content: start;
}

.door__actions {
  margin-top: var(--sp-2);
}

.door--agency {
  background: var(--slate);
  color: #e9e9ec;
}

.door--agency h3 {
  color: #fff;
}

.door--agency a:not(.btn) {
  color: #fff;
  text-decoration-color: #6f6f7a;
}

.door--agency a:not(.btn):hover {
  text-decoration-color: var(--hl);
}

.door--agency .btn {
  background: var(--paper);
  border-color: var(--paper);
  color: var(--ink);
}

/* Outcomes -------------------------------------------------------- */
.outcomes {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--sp-4);
}

.outcome {
  display: grid;
  gap: var(--sp-2);
  align-content: start;
  margin: 0;
}

.outcome__doodle {
  max-width: 17rem;
  margin-bottom: var(--sp-2);
}

@media (max-width: 56em) {
  .outcome {
    grid-template-columns: 8rem minmax(0, 1fr);
    column-gap: var(--sp-3);
  }

  .outcome__doodle {
    grid-row: 1 / 3;
    max-width: 8rem;
    margin: 0;
  }
}

/* Start small ----------------------------------------------------- */
.start {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: center;
}

.start__text {
  display: grid;
  gap: var(--sp-3);
}

.start__text h2 {
  margin-bottom: 0;
}

.start__text > p {
  max-width: var(--measure);
}

.start__where {
  padding-left: var(--sp-3);
  border-left: 4px solid var(--hl);
}

.start__doodle {
  justify-self: center;
  max-width: 22rem;
}

@media (max-width: 52em) {
  .start {
    grid-template-columns: 1fr;
  }

  .start__doodle {
    justify-self: start;
    max-width: 14rem;
  }
}

/* Studio ---------------------------------------------------------- */
.studio {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: center;
}

.studio__text {
  display: grid;
  gap: var(--sp-2);
}

.studio__text h2 {
  margin-bottom: var(--sp-2);
}

.studio__line {
  font-weight: var(--w-bold);
  color: var(--ink);
}

.studio__doodle {
  justify-self: center;
  max-width: 22rem;
}

@media (max-width: 52em) {
  .studio {
    grid-template-columns: 1fr;
  }

  .studio__doodle {
    justify-self: start;
    max-width: 14rem;
  }
}

/* Offer lists ----------------------------------------------------- */
.list-h {
  margin-bottom: var(--sp-2);
}

.offer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}

.offer-list a {
  font-weight: var(--w-bold);
}

.offer-stacks {
  margin-top: var(--sp-3);
  font-size: var(--fs-0);
  color: var(--fg-muted);
  max-width: 44ch;
}

/* Costs ----------------------------------------------------------- */
.stack {
  display: grid;
  gap: var(--sp-2);
  align-content: start;
}

.costs .kv {
  grid-template-columns: minmax(8rem, 10rem) minmax(0, 1fr);
}

.costs__note {
  max-width: var(--measure);
}

/* Runs ------------------------------------------------------------ */
.steps--compact {
  gap: var(--sp-2);
}

.runs__link {
  margin-top: var(--sp-3);
}

.runs__agency {
  display: grid;
  gap: var(--sp-2);
  align-content: start;
}

/* Tools ----------------------------------------------------------- */
.tools__label {
  font-size: var(--fs-0);
  color: var(--fg-muted);
  margin-bottom: var(--sp-2);
}

.tools__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--sp-4) var(--sp-5);
}

.tools__list img {
  height: 2.25rem;
  width: auto;
  filter: grayscale(1);
  opacity: 0.7;
  transition: opacity var(--dur-fast) ease, filter var(--dur-fast) ease;
}

.tools__list li:hover img {
  filter: none;
  opacity: 1;
}
</style>

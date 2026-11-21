<script setup lang="ts">
import { contact } from '~/data/nav'

useSeoMeta({
  title: 'Contact',
  description: 'Email, phone, the project planner, or the partner enquiry for agencies. I read every enquiry. Typical first reply within a couple of days.',
})
</script>

<template>
  <div>
    <PageIntro title="Talk to me, not a catch-all inbox." doodle="/img/doodles/d03.png">
      <p>New work starts with a short brief. I read it myself.</p>
      <template #actions>
        <NuxtLink to="/project-planner" class="btn">Plan a project</NuxtLink>
        <NuxtLink to="/agencies/enquire" class="btn btn--ghost">Partner enquiry (agencies)</NuxtLink>
      </template>
    </PageIntro>

    <section class="section">
      <div class="wrap grid-2">
        <div class="stack">
          <h2>Direct</h2>
          <p class="big"><a :href="contact.emailHref">{{ contact.email }}</a></p>
          <p class="big"><a :href="contact.phoneHref">{{ contact.phone }}</a></p>
          <p><strong>Where:</strong> {{ contact.baseLine }} Calls happen in UK hours, {{ contact.ukHours }}.</p>
        </div>
        <div class="stack">
          <h2>How fast I reply</h2>
          <p>
            I aim to reply within <strong>{{ contact.responseTime }}</strong>. If you have not heard back by
            then, email again or call. Things get lost; I would rather you nudge than assume I vanished.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid-2">
        <div class="stack">
          <h2>What to send if you skip the planner</h2>
          <p>A few sentences are enough:</p>
          <ul class="tight">
            <li>who you are and what the business does</li>
            <li>what you want (site, shop, app, search, something else)</li>
            <li>when you want it, even if the answer is “not sure”</li>
            <li>a budget band if you have one</li>
          </ul>
          <p>I will still ask the planner questions on the call. The form just saves a round.</p>
        </div>
        <div class="stack">
          <div class="panel panel--agency stack">
            <h2 class="panel__h">Agencies</h2>
            <p>
              If you run an agency and need overflow capacity, a batch job cleared, or a look at your delivery process,
              use the <NuxtLink to="/agencies/enquire">partner enquiry</NuxtLink> rather than the planner. Different
              questions, same inbox, same person reading it.
            </p>
          </div>
          <h2>What happens next</h2>
          <ol class="tight">
            <li>I read the message or planner submission.</li>
            <li>Fit, not a fit, or a clarifying question.</li>
            <li>We book about <strong>{{ contact.callLength }}</strong>.</li>
            <li>I send a written proposal. You decide.</li>
          </ol>
          <p class="links">
            <NuxtLink to="/how-it-works">Full process</NuxtLink>
            <NuxtLink to="/how-it-works#after-you-submit">After you submit</NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap stack existing">
        <h2>Existing clients</h2>
        <p>
          If we already have a project together, you can use the <a :href="contact.clientArea">client area</a> when that
          is how we have set things up. If you cannot get in, email me.
        </p>
        <p>The client area is not a sales funnel. It is a login.</p>
        <p class="links">
          <NuxtLink to="/privacy">Privacy</NuxtLink>
          <NuxtLink to="/cookies">Cookies</NuxtLink>
          <NuxtLink to="/terms">Terms</NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
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

.big {
  font-size: var(--fs-3);
  font-weight: var(--w-semi);
}

.tight {
  display: grid;
  gap: 0.5rem;
}

.panel--agency {
  background: var(--slate);
  color: #e9e9ec;
  margin-bottom: var(--sp-3);
}

.panel__h {
  font-size: var(--fs-3);
  font-weight: var(--w-bold);
  color: #fff;
  margin: 0;
}

.panel--agency a {
  color: #fff;
  text-decoration-color: #6f6f7a;
}

.panel--agency a:hover {
  text-decoration-color: var(--hl);
}

.existing {
  max-width: var(--measure);
}
</style>

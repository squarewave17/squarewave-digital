<script setup lang="ts">
import { services } from '~/data/services'
import { contact } from '~/data/nav'

useSeoMeta({
  title: 'Services for businesses',
  description:
    'Websites, applications, e-commerce, SEO, marketing, branding and care. I lead the brief; the studio’s specialists and trusted peers join when the work needs them.',
})

const offer = [
  { to: '/services/web-design', label: 'Web design and build', plain: 'A site people can find, read, and enquire through', lead: 'Scoping, structure, build, launch', joins: 'You need a stronger visual identity or extra build capacity' },
  { to: '/services/web-apps', label: 'Applications', plain: 'A tool that removes a bottleneck', lead: 'Scoping, product decisions, build', joins: 'Extra engineering, UX depth, or a gnarly integration' },
  { to: '/services/ecommerce', label: 'E-commerce', plain: 'A shop that takes money and stays maintainable', lead: 'Store setup, theme and build, launch', joins: 'Catalogue help, design, or paid traffic after launch' },
  { to: '/services/seo', label: 'SEO', plain: 'Be findable for the things you actually sell', lead: 'Foundations on every site', joins: 'Ongoing programmes, content production, heavy technical work' },
  { to: '/services/marketing', label: 'Marketing', plain: 'Campaigns and channels with a point', lead: 'Brief, fit, and accountability', joins: 'Ads, social, email, or content you want done properly' },
  { to: '/services/branding', label: 'Branding', plain: 'How you look and sound, used consistently', lead: 'Brief and application on the site', joins: 'The studio’s designer for the identity itself' },
  { to: '/services/care-retainers', label: 'Care retainers', plain: 'Updates, hosting, support after launch', lead: 'The relationship and the work', joins: 'Hosting ops or campaign retainers as agreed' },
]
</script>

<template>
  <div>
    <PageIntro title="What I can take on, and who does the work." audience="business" doodle="/img/doodles/d02.png">
      <p>
        Squarewave Digital sells a full digital offer from one small studio. I, {{ contact.name }},
        lead every brief. I do the parts I should do. The studio’s designer and SEO specialist do theirs. Trusted peers
        join when that is the professional way to get the result.
      </p>
      <p>You get one proposal and one contact. You do not get a fake org chart.</p>
      <template #actions>
        <NuxtLink to="/project-planner" class="btn">Plan a project</NuxtLink>
        <NuxtLink to="/how-it-works">How a project runs</NuxtLink>
      </template>
    </PageIntro>

    <section class="section">
      <div class="wrap">
        <div class="panel panel--agency">
          <h2 class="panel__h">Running an agency?</h2>
          <p>
            This page is for businesses buying a finished thing. If you are an agency that needs senior development
            capacity, a batch job cleared, or a look at why delivery keeps slipping, that is a different offer with its
            own rates: <NuxtLink to="/agencies">For agencies</NuxtLink>.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <h2>The offer</h2>
        </div>
        <div class="table-scroll">
          <table class="offer">
            <thead>
              <tr>
                <th>Service</th>
                <th>In client language</th>
                <th>I typically lead</th>
                <th>A specialist joins when</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in offer" :key="row.to">
                <th><NuxtLink :to="row.to">{{ row.label }}</NuxtLink></th>
                <td>{{ row.plain }}</td>
                <td>{{ row.lead }}</td>
                <td>{{ row.joins }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap choose">
        <div>
          <h2>How to choose</h2>
          <ul class="choose__list">
            <li><strong>Need to be findable and contactable:</strong> start with <NuxtLink to="/services/web-design">web design</NuxtLink>. Add <NuxtLink to="/services/seo">SEO</NuxtLink> if search is the job, not a hope.</li>
            <li><strong>Need to sell online:</strong> <NuxtLink to="/services/ecommerce">e-commerce</NuxtLink>.</li>
            <li><strong>Need to stop a messy internal process:</strong> <NuxtLink to="/services/web-apps">applications</NuxtLink>.</li>
            <li><strong>Need to look like one business, not three leftover logos:</strong> <NuxtLink to="/services/branding">branding</NuxtLink>.</li>
            <li><strong>Need people to see the thing after it exists:</strong> <NuxtLink to="/services/marketing">marketing</NuxtLink>.</li>
            <li><strong>Need someone after launch:</strong> <NuxtLink to="/services/care-retainers">care</NuxtLink>.</li>
          </ul>
          <p>If you are not sure, say “not sure” on the <NuxtLink to="/project-planner">planner</NuxtLink>. That is a valid answer.</p>
        </div>
        <Doodle3D src="/img/doodles/d17.png" class="choose__doodle" />
      </div>
    </section>

    <section class="section">
      <div class="wrap grid-2">
        <div class="stack">
          <h2>What a typical website includes</h2>
          <p>
            Most first projects are a website. A typical build includes a clear page set, a way for you to edit the
            obvious things (CMS), forms that go somewhere real, and search <em>foundations</em> (titles, structure,
            speed, indexability). Training enough that you are not scared of the admin.
          </p>
        </div>
        <div class="stack">
          <h2>Add-ons</h2>
          <p>Not automatic, not “included because the old site listed them”:</p>
          <ul>
            <li>new identity or brand system</li>
            <li>a shop</li>
            <li>a custom application</li>
            <li>ongoing SEO or content</li>
            <li>ad or social campaigns</li>
            <li>photography, copywriting at volume, or film</li>
          </ul>
          <p class="links"><NuxtLink to="/services/web-design">The website page spells this out</NuxtLink></p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid-2">
        <div class="stack">
          <h2>Money</h2>
          <p>Same three bands as the planner. Read <NuxtLink to="/how-it-works#budgets">what they usually buy</NuxtLink> before you pick one in the dark.</p>
        </div>
        <div class="stack">
          <h2>Not on this list on purpose</h2>
          <p>No “digital strategy” page that means nothing. Strategy happens in the call and the proposal.</p>
          <p>No “online presence” page that restates the homepage.</p>
          <p>No graphic-design shopfront separate from <NuxtLink to="/services/branding">branding</NuxtLink>.</p>
        </div>
      </div>
    </section>

    <CtaBand audience="business" />
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

.offer th:first-child {
  white-space: nowrap;
}

.offer td {
  min-width: 14rem;
}

.choose {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: center;
}

.choose h2 {
  margin-bottom: var(--sp-3);
}

.choose__list {
  display: grid;
  gap: 0.6rem;
  margin-bottom: var(--sp-3);
}

.choose__doodle {
  max-width: 20rem;
  justify-self: center;
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

@media (max-width: 52em) {
  .choose {
    grid-template-columns: 1fr;
  }

  .choose__doodle {
    max-width: 13rem;
    justify-self: start;
  }
}
</style>

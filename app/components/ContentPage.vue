<script setup lang="ts">
import type { ContentPage } from '~/data/types'

const props = defineProps<{ page: ContentPage }>()

useSeoMeta({ title: props.page.title, description: props.page.description })
</script>

<template>
  <div>
    <PageIntro :title="page.h1" :doodle="page.doodle" :doodle-color="page.doodleColor" :audience="page.audience">
      <p v-for="(p, i) in page.intro" :key="i"><RichText :text="p" /></p>
      <template #actions>
        <NuxtLink v-if="page.audience === 'agency'" to="/agencies/enquire" class="btn">Partner enquiry</NuxtLink>
        <NuxtLink v-else to="/project-planner" class="btn">Plan a project</NuxtLink>
      </template>
    </PageIntro>

    <section v-for="s in page.sections" :key="s.heading" class="section content-section">
      <div class="wrap content-section__grid">
        <h2 class="content-section__h">{{ s.heading }}</h2>
        <div class="content-section__body">
          <p v-for="(p, i) in s.paragraphs" :key="'p' + i"><RichText :text="p" /></p>

          <ul v-if="s.items" class="content-section__list">
            <li v-for="(it, i) in s.items" :key="'i' + i"><RichText :text="it" /></li>
          </ul>

          <dl v-if="s.pairs" class="kv">
            <template v-for="(pr, i) in s.pairs" :key="'k' + i">
              <dt>{{ pr.term }}</dt>
              <dd><RichText :text="pr.detail" /></dd>
            </template>
          </dl>

          <div v-if="s.bands" class="bands">
            <div v-for="b in s.bands" :key="b.band" class="band">
              <h3>{{ b.band }}</h3>
              <p><RichText :text="b.text" /></p>
            </div>
          </div>

          <ol v-if="s.steps" class="steps">
            <li v-for="(st, i) in s.steps" :key="'s' + i"><RichText :text="st" /></li>
          </ol>

          <p v-for="(p, i) in s.after" :key="'a' + i"><RichText :text="p" /></p>
        </div>
      </div>
    </section>

    <section class="section related">
      <div class="wrap">
        <p class="links">
          <span class="related__label">Related</span>
          <NuxtLink v-for="r in page.related" :key="r.to" :to="r.to">{{ r.label }}</NuxtLink>
        </p>
      </div>
    </section>

    <CtaBand :audience="page.audience" />
  </div>
</template>

<style scoped>
.content-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: var(--sp-3) var(--sp-6);
  align-items: start;
}

.content-section__h {
  font-size: var(--fs-4);
  font-weight: var(--w-bold);
  line-height: var(--lh-snug);
  position: sticky;
  top: var(--sp-3);
}

.content-section__body {
  display: grid;
  gap: var(--sp-2);
  max-width: var(--measure);
}

.content-section__list {
  display: grid;
  gap: 0.5rem;
}

.bands {
  display: grid;
  gap: var(--sp-3);
}

.band {
  display: grid;
  gap: 0.35rem;
  padding-left: var(--sp-3);
  border-left: 4px solid var(--hl);
}

.related__label {
  color: var(--fg-muted);
}

@media (max-width: 48em) {
  .content-section__grid {
    grid-template-columns: 1fr;
  }

  .content-section__h {
    position: static;
  }
}
</style>

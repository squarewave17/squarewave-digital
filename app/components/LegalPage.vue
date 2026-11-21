<script setup lang="ts">
/**
 * Long-copy legal pages: a narrow measure, a sticky contents list,
 * numbered or plain headings as the content dictates.
 */
defineProps<{
  title: string
  updated?: string
  status?: string
  contents: { id: string; label: string }[]
}>()
</script>

<template>
  <div>
    <PageIntro :title="title">
      <p v-if="updated"><strong>Last updated:</strong> {{ updated }}</p>
      <slot name="intro" />
    </PageIntro>

    <section class="section">
      <div class="wrap legal">
        <aside class="legal__aside">
          <nav aria-label="On this page" class="panel">
            <p class="legal__aside-h">On this page</p>
            <ol class="legal__toc">
              <li v-for="c in contents" :key="c.id"><a :href="`#${c.id}`">{{ c.label }}</a></li>
            </ol>
          </nav>
          <p v-if="status" class="legal__status">{{ status }}</p>
        </aside>
        <div class="prose legal__body">
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.legal {
  display: grid;
  grid-template-columns: minmax(14rem, 1fr) minmax(0, 2.6fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: start;
}

.legal__aside {
  position: sticky;
  top: var(--sp-3);
  display: grid;
  gap: var(--sp-2);
}

.legal__aside-h {
  font-weight: var(--w-bold);
  color: var(--ink);
  margin-bottom: var(--sp-1);
}

.legal__toc {
  margin: 0;
  padding-left: 1.25rem;
  font-size: var(--fs-0);
  display: grid;
  gap: 0.3rem;
}

.legal__toc a {
  text-decoration-color: transparent;
}

.legal__toc a:hover {
  text-decoration-color: var(--hl-2);
}

.legal__status {
  font-size: var(--fs-0);
  color: var(--fg-muted);
}

.legal__body :deep(h2) {
  scroll-margin-top: var(--sp-3);
}

.legal__body :deep(h2:first-child) {
  margin-top: 0;
}

@media (max-width: 52em) {
  .legal {
    grid-template-columns: 1fr;
  }

  .legal__aside {
    position: static;
  }
}
</style>

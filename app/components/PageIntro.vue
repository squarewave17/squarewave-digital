<script setup lang="ts">
/**
 * Top of every inner page: a light display title, an optional lead,
 * and whatever actions the page needs. Optional doodle to the right.
 */
defineProps<{
  title: string
  doodle?: string
  doodleColor?: string
  audience?: 'business' | 'agency'
}>()
</script>

<template>
  <section class="intro" :class="{ 'intro--agency': audience === 'agency' }">
    <div class="wrap intro__grid">
      <div class="intro__text">
        <p v-if="audience" class="intro__audience">
          {{ audience === 'agency' ? 'For agencies' : 'For businesses' }}
        </p>
        <h1>{{ title }}</h1>
        <div v-if="$slots.default" class="intro__lead">
          <slot />
        </div>
        <div v-if="$slots.actions" class="btn-row intro__actions">
          <slot name="actions" />
        </div>
      </div>
      <Doodle3D v-if="doodle" :src="doodle" :color="doodleColor" class="intro__doodle" />
    </div>
  </section>
</template>

<style scoped>
.intro {
  padding-block: var(--sp-5) var(--sp-3);
}

.intro__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: center;
}

.intro__grid:not(:has(.intro__doodle)) {
  grid-template-columns: minmax(0, 1fr);
}

.intro__text {
  display: grid;
  gap: var(--sp-3);
}

.intro__audience {
  font-weight: var(--w-bold);
  color: var(--fg-muted);
}

.intro--agency .intro__audience {
  color: var(--ink);
  background: var(--hl);
  display: inline-block;
  justify-self: start;
  padding: 0.1em 0.5em;
  border-radius: 4px;
}

.intro__lead {
  display: grid;
  gap: var(--sp-2);
  font-size: var(--fs-2);
  line-height: 1.55;
  max-width: var(--measure);
}

.intro__lead :deep(p) {
  margin: 0;
}

.intro__doodle {
  justify-self: center;
  max-width: 24rem;
}

@media (max-width: 52em) {
  .intro__grid {
    grid-template-columns: 1fr;
  }

  .intro__doodle {
    max-width: 16rem;
    justify-self: start;
  }
}
</style>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    text?: string
    audience?: 'both' | 'business' | 'agency'
  }>(),
  { title: 'Ready when you are', text: 'Tell me what is stuck, or what you want built. You do not need a perfect brief.', audience: 'both' },
)
</script>

<template>
  <section class="cta on-slate">
    <div class="wrap cta__inner">
      <div class="cta__text">
        <h2>{{ title }}</h2>
        <p class="lead">{{ text }}</p>
        <slot />
      </div>
      <div class="btn-row cta__actions">
        <NuxtLink v-if="audience !== 'business'" to="/agencies/enquire" class="btn btn--paper">Partner enquiry</NuxtLink>
        <NuxtLink v-if="audience === 'business'" to="/project-planner" class="btn btn--paper">Plan a project</NuxtLink>
        <NuxtLink v-if="audience === 'both'" to="/project-planner" class="btn btn--ghost">Plan a project, for businesses</NuxtLink>
        <NuxtLink v-if="audience === 'business'" to="/contact" class="btn btn--ghost">Or just get in touch</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding-block: var(--section);
}

.cta__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: center;
}

.cta__text {
  display: grid;
  gap: var(--sp-2);
}

.cta__actions {
  justify-content: flex-end;
}

@media (max-width: 52em) {
  .cta__inner {
    grid-template-columns: 1fr;
  }

  .cta__actions {
    justify-content: flex-start;
  }
}
</style>

<script setup lang="ts">
const { open, toggle } = useMenu()
const route = useRoute()

// Business pages keep the planner as the header action. Everywhere else leads with agencies.
const business = computed(() => /^\/(services|project-planner|how-it-works)/.test(route.path))
</script>

<template>
  <header class="header">
    <div class="wrap header__bar">
      <NuxtLink to="/" class="header__logo" aria-label="Squarewave Digital, home">
        <img src="/img/logo.png" alt="" width="700" height="207" />
      </NuxtLink>

      <div class="header__actions">
        <NuxtLink v-if="business" to="/project-planner" class="btn btn--ghost header__cta">Plan a project</NuxtLink>
        <NuxtLink v-else to="/agencies/enquire" class="btn btn--ghost header__cta">Partner enquiry</NuxtLink>
        <button
          class="burger"
          type="button"
          :aria-expanded="open"
          aria-controls="site-menu"
          @click="toggle"
        >
          <span class="burger__lines" aria-hidden="true"><i /><i /><i /></span>
          <span class="visually-hidden">Open menu</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding-block: var(--sp-3);
}

.header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-3);
}

.header__logo {
  display: block;
  width: clamp(9.5rem, 16vw, 12.5rem);
  text-decoration: none;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

.header__cta {
  min-height: 2.75rem;
  padding-block: 0.6rem;
}

@media (max-width: 40em) {
  .header__cta {
    display: none;
  }
}

/* The burger: a paper disc, like the original, with the lines drawn in ink. */
.burger {
  display: grid;
  place-items: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: #fff;
  cursor: pointer;
  transition:
    transform var(--dur-fast) var(--ease-out),
    background var(--dur-fast) ease;
}

.burger:hover {
  background: var(--hl);
  transform: rotate(-6deg);
}

.burger__lines {
  display: grid;
  gap: 5px;
  width: 22px;
}

.burger__lines i {
  display: block;
  height: 2px;
  border-radius: 2px;
  background: var(--ink);
}

.burger__lines i:nth-child(2) {
  width: 70%;
  justify-self: end;
}
</style>
